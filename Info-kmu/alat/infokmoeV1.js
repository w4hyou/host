/*<![CDATA[*/!function(a){"use strict";var b=function(b,c){var d=this;d.element=b,d.$element=a(b),d.tabs=d.$element.children(),d.options=a.extend({},a.fn.mtabs.defaults,c),d.current_tab=0,d.init()};b.prototype={init:function(){var a=this;a.tabs.length&&(a.build(),a.buildTabMenu())},build:function(){var b=this,c=b.options,d=c.tab_text_el,e=c.container_class;b.tab_names=[],b.$wrapper=b.$element.wrapInner('<div class="'+e+'" />').find("."+e),b.tabs.wrapAll('<div class="'+c.tabs_container_class+'" />'),b.tabs.each(function(c,e){var f,g=a(e),h=d;f=g.find(h).filter(":first").hide().text(),b.tab_names.push(f)}),a.isFunction(c.onReady)&&c.onReady.call(b.element)},buildTabMenu:function(){for(var b,c=this,d=c.options,e=d.tabsmenu_el,f=c.tab_names,g="<"+e+' class="'+d.tabsmenu_class+'">',h=0,i=f.length,j=function(){var a=arguments;return d.tmpl.tabsmenu_tab.replace(/\{[0-9]\}/g,function(b){var c=Number(b.replace(/\D/g,""));return a[c]||""})};i>h;h++)g+=j(h+1,f[h]);g+="</"+e+">",c.$tabs_menu=a(g).prependTo(c.$wrapper),b=c.$tabs_menu.find(":first")[0].nodeName.toLowerCase(),c.$tabs_menu.on("click",b,function(b){var d=a(this),e=d.index();c.show(e),b.preventDefault()}).find(":first").trigger("click")},show:function(b){var c=this,d=c.options,e=d.active_tab_class;c.tabs.hide().filter(":eq("+b+")").show(),c.$tabs_menu.children().removeClass(e).filter(":eq("+b+")").addClass(e),a.isFunction(d.onTabSelect)&&b!==c.current_tab&&d.onTabSelect.call(c.element,b),c.current_tab=b},destroy:function(){var a=this,b=a.options.tab_text_el;a.$tabs_menu.remove(),a.tabs.unwrap().unwrap(),a.tabs.removeAttr("style"),a.tabs.children(b+":first").removeAttr("style"),a.$element.removeData("mtabs")}},a.fn.mtabs=function(c,d){return this.each(function(){var e,f=a(this),g=f.data("mtabs");e="object"==typeof c&&c,g||f.data("mtabs",g=new b(this,e)),"string"==typeof c&&g[c](d)})},a.fn.mtabs.defaults={container_class:"tabs",tabs_container_class:"tabs-content",active_tab_class:"active-tab",tab_text_el:"h1, h2, h3, h4, h5, h6",tabsmenu_class:"tabs-menu",tabsmenu_el:"ul",tmpl:{tabsmenu_tab:'<li class="tab-{0}"><span>{1}</span></li>'},onTabSelect:null}}(window.jQuery,window,document);$(window).scroll(function(){200<$(this).scrollTop()?$("#back-to-top").fadeIn():$("#back-to-top").fadeOut()});$("#back-to-top").hide().click(function(){return $("html, body").animate({scrollTop:0},1E3),!1});var ww=document.body.clientWidth;$(document).ready(function(){$(".nav li a").each(function(){0<$(this).next().length&&$(this).addClass("parent")});$(".toggleMenu").click(function(a){a.preventDefault();$(this).toggleClass("active");$(".nav").toggle()});adjustMenu()});$(window).bind("resize orientationchange",function(){ww=document.body.clientWidth;adjustMenu()});var adjustMenu=function(){768>ww?($(".toggleMenu").css("display","inline-block"),$(".toggleMenu").hasClass("active")?$(".nav").show():$(".nav").hide(),$(".nav li").unbind("mouseenter mouseleave"),$(".nav li a.parent").unbind("click").bind("click",function(a){a.preventDefault();$(this).parent("li").toggleClass("hover")})):768<=ww&&($(".toggleMenu").css("display","none"),$(".nav").show(),$(".nav li").removeClass("hover"),$(".nav li a").unbind("click"),$(".nav li").unbind("mouseenter mouseleave").bind("mouseenter mouseleave",function(){$(this).toggleClass("hover")}))};$(document).ready(function(){var a=$("#nav").offset().top,b=function(){$(window).scrollTop()>a?$("#nav").addClass("sticky"):$("#nav").removeClass("sticky")};b();$(window).scroll(function(){b()})});function createCookie(e,t,n){if(n){var r=new Date;r.setTime(r.getTime()+n*24*60*60*1e3);var i="; expires="+r.toGMTString()}else{var i=""}document.cookie=e+"="+t+i+"; path=/"}function readCookie(e){var t=e+"=";var n=document.cookie.split(";");for(var r=0;r<n.length;r++){var i=n[r];while(i.charAt(0)==" ")i=i.substring(1,i.length);if(i.indexOf(t)==0)return i.substring(t.length,i.length)}return null}function eraseCookie(e){createCookie(e,"",-1)}var $dialog=$("#fb-dialog"),$overlay=$("#dialog-overlay"),$frame=$("#iframeContainers");if(!readCookie("fb_box_once")){$(window).load(function(){$dialog.show(4000);$overlay.fadeTo(400,.8);return false})}$dialog.find(".closed").click(function(){createCookie("fb_box_once",null,1);$dialog.fadeOut("normal",function(){$frame.remove()});$overlay.hide();return false});setTimeout(function(){$('.jsfiddle-demo').each(function(){$(this).html('<iframe width="100%" height="300px" src="' + $(this).data('src') + '" allowfullscreen></iframe>');});},5000);setTimeout(function(){$('.facebookpopup').each(function(){$(this).html('<iframe width="100%" height="300px" src="' + $(this).data('src') + '" allowfullscreen></iframe>');});},5000);$('.open-dialog').click(function(){$('#kotak-dialog').show().find('#iframeContainer').html('<iframe src="' + this.href + '"></iframe>');$('#dialog-overlay').fadeTo(400, 0.8);return false;});$('#kotak-dialog .closed').click(function(){$('#kotak-dialog').fadeOut('normal', function(){$('iframe', this).remove();}); $('#dialog-overlay').hide();return false;});/*]]>*/
