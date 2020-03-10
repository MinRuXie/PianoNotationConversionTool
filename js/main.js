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
    let $toolbox_btn = $('#toolbox-btn');
    let $colorarea = $(".colorarea");
    let $colorbox = $(".colorbox");
    let $intro = $('.intro-wrap');
    let $intro_closed_btn = $('.intro-wrap .ctr-btn');

    let cur_piano_x_scroll = 0; // 目前鋼琴的水平捲軸位置
    let cur_selected_note = $('.note.selected'); // 當前焦點音符們 (兩個面板都有)
    let cur_selected_line = $('.line.selected'); // 當前焦點軌道們 (兩個面板都有)

    // 設定開啟鋼琴按鈕為消失狀態
    $('.toolbutton').eq(4).css('display', 'none');
    // 設定卷軸 (人為觸發才生效)
    $piano.animate({'scrollLeft': '2000vw'}, 500);
    // 紀錄卷軸位置
    recordScrollX();
    
    //-------------------
    // 建立琴鍵
    //-------------------
    function buildPiano(){
        let colors = ['#828282', '#AD766A', '#D5404A', '#FFB11B', '#90B44B', '#58B2DC', '#005CAF',  '#A8497A', '#E87A90'];
        
        let key_ivory = ['A0', 'B0', 'C1', 'D1', 'E1', 'F1', 'G1', 'A1', 'B1', 'C2', 'D2', 'E2', 'F2', 'G2', 'A2', 'B2', 'C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3', 'C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5', 'D5', 'E5', 'F5', 'G5', 'A5', 'B5', 'C6', 'D6', 'E6', 'F6', 'G6', 'A6', 'B6', 'C7', 'D7', 'E7', 'F7', 'G7', 'A7', 'B7', 'C8'];
        
        let key_ebony_b = ['Bb0', 'Db1', 'Eb1', 'Gb1', 'Ab1', 'Bb1', 'Db2', 'Eb2', 'Gb2', 'Ab2', 'Bb2', 'Db3', 'Eb3', 'Gb3', 'Ab3', 'Bb3', 'Db4', 'Eb4', 'Gb4', 'Ab4', 'Bb4', 'Db5', 'Eb5', 'Gb5', 'Ab5', 'Bb5', 'Db6', 'Eb6', 'Gb6', 'Ab6', 'Bb6', 'Db7', 'Eb7', 'Gb7', 'Ab7', 'Bb7'];
        
        let key_ebony_h = ['Ah0', 'Ch1', 'Dh1', 'Fh1', 'Gh1', 'Ah1', 'Ch2', 'Dh2', 'Fh2', 'Gh2', 'Ah2', 'Ch3', 'Dh3', 'Fh3', 'Gh3', 'Ah3', 'Ch4', 'Dh4', 'Fh4', 'Gh4', 'Ah4', 'Ch5', 'Dh5', 'Fh5', 'Gh5', 'Ah5', 'Ch6', 'Dh6', 'Fh6', 'Gh6', 'Ah6', 'Ch7', 'Dh7', 'Fh7', 'Gh7', 'Ah7'];

        let simple_ivory = ['1', '2', '3', '4', '5', '6', '7'];
        let simple_ebony_b = ['b2', 'b3', 'b5', 'b6', 'b7'];
        let simple_ebony_h = ['#1', '#2', '#4', '#5', '#6'];
		
        //-------------------
        // 左邊 3 鍵
        //-------------------
        $piano.append('<div class="group_left"></div>');
        let $group_left = $('.group_left');
        
        // 新增白鍵
        $group_left.append(`<div class="ivory"><span>${simple_ivory[5]}</span></div>`);
        $group_left.append(`<div class="ivory"><span>${simple_ivory[6]}</span></div>`);

        // 上色
        $group_left.find('span').css({'background': colors[0]});

        // 新增黑鍵容器
        $group_left.append(`<div class="ebony-wrap ebony_0"></div>`);
        let $ebony = $group_left.find('.ebony_0');
        
		// 新增黑鍵 (升)
        $ebony.append(`<div class="ebony_child"><span>${simple_ebony_h[4]}</span></div>`);
		
		// 新增黑鍵 (降)
        $ebony.append(`<div class="ebony_child"><span>${simple_ebony_b[4]}</span></div>`);
  
        // 上色
        $group_left.find('.ebony_child').find('span').css({'background': colors[0]});

        // 新增白鍵內容
        $group_left.find('.ivory').each(function(index){
            // 新增 key
            $(this).append(`<div class="key">${key_ivory[index]}</div>`);
            // 新增音訊
            $(this).append(`<audio id="${key_ivory[index]}"><source src="./audio/Piano.ff.${key_ivory[index]}.mp3" type="audio/mpeg"></audio>`);
        });

        // 新增黑鍵內容
        $group_left.find('.ebony_0').each(function(index){
            $ebony.find('.ebony_child').each(function(index2){
                // 新增 key
                if(index2 < 1){ // 第 0 個 (升記號)
                    $(this).append(`<div data-name="${key_ebony_h[index]}" class="key">${key_ebony_h[index]}</div>`);
                }else{ // 第 1 個 (降記號)
                    $(this).append(`<div data-name="${key_ebony_b[index]}" class="key">${key_ebony_b[index]}</div>`);
                }
                // 新增音訊
                $(this).append(`<audio id="${key_ebony_b[index]}"><source src="./audio/Piano.ff.${key_ebony_b[index]}.mp3" type="audio/mpeg"></audio>`);
            });        
        });

        //-------------------------------
        // 中間 84 鍵 = (7+5)*7 (7組音階)
        //-------------------------------
        for(let j=0 ; j<7 ; j++){
            $piano.append('<div class="group"></div>');
        }
        $('.group').each(function(index){
            // 新增白鍵
            $(this).css({left: 14.28 + (50*index) + '%'});
            for (let i=0 ; i <= 6 ; i++) {
                $(this).append(`<div class="ivory"><span>${simple_ivory[i]}</span></div>`);
            }

            // 上色
            $(this).find('span').css({'background': colors[index+1]});

            // 新增黑鍵容器
            for (let i=1; i <= 5 ; i++) {
                $(this).append(`<div class="ebony-wrap ebony_${i}"></div>`);
            }

            // 新增黑鍵內容
            for (let i=0 ; i<5 ; i++) {
                let $cur_ebony = $(this).find(`.ebony_${i+1}`);
                $cur_ebony.append(`<div class="ebony_child"><span>${simple_ebony_h[i]}</span></div>`); // 新增黑鍵 (升) 左
                $cur_ebony.append(`<div class="ebony_child"><span>${simple_ebony_b[i]}</span></div>`); // 新增黑鍵 (降) 右
            }
			
            // 上色
            $(this).find('.ebony_child').find('span').css({'background': colors[index+1]});

            // 新增白鍵內容 (7組容器)
            $(this).find('.ivory').each(function(index2){
                // 新增 key
                $(this).append(`<div class="key">${key_ivory[2+(7*index)+index2]}</div>`);
                // 新增音訊
                $(this).append(`<audio id="${key_ivory[2+(7*index)+index2]}"><source src="./audio/Piano.ff.${key_ivory[2+(7*index)+index2]}.mp3" type="audio/mpeg"></audio>`);
            });

            // 新增黑鍵內容 (5組容器)
            for (let i=0 ; i<5 ; i++) { 
                $(this).find(`.ebony_${i+1}`).each(function(index2){
                    $(this).find('.ebony_child').each(function(index3){
                        // 新增 key (第一個黑鍵 + [一組5個黑鍵] + 現在是第幾個黑鍵)
                        if(index3 < 1){ // 第 0 個 (升記號)
                            $(this).append(`<div data-name="${key_ebony_h[1+(5*index)+i]}" class="key">${key_ebony_h[1+(5*index)+i]}</div>`);
                        }else{ // 第 1 個 (降記號)
                            $(this).append(`<div data-name="${key_ebony_b[1+(5*index)+i]}" class="key">${key_ebony_b[1+(5*index)+i]}</div>`);
                        }
                        // 新增音訊
                        $(this).append(`<audio id="${key_ebony_b[1+(5*index)+i]}"><source src="./audio/Piano.ff.${key_ebony_b[1+(5*index)+i]}.mp3" type="audio/mpeg"></audio>`);
                    });
                });
            }
        });

        //----------------------
        // 右邊 1 鍵
        //----------------------
        $piano.append('<div class="group_right"></div>');
        let $group_right = $('.group_right');
        
        // 新增白鍵
        $group_right.append(`<div class="ivory"><span>${simple_ivory[0]}</span></div>`);
        
        // 上色
        $group_right.find('span').css({'background': colors[8]});

        // 新增白鍵內容
        $group_right.find('.ivory').each(function(){
            // 新增 key
            $(this).append(`<div class="key">${key_ivory[key_ivory.length-1]}</div>`);
            // 新增音訊
            $(this).append(`<audio id="${key_ivory[key_ivory.length-1]}"><source src="./audio/Piano.ff.${key_ivory[key_ivory.length-1]}.mp3" type="audio/mpeg"></audio>`);
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
        // 移動文字區塊卷軸置最下方
        moveScrollY(panel);

        // 取得目前焦點軌道
        let $selectLine = panel.find(".line.selected");

        // 取得目前焦點的音符
        let $selectedNote = panel.find(".note.selected");

        // 移除所有焦點
        panel.find(".note").removeClass('selected');

        // 音符
        let title = key.replace(/h/,"#");
        let note_html = `<div data-key="${key}" title="${title}" class="note selected ${key}" style="background-color: ${color};">${number}</div>`;

        // 檢查是否存在焦點元素 ? 新增音符 至 焦點元素 後方 : 新增音符 至 空白軌道 中
        $selectedNote.length != 0 ? $selectedNote.after(note_html) : $selectLine.append(note_html);

        // 安裝焦點事件
        let $lastest_note = $('.note.selected'); // 最新新增的音符
        $lastest_note.on('click', function(event){
            // // 此軌道在此面板位於第幾個位置
            // let line_index = $selectLine.index();

            // // // 此音符在此面板位於第幾個位置
            // let note_index = $(this).not('.del').not('.line-bg').index();
            // console.log('line_index', line_index , 'note_index', note_index);

            // // 更新另一個面板的音符焦點
            // recordNoteSelected(panel.siblings('.panel'), panel.siblings('.panel').find('.line').eq(line_index).find('.note').eq(note_index));
            
            // 更新音符焦點
            recordNoteSelected(panel, $lastest_note);
        });

        // 更新軌道及音符的焦點
        updateFocuse();
    }

    //-------------------
    // 刪除 簡譜
    //-------------------
    function delNote(panel) {    
        // 移動文字區塊捲軸置最下方
        moveScrollY(panel);

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
        if (line.find('.note.selected').length == 0) {
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
        if(panel.find('.line').length > 1) {
            // 檢查軌道中是否有焦點
            if (line.find('.selected').length != 0) {
                let $prevLine = line.prev('.line');
                let $nextLine = line.next('.line');

                // 移除所有焦點
                panel.find('.line').removeClass('selected');
                panel.find('.note').removeClass('selected'); 
                
                // 移動焦點置上或下一軌道的最後一個音符 (如果有)
                if ($prevLine.length != 0) {
                    $prevLine.find('.note').last().addClass('selected');
                    $prevLine.addClass('selected');
                } else if ($nextLine.length != 0) {
                    $nextLine.find('.note').last().addClass('selected');
                    $nextLine.addClass('selected');
                }
            }

            // 移除軌道
            line.remove();
        }else{
            // 移除所有焦點
            panel.find('.line').removeClass('selected');
            panel.find('.note').removeClass('selected'); 
            
            // 刪除該軌道的音符
            line.children().not('.del').not('.line-bg').remove();
            
            // 增加軌道焦點
            line.addClass('selected');
        }

        // 更新軌道及音符的焦點
        updateFocuse();
    }

    //-------------------
    // 新增一行簡譜軌道
    //-------------------
    function addNoteLine(panel) {
        // 簡譜
        let line_html = `<div class='line selected' title='雙擊修改區塊顏色'><div class="del">X</div></div>`;

        // 五線譜
        if(panel == $text_tabs){
            line_html = `
                <div class='line selected' title='雙擊修改區塊顏色'>
                    <div class='line-bg'><span></span><span></span><span></span><span></span><span></span></div>
                    <div class="del">X</div>
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

        // 移動文字區塊卷軸置最下方
        moveScrollY(panel); 

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
        let $cloneNotes = $selectLine.contents().not('.del').not('.line-bg').clone();

        // 新增一行簡譜軌道
        addNoteLine($text_number);
        addNoteLine($text_tabs);

        // 紀錄簡譜
        for (let i=0; i < $cloneNotes.length ; i++) {
            let $curNote = $cloneNotes.eq(i);
            note($text_number, $curNote.text(), $curNote.attr('data-key'), $curNote.css('background-color'));
            note($text_tabs, $curNote.text(), $curNote.attr('data-key'), $curNote.css('background-color'));
        }

        // 更新軌道及音符的焦點
        updateFocuse();
    }

    //-------------------
    // 使用方向鍵移動焦點
    //-------------------
    function moveFocuse(type, direction) {
        switch (type) {
            case 'line':
                let moveToLine = '';
            
                switch (direction) {
                    case 'up':
                        moveToLine = cur_selected_line.prev('.line');
                        break;
                    case 'down':
                        moveToLine = cur_selected_line.next('.line');
                        break;
                }
                
                if(moveToLine.length != 0){
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
                
                switch (direction) {
                    case 'left':
                        moveToNote = cur_selected_note.prev('.note');
                        break;
                    case 'right':
                        moveToNote = cur_selected_note.next('.note');
                        break;
                }

                if(moveToNote.length != 0){
                    // 移除音符焦點
                    $('.note').removeClass('selected');
                    // 將焦點移至下一個音符
                    moveToNote.addClass('selected');
                }
                break;
        }

        // 更新軌道及音符的焦點
        updateFocuse();
    }

    //-------------------
    // 播放音訊
    //-------------------
    function playaudio(key) {
        notekey = document.getElementById(key);
        notekey.pause(); // 暫停
        notekey.currentTime = 0; // 讓音訊進度回歸 0 
        notekey.play(); // 播放
    }

    //-------------------
    // 移動文字區塊卷軸位置
    //-------------------
    function moveScrollY(panel) {
        text_height = panel.find('.line').height() * panel.find('.line').length;
        $text.animate({'scrollTop': text_height}, 0); // 移動卷軸至文字區塊最下方
    }

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
        switch(kind){
            case "close": {
                $text.stop().animate({'height': '100%'}, 300);
                $toolbox.stop().animate({'height': '100%'}, 300);
                $piano.stop().animate({'bottom': '-35%'}, 300)
                $slide.hide();
                recordScrollX(); // 紀錄卷軸位置
                $('.toolbutton').eq(4).css('display', 'block'); // 開啟鋼琴按鈕
                $('.toolbutton').eq(5).css('display', 'none'); // 關閉鋼琴按鈕
                break;
            }
            case "open": {
                $text.stop().animate({'height': '65%'}, 300);
                $toolbox.stop().animate({'height': '65%'}, 300);
                $piano.stop().animate({'bottom': '0'}, 300);
                $slide.show();
                $piano.animate({'scrollLeft': cur_piano_x_scroll}, 0); // 移動卷軸至上次位置
                $('.toolbutton').eq(4).css('display', 'none'); // 開啟鋼琴按鈕
                $('.toolbutton').eq(5).css('display', 'block'); // 關閉鋼琴按鈕
                break;
            }
        }
    }

    //-------------------
    // 修改歌名
    //-------------------
    $('.title').on('dblclick', function(event) {
        var pre_name = $('.title').html(); // 預設值為上次輸入的歌名
        var decodeHtml = htmlDecode(pre_name); //用浏览器内部转换器实现html解码
        var song_name = prompt('請輸入歌名：', decodeHtml);
        
        if(song_name == null){
            song_name = decodeHtml;
        }
        $('.title').text(song_name); // 顯示新歌名
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
            var rgbString = $(this).css('backgroundColor');
            // 取得 rgb 色碼
            var red = parseInt(getRGB(rgbString).red);
            var green = parseInt(getRGB(rgbString).green);
            var blue = parseInt(getRGB(rgbString).blue);
            btn_hexString = rgbToHex(red, green, blue);

            if(line_hexString == btn_hexString){
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

        // 移除確定按鈕
        $colorbox.find('.checkbtn').remove();
        // 新增確定按鈕
        $colorbox.append(`<div class="checkbtn">確定</div>`);
        // 按下確定
        $(".checkbtn").on('click', function(){
            // 修改此軌道的左邊線顏色
            $line.css('border-left-color', select_hexString);

            $colorarea.hide(); // 隱藏選擇區塊
            $(this).remove(); // 移除確定按鈕元素 (為了清除前次的事件綁定)

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
        $('.toolbutton').eq(7).removeClass('selected');
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

	//-------------------
    // 行動裝置
    //-------------------
    if(isMobile.phone){
        //alert(isMobile.phone);
        // 註冊點擊事件
        $('.ivory').each(function(index){
            $(this).on('touchstart', function(event){
                $(this).css({'background': '#f2f2f2'});
                // 紀錄簡譜
                note($text_number, $(this).find('span').text(), $(this).find('.key').text(), $(this).find('span').css('background-color'));
                note($text_tabs, $(this).find('span').text(), $(this).find('.key').text(), $(this).find('span').css('background-color'));
                // 播放音訊
                playaudio($(this).find('.key').text());
            })
            .on('touchend', function(event){
                $(this).css({'background': '#fff'});
            });
        });

        $('.ebony_0').each(function(index){
            $('.ebony_child').each(function(index){
                $(this).on('touchstart', function(event){
                    $(this).css({'background': '#444'});
                    // 紀錄簡譜
                    note($text_number, $(this).find('span').text(), $(this).find('.key').attr('data-name'), $(this).find('span').css('background-color'));
                    note($text_tabs, $(this).find('span').text(), $(this).find('.key').attr('data-name'), $(this).find('span').css('background-color'));
                    // 播放音訊
                    playaudio($(this).find('.key').text());
                })
                .on('touchend', function(event){
                    $(this).css({'background': '#000'});
                });
            });
        });

        $('.toolbutton').each(function(index){
            $(this).on('touchstart', function(event){
                $(this).addClass('selected');

                switch(index){
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
                    case 4: { // 開啟鋼琴
                        controlPianoLayout('open');
                        break;
                    }
                    case 5: { // 關閉鋼琴
                        controlPianoLayout('close');
                        break;
                    }
                    case 6: { // 切換 五線譜 <=> 簡譜
                        $text_number.toggleClass('open');
                        $text_tabs.toggleClass('open');
                        break;
                    }
                    case 7: { // 開啟 功能說明
                        $intro.addClass('active');
                        break;
                    }
                }
            })
            .on('touchend', function(event){
                $(this).removeClass('selected');
            });
        });
	//-------------------
    // 電腦
    //-------------------
    }else{
        //alert(isMobile.phone);
        // 註冊點擊事件
        $('.ivory').each(function(index){
            $(this).on('mousedown', function(event){
                $(this).css({'background': '#f2f2f2'});
                // 紀錄簡譜
                note($text_number, $(this).find('span').text(), $(this).find('.key').text(), $(this).find("span").css('background-color'));
                note($text_tabs, $(this).find('span').text(), $(this).find('.key').text(), $(this).find("span").css('background-color'));
                // 播放音訊
                playaudio($(this).find('.key').text());
            })
            .on('mouseup', function(event){
                $(this).css({'background': '#fff'});
            });
        });

        $('.ebony_0').each(function(index){
            $('.ebony_child').each(function(index){
                $(this).on('mousedown', function(event){
                    $(this).css({'background': '#444'});
                    // 紀錄簡譜
                    note($text_number, $(this).find('span').text(), $(this).find('.key').attr('data-name'), $(this).find('span').css('background-color'));
                    note($text_tabs, $(this).find('span').text(), $(this).find('.key').attr('data-name'), $(this).find('span').css('background-color'));
                    // 播放音訊
                    playaudio($(this).find('.key').text());
                })
                .on('mouseup', function(event){
                    $(this).css({'background': '#000'});
                });
            });
        });

        $('.toolbutton').each(function(index){
            $(this).on('mousedown', function(event){
                $(this).addClass('selected');

                switch(index){
                    case 0: { // 刪除
                        // 刪除簡譜
                        delNote($text_number);
                        delNote($text_tabs);
                        break;
                    }
                    case 1: { // 空格
                        // 紀錄簡譜
                        note($text_number, '', 'whitespace', 'rgba(255, 255, 255, 0.2)');
                        note($text_tabs, '', 'whitespace', 'rgba(255, 255, 255, 0)');
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
                    case 4: { // 開啟鋼琴
                        controlPianoLayout('open');
                        break;
                    }
                    case 5: { // 關閉鋼琴
                        controlPianoLayout('close');
                        break;
                    }
                    case 6: { // 切換 五線譜 <=> 簡譜
                        $text_number.toggleClass('open');
                        $text_tabs.toggleClass('open');
                        break;
                    }
                    case 7: { // 開啟 功能說明
                        $intro.addClass('active');
                        break;
                    }
                }
            })
            .on('mouseup', function(event){
                $(this).removeClass('selected');
            });
        });
        
        /* 鍵盤事件 */
		$(window).on('keydown', function(event){
			//alert(event.keyCode);
			switch(event.keyCode){
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
    function htmlDecode(text){
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
    function getRGB(str){
      var match = str.match(/rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/);
      return match ? {
        red: match[1],
        green: match[2],
        blue: match[3]
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
});