import{colors,key_ivory,key_ebony_b,key_ebony_h,simple_ivory,simple_ebony_b,simple_ebony_h}from"./piano-note.js";$((function(){setTimeout((function(){$(".loading").fadeOut()}),1e3);let e=$(".piano"),n=$(".slide"),s=$(".text"),t=s.find(".number-panel"),i=s.find(".tabs-panel"),a=$(".toolbox"),o=$("#toolbox-btn"),d=$(".toolbutton"),c=d.eq(6),l=d.eq(7),r=d.eq(9),p=$(".colorarea"),f=$(".colorbox"),h=$(".intro-wrap"),u=$(".intro-wrap .ctr-btn"),b=$(".screenshot-wrap"),v=$(".screenshot-wrap .ctr-btn"),y=0,k=$(".note.selected"),g=$(".line.selected");function m(){k=$(".note.selected"),g=$(".line.selected")}function _(e,n){e.find(".line").removeClass("selected"),e.find(".note").removeClass("selected"),n.addClass("selected"),n.parent(".line").addClass("selected"),m()}function C(e,n,s,a){let o=e.find(".line.selected"),d=e.find(".note.selected");e.find(".note").removeClass("selected");let c="whitespace"!=s?s.replace(/h/,"#"):s,l=`<div data-key="${s}" title="${c}" class="note selected ${s}" style="background-color: ${a};">${n}</div>`;0!=d.length?d.after(l):o.append(l),e.find(".note.selected").on("click",(function(n){let s=o.index(),a=$(this).index();switch(e){case t:a++;break;case i:a--}_(e.siblings(".panel"),e.siblings(".panel").find(".line").eq(s).children().eq(a)),_(e,$(this))})),m()}function w(e){let n=e.find(".note.selected"),s=n.prev(".note"),t=n.next(".note");0!=s.length?s.addClass("selected"):0!=t.length&&t.addClass("selected"),n.remove(),m()}function x(e,n){n.hasClass("selected")||(e.find(".line").removeClass("selected"),e.find(".note").removeClass("selected"),n.addClass("selected"),n.find(".note").last().addClass("selected"),m())}function q(e,n){if(e.find(".line").length>1){let s=n.prev(".line"),t=n.next(".line");e.find(".line").removeClass("selected"),e.find(".note").removeClass("selected"),0!=s.length?(s.find(".note").last().addClass("selected"),s.addClass("selected")):0!=t.length&&(t.find(".note").last().addClass("selected"),t.addClass("selected")),n.remove()}else e.find(".line").removeClass("selected"),e.find(".note").removeClass("selected"),n.children().not(".del").not(".line-bg").remove(),n.addClass("selected");m()}function I(e){let n="<div class='line selected' title='雙擊修改區塊顏色'><div class=\"del\" title=\"刪除\">X</div></div>";e==i&&(n="\n                <div class='line selected' title='雙擊修改區塊顏色'>\n                    <div class='line-bg'><span></span><span></span><span></span><span></span><span></span></div>\n                    <div class=\"del\" title=\"刪除\">X</div>\n                </div>");let s=e.find(".line.selected");e.find(".line.selected").removeClass("selected"),0!=s.length?s.after(n):e.append(n),e.find(".note.selected").removeClass("selected");let t=e.find(".line.selected");t.on("dblclick",(function(n){!function(e,n){p.show();var s=n.css("border-left-color"),t=parseInt(S(s).red),i=parseInt(S(s).green),a=parseInt(S(s).blue),o=j(t,i,a);$(".colorbtn").removeClass("selected"),$(".colorbtn").each((function(e){let n=$(this).css("backgroundColor"),s=j(parseInt(S(n).red),parseInt(S(n).green),parseInt(S(n).blue));o==s&&$(this).addClass("selected")}));var d=o;$(".colorbtn").on("click",(function(){var e=$(this).css("backgroundColor"),n=parseInt(S(e).red),s=parseInt(S(e).green),t=parseInt(S(e).blue);d=j(n,s,t),$(".colorbtn").removeClass("selected"),$(this).addClass("selected")})),f.find(".checkbtn").remove(),f.append('<div class="checkbtn">確定</div>'),$(".checkbtn").on("click",(function(){n.css("border-left-color",d),p.hide(),$(this).remove();let s=n.index();e.siblings(".panel").find(".line").eq(s).css("border-left-color",d)}))}(e,$(this))})),t.on("click",(function(n){let s=t.index();x(e.siblings(".panel"),e.siblings(".panel").find(".line").eq(s)),x(e,t)})),t.find(".del").on("click",(function(n){let s=t.index();q(e.siblings(".panel"),e.siblings(".panel").find(".line").eq(s)),q(e,t)})),m()}function P(){let e=g.eq(0).contents().not(".del").not(".line-bg").clone();I(t),I(i);for(let n=0;n<e.length;n++){let s=e.eq(n);C(t,s.text(),s.data("key"),s.css("background-color")),C(i,s.text(),s.data("key"),s.css("background-color"))}m()}function T(e,n){let s=e.find(".line.selected"),t="";switch(n){case"up":t=e.find(".line.selected").prev(".line"),s.insertBefore(t);break;case"down":t=e.find(".line.selected").next(".line"),s.insertAfter(t)}}function L(e,n){switch(e){case"line":let e="";"up"==n?e=g.prev(".line"):"down"==n&&(e=g.next(".line")),0!=e.length&&($(".line").removeClass("selected"),e.addClass("selected")),$(".note").removeClass("selected"),t.find(".line.selected .note").last().addClass("selected"),i.find(".line.selected .note").last().addClass("selected");break;case"note":let s="";"left"==n?s=k.prev(".note"):"right"==n&&(s=k.next(".note")),0!=s.length&&($(".note").removeClass("selected"),s.addClass("selected"))}m()}function B(e){let n=document.getElementById(e);n.pause(),n.currentTime=0,n.play()}function E(){y=e.scrollLeft()}function M(t){switch(t){case"close":s.stop().animate({height:"100%"},300),a.stop().animate({height:"100%"},300),e.stop().animate({bottom:"-30%"},300),n.hide(),E(),c.css("display","block"),l.css("display","none");break;case"open":s.stop().animate({height:"70%"},300),a.stop().animate({height:"70%"},300),e.stop().animate({bottom:"0"},300),n.show(),e.animate({scrollLeft:y},0),c.css("display","none"),l.css("display","block")}}function S(e){var n=e.match(/rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/);return n?{red:n[1],green:n[2],blue:n[3]}:{}}function X(e){var n=e.toString(16);return 1==n.length?"0"+n:n}function j(e,n,s){return"#"+X(e)+X(n)+X(s)}function A(){let e=$("#capture");e.addClass("capturing"),e.scrollTop(0);let n=$(".note.selected");n.addClass("capturing");let s=$("#output");s.empty(),html2canvas(document.querySelector("#capture")).then((t=>{s.append(t),e.removeClass("capturing"),n.removeClass("capturing")}))}c.css("display","none"),e.animate({scrollLeft:"3000vw"},500),E(),function(){e.append('<div class="group_left"></div>');let n=$(".group_left");n.append(`<div class="ivory"><span>${simple_ivory[5]}</span></div>`),n.append(`<div class="ivory"><span>${simple_ivory[6]}</span></div>`),n.find("span").css({background:colors[0]}),n.append('<div class="ebony-wrap ebony_0"></div>');let s=n.find(".ebony_0");s.append(`<div class="ebony_child"><span>${simple_ebony_h[4]}</span></div>`),s.append(`<div class="ebony_child"><span>${simple_ebony_b[4]}</span></div>`),n.find(".ebony_child").find("span").css({background:colors[0]}),n.find(".ivory").each((function(e){$(this).append(`<div class="key">${key_ivory[e]}</div>`),$(this).append(`<audio id="${key_ivory[e]}"><source src="./dist/assets/audio/Piano.ff.${key_ivory[e]}.mp3" type="audio/mpeg"></audio>`)})),n.find(".ebony_0").each((function(e){s.find(".ebony_child").each((function(n){n<1?$(this).append(`<div data-name="${key_ebony_h[e]}" class="key">${key_ebony_h[e]}</div>`):$(this).append(`<div data-name="${key_ebony_b[e]}" class="key">${key_ebony_b[e]}</div>`),$(this).append(`<audio id="${key_ebony_b[e]}"><source src="./dist/assets/audio/Piano.ff.${key_ebony_b[e]}.mp3" type="audio/mpeg"></audio>`)}))}));for(let n=0;n<7;n++)e.append('<div class="group"></div>');$(".group").each((function(e){$(this).css({left:14.28+50*e+"%"});for(let e=0;e<=6;e++)$(this).append(`<div class="ivory"><span>${simple_ivory[e]}</span></div>`);$(this).find("span").css({background:colors[e+1]});for(let e=1;e<=5;e++)$(this).append(`<div class="ebony-wrap ebony_${e}"></div>`);for(let e=0;e<5;e++){let n=$(this).find(".ebony_"+(e+1));n.append(`<div class="ebony_child"><span>${simple_ebony_h[e]}</span></div>`),n.append(`<div class="ebony_child"><span>${simple_ebony_b[e]}</span></div>`)}$(this).find(".ebony_child").find("span").css({background:colors[e+1]}),$(this).find(".ivory").each((function(n){$(this).append(`<div class="key">${key_ivory[2+7*e+n]}</div>`),$(this).append(`<audio id="${key_ivory[2+7*e+n]}"><source src="./dist/assets/audio/Piano.ff.${key_ivory[2+7*e+n]}.mp3" type="audio/mpeg"></audio>`)}));for(let n=0;n<5;n++)$(this).find(".ebony_"+(n+1)).each((function(s){$(this).find(".ebony_child").each((function(s){s<1?$(this).append(`<div data-name="${key_ebony_h[1+5*e+n]}" class="key">${key_ebony_h[1+5*e+n]}</div>`):$(this).append(`<div data-name="${key_ebony_b[1+5*e+n]}" class="key">${key_ebony_b[1+5*e+n]}</div>`),$(this).append(`<audio id="${key_ebony_b[1+5*e+n]}"><source src="./dist/assets/audio/Piano.ff.${key_ebony_b[1+5*e+n]}.mp3" type="audio/mpeg"></audio>`)}))}))})),e.append('<div class="group_right"></div>');let t=$(".group_right");t.append(`<div class="ivory"><span>${simple_ivory[0]}</span></div>`),t.find("span").css({background:colors[8]}),t.find(".ivory").each((function(){$(this).append(`<div class="key">${key_ivory[key_ivory.length-1]}</div>`),$(this).append(`<audio id="${key_ivory[key_ivory.length-1]}"><source src="./dist/assets/audio/Piano.ff.${key_ivory[key_ivory.length-1]}.mp3" type="audio/mpeg"></audio>`)}))}(),I(t),I(i),$(".title").on("dblclick",(function(e){var n=function(e){var n=document.createElement("div");n.innerHTML=e;var s=n.innerText||n.textContent;return n=null,s}($(this).html()),s=prompt("請輸入歌名：",n);null==s&&(s=n),$(this).text(s)})),o.on("click",(function(e){a.toggleClass("closed"),s.toggleClass("full")})),$(".cancelbtn").on("click",(function(e){p.hide()})),u.on("click",(function(e){h.removeClass("active"),r.removeClass("selected")})),v.on("click",(function(e){b.removeClass("active")})),isMobile.phone?($(".ivory").each((function(e){$(this).on("touchstart",(function(e){$(this).css({background:"#f2f2f2"}),C(t,$(this).find("span").text(),$(this).find(".key").text(),$(this).find("span").css("background-color")),C(i,$(this).find("span").text(),$(this).find(".key").text(),$(this).find("span").css("background-color")),B($(this).find(".key").text())})).on("touchend",(function(e){$(this).css({background:"#fff"})}))})),$(".ebony_child").each((function(e){$(this).on("touchstart",(function(e){$(this).css({background:"#444"}),C(t,$(this).find("span").text(),$(this).find(".key").data("name"),$(this).find("span").css("background-color")),C(i,$(this).find("span").text(),$(this).find(".key").data("name"),$(this).find("span").css("background-color")),B($(this).find(".key").text())})).on("touchend",(function(e){$(this).css({background:"#000"})}))})),d.each((function(e){$(this).on("touchstart",(function(n){switch($(this).addClass("selected"),e){case 0:w(t),w(i);break;case 1:C(t,"","whitespace","rgba(255, 255, 255, 0.2)"),C(i,"","whitespace","rgba(255, 255, 255, 0.2)");break;case 2:I(t),I(i);break;case 3:P();break;case 4:T(t,"up"),T(i,"up");break;case 5:T(t,"down"),T(i,"down");break;case 6:M("open");break;case 7:M("close");break;case 8:t.toggleClass("open"),i.toggleClass("open");break;case 9:b.addClass("active"),A();break;case 10:h.addClass("active")}})).on("touchend",(function(e){$(this).removeClass("selected")}))}))):($(".ivory").each((function(e){$(this).on("mousedown",(function(e){$(this).css({background:"#f2f2f2"}),C(t,$(this).find("span").text(),$(this).find(".key").text(),$(this).find("span").css("background-color")),C(i,$(this).find("span").text(),$(this).find(".key").text(),$(this).find("span").css("background-color")),B($(this).find(".key").text())})).on("mouseup",(function(e){$(this).css({background:"#fff"})}))})),$(".ebony_child").each((function(e){$(this).on("mousedown",(function(e){$(this).css({background:"#444"}),C(t,$(this).find("span").text(),$(this).find(".key").data("name"),$(this).find("span").css("background-color")),C(i,$(this).find("span").text(),$(this).find(".key").data("name"),$(this).find("span").css("background-color")),B($(this).find(".key").text())})).on("mouseup",(function(e){$(this).css({background:"#000"})}))})),d.each((function(e){$(this).on("mousedown",(function(n){switch($(this).addClass("selected"),e){case 0:w(t),w(i);break;case 1:C(t,"","whitespace","rgba(255, 255, 255, 0.2)"),C(i,"","whitespace","rgba(255, 255, 255, 0)");break;case 2:I(t),I(i);break;case 3:P();break;case 4:T(t,"up"),T(i,"up");break;case 5:T(t,"down"),T(i,"down");break;case 6:M("open");break;case 7:M("close");break;case 8:t.toggleClass("open"),i.toggleClass("open");break;case 9:b.addClass("active"),A();break;case 10:h.addClass("active")}})).on("mouseup",(function(e){$(this).removeClass("selected")}))})),$(window).on("keydown",(function(e){switch(e.keyCode){case 8:w(t),w(i);break;case 13:I(t),I(i);break;case 32:C(t,"","whitespace","rgba(255, 255, 255, 0.2)"),C(i,"","whitespace","rgba(255, 255, 255, 0)");break;case 65:L("note","left");break;case 87:L("line","up");break;case 68:L("note","right");break;case 83:L("line","down")}})))}));