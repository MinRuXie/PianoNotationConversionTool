!function(e){var n={};function s(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=n,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)s.d(t,i,function(n){return e[n]}.bind(null,i));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="",s(s.s=1)}([function(e,n,s){"use strict";s.r(n),s.d(n,"colors",(function(){return t})),s.d(n,"key_ivory",(function(){return i})),s.d(n,"key_ebony_b",(function(){return o})),s.d(n,"key_ebony_h",(function(){return a})),s.d(n,"simple_ivory",(function(){return d})),s.d(n,"simple_ebony_b",(function(){return c})),s.d(n,"simple_ebony_h",(function(){return l}));const t=["#828282","#AD766A","#D5404A","#FFB11B","#90B44B","#58B2DC","#005CAF","#A8497A","#E87A90"],i=["A0","B0","C1","D1","E1","F1","G1","A1","B1","C2","D2","E2","F2","G2","A2","B2","C3","D3","E3","F3","G3","A3","B3","C4","D4","E4","F4","G4","A4","B4","C5","D5","E5","F5","G5","A5","B5","C6","D6","E6","F6","G6","A6","B6","C7","D7","E7","F7","G7","A7","B7","C8"],o=["Bb0","Db1","Eb1","Gb1","Ab1","Bb1","Db2","Eb2","Gb2","Ab2","Bb2","Db3","Eb3","Gb3","Ab3","Bb3","Db4","Eb4","Gb4","Ab4","Bb4","Db5","Eb5","Gb5","Ab5","Bb5","Db6","Eb6","Gb6","Ab6","Bb6","Db7","Eb7","Gb7","Ab7","Bb7"],a=["Ah0","Ch1","Dh1","Fh1","Gh1","Ah1","Ch2","Dh2","Fh2","Gh2","Ah2","Ch3","Dh3","Fh3","Gh3","Ah3","Ch4","Dh4","Fh4","Gh4","Ah4","Ch5","Dh5","Fh5","Gh5","Ah5","Ch6","Dh6","Fh6","Gh6","Ah6","Ch7","Dh7","Fh7","Gh7","Ah7"],d=["1","2","3","4","5","6","7"],c=["b2","b3","b5","b6","b7"],l=["#1","#2","#4","#5","#6"]},function(e,n,s){s(2),e.exports=s(0)},function(e,n,s){"use strict";s.r(n);var t=s(0);$((function(){setTimeout((function(){$(".loading").fadeOut()}),1e3);let e=$(".piano"),n=$(".slide"),s=$(".text"),i=s.find(".number-panel"),o=s.find(".tabs-panel"),a=$(".toolbox"),d=$("#toolbox-btn"),c=$(".toolbutton"),l=c.eq(6),r=c.eq(7),p=c.eq(9),u=$(".colorarea"),f=$(".colorbox"),h=$(".intro-wrap"),b=$(".intro-wrap .ctr-btn"),y=$(".screenshot-wrap"),v=$(".screenshot-wrap .ctr-btn"),k=0,g=$(".note.selected"),m=$(".line.selected");function _(){g=$(".note.selected"),m=$(".line.selected")}function C(e,n){e.find(".line").removeClass("selected"),e.find(".note").removeClass("selected"),n.addClass("selected"),n.parent(".line").addClass("selected"),_()}function x(e,n,s,t){let a=e.find(".line.selected"),d=e.find(".note.selected");e.find(".note").removeClass("selected");let c="whitespace"!=s?s.replace(/h/,"#"):s,l=`<div data-key="${s}" title="${c}" class="note selected ${s}" style="background-color: ${t};">${n}</div>`;0!=d.length?d.after(l):a.append(l),e.find(".note.selected").on("click",(function(n){let s=a.index(),t=$(this).index();switch(e){case i:t++;break;case o:t--}C(e.siblings(".panel"),e.siblings(".panel").find(".line").eq(s).children().eq(t)),C(e,$(this))})),_()}function w(e){let n=e.find(".note.selected"),s=n.prev(".note"),t=n.next(".note");0!=s.length?s.addClass("selected"):0!=t.length&&t.addClass("selected"),n.remove(),_()}function A(e,n){n.hasClass("selected")||(e.find(".line").removeClass("selected"),e.find(".note").removeClass("selected"),n.addClass("selected"),n.find(".note").last().addClass("selected"),_())}function D(e,n){if(e.find(".line").length>1){let s=n.prev(".line"),t=n.next(".line");e.find(".line").removeClass("selected"),e.find(".note").removeClass("selected"),0!=s.length?(s.find(".note").last().addClass("selected"),s.addClass("selected")):0!=t.length&&(t.find(".note").last().addClass("selected"),t.addClass("selected")),n.remove()}else e.find(".line").removeClass("selected"),e.find(".note").removeClass("selected"),n.children().not(".del").not(".line-bg").remove(),n.addClass("selected");_()}function B(e){let n="<div class='line selected' title='雙擊修改區塊顏色'><div class=\"del\" title=\"刪除\">X</div></div>";e==o&&(n="\n                <div class='line selected' title='雙擊修改區塊顏色'>\n                    <div class='line-bg'><span></span><span></span><span></span><span></span><span></span></div>\n                    <div class=\"del\" title=\"刪除\">X</div>\n                </div>");let s=e.find(".line.selected");e.find(".line.selected").removeClass("selected"),0!=s.length?s.after(n):e.append(n),e.find(".note.selected").removeClass("selected");let t=e.find(".line.selected");t.on("dblclick",(function(n){!function(e,n){u.show();var s=n.css("border-left-color"),t=S(parseInt(O(s).red),parseInt(O(s).green),parseInt(O(s).blue));$(".colorbtn").removeClass("selected"),$(".colorbtn").each((function(e){let n=$(this).css("backgroundColor"),s=S(parseInt(O(n).red),parseInt(O(n).green),parseInt(O(n).blue));t==s&&$(this).addClass("selected")}));var i=t;$(".colorbtn").on("click",(function(){var e=$(this).css("backgroundColor"),n=parseInt(O(e).red),s=parseInt(O(e).green),t=parseInt(O(e).blue);i=S(n,s,t),$(".colorbtn").removeClass("selected"),$(this).addClass("selected")})),f.find(".checkbtn").remove(),f.append('<div class="checkbtn">確定</div>'),$(".checkbtn").on("click",(function(){n.css("border-left-color",i),u.hide(),$(this).remove();let s=n.index();e.siblings(".panel").find(".line").eq(s).css("border-left-color",i)}))}(e,$(this))})),t.on("click",(function(n){let s=t.index();A(e.siblings(".panel"),e.siblings(".panel").find(".line").eq(s)),A(e,t)})),t.find(".del").on("click",(function(n){let s=t.index();D(e.siblings(".panel"),e.siblings(".panel").find(".line").eq(s)),D(e,t)})),_()}function G(){let e=m.eq(0).contents().not(".del").not(".line-bg").clone();B(i),B(o);for(let n=0;n<e.length;n++){let s=e.eq(n);x(i,s.text(),s.data("key"),s.css("background-color")),x(o,s.text(),s.data("key"),s.css("background-color"))}_()}function E(e,n){let s=e.find(".line.selected"),t="";switch(n){case"up":t=e.find(".line.selected").prev(".line"),s.insertBefore(t);break;case"down":t=e.find(".line.selected").next(".line"),s.insertAfter(t)}}function F(e,n){switch(e){case"line":let e="";"up"==n?e=m.prev(".line"):"down"==n&&(e=m.next(".line")),0!=e.length&&($(".line").removeClass("selected"),e.addClass("selected")),$(".note").removeClass("selected"),i.find(".line.selected .note").last().addClass("selected"),o.find(".line.selected .note").last().addClass("selected");break;case"note":let s="";"left"==n?s=g.prev(".note"):"right"==n&&(s=g.next(".note")),0!=s.length&&($(".note").removeClass("selected"),s.addClass("selected"))}_()}function q(e){let n=document.getElementById(e);n.pause(),n.currentTime=0,n.play()}function I(){k=e.scrollLeft()}function P(t){switch(t){case"close":s.stop().animate({height:"100%"},300),a.stop().animate({height:"100%"},300),e.stop().animate({bottom:"-30%"},300),n.hide(),I(),l.css("display","block"),r.css("display","none");break;case"open":s.stop().animate({height:"70%"},300),a.stop().animate({height:"70%"},300),e.stop().animate({bottom:"0"},300),n.show(),e.animate({scrollLeft:k},0),l.css("display","none"),r.css("display","block")}}function O(e){var n=e.match(/rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/);return n?{red:n[1],green:n[2],blue:n[3]}:{}}function j(e){var n=e.toString(16);return 1==n.length?"0"+n:n}function S(e,n,s){return"#"+j(e)+j(n)+j(s)}function T(){let e=$("#capture");e.addClass("capturing"),e.scrollTop(0);let n=$(".note.selected");n.addClass("capturing");let s=$("#output");s.empty(),html2canvas(document.querySelector("#capture")).then((t=>{s.append(t),e.removeClass("capturing"),n.removeClass("capturing")}))}l.css("display","none"),e.animate({scrollLeft:"3000vw"},500),I(),function(){e.append('<div class="group_left"></div>');let n=$(".group_left");n.append(`<div class="ivory"><span>${t.simple_ivory[5]}</span></div>`),n.append(`<div class="ivory"><span>${t.simple_ivory[6]}</span></div>`),n.find("span").css({background:t.colors[0]}),n.append('<div class="ebony-wrap ebony_0"></div>');let s=n.find(".ebony_0");s.append(`<div class="ebony_child"><span>${t.simple_ebony_h[4]}</span></div>`),s.append(`<div class="ebony_child"><span>${t.simple_ebony_b[4]}</span></div>`),n.find(".ebony_child").find("span").css({background:t.colors[0]}),n.find(".ivory").each((function(e){$(this).append(`<div class="key">${t.key_ivory[e]}</div>`),$(this).append(`<audio id="${t.key_ivory[e]}"><source src="./dist/assets/audio/Piano.ff.${t.key_ivory[e]}.mp3" type="audio/mpeg"></audio>`)})),n.find(".ebony_0").each((function(e){s.find(".ebony_child").each((function(n){n<1?$(this).append(`<div data-name="${t.key_ebony_h[e]}" class="key">${t.key_ebony_h[e]}</div>`):$(this).append(`<div data-name="${t.key_ebony_b[e]}" class="key">${t.key_ebony_b[e]}</div>`),$(this).append(`<audio id="${t.key_ebony_b[e]}"><source src="./dist/assets/audio/Piano.ff.${t.key_ebony_b[e]}.mp3" type="audio/mpeg"></audio>`)}))}));for(let n=0;n<7;n++)e.append('<div class="group"></div>');$(".group").each((function(e){$(this).css({left:14.28+50*e+"%"});for(let e=0;e<=6;e++)$(this).append(`<div class="ivory"><span>${t.simple_ivory[e]}</span></div>`);$(this).find("span").css({background:t.colors[e+1]});for(let e=1;e<=5;e++)$(this).append(`<div class="ebony-wrap ebony_${e}"></div>`);for(let e=0;e<5;e++){let n=$(this).find(".ebony_"+(e+1));n.append(`<div class="ebony_child"><span>${t.simple_ebony_h[e]}</span></div>`),n.append(`<div class="ebony_child"><span>${t.simple_ebony_b[e]}</span></div>`)}$(this).find(".ebony_child").find("span").css({background:t.colors[e+1]}),$(this).find(".ivory").each((function(n){$(this).append(`<div class="key">${t.key_ivory[2+7*e+n]}</div>`),$(this).append(`<audio id="${t.key_ivory[2+7*e+n]}"><source src="./dist/assets/audio/Piano.ff.${t.key_ivory[2+7*e+n]}.mp3" type="audio/mpeg"></audio>`)}));for(let n=0;n<5;n++)$(this).find(".ebony_"+(n+1)).each((function(s){$(this).find(".ebony_child").each((function(s){s<1?$(this).append(`<div data-name="${t.key_ebony_h[1+5*e+n]}" class="key">${t.key_ebony_h[1+5*e+n]}</div>`):$(this).append(`<div data-name="${t.key_ebony_b[1+5*e+n]}" class="key">${t.key_ebony_b[1+5*e+n]}</div>`),$(this).append(`<audio id="${t.key_ebony_b[1+5*e+n]}"><source src="./dist/assets/audio/Piano.ff.${t.key_ebony_b[1+5*e+n]}.mp3" type="audio/mpeg"></audio>`)}))}))})),e.append('<div class="group_right"></div>');let i=$(".group_right");i.append(`<div class="ivory"><span>${t.simple_ivory[0]}</span></div>`),i.find("span").css({background:t.colors[8]}),i.find(".ivory").each((function(){$(this).append(`<div class="key">${t.key_ivory[t.key_ivory.length-1]}</div>`),$(this).append(`<audio id="${t.key_ivory[t.key_ivory.length-1]}"><source src="./dist/assets/audio/Piano.ff.${t.key_ivory[t.key_ivory.length-1]}.mp3" type="audio/mpeg"></audio>`)}))}(),B(i),B(o),$(".title").on("dblclick",(function(e){var n=function(e){var n=document.createElement("div");n.innerHTML=e;var s=n.innerText||n.textContent;return n=null,s}($(this).html()),s=prompt("請輸入歌名：",n);null==s&&(s=n),$(this).text(s)})),d.on("click",(function(e){a.toggleClass("closed"),s.toggleClass("full")})),$(".cancelbtn").on("click",(function(e){u.hide()})),b.on("click",(function(e){h.removeClass("active"),p.removeClass("selected")})),v.on("click",(function(e){y.removeClass("active")})),isMobile.phone?($(".ivory").each((function(e){$(this).on("touchstart",(function(e){$(this).css({background:"#f2f2f2"}),x(i,$(this).find("span").text(),$(this).find(".key").text(),$(this).find("span").css("background-color")),x(o,$(this).find("span").text(),$(this).find(".key").text(),$(this).find("span").css("background-color")),q($(this).find(".key").text())})).on("touchend",(function(e){$(this).css({background:"#fff"})}))})),$(".ebony_child").each((function(e){$(this).on("touchstart",(function(e){$(this).css({background:"#444"}),x(i,$(this).find("span").text(),$(this).find(".key").data("name"),$(this).find("span").css("background-color")),x(o,$(this).find("span").text(),$(this).find(".key").data("name"),$(this).find("span").css("background-color")),q($(this).find(".key").text())})).on("touchend",(function(e){$(this).css({background:"#000"})}))})),c.each((function(e){$(this).on("touchstart",(function(n){switch($(this).addClass("selected"),e){case 0:w(i),w(o);break;case 1:x(i,"","whitespace","rgba(255, 255, 255, 0.2)"),x(o,"","whitespace","rgba(255, 255, 255, 0.2)");break;case 2:B(i),B(o);break;case 3:G();break;case 4:E(i,"up"),E(o,"up");break;case 5:E(i,"down"),E(o,"down");break;case 6:P("open");break;case 7:P("close");break;case 8:i.toggleClass("open"),o.toggleClass("open");break;case 9:y.addClass("active"),T();break;case 10:h.addClass("active")}})).on("touchend",(function(e){$(this).removeClass("selected")}))}))):($(".ivory").each((function(e){$(this).on("mousedown",(function(e){$(this).css({background:"#f2f2f2"}),x(i,$(this).find("span").text(),$(this).find(".key").text(),$(this).find("span").css("background-color")),x(o,$(this).find("span").text(),$(this).find(".key").text(),$(this).find("span").css("background-color")),q($(this).find(".key").text())})).on("mouseup",(function(e){$(this).css({background:"#fff"})}))})),$(".ebony_child").each((function(e){$(this).on("mousedown",(function(e){$(this).css({background:"#444"}),x(i,$(this).find("span").text(),$(this).find(".key").data("name"),$(this).find("span").css("background-color")),x(o,$(this).find("span").text(),$(this).find(".key").data("name"),$(this).find("span").css("background-color")),q($(this).find(".key").text())})).on("mouseup",(function(e){$(this).css({background:"#000"})}))})),c.each((function(e){$(this).on("mousedown",(function(n){switch($(this).addClass("selected"),e){case 0:w(i),w(o);break;case 1:x(i,"","whitespace","rgba(255, 255, 255, 0.2)"),x(o,"","whitespace","rgba(255, 255, 255, 0)");break;case 2:B(i),B(o);break;case 3:G();break;case 4:E(i,"up"),E(o,"up");break;case 5:E(i,"down"),E(o,"down");break;case 6:P("open");break;case 7:P("close");break;case 8:i.toggleClass("open"),o.toggleClass("open");break;case 9:y.addClass("active"),T();break;case 10:h.addClass("active")}})).on("mouseup",(function(e){$(this).removeClass("selected")}))})),$(window).on("keydown",(function(e){switch(e.keyCode){case 8:w(i),w(o);break;case 13:B(i),B(o);break;case 32:x(i,"","whitespace","rgba(255, 255, 255, 0.2)"),x(o,"","whitespace","rgba(255, 255, 255, 0)");break;case 65:F("note","left");break;case 87:F("line","up");break;case 68:F("note","right");break;case 83:F("line","down")}})))}))}]);