import { colors, key_ivory, key_ebony_b, key_ebony_h, simple_ivory, simple_ebony_b, simple_ebony_h } from './piano-note.js';
import { i18n } from './language.js';

// 等 HTML 載入完成
$(function(){
    
    // 等資源載入完成後才顯示畫面
    // window.onload = function(){
    //     $('.loading').hide();
    // };

    // 載入動畫 1 秒
    setTimeout(function(){
        $('.loading').fadeOut();
    }, 1000);
    
    // 變數準備
    let $piano = $('.piano');
    let $slide = $('.slide');
    
    let $text = $('.text');
    let $text_number = $text.find('.number-panel');
    let $text_tabs = $text.find('.tabs-panel');
    
    let $toolbox = $('.toolbox');
    let $toolbox_btn = $('#toolbox-btn'); // 工具箱收合按鈕
    let $toolbtns = $('.toolbutton');
    let $toolbtn_open_piano = $toolbtns.eq(6); // 開啟鋼琴按鈕
    let $toolbtn_closed_piano = $toolbtns.eq(7); // 關閉鋼琴按鈕
    let $toolbtn_intro = $toolbtns.eq(9); // 功能說明按鈕

    let $colorarea = $(".colorarea");
    
    let $intro = $('.intro-wrap');
    let $intro_closed_btn = $('.intro-wrap .ctr-btn');

    let $screenshot = $('.screenshot-wrap');
    let $screenshot_closed_btn = $('.screenshot-wrap .ctr-btn');

    let cur_piano_x_scroll = 0; // 目前鋼琴的水平捲軸位置
    let cur_selected_note = $('.note.selected'); // 當前焦點音符們 (兩個面板都有)
    let cur_selected_line = $('.line.selected'); // 當前焦點軌道們 (兩個面板都有)

    // 設定開啟鋼琴按鈕為消失狀態
    $toolbtn_open_piano.css('display', 'none');
    // 設定卷軸 (人為觸發才生效)
    $piano.animate({'scrollLeft': '3000vw'}, 500);
    // 紀錄卷軸位置
    recordScrollX();
    
    //-------------------
    // 建立琴鍵
    //-------------------
    function buildPiano(){
        //-------------------
        // 左邊 3 鍵
        //-------------------
        $piano.append('<div class="group_left"></div>');
        let $group_left = $('.group_left');
        
        // 新增白鍵
        $group_left.append(`<div class="ivory"><span>${simple_ivory[5]}</span></div>`);
        $group_left.append(`<div class="ivory"><span>${simple_ivory[6]}</span></div>`);

        // 上色白鍵
        $group_left.find('span').css({'background': colors[0]});

        // 新增黑鍵容器
        $group_left.append(`<div class="ebony-wrap ebony_0"></div>`);
        let $ebony = $group_left.find('.ebony_0');
        
        // 新增黑鍵內容 (升)
        $ebony.append(`<div class="ebony_child"><span>${simple_ebony_h[4]}</span></div>`);
		
        // 新增黑鍵內容 (降)
        $ebony.append(`<div class="ebony_child"><span>${simple_ebony_b[4]}</span></div>`);
  
        // 上色黑鍵
        $group_left.find('.ebony_child').find('span').css({'background': colors[0]});

        // 新增白鍵內容
        $group_left.find('.ivory').each(function(index){
            // 新增 key
            $(this).append(`<div class="key">${key_ivory[index]}</div>`);
            // 新增音訊
            $(this).append(`<audio id="${key_ivory[index]}" preload="auto"><source src="./dist/assets/audio/Piano.ff.${key_ivory[index]}.mp3" type="audio/mpeg"></audio>`);
        });

        // 新增黑鍵內容
        $group_left.find('.ebony_0').each(function(index){
            $ebony.find('.ebony_child').each(function(index2){
                // 新增 key
                if (index2 < 1) { // 第 0 個 (升記號)
                    $(this).append(`<div data-name="${key_ebony_h[index]}" class="key">${key_ebony_h[index]}</div>`);

                    // 新增音訊
                    $(this).append(`<audio id="${key_ebony_h[index]}" preload="auto"><source src="./dist/assets/audio/Piano.ff.${key_ebony_b[index]}.mp3" type="audio/mpeg"></audio>`);
                } else { // 第 1 個 (降記號)
                    $(this).append(`<div data-name="${key_ebony_b[index]}" class="key">${key_ebony_b[index]}</div>`);

                    // 新增音訊
                    $(this).append(`<audio id="${key_ebony_b[index]}" preload="auto"><source src="./dist/assets/audio/Piano.ff.${key_ebony_b[index]}.mp3" type="audio/mpeg"></audio>`);
                }
            });        
        });

        //-------------------------------
        // 中間 84 鍵 = (7+5)*7 (7組音階)
        //-------------------------------
        for(let j=0 ; j < 7 ; j++){
            $piano.append('<div class="group"></div>');
        }
        $('.group').each(function(index){
            // 新增白鍵容器
            $(this).css({left: 14.28 + (50*index) + '%'});
            for (let i=0 ; i <= 6 ; i++) {
                $(this).append(`<div class="ivory"><span>${simple_ivory[i]}</span></div>`);
            }

            // 上色白鍵
            $(this).find('span').css({'background': colors[index+1]});

            // 新增黑鍵容器
            for (let i=1; i <= 5 ; i++) {
                $(this).append(`<div class="ebony-wrap ebony_${i}"></div>`);
            }

            // 新增黑鍵內容
            for (let i=0 ; i < 5 ; i++) {
                let $cur_ebony = $(this).find(`.ebony_${i+1}`);
                $cur_ebony.append(`<div class="ebony_child"><span>${simple_ebony_h[i]}</span></div>`); // 新增黑鍵 (升) 左
                $cur_ebony.append(`<div class="ebony_child"><span>${simple_ebony_b[i]}</span></div>`); // 新增黑鍵 (降) 右
            }
			
            // 上色黑鍵
            $(this).find('.ebony_child').find('span').css({'background': colors[index+1]});

            // 新增白鍵內容 (7組容器)
            $(this).find('.ivory').each(function(index2){
                // 新增 key
                $(this).append(`<div class="key">${key_ivory[2+(7*index)+index2]}</div>`);
                // 新增音訊
                $(this).append(`<audio id="${key_ivory[2+(7*index)+index2]}"><source src="./dist/assets/audio/Piano.ff.${key_ivory[2+(7*index)+index2]}.mp3" type="audio/mpeg"></audio>`);
            });

            // 新增黑鍵內容 (5組容器)
            for (let i=0 ; i < 5 ; i++) { 
                $(this).find(`.ebony_${i+1}`).each(function(index2){
                    $(this).find('.ebony_child').each(function(index3){
                        // 新增 key (第一個黑鍵 + [一組5個黑鍵] + 現在是第幾個黑鍵)
                        if (index3 < 1) { // 第 0 個 (升記號)
                            $(this).append(`<div data-name="${key_ebony_h[1+(5*index)+i]}" class="key">${key_ebony_h[1+(5*index)+i]}</div>`);

                            // 新增音訊
                            $(this).append(`<audio id="${key_ebony_h[1+(5*index)+i]}"><source src="./dist/assets/audio/Piano.ff.${key_ebony_b[1+(5*index)+i]}.mp3" type="audio/mpeg"></audio>`);
                        } else { // 第 1 個 (降記號)
                            $(this).append(`<div data-name="${key_ebony_b[1+(5*index)+i]}" class="key">${key_ebony_b[1+(5*index)+i]}</div>`);

                            // 新增音訊
                            $(this).append(`<audio id="${key_ebony_b[1+(5*index)+i]}"><source src="./dist/assets/audio/Piano.ff.${key_ebony_b[1+(5*index)+i]}.mp3" type="audio/mpeg"></audio>`);
                        }
                    });
                });
            }
        });

        //----------------------
        // 右邊 1 鍵
        //----------------------
        $piano.append('<div class="group_right"></div>');
        let $group_right = $('.group_right');
        
        // 新增白鍵容器
        $group_right.append(`<div class="ivory"><span>${simple_ivory[0]}</span></div>`);
        
        // 上色白鍵
        $group_right.find('span').css({'background': colors[8]});

        // 新增白鍵內容
        $group_right.find('.ivory').each(function(){
            // 新增 key
            $(this).append(`<div class="key">${key_ivory[key_ivory.length-1]}</div>`);
            // 新增音訊
            $(this).append(`<audio id="${key_ivory[key_ivory.length-1]}"><source src="./dist/assets/audio/Piano.ff.${key_ivory[key_ivory.length-1]}.mp3" type="audio/mpeg"></audio>`);
        });
    }


    // 建立琴鍵
    buildPiano();

    // 新增簡譜軌道
    addNoteLine($text_number);
    addNoteLine($text_tabs);

    //-------------------
    // 更新軌道及音符的焦點
    //-------------------
    function updateFocuse() {
        cur_selected_note = $('.note.selected'); // 當前焦點音符
        cur_selected_line = $('.line.selected'); // 當前焦點軌道
    }

    //-------------------
    // 移動 & 紀錄音符焦點
    //-------------------
    function recordNoteSelected(panel, curnote) {
        // 移除所有焦點
        panel.find('.line').removeClass('selected');
        panel.find('.note').removeClass('selected');
        
        // 移動焦點至該音符
        curnote.addClass('selected');

        // 移動焦點至該音符所在軌道
        curnote.parent('.line').addClass('selected');

        // 更新軌道及音符的焦點
        updateFocuse();
    }

    //-------------------
    // 紀錄簡譜
    //-------------------
    function note(panel, number, key, color) {        
        // 移動文字區塊卷軸置焦點軌道
        // moveScrollY(panel);

        // 取得目前焦點軌道
        let $selectLine = panel.find(".line.selected");

        // 取得目前焦點的音符
        let $selectedNote = panel.find(".note.selected");

        // 移除所有焦點
        panel.find(".note").removeClass('selected');

        // 音符
        let title = key != 'whitespace' ? key.replace(/h/,"#") : key;
        let note_html = `<div data-key="${key}" title="${title}" class="note selected ${key}" style="background-color: ${color};">${number}</div>`;

        // 檢查是否存在焦點元素 ? 新增音符 至 焦點元素 後方 : 新增音符 至 空白軌道 中
        $selectedNote.length != 0 ? $selectedNote.after(note_html) : $selectLine.append(note_html);

        // 安裝焦點事件
        let $lastest_note = panel.find(".note.selected"); // 最新新增的音符
        $lastest_note.on('click', function(event){
            // 此軌道在此面板位於第幾個位置
            let line_index = $selectLine.index();

            // 此音符在此軌道位於第幾個位置
            let note_index = $(this).index();

            // 更新另一個面板的音符焦點
            switch(panel) {
                case $text_number: // 是簡譜面板的音符
                    note_index++; // 調整為五線譜面板的索引
                    break;
                case $text_tabs: // 是五線譜面板的音符
                    note_index--; // 調整為簡譜面版的索引
                    break;
            }

            // 更新另一個面板的音符焦點
            recordNoteSelected(panel.siblings('.panel'), panel.siblings('.panel').find('.line').eq(line_index).children().eq(note_index));
            
            // 更新音符焦點
            recordNoteSelected(panel, $(this));
        });

        // 更新軌道及音符的焦點
        updateFocuse();
    }

    //-------------------
    // 刪除 簡譜
    //-------------------
    function delNote(panel) {    
        // 移動文字區塊捲軸置焦點軌道
        // moveScrollY(panel);

        // 目前焦點音符
        let $focuseNote = panel.find(".note.selected");

        // 將焦點移置前一個或後一個音符 (如果有)
        let $prevNote = $focuseNote.prev('.note');
        let $nextNote = $focuseNote.next('.note');
        
        if ($prevNote.length != 0) {
            $prevNote.addClass('selected');
        } else if ($nextNote.length != 0) {
            $nextNote.addClass('selected');
        }

        // 移除目前焦點音符
        $focuseNote.remove();

        // 更新軌道及音符的焦點
        updateFocuse();
    }

    //-------------------
    // 移動 & 紀錄軌道焦點
    //-------------------
    function recordLineSelected(panel, line) {
        // 檢查是否已為焦點
        if (!line.hasClass('selected')) {
            // 移除所有焦點
            panel.find('.line').removeClass('selected');
            panel.find('.note').removeClass('selected');
            
            // 移動焦點至該軌道
            line.addClass('selected');

            // 移動焦點置該軌道最後一個音符
            line.find('.note').last().addClass('selected');

            // 更新軌道及音符的焦點
            updateFocuse();
        }
    }

    //-------------------
    // 刪除一行簡譜軌道
    //-------------------
    function delNoteLine(panel, line) {
        // 檢查軌道數量
        if (panel.find('.line').length > 1) {
            let $prevLine = line.prev('.line');
            let $nextLine = line.next('.line');

            // 移除所有焦點
            panel.find('.line').removeClass('selected');
            panel.find('.note').removeClass('selected'); 
            
            // 移動焦點至上或下一軌道的最後一個音符 (如果有)
            if ($prevLine.length != 0) {
                $prevLine.find('.note').last().addClass('selected');
                $prevLine.addClass('selected');
            } else if ($nextLine.length != 0) {
                $nextLine.find('.note').last().addClass('selected');
                $nextLine.addClass('selected');
            }

            // 移除軌道
            line.remove();
        } else {
            // 移除所有焦點
            panel.find('.line').removeClass('selected');
            panel.find('.note').removeClass('selected'); 
            
            // 刪除該軌道的音符
            line.children().not('.del').not('.line-bg').not('.play').remove();
            
            // 增加軌道焦點
            line.addClass('selected');
        }

        // 移動文字區塊卷軸置焦點軌道
        // moveScrollY(panel);

        // 更新軌道及音符的焦點
        updateFocuse();
    }

    //-------------------
    // 新增一行簡譜軌道
    //-------------------
    function addNoteLine(panel) {
        // 簡譜
        let line_html = `
            <div class='line selected' title='雙擊修改區塊顏色'>
                <div class="del" title="刪除">X</div>
                <div class="play" title="播放">▶</div>
            </div>`;

        // 五線譜
        if (panel == $text_tabs) {
            line_html = `
                <div class='line selected' title='雙擊修改區塊顏色'>
                    <div class='line-bg'><span></span><span></span><span></span><span></span><span></span></div>
                    <div class="del" title="刪除">X</div>
                    <div class="play" title="播放">▶</div>
                </div>`;
        }

        // 目前有焦點的軌道
        let selected_line = panel.find('.line.selected');
        
        // 刪除所有軌道焦點
        panel.find('.line.selected').removeClass('selected');

        // 檢查是否有焦點軌道 ? 新增軌道於焦點軌道之後 : 新增軌道至元素末端
        selected_line.length != 0 ? selected_line.after(line_html) : panel.append(line_html);

        // 移除音符焦點 (讓焦點只保持在新軌道上)
        panel.find('.note.selected').removeClass('selected');

        // 目前焦點的軌道
        let $line = panel.find('.line.selected');

        // 裝上 改變顏色事件
        $line.on('dblclick', function(event){
            //changeAreaColor($(this)); // 修改區塊顏色
            openColorArea(panel, $(this)); // 開啟選擇顏色區塊
        });

        // 裝上 移動焦點事件
        $line.on('click', function(event){
            // 此軌道在此面板位於第幾個位置
            let line_index = $line.index();
            // 更新另一個面板的軌道焦點
            recordLineSelected(panel.siblings('.panel'), panel.siblings('.panel').find('.line').eq(line_index));
            
            // 更新軌道焦點
            recordLineSelected(panel, $line);
        });

        // 裝上 刪除軌道事件
        let $line_del_btn = $line.find('.del');
        $line_del_btn.on('click', function(event){
            // 此軌道在此面板位於第幾個位置
            let line_index = $line.index();
            // 移除另一個面板的軌道
            delNoteLine(panel.siblings('.panel'), panel.siblings('.panel').find('.line').eq(line_index));
            
            // 刪除一行簡譜軌道
            delNoteLine(panel, $line);
        });

        // 裝上 播放軌道事件
        let $line_play_btn = $line.find('.play');
        $line_play_btn.on('click', function(event){
            let note_list = [];
            $(this).siblings('.note').each(function(index){
                note_list.push($(this).data('key'));
            });

            for (let i=0 ; i < note_list.length ; i++) {
                setTimeout(function(){
                    try {
                        playaudio(`${note_list[i]}`); // 播放音訊
                    } catch (exception) {
                        // console.log("space");
                    }
                }, 400 * i);
            }

        });

        // 移動文字區塊卷軸置焦點軌道
        // moveScrollY(panel); 

        // 更新軌道及音符的焦點
        updateFocuse();
    }

    //-------------------
    // 複製一行簡譜軌道
    //-------------------
    function copyNoteLine() {
        // 取得目前焦點軌道
        let $selectLine = cur_selected_line.eq(0);

        // 複製該軌道的其子元素
        let $cloneNotes = $selectLine.contents().not('.del').not('.line-bg').not('.play').clone();

        // 新增一行簡譜軌道
        addNoteLine($text_number);
        addNoteLine($text_tabs);

        // 紀錄簡譜
        for (let i=0; i < $cloneNotes.length ; i++) {
            let $curNote = $cloneNotes.eq(i);
            note($text_number, $curNote.text(), $curNote.data('key'), $curNote.css('background-color'));
            note($text_tabs, $curNote.text(), $curNote.data('key'), $curNote.css('background-color'));
        }

        // 更新軌道及音符的焦點
        updateFocuse();
    }

    //-------------------
    // 上移/下移簡譜軌道
    //-------------------
    function moveNoteLine(panel, direction) {
        // 取得目前焦點軌道
        let selectedLine = panel.find('.line.selected');
        
        // 目標軌道
        let goalLine = '';

        switch(direction) {
            case 'up':
                // 取得焦點軌道的前一個軌道
                goalLine = panel.find('.line.selected').prev('.line');
                
                // 在目標軌道的前方插入焦點軌道
                selectedLine.insertBefore(goalLine);
                break;
            case 'down':
                // 取得焦點軌道的後一個軌道
                goalLine = panel.find('.line.selected').next('.line');

                // 在目標軌道的後方插入焦點軌道
                selectedLine.insertAfter(goalLine);
                break;
        }

        // 移動文字區塊卷軸置焦點軌道
        // moveScrollY(panel);
    }

    //-------------------
    // 使用方向鍵移動焦點
    //-------------------
    function moveFocuse(type, direction) {
        switch (type) {
            case 'line':
                let moveToLine = '';

                if (direction == 'up') {
                    moveToLine = cur_selected_line.prev('.line');
                } else if (direction == 'down') {
                    moveToLine = cur_selected_line.next('.line');
                }
                
                if (moveToLine.length != 0) {
                    // 移除軌道焦點
                    $('.line').removeClass('selected');
                    // 將焦點移至上一行軌道
                    moveToLine.addClass('selected');
                }
                // 移除音符焦點
                $('.note').removeClass('selected');
                // 將音符焦點移至該軌道最後一個音符
                $text_number.find('.line.selected .note').last().addClass('selected');
                $text_tabs.find('.line.selected .note').last().addClass('selected');
                break;
            case 'note':
                let moveToNote = '';
                
                if (direction == 'left') {
                    moveToNote = cur_selected_note.prev('.note');
                } else if (direction == 'right') {
                    moveToNote = cur_selected_note.next('.note');
                }

                if (moveToNote.length != 0) {
                    // 移除音符焦點
                    $('.note').removeClass('selected');
                    // 將焦點移至下一個音符
                    moveToNote.addClass('selected');
                }
                break;
        }

        // 移動文字區塊卷軸置焦點軌道
        // $text_number.hasClass('open') ? moveScrollY($text_number) : moveScrollY($text_tabs);

        // 更新軌道及音符的焦點
        updateFocuse();
    }

    //-------------------
    // 播放音訊
    //-------------------
    function playaudio(key) {
        let notekey = document.getElementById(key);
        
        notekey.pause(); // 暫停
        notekey.currentTime = 0; // 讓音訊進度回歸 0 
        notekey.play(); // 播放
    }

    //-------------------
    // 移動文字區塊卷軸位置
    //-------------------
    // function moveScrollY(panel) {
    //     // 目前焦點軌道的索引
    //     let curLineIndex = panel.find('.line.selected').index();
    //     let text_height = panel.find('.line').height() * curLineIndex;
        
    //     $text.animate({'scrollTop': text_height}, 0); // 移動捲軸至焦點軌道

    //     // bug: 簡譜和五線譜的軌道高度不同, 所以Y軸焦點位置不同, 但是共用同個父容器 $text
    // }

    //-------------------
    // 紀錄鋼琴卷軸位置
    //-------------------
    function recordScrollX() {
        cur_piano_x_scroll = $piano.scrollLeft();
    }

    //-------------------
    // 鋼琴面板控制
    //-------------------
    function controlPianoLayout(kind) {
        switch(kind) {
            case "close": {
                $text.stop().animate({'height': '100%'}, 300);
                $toolbox.stop().animate({'height': '100%'}, 300);
                $piano.stop().animate({'bottom': '-30%'}, 300);
                $slide.hide();
                recordScrollX(); // 紀錄卷軸位置
                $toolbtn_open_piano.css('display', 'block'); // 開啟鋼琴按鈕
                $toolbtn_closed_piano.css('display', 'none'); // 關閉鋼琴按鈕
                break;
            }
            case "open": {
                $text.stop().animate({'height': '70%'}, 300);
                $toolbox.stop().animate({'height': '70%'}, 300);
                $piano.stop().animate({'bottom': '0'}, 300);
                $slide.show();
                $piano.animate({'scrollLeft': cur_piano_x_scroll}, 0); // 移動卷軸至上次位置
                $toolbtn_open_piano.css('display', 'none'); // 開啟鋼琴按鈕
                $toolbtn_closed_piano.css('display', 'block'); // 關閉鋼琴按鈕
                break;
            }
        }
    }

    //-------------------
    // 修改歌名
    //-------------------
    $('.title').on('dblclick', function(event) {
        var pre_name = $(this).html(); // 預設值為上次輸入的歌名
        var decodeHtml = htmlDecode(pre_name); //用浏览器内部转换器实现html解码
        var song_name = prompt(i18n.t('text.__song_title'), decodeHtml);

        if ( song_name != null ) {
            $(this).text(song_name); // 顯示新歌名
        }
    });

    //-------------------
    // 工具箱收合控制
    //-------------------
    $toolbox_btn.on('click', function(event) {
        $toolbox.toggleClass('closed');
        $text.toggleClass('full');
    });

    //-------------------
    // 開啟選擇顏色區塊
    //-------------------
    function openColorArea(panel, $line) {
        $colorarea.show(); // 顯示選擇區塊

        // line 的顏色: 取得左邊框顏色 rgb(red, green ,blue)
        var rgbString = $line.css('border-left-color');
        // 取得 rgb 色碼
        var red = parseInt(getRGB(rgbString).red);
        var green = parseInt(getRGB(rgbString).green);
        var blue = parseInt(getRGB(rgbString).blue);
        var line_hexString = rgbToHex(red, green, blue);
        
        // 在按鈕上顯示目前選取的顏色
        $(".colorbtn").removeClass('selected');
        $('.colorbtn').each(function(index){
            // 取得背景色 rgb(red, green ,blue)
            let rgbString = $(this).css('backgroundColor');
            // 取得 rgb 色碼
            let red = parseInt(getRGB(rgbString).red);
            let green = parseInt(getRGB(rgbString).green);
            let blue = parseInt(getRGB(rgbString).blue);
            let btn_hexString = rgbToHex(red, green, blue);

            if (line_hexString == btn_hexString) {
                $(this).addClass('selected');
            }
        });
        
        var select_hexString = line_hexString; // 預設為 line 目前選擇
        $(".colorbtn").on('click', function() {
            var rgbString = $(this).css('backgroundColor'); // 取得背景色 rgb(red, green ,blue)
            // 取得 rgb 色碼
            var red = parseInt(getRGB(rgbString).red);
            var green = parseInt(getRGB(rgbString).green);
            var blue = parseInt(getRGB(rgbString).blue);
            select_hexString = rgbToHex(red, green, blue);

            $(".colorbtn").removeClass('selected');
            $(this).addClass('selected');
        });


        // 按下確定
        $(".checkbtn").on('click', function(){
            // 修改此軌道的左邊線顏色
            $line.css('border-left-color', select_hexString);

            $colorarea.hide(); // 隱藏選擇區塊
            $(this).off(); // 清除前次的事件綁定

            // 此軌道在此面板位於第幾個位置
            let line_index = $line.index();
            // 修改另一個面板的軌道左邊線顏色
            panel.siblings('.panel').find('.line').eq(line_index).css('border-left-color', select_hexString);
        });
    }

    //-------------------
    // 關閉選擇顏色區塊
    //-------------------
    $(".cancelbtn").on('click', function(event) {
        $colorarea.hide();
    });

    //-------------------
    // 關閉功能說明
    //-------------------
    $intro_closed_btn.on('click', function(event) {
        $intro.removeClass('active');
        $toolbtn_intro.removeClass('selected');
    });

    //-------------------
    // 關閉輸出圖片
    //-------------------
    $screenshot_closed_btn.on('click', function(event) {
        $screenshot.removeClass('active');
    });

    //-------------------
    // 修改區塊顏色 (輸入色碼)
    //-------------------
    // function changeAreaColor($element){
    //     var rgbString = $element.css('border-left-color'); // 取得左邊框顏色 rgb(red, green ,blue)

    //     // 取得 rgb 色碼
    //     var red = parseInt(getRGB(rgbString).red);
    //     var green = parseInt(getRGB(rgbString).green);
    //     var blue = parseInt(getRGB(rgbString).blue);
    //     var hexString = rgbToHex(red, green, blue);
    //     var colorCode = prompt('請輸入色碼：', hexString);
    //     if(colorCode==null){
    //         colorCode = hexString;
    //     }
    //     $element.css('border-left-color', colorCode);
    // }

    let click_event = isMobile.phone ? 'touchstart' : 'mousedown';
    let release_event = isMobile.phone ? 'touchend' : 'mouseup';

    $('.ivory').each(function(index){
        $(this).on(click_event, function(event){
            $(this).css({'background': '#f2f2f2'});
            // 紀錄簡譜
            note($text_number, $(this).find('span').text(), $(this).find('.key').text(), $(this).find('span').css('background-color'));
            note($text_tabs, $(this).find('span').text(), $(this).find('.key').text(), $(this).find('span').css('background-color'));
            // 播放音訊
            playaudio($(this).find('.key').text());
        })
        .on(release_event, function(event){
            $(this).css({'background': '#fff'});
        });
    });

    $('.ebony_child').each(function(index){
        $(this).on(click_event, function(event){
            $(this).css({'background': '#444'});
            // 紀錄簡譜
            note($text_number, $(this).find('span').text(), $(this).find('.key').data('name'), $(this).find('span').css('background-color'));
            note($text_tabs, $(this).find('span').text(), $(this).find('.key').data('name'), $(this).find('span').css('background-color'));
            // 播放音訊
            playaudio($(this).find('.key').text());
        })
        .on(release_event, function(event){
            $(this).css({'background': '#000'});
        });
    });

    $toolbtns.each(function(index){
        $(this).on(click_event, function(event){
            $(this).addClass('selected');

            switch(index) {
                case 0: { // 刪除
                    // 刪除簡譜
                    delNote($text_number);
                    delNote($text_tabs);
                    break;
                }
                case 1: { // 空格
                    // 紀錄簡譜
                    note($text_number, '', 'whitespace', 'rgba(255, 255, 255, 0.2)');
                    note($text_tabs, '', 'whitespace', 'rgba(255, 255, 255, 0.2)'); 
                    break;
                }
                case 2: { // 換行
                    // 新增簡譜軌道
                    addNoteLine($text_number);
                    addNoteLine($text_tabs);
                    break;
                }
                case 3: { // 複製一行
                    copyNoteLine();
                    break;
                }
                case 4: { // 上移一行
                    moveNoteLine($text_number, 'up');
                    moveNoteLine($text_tabs, 'up');
                    break;
                }
                case 5: { // 下移一行
                    moveNoteLine($text_number, 'down');
                    moveNoteLine($text_tabs, 'down');
                    break;
                }
                case 6: { // 開啟鋼琴
                    controlPianoLayout('open');
                    break;
                }
                case 7: { // 關閉鋼琴
                    controlPianoLayout('close');
                    break;
                }
                case 8: { // 切換 五線譜 <=> 簡譜
                    $text_number.toggleClass('open');
                    $text_tabs.toggleClass('open');

                    // 移動文字區塊卷軸置焦點軌道
                    // $text_number.hasClass('open') ? moveScrollY($text_number) : moveScrollY($text_tabs);
                    break;
                }
                case 9: { // 輸出圖片
                    $screenshot.addClass('active');
                    getScreenshot();
                    break;
                }
                case 10: { // 開啟 功能說明
                    $intro.addClass('active');
                    break;
                }
            }
        })
        .on(release_event, function(event){
            $(this).removeClass('selected');
        });
    });

    if (!isMobile.phone) {
        /* 鍵盤事件 */
        $(window).on('keydown', function(event){
            //alert(event.keyCode);
            switch(event.keyCode) {
                case 8: { // Backspace
                    // 刪除簡譜
                    delNote($text_number);
                    delNote($text_tabs);
                    break;
                }
                case 13: { // Enter
                    // 新增簡譜軌道
                    addNoteLine($text_number);
                    addNoteLine($text_tabs);
                    break;
                }
                case 32: { // Space
                    // 紀錄簡譜
                    note($text_number, '', 'whitespace', 'rgba(255, 255, 255, 0.2)');
                    note($text_tabs, '', 'whitespace', 'rgba(255, 255, 255, 0)');
                    break;
                }
                case 65: { // 左 A
                    // 移動焦點
                    moveFocuse('note', 'left');
                    break;
                }
                case 87: { // 上 W
                    // 移動焦點
                     moveFocuse('line', 'up');
                    break;
                }
                case 68: { // 右 D
                    // 移動焦點
                    moveFocuse('note', 'right');
                    break;
                }
                case 83: { // 下 S
                    // 移動焦點
                    moveFocuse('line', 'down');
                    break;
                }
            }
        });
    }

    //---------------------------------------------
    // 用浏览器内部转换器实现html解码
    // 來源: https://www.cnblogs.com/xdp-gacl/p/3722642.html
    //---------------------------------------------
    function htmlDecode(text) {
        //1.首先动态创建一个容器标签元素，如DIV
        var temp = document.createElement("div");
        //2.然后将要转换的字符串设置为这个元素的innerHTML(ie，火狐，google都支持)
        temp.innerHTML = text;
        //3.最后返回这个元素的innerText(ie支持)或者textContent(火狐，google支持)，即得到经过HTML解码的字符串了。
        var output = temp.innerText || temp.textContent;
        temp = null;
        return output;
    }

    //---------------------------------------------
    // 將 rgb(red, green ,blue) 字串 轉換為 JSON物件
    // 來源: https://stackoverflow.com/questions/34980574/how-to-extract-color-values-from-rgb-string-in-javascript
    //---------------------------------------------
    function getRGB(str) {
      var match = str.match(/rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/);
      return match ? {
        red: parseInt(match[1]),
        green: parseInt(match[2]),
        blue: parseInt(match[3])
      } : {};
    }

    //-----------------------
    // 將 0~255 轉換為 16進位
    // 來源: https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
    //-----------------------
    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }
    
    //-----------------------
    // 將 rgb 轉換為 hex
    // 來源: https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
    //-----------------------
    function rgbToHex(r, g, b) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    //-----------------------
    // html2canvas
    // 來源: https://html2canvas.hertzen.com/
    // 來源: https://www.geeksforgeeks.org/how-to-take-screenshot-of-a-div-using-javascript/
    // 來源: https://stackoverflow.com/questions/36213275/html2canvas-does-not-render-full-div-only-what-is-visible-on-screen
    //-----------------------
    function getScreenshot() {
        // 目標擷取容器
        let $screenshot_wrap = $('#capture');
        $screenshot_wrap.addClass('capturing');
        $screenshot_wrap.scrollTop(0);

        // 輸出容器
        let $output_warp = $('#output');
        $output_warp.empty();

        html2canvas(document.querySelector('#capture')).then(canvas => {
            // 輸出容器
            $output_warp.append(canvas);

            // 目標擷取容器
            $screenshot_wrap.removeClass('capturing');
        });
    }
});