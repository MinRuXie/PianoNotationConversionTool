$((function(){setTimeout((function(){$(".loading").fadeOut()}),1e3);let e=$(".piano"),n=$(".slide"),s=$(".text"),t=s.find(".number-panel"),i=s.find(".tabs-panel"),a=$(".toolbox"),d=$("#toolbox-btn"),o=$(".toolbutton"),c=o.eq(6),l=o.eq(7),r=o.eq(9),h=$(".colorarea"),p=$(".colorbox"),f=$(".intro-wrap"),b=$(".intro-wrap .ctr-btn"),u=0,v=$(".note.selected"),g=$(".line.selected");function k(){v=$(".note.selected"),g=$(".line.selected")}function C(e,n){e.find(".line").removeClass("selected"),e.find(".note").removeClass("selected"),n.addClass("selected"),n.parent(".line").addClass("selected"),k()}function m(e,n,s,a){E(e);let d=e.find(".line.selected"),o=e.find(".note.selected");e.find(".note").removeClass("selected");let c="whitespace"!=s?s.replace(/h/,"#"):s,l=`<div data-key="${s}" title="${c}" class="note selected ${s}" style="background-color: ${a};">${n}</div>`;0!=o.length?o.after(l):d.append(l),e.find(".note.selected").on("click",(function(n){let s=d.index(),a=$(this).index();switch(e){case t:a++;break;case i:a--}C(e.siblings(".panel"),e.siblings(".panel").find(".line").eq(s).children().eq(a)),C(e,$(this))})),k()}function y(e){E(e);let n=e.find(".note.selected"),s=n.prev(".note"),t=n.next(".note");0!=s.length?s.addClass("selected"):0!=t.length&&t.addClass("selected"),n.remove(),k()}function x(e,n){n.hasClass("selected")||(e.find(".line").removeClass("selected"),e.find(".note").removeClass("selected"),n.addClass("selected"),n.find(".note").last().addClass("selected"),k())}function w(e,n){if(e.find(".line").length>1){let s=n.prev(".line"),t=n.next(".line");e.find(".line").removeClass("selected"),e.find(".note").removeClass("selected"),0!=s.length?(s.find(".note").last().addClass("selected"),s.addClass("selected")):0!=t.length&&(t.find(".note").last().addClass("selected"),t.addClass("selected")),n.remove()}else e.find(".line").removeClass("selected"),e.find(".note").removeClass("selected"),n.children().not(".del").not(".line-bg").remove(),n.addClass("selected");E(e),k()}function A(e){let n="<div class='line selected' title='雙擊修改區塊顏色'><div class=\"del\" title=\"刪除\">X</div></div>";e==i&&(n="\n                <div class='line selected' title='雙擊修改區塊顏色'>\n                    <div class='line-bg'><span></span><span></span><span></span><span></span><span></span></div>\n                    <div class=\"del\" title=\"刪除\">X</div>\n                </div>");let s=e.find(".line.selected");e.find(".line.selected").removeClass("selected"),0!=s.length?s.after(n):e.append(n),e.find(".note.selected").removeClass("selected");let t=e.find(".line.selected");t.on("dblclick",(function(n){!function(e,n){h.show();var s=n.css("border-left-color"),t=parseInt(I(s).red),i=parseInt(I(s).green),a=parseInt(I(s).blue),d=T(t,i,a);$(".colorbtn").removeClass("selected"),$(".colorbtn").each((function(e){var n=$(this).css("backgroundColor"),s=parseInt(I(n).red),t=parseInt(I(n).green),i=parseInt(I(n).blue);btn_hexString=T(s,t,i),d==btn_hexString&&$(this).addClass("selected")}));var o=d;$(".colorbtn").on("click",(function(){var e=$(this).css("backgroundColor"),n=parseInt(I(e).red),s=parseInt(I(e).green),t=parseInt(I(e).blue);o=T(n,s,t),$(".colorbtn").removeClass("selected"),$(this).addClass("selected")})),p.find(".checkbtn").remove(),p.append('<div class="checkbtn">確定</div>'),$(".checkbtn").on("click",(function(){n.css("border-left-color",o),h.hide(),$(this).remove();let s=n.index();e.siblings(".panel").find(".line").eq(s).css("border-left-color",o)}))}(e,$(this))})),t.on("click",(function(n){let s=t.index();x(e.siblings(".panel"),e.siblings(".panel").find(".line").eq(s)),x(e,t)})),t.find(".del").on("click",(function(n){let s=t.index();w(e.siblings(".panel"),e.siblings(".panel").find(".line").eq(s)),w(e,t)})),E(e),k()}function D(){let e=g.eq(0).contents().not(".del").not(".line-bg").clone();A(t),A(i);for(let n=0;n<e.length;n++){let s=e.eq(n);m(t,s.text(),s.attr("data-key"),s.css("background-color")),m(i,s.text(),s.attr("data-key"),s.css("background-color"))}k()}function _(e,n){let s=e.find(".line.selected"),t="";switch(n){case"up":t=e.find(".line.selected").prev(".line"),s.insertBefore(t);break;case"down":t=e.find(".line.selected").next(".line"),s.insertAfter(t)}E(e)}function B(e,n){switch(e){case"line":let e="";"up"==n?e=g.prev(".line"):"down"==n&&(e=g.next(".line")),0!=e.length&&($(".line").removeClass("selected"),e.addClass("selected")),$(".note").removeClass("selected"),t.find(".line.selected .note").last().addClass("selected"),i.find(".line.selected .note").last().addClass("selected");break;case"note":let s="";"left"==n?s=v.prev(".note"):"right"==n&&(s=v.next(".note")),0!=s.length&&($(".note").removeClass("selected"),s.addClass("selected"))}t.hasClass("open")?E(t):E(i),k()}function G(e){notekey=document.getElementById(e),notekey.pause(),notekey.currentTime=0,notekey.play()}function E(e){let n=e.find(".line.selected").index();text_height=e.find(".line").height()*n,s.animate({scrollTop:text_height},0)}function F(){u=e.scrollLeft()}function q(t){switch(t){case"close":s.stop().animate({height:"100%"},300),a.stop().animate({height:"100%"},300),e.stop().animate({bottom:"-35%"},300),n.hide(),F(),c.css("display","block"),l.css("display","none");break;case"open":s.stop().animate({height:"65%"},300),a.stop().animate({height:"65%"},300),e.stop().animate({bottom:"0"},300),n.show(),e.animate({scrollLeft:u},0),c.css("display","none"),l.css("display","block")}}function I(e){var n=e.match(/rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/);return n?{red:n[1],green:n[2],blue:n[3]}:{}}function P(e){var n=e.toString(16);return 1==n.length?"0"+n:n}function T(e,n,s){return"#"+P(e)+P(n)+P(s)}c.css("display","none"),e.animate({scrollLeft:"2000vw"},500),F(),function(){let n=["#828282","#AD766A","#D5404A","#FFB11B","#90B44B","#58B2DC","#005CAF","#A8497A","#E87A90"],s=["A0","B0","C1","D1","E1","F1","G1","A1","B1","C2","D2","E2","F2","G2","A2","B2","C3","D3","E3","F3","G3","A3","B3","C4","D4","E4","F4","G4","A4","B4","C5","D5","E5","F5","G5","A5","B5","C6","D6","E6","F6","G6","A6","B6","C7","D7","E7","F7","G7","A7","B7","C8"],t=["Bb0","Db1","Eb1","Gb1","Ab1","Bb1","Db2","Eb2","Gb2","Ab2","Bb2","Db3","Eb3","Gb3","Ab3","Bb3","Db4","Eb4","Gb4","Ab4","Bb4","Db5","Eb5","Gb5","Ab5","Bb5","Db6","Eb6","Gb6","Ab6","Bb6","Db7","Eb7","Gb7","Ab7","Bb7"],i=["Ah0","Ch1","Dh1","Fh1","Gh1","Ah1","Ch2","Dh2","Fh2","Gh2","Ah2","Ch3","Dh3","Fh3","Gh3","Ah3","Ch4","Dh4","Fh4","Gh4","Ah4","Ch5","Dh5","Fh5","Gh5","Ah5","Ch6","Dh6","Fh6","Gh6","Ah6","Ch7","Dh7","Fh7","Gh7","Ah7"],a=["1","2","3","4","5","6","7"],d=["b2","b3","b5","b6","b7"],o=["#1","#2","#4","#5","#6"];e.append('<div class="group_left"></div>');let c=$(".group_left");c.append(`<div class="ivory"><span>${a[5]}</span></div>`),c.append(`<div class="ivory"><span>${a[6]}</span></div>`),c.find("span").css({background:n[0]}),c.append('<div class="ebony-wrap ebony_0"></div>');let l=c.find(".ebony_0");l.append(`<div class="ebony_child"><span>${o[4]}</span></div>`),l.append(`<div class="ebony_child"><span>${d[4]}</span></div>`),c.find(".ebony_child").find("span").css({background:n[0]}),c.find(".ivory").each((function(e){$(this).append(`<div class="key">${s[e]}</div>`),$(this).append(`<audio id="${s[e]}"><source src="./dist/assets/audio/Piano.ff.${s[e]}.mp3" type="audio/mpeg"></audio>`)})),c.find(".ebony_0").each((function(e){l.find(".ebony_child").each((function(n){n<1?$(this).append(`<div data-name="${i[e]}" class="key">${i[e]}</div>`):$(this).append(`<div data-name="${t[e]}" class="key">${t[e]}</div>`),$(this).append(`<audio id="${t[e]}"><source src="./dist/assets/audio/Piano.ff.${t[e]}.mp3" type="audio/mpeg"></audio>`)}))}));for(let n=0;n<7;n++)e.append('<div class="group"></div>');$(".group").each((function(e){$(this).css({left:14.28+50*e+"%"});for(let e=0;e<=6;e++)$(this).append(`<div class="ivory"><span>${a[e]}</span></div>`);$(this).find("span").css({background:n[e+1]});for(let e=1;e<=5;e++)$(this).append(`<div class="ebony-wrap ebony_${e}"></div>`);for(let e=0;e<5;e++){let n=$(this).find(".ebony_"+(e+1));n.append(`<div class="ebony_child"><span>${o[e]}</span></div>`),n.append(`<div class="ebony_child"><span>${d[e]}</span></div>`)}$(this).find(".ebony_child").find("span").css({background:n[e+1]}),$(this).find(".ivory").each((function(n){$(this).append(`<div class="key">${s[2+7*e+n]}</div>`),$(this).append(`<audio id="${s[2+7*e+n]}"><source src="./dist/assets/audio/Piano.ff.${s[2+7*e+n]}.mp3" type="audio/mpeg"></audio>`)}));for(let n=0;n<5;n++)$(this).find(".ebony_"+(n+1)).each((function(s){$(this).find(".ebony_child").each((function(s){s<1?$(this).append(`<div data-name="${i[1+5*e+n]}" class="key">${i[1+5*e+n]}</div>`):$(this).append(`<div data-name="${t[1+5*e+n]}" class="key">${t[1+5*e+n]}</div>`),$(this).append(`<audio id="${t[1+5*e+n]}"><source src="./dist/assets/audio/Piano.ff.${t[1+5*e+n]}.mp3" type="audio/mpeg"></audio>`)}))}))})),e.append('<div class="group_right"></div>');let r=$(".group_right");r.append(`<div class="ivory"><span>${a[0]}</span></div>`),r.find("span").css({background:n[8]}),r.find(".ivory").each((function(){$(this).append(`<div class="key">${s[s.length-1]}</div>`),$(this).append(`<audio id="${s[s.length-1]}"><source src="./dist/assets/audio/Piano.ff.${s[s.length-1]}.mp3" type="audio/mpeg"></audio>`)}))}(),A(t),A(i),$(".title").on("dblclick",(function(e){var n=function(e){var n=document.createElement("div");n.innerHTML=e;var s=n.innerText||n.textContent;return n=null,s}($(this).html()),s=prompt("請輸入歌名：",n);null==s&&(s=n),$(this).text(s)})),d.on("click",(function(e){a.toggleClass("closed"),s.toggleClass("full")})),$(".cancelbtn").on("click",(function(e){h.hide()})),b.on("click",(function(e){f.removeClass("active"),r.removeClass("selected")})),isMobile.phone?($(".ivory").each((function(e){$(this).on("touchstart",(function(e){$(this).css({background:"#f2f2f2"}),m(t,$(this).find("span").text(),$(this).find(".key").text(),$(this).find("span").css("background-color")),m(i,$(this).find("span").text(),$(this).find(".key").text(),$(this).find("span").css("background-color")),G($(this).find(".key").text())})).on("touchend",(function(e){$(this).css({background:"#fff"})}))})),$(".ebony_child").each((function(e){$(this).on("touchstart",(function(e){$(this).css({background:"#444"}),m(t,$(this).find("span").text(),$(this).find(".key").attr("data-name"),$(this).find("span").css("background-color")),m(i,$(this).find("span").text(),$(this).find(".key").attr("data-name"),$(this).find("span").css("background-color")),G($(this).find(".key").text())})).on("touchend",(function(e){$(this).css({background:"#000"})}))})),o.each((function(e){$(this).on("touchstart",(function(n){switch($(this).addClass("selected"),e){case 0:y(t),y(i);break;case 1:m(t,"","whitespace","rgba(255, 255, 255, 0.2)"),m(i,"","whitespace","rgba(255, 255, 255, 0.2)");break;case 2:A(t),A(i);break;case 3:D();break;case 4:_(t,"up"),_(i,"up");break;case 5:_(t,"down"),_(i,"down");break;case 6:q("open");break;case 7:q("close");break;case 8:t.toggleClass("open"),i.toggleClass("open"),t.hasClass("open")?E(t):E(i);break;case 9:f.addClass("active")}})).on("touchend",(function(e){$(this).removeClass("selected")}))}))):($(".ivory").each((function(e){$(this).on("mousedown",(function(e){$(this).css({background:"#f2f2f2"}),m(t,$(this).find("span").text(),$(this).find(".key").text(),$(this).find("span").css("background-color")),m(i,$(this).find("span").text(),$(this).find(".key").text(),$(this).find("span").css("background-color")),G($(this).find(".key").text())})).on("mouseup",(function(e){$(this).css({background:"#fff"})}))})),$(".ebony_child").each((function(e){$(this).on("mousedown",(function(e){$(this).css({background:"#444"}),m(t,$(this).find("span").text(),$(this).find(".key").attr("data-name"),$(this).find("span").css("background-color")),m(i,$(this).find("span").text(),$(this).find(".key").attr("data-name"),$(this).find("span").css("background-color")),G($(this).find(".key").text())})).on("mouseup",(function(e){$(this).css({background:"#000"})}))})),o.each((function(e){$(this).on("mousedown",(function(n){switch($(this).addClass("selected"),e){case 0:y(t),y(i);break;case 1:m(t,"","whitespace","rgba(255, 255, 255, 0.2)"),m(i,"","whitespace","rgba(255, 255, 255, 0)");break;case 2:A(t),A(i);break;case 3:D();break;case 4:_(t,"up"),_(i,"up");break;case 5:_(t,"down"),_(i,"down");break;case 6:q("open");break;case 7:q("close");break;case 8:t.toggleClass("open"),i.toggleClass("open"),t.hasClass("open")?E(t):E(i);break;case 9:f.addClass("active")}})).on("mouseup",(function(e){$(this).removeClass("selected")}))})),$(window).on("keydown",(function(e){switch(e.keyCode){case 8:y(t),y(i);break;case 13:A(t),A(i);break;case 32:m(t,"","whitespace","rgba(255, 255, 255, 0.2)"),m(i,"","whitespace","rgba(255, 255, 255, 0)");break;case 65:B("note","left");break;case 87:B("line","up");break;case 68:B("note","right");break;case 83:B("line","down")}})))}));