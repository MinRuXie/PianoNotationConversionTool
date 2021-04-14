!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){"use strict";n.r(t),n.d(t,"colors",(function(){return i})),n.d(t,"key_ivory",(function(){return o})),n.d(t,"key_ebony_b",(function(){return s})),n.d(t,"key_ebony_h",(function(){return a})),n.d(t,"simple_ivory",(function(){return l})),n.d(t,"simple_ebony_b",(function(){return c})),n.d(t,"simple_ebony_h",(function(){return d}));const i=["#828282","#AD766A","#D5404A","#FFB11B","#90B44B","#58B2DC","#005CAF","#A8497A","#E87A90"],o=["A0","B0","C1","D1","E1","F1","G1","A1","B1","C2","D2","E2","F2","G2","A2","B2","C3","D3","E3","F3","G3","A3","B3","C4","D4","E4","F4","G4","A4","B4","C5","D5","E5","F5","G5","A5","B5","C6","D6","E6","F6","G6","A6","B6","C7","D7","E7","F7","G7","A7","B7","C8"],s=["Bb0","Db1","Eb1","Gb1","Ab1","Bb1","Db2","Eb2","Gb2","Ab2","Bb2","Db3","Eb3","Gb3","Ab3","Bb3","Db4","Eb4","Gb4","Ab4","Bb4","Db5","Eb5","Gb5","Ab5","Bb5","Db6","Eb6","Gb6","Ab6","Bb6","Db7","Eb7","Gb7","Ab7","Bb7"],a=["Ah0","Ch1","Dh1","Fh1","Gh1","Ah1","Ch2","Dh2","Fh2","Gh2","Ah2","Ch3","Dh3","Fh3","Gh3","Ah3","Ch4","Dh4","Fh4","Gh4","Ah4","Ch5","Dh5","Fh5","Gh5","Ah5","Ch6","Dh6","Fh6","Gh6","Ah6","Ch7","Dh7","Fh7","Gh7","Ah7"],l=["1","2","3","4","5","6","7"],c=["b2","b3","b5","b6","b7"],d=["#1","#2","#4","#5","#6"]},function(e,t,n){"use strict";n.r(t),n.d(t,"i18n",(function(){return i}));const i=new VueI18n({locale:"tc",messages:{en:{text:{__song_title:"Please enter the song title.",__song_title_point:"Double click can modify the song title."},toolbox:{__delete_note:"Delete this note",__space_note:"Space note",__add_line:"Add new note track",__copy_line:"Copy this note track",__move_up_line:"Move this note track up",__move_down_line:"Move this note track down",__show_piano:"Open the piano",__hidden_piano:"Close the piano",__switch_mode:"Switch Mode",__output_result:"Output as picture",__function_description:"How to use?",__switch_lang:"繁體中文"},colorarea:{__color_title:"Please choose a color.",__check:"OK",__cancel:"Cancel"},notice:{__size_warn:"Please turn the phone to landscape.",__capturing:"Working..."},features:{rule:{__title:"Features Introduction",__item_1:"Enter the song title: Double click song title can enter or modify it.",__item_2:'Switch Mode: Switch the display mode of the sheet music panel, there are "numbered notation" and "stave". (Default: Numbered Notation)',__item_3:"Output an image file: The result will be displayed on the screen, and the image file can be saved.",__item_4:{__summary:'Move "Focus": Click Note track or Note can move focus. When the element get focus, its surroundings will glow.',__details:["Note track focus (up: W, down: S): When Note track get focus, the last note of it will get focus too.","Note focus (left: A, right: D): When Note get focus, its note track will get focus too."]}},note:{__title:"Note",__item_1:"Add / Insert: Press the keyboard of piano will create a note behind the focus note, and play the audio.",__item_2:'Space note (Space): Add a hollow note behind "the focused note".',__item_3:"Delete note (Backspace): Delete a focused note."},track:{__title:"Note Track",__item_1:"Add new note track (Enter): Add a new empty note track.",__item_2:'Copy this note track: Copy "the focused track and its notes" behind itself.',__item_3:'Move this note track up: Move the order of "the focused track" up.',__item_4:'Move this note track down: Move the order of "the focused track" down.',__item_5:"Change left side color of note track: Double click note track can change color (white, yellow, green, purple, orange).",__item_6:'Delete specific note track: Click right top side "x" button of note track, can delete note track and notes inside of it.'}}},tc:{text:{__song_title:"請輸入歌名",__song_title_point:"雙擊修改歌名"},toolbox:{__delete_note:"刪除音符",__space_note:"空格音符",__add_line:"新增一行",__copy_line:"複製此行",__move_up_line:"上移此行",__move_down_line:"下移此行",__show_piano:"開啟鋼琴",__hidden_piano:"關閉鋼琴",__switch_mode:"切換模式",__output_result:"輸出圖片",__function_description:"功能說明",__switch_lang:"English"},colorarea:{__color_title:"請選擇顏色",__check:"確定",__cancel:"取消"},notice:{__size_warn:"直式不可以看",__capturing:"努力處理中..."},features:{rule:{__title:"使用說明",__item_1:"輸入歌名：雙擊歌名區塊，可輸入或修改歌名。",__item_2:"切換模式：可以在簡譜及五線譜之間切換。",__item_3:"輸出圖片：將完成的作品輸出成一張圖片預覽在畫面上，右鍵可另存圖檔。",__item_4:{__summary:"移動「焦點」：點擊軌道或音符可移動焦點，成為焦點的元素周圍會有發光造型。",__details:["軌道焦點（鍵盤快捷鍵 [上：W，下：S]）：當軌道獲得焦點，軌道中的最後一個音符也會獲得焦點。","音符焦點（鍵盤快捷鍵 [左：A，右：D]）：當音符獲得焦點，音符所在軌道也會獲得焦點。"]}},note:{__title:"音符",__item_1:"新增/插入音符：點擊鋼琴琴鍵，會於畫面上的「焦點音符後方」產生音符，並播放音檔。",__item_2:"空格音符（鍵盤快捷鍵 [Space]）：增加一個空心音符於「焦點音符後方」。",__item_3:"刪除音符（鍵盤快捷鍵 [Backspace]）：刪除一個「焦點音符」。"},track:{__title:"音符軌道",__item_1:"新增一行（鍵盤快捷鍵 [Enter]）：增加一行空白軌道。",__item_2:"複製此行：複製「焦點軌道和其音符」於其後方。",__item_3:"上移此行：將「焦點軌道」往上移動。",__item_4:"下移此行：將「焦點軌道」往下移動。",__item_5:"改變軌道顏色：雙擊軌道區塊，可改變軌道左側的邊線顏色（白、黃、綠、紫、橘）。",__item_6:"刪除指定軌道：點擊軌道右上方的叉叉按鈕，可刪除該軌道及內容。"}}}}});new Vue({el:"#app",i18n:i,methods:{switchLanguage:function(){let e=this.$i18n.locale;this.$i18n.locale="tc"==e?"en":"tc"}}})},function(e,t,n){n(3),n(0),e.exports=n(1)},function(e,t,n){"use strict";n.r(t);var i=n(0),o=n(1);$((function(){setTimeout((function(){$(".loading").fadeOut()}),1e3);let e=$(".piano"),t=$(".slide"),n=$(".text"),s=n.find(".number-panel"),a=n.find(".tabs-panel"),l=$(".toolbox"),c=$("#toolbox-btn"),d=$(".toolbutton"),r=d.eq(6),_=d.eq(7),p=d.eq(9),u=$(".colorarea"),h=$(".intro-wrap"),f=$(".intro-wrap .ctr-btn"),b=$(".screenshot-wrap"),y=$(".screenshot-wrap .ctr-btn"),v=0,k=$(".note.selected"),m=$(".line.selected");function g(){k=$(".note.selected"),m=$(".line.selected")}function C(e,t){e.find(".line").removeClass("selected"),e.find(".note").removeClass("selected"),t.addClass("selected"),t.parent(".line").addClass("selected"),g()}function w(e,t,n,i){let o=e.find(".line.selected"),l=e.find(".note.selected");e.find(".note").removeClass("selected");let c="whitespace"!=n?n.replace(/h/,"#"):n,d=`<div data-key="${n}" title="${c}" class="note selected ${n}" style="background-color: ${i};">${t}</div>`;0!=l.length?l.after(d):o.append(d),e.find(".note.selected").on("click",(function(t){let n=o.index(),i=$(this).index();switch(e){case s:i++;break;case a:i--}C(e.siblings(".panel"),e.siblings(".panel").find(".line").eq(n).children().eq(i)),C(e,$(this))})),g()}function x(e){let t=e.find(".note.selected"),n=t.prev(".note"),i=t.next(".note");0!=n.length?n.addClass("selected"):0!=i.length&&i.addClass("selected"),t.remove(),g()}function A(e,t){t.hasClass("selected")||(e.find(".line").removeClass("selected"),e.find(".note").removeClass("selected"),t.addClass("selected"),t.find(".note").last().addClass("selected"),g())}function D(e,t){if(e.find(".line").length>1){let n=t.prev(".line"),i=t.next(".line");e.find(".line").removeClass("selected"),e.find(".note").removeClass("selected"),0!=n.length?(n.find(".note").last().addClass("selected"),n.addClass("selected")):0!=i.length&&(i.find(".note").last().addClass("selected"),i.addClass("selected")),t.remove()}else e.find(".line").removeClass("selected"),e.find(".note").removeClass("selected"),t.children().not(".del").not(".line-bg").remove(),t.addClass("selected");g()}function B(e){let t="\n            <div class='line selected' title='雙擊修改區塊顏色'>\n                <div class=\"del\" title=\"刪除\">X</div>\n            </div>";e==a&&(t="\n                <div class='line selected' title='雙擊修改區塊顏色'>\n                    <div class='line-bg'><span></span><span></span><span></span><span></span><span></span></div>\n                    <div class=\"del\" title=\"刪除\">X</div>\n                </div>");let n=e.find(".line.selected");e.find(".line.selected").removeClass("selected"),0!=n.length?n.after(t):e.append(t),e.find(".note.selected").removeClass("selected");let i=e.find(".line.selected");i.on("dblclick",(function(t){!function(e,t){u.show();var n=t.css("border-left-color"),i=N(parseInt(O(n).red),parseInt(O(n).green),parseInt(O(n).blue));$(".colorbtn").removeClass("selected"),$(".colorbtn").each((function(e){let t=$(this).css("backgroundColor"),n=N(parseInt(O(t).red),parseInt(O(t).green),parseInt(O(t).blue));i==n&&$(this).addClass("selected")}));var o=i;$(".colorbtn").on("click",(function(){var e=$(this).css("backgroundColor"),t=parseInt(O(e).red),n=parseInt(O(e).green),i=parseInt(O(e).blue);o=N(t,n,i),$(".colorbtn").removeClass("selected"),$(this).addClass("selected")})),$(".checkbtn").on("click",(function(){t.css("border-left-color",o),u.hide(),$(this).unbind();let n=t.index();e.siblings(".panel").find(".line").eq(n).css("border-left-color",o)}))}(e,$(this))})),i.on("click",(function(t){let n=i.index();A(e.siblings(".panel"),e.siblings(".panel").find(".line").eq(n)),A(e,i)})),i.find(".del").on("click",(function(t){let n=i.index();D(e.siblings(".panel"),e.siblings(".panel").find(".line").eq(n)),D(e,i)})),g()}function E(e,t){let n=e.find(".line.selected"),i="";switch(t){case"up":i=e.find(".line.selected").prev(".line"),n.insertBefore(i);break;case"down":i=e.find(".line.selected").next(".line"),n.insertAfter(i)}}function G(e,t){switch(e){case"line":let e="";"up"==t?e=m.prev(".line"):"down"==t&&(e=m.next(".line")),0!=e.length&&($(".line").removeClass("selected"),e.addClass("selected")),$(".note").removeClass("selected"),s.find(".line.selected .note").last().addClass("selected"),a.find(".line.selected .note").last().addClass("selected");break;case"note":let n="";"left"==t?n=k.prev(".note"):"right"==t&&(n=k.next(".note")),0!=n.length&&($(".note").removeClass("selected"),n.addClass("selected"))}g()}function F(e){let t=document.getElementById(e);t.pause(),t.currentTime=0,t.play()}function M(){v=e.scrollLeft()}function I(i){switch(i){case"close":n.stop().animate({height:"100%"},300),l.stop().animate({height:"100%"},300),e.stop().animate({bottom:"-30%"},300),t.hide(),M(),r.css("display","block"),_.css("display","none");break;case"open":n.stop().animate({height:"70%"},300),l.stop().animate({height:"70%"},300),e.stop().animate({bottom:"0"},300),t.show(),e.animate({scrollLeft:v},0),r.css("display","none"),_.css("display","block")}}r.css("display","none"),e.animate({scrollLeft:"3000vw"},500),M(),function(){e.append('<div class="group_left"></div>');let t=$(".group_left");t.append(`<div class="ivory"><span>${i.simple_ivory[5]}</span></div>`),t.append(`<div class="ivory"><span>${i.simple_ivory[6]}</span></div>`),t.find("span").css({background:i.colors[0]}),t.append('<div class="ebony-wrap ebony_0"></div>');let n=t.find(".ebony_0");n.append(`<div class="ebony_child"><span>${i.simple_ebony_h[4]}</span></div>`),n.append(`<div class="ebony_child"><span>${i.simple_ebony_b[4]}</span></div>`),t.find(".ebony_child").find("span").css({background:i.colors[0]}),t.find(".ivory").each((function(e){$(this).append(`<div class="key">${i.key_ivory[e]}</div>`),$(this).append(`<audio id="${i.key_ivory[e]}" preload="auto"><source src="./dist/assets/audio/Piano.ff.${i.key_ivory[e]}.mp3" type="audio/mpeg"></audio>`)})),t.find(".ebony_0").each((function(e){n.find(".ebony_child").each((function(t){t<1?($(this).append(`<div data-name="${i.key_ebony_h[e]}" class="key">${i.key_ebony_h[e]}</div>`),$(this).append(`<audio id="${i.key_ebony_h[e]}" preload="auto"><source src="./dist/assets/audio/Piano.ff.${i.key_ebony_b[e]}.mp3" type="audio/mpeg"></audio>`)):($(this).append(`<div data-name="${i.key_ebony_b[e]}" class="key">${i.key_ebony_b[e]}</div>`),$(this).append(`<audio id="${i.key_ebony_b[e]}" preload="auto"><source src="./dist/assets/audio/Piano.ff.${i.key_ebony_b[e]}.mp3" type="audio/mpeg"></audio>`))}))}));for(let t=0;t<7;t++)e.append('<div class="group"></div>');$(".group").each((function(e){$(this).css({left:14.28+50*e+"%"});for(let e=0;e<=6;e++)$(this).append(`<div class="ivory"><span>${i.simple_ivory[e]}</span></div>`);$(this).find("span").css({background:i.colors[e+1]});for(let e=1;e<=5;e++)$(this).append(`<div class="ebony-wrap ebony_${e}"></div>`);for(let e=0;e<5;e++){let t=$(this).find(".ebony_"+(e+1));t.append(`<div class="ebony_child"><span>${i.simple_ebony_h[e]}</span></div>`),t.append(`<div class="ebony_child"><span>${i.simple_ebony_b[e]}</span></div>`)}$(this).find(".ebony_child").find("span").css({background:i.colors[e+1]}),$(this).find(".ivory").each((function(t){$(this).append(`<div class="key">${i.key_ivory[2+7*e+t]}</div>`),$(this).append(`<audio id="${i.key_ivory[2+7*e+t]}"><source src="./dist/assets/audio/Piano.ff.${i.key_ivory[2+7*e+t]}.mp3" type="audio/mpeg"></audio>`)}));for(let t=0;t<5;t++)$(this).find(".ebony_"+(t+1)).each((function(n){$(this).find(".ebony_child").each((function(n){n<1?($(this).append(`<div data-name="${i.key_ebony_h[1+5*e+t]}" class="key">${i.key_ebony_h[1+5*e+t]}</div>`),$(this).append(`<audio id="${i.key_ebony_h[1+5*e+t]}"><source src="./dist/assets/audio/Piano.ff.${i.key_ebony_b[1+5*e+t]}.mp3" type="audio/mpeg"></audio>`)):($(this).append(`<div data-name="${i.key_ebony_b[1+5*e+t]}" class="key">${i.key_ebony_b[1+5*e+t]}</div>`),$(this).append(`<audio id="${i.key_ebony_b[1+5*e+t]}"><source src="./dist/assets/audio/Piano.ff.${i.key_ebony_b[1+5*e+t]}.mp3" type="audio/mpeg"></audio>`))}))}))})),e.append('<div class="group_right"></div>');let o=$(".group_right");o.append(`<div class="ivory"><span>${i.simple_ivory[0]}</span></div>`),o.find("span").css({background:i.colors[8]}),o.find(".ivory").each((function(){$(this).append(`<div class="key">${i.key_ivory[i.key_ivory.length-1]}</div>`),$(this).append(`<audio id="${i.key_ivory[i.key_ivory.length-1]}"><source src="./dist/assets/audio/Piano.ff.${i.key_ivory[i.key_ivory.length-1]}.mp3" type="audio/mpeg"></audio>`)}))}(),B(s),B(a),$(".title").on("dblclick",(function(e){var t=function(e){var t=document.createElement("div");t.innerHTML=e;var n=t.innerText||t.textContent;return t=null,n}($(this).html()),n=prompt(o.i18n.t("text.__song_title"),t);null!=n&&$(this).text(n)})),c.on("click",(function(e){l.toggleClass("closed"),n.toggleClass("full")})),$(".cancelbtn").on("click",(function(e){u.hide()})),f.on("click",(function(e){h.removeClass("active"),p.removeClass("selected")})),y.on("click",(function(e){b.removeClass("active")}));let P=isMobile.phone?"touchstart":"mousedown",S=isMobile.phone?"touchend":"mouseup";function O(e){var t=e.match(/rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/);return t?{red:parseInt(t[1]),green:parseInt(t[2]),blue:parseInt(t[3])}:{}}function q(e){var t=e.toString(16);return 1==t.length?"0"+t:t}function N(e,t,n){return"#"+q(e)+q(t)+q(n)}$(".ivory").each((function(e){$(this).on(P,(function(e){$(this).css({background:"#f2f2f2"}),w(s,$(this).find("span").text(),$(this).find(".key").text(),$(this).find("span").css("background-color")),w(a,$(this).find("span").text(),$(this).find(".key").text(),$(this).find("span").css("background-color")),F($(this).find(".key").text())})).on(S,(function(e){$(this).css({background:"#fff"})}))})),$(".ebony_child").each((function(e){$(this).on(P,(function(e){$(this).css({background:"#444"}),w(s,$(this).find("span").text(),$(this).find(".key").data("name"),$(this).find("span").css("background-color")),w(a,$(this).find("span").text(),$(this).find(".key").data("name"),$(this).find("span").css("background-color")),F($(this).find(".key").text())})).on(S,(function(e){$(this).css({background:"#000"})}))})),d.each((function(e){$(this).on(P,(function(t){switch($(this).addClass("selected"),e){case 0:x(s),x(a);break;case 1:w(s,"","whitespace","rgba(255, 255, 255, 0.2)"),w(a,"","whitespace","rgba(255, 255, 255, 0.2)");break;case 2:B(s),B(a);break;case 3:!function(){let e=m.eq(0).contents().not(".del").not(".line-bg").clone();B(s),B(a);for(let t=0;t<e.length;t++){let n=e.eq(t);w(s,n.text(),n.data("key"),n.css("background-color")),w(a,n.text(),n.data("key"),n.css("background-color"))}g()}();break;case 4:E(s,"up"),E(a,"up");break;case 5:E(s,"down"),E(a,"down");break;case 6:I("open");break;case 7:I("close");break;case 8:s.toggleClass("open"),a.toggleClass("open");break;case 9:b.addClass("active"),function(){let e=$("#capture");e.addClass("capturing"),e.scrollTop(0);let t=$("#output");t.empty(),html2canvas(document.querySelector("#capture")).then((n=>{t.append(n),e.removeClass("capturing")}))}();break;case 10:h.addClass("active")}})).on(S,(function(e){$(this).removeClass("selected")}))})),isMobile.phone||$(window).on("keydown",(function(e){switch(e.keyCode){case 8:x(s),x(a);break;case 13:B(s),B(a);break;case 32:w(s,"","whitespace","rgba(255, 255, 255, 0.2)"),w(a,"","whitespace","rgba(255, 255, 255, 0)");break;case 65:G("note","left");break;case 87:G("line","up");break;case 68:G("note","right");break;case 83:G("line","down")}}))}))}]);