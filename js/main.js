// 等 HTML 載入完成
$(function(){

    /* 預先載入圖片 */
    function preloadImg(image) {
        let img = new Image();
        img.src = image;
    }

    let pics = [
        '../PianoNotationConversionTool/image/music.png',
        '../PianoNotationConversionTool/image/lg.rainy-preloader.gif',
        '../PianoNotationConversionTool/image/lg.rotating-squares-preloader-gif.gif',
    ];

    for(let i=0;i<pics.length;i++){
        preloadImg(pics[i]);
    }
    
    
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
    let cur_piano_x_scroll = 0; // 卷軸位置

    let cur_selected_note = $('.note.selected'); // 當前焦點音符們 (兩個面板都有)
    let cur_selected_line = $('.line.selected'); // 當前焦點軌道們 (兩個面板都有)

    $('.toolbutton').eq(3).css('display', 'none'); // 開啟

    // 設定卷軸 (人為觸發才生效)
    $piano.animate({'scrollLeft': '2000vw'}, 500);
    // 紀錄卷軸位置
    recordScrollX();
    
    //-------------------
    // 建立琴鍵
    //-------------------
    function buildPiano(){
        // 白鍵
        ivory_do = '<div class="ivory do"><span>1</span></div>';
        ivory_re = '<div class="ivory re"><span>2</span></div>';
        ivory_mi = '<div class="ivory mi"><span>3</span></div>';
        ivory_fa = '<div class="ivory fa"><span>4</span></div>';
        ivory_sol = '<div class="ivory sol"><span>5</span></div>';
        ivory_la = '<div class="ivory la"><span>6</span></div>';
        ivory_si = '<div class="ivory si"><span>7</span></div>';
        
        colors = ['#828282', '#AD766A', '#D5404A', '#FFB11B', '#90B44B', '#58B2DC', '#005CAF',  '#A8497A', '#E87A90'];
        
        key_ivory = ['A0', 'B0', 'C1', 'D1', 'E1', 'F1', 'G1', 'A1', 'B1', 'C2', 'D2', 'E2', 'F2', 'G2', 'A2', 'B2', 'C3', 'D3', 'E3', 'F3', 'G3', 'A3', 'B3', 'C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'B4', 'C5', 'D5', 'E5', 'F5', 'G5', 'A5', 'B5', 'C6', 'D6', 'E6', 'F6', 'G6', 'A6', 'B6', 'C7', 'D7', 'E7', 'F7', 'G7', 'A7', 'B7', 'C8'];
        key_ebony_b = ['Bb0', 'Db1', 'Eb1', 'Gb1', 'Ab1', 'Bb1', 'Db2', 'Eb2', 'Gb2', 'Ab2', 'Bb2', 'Db3', 'Eb3', 'Gb3', 'Ab3', 'Bb3', 'Db4', 'Eb4', 'Gb4', 'Ab4', 'Bb4', 'Db5', 'Eb5', 'Gb5', 'Ab5', 'Bb5', 'Db6', 'Eb6', 'Gb6', 'Ab6', 'Bb6', 'Db7', 'Eb7', 'Gb7', 'Ab7', 'Bb7'];

        key_ebony_h = ['Ah0', 'Ch1', 'Dh1', 'Fh1', 'Gh1', 'Ah1', 'Ch2', 'Dh2', 'Fh2', 'Gh2', 'Ah2', 'Ch3', 'Dh3', 'Fh3', 'Gh3', 'Ah3', 'Ch4', 'Dh4', 'Fh4', 'Gh4', 'Ah4', 'Ch5', 'Dh5', 'Fh5', 'Gh5', 'Ah5', 'Ch6', 'Dh6', 'Fh6', 'Gh6', 'Ah6', 'Ch7', 'Dh7', 'Fh7', 'Gh7', 'Ah7'];
        
        // audio = ['Piano.ff.A0.mp3', 'Piano.ff.Bb0.mp3', 'Piano.ff.B0.mp3', 'Piano.ff.C1.mp3', 'Piano.ff.Db1.mp3', 'Piano.ff.D1.mp3', 'Piano.ff.Eb1.mp3', 'Piano.ff.E1.mp3', 'Piano.ff.F1.mp3', 'Piano.ff.Gb1.mp3', 'Piano.ff.G1.mp3', 'Piano.ff.Ab1.mp3', 'Piano.ff.A1.mp3', 'Piano.ff.Bb1.mp3', 'Piano.ff.B1.mp3', 'Piano.ff.C2.mp3', 'Piano.ff.Db2.mp3', 'Piano.ff.D2.mp3', 'Piano.ff.Eb2.mp3', 'Piano.ff.E2.mp3', 'Piano.ff.F2.mp3', 'Piano.ff.Gb2.mp3', 'Piano.ff.G2.mp3', 'Piano.ff.Ab2.mp3', 'Piano.ff.A2.mp3', 'Piano.ff.Bb2.mp3', 'Piano.ff.B2.mp3', 'Piano.ff.C3.mp3', 'Piano.ff.Db3.mp3', 'Piano.ff.D3.mp3', 'Piano.ff.Eb3.mp3', 'Piano.ff.E3.mp3', 'Piano.ff.F3.mp3', 'Piano.ff.Gb3.mp3', 'Piano.ff.G3.mp3', 'Piano.ff.Ab3.mp3', 'Piano.ff.A3.mp3', 'Piano.ff.Bb3.mp3', 'Piano.ff.B3.mp3', 'Piano.ff.C4.mp3', 'Piano.ff.Db4.mp3', 'Piano.ff.D4.mp3', 'Piano.ff.Eb4.mp3', 'Piano.ff.E4.mp3', 'Piano.ff.F4.mp3', 'Piano.ff.Gb4.mp3', 'Piano.ff.G4.mp3', 'Piano.ff.Ab4.mp3', 'Piano.ff.A4.mp3', 'Piano.ff.Bb4.mp3', 'Piano.ff.B4.mp3', 'Piano.ff.C5.mp3', 'Piano.ff.Db5.mp3', 'Piano.ff.D5.mp3', 'Piano.ff.Eb5.mp3', 'Piano.ff.E5.mp3', 'Piano.ff.F5.mp3', 'Piano.ff.Gb5.mp3', 'Piano.ff.G5.mp3', 'Piano.ff.Ab5.mp3', 'Piano.ff.A5.mp3', 'Piano.ff.Bb5.mp3', 'Piano.ff.B5.mp3', 'Piano.ff.C6.mp3', 'Piano.ff.Db6.mp3', 'Piano.ff.D6.mp3', 'Piano.ff.Eb6.mp3', 'Piano.ff.E6.mp3', 'Piano.ff.F6.mp3', 'Piano.ff.Gb6.mp3', 'Piano.ff.G6.mp3', 'Piano.ff.Ab6.mp3', 'Piano.ff.A6.mp3', 'Piano.ff.Bb6.mp3', 'Piano.ff.B6.mp3', 'Piano.ff.C7.mp3', 'Piano.ff.Db7.mp3', 'Piano.ff.D7.mp3', 'Piano.ff.Eb7.mp3', 'Piano.ff.E7.mp3', 'Piano.ff.F7.mp3', 'Piano.ff.Gb7.mp3', 'Piano.ff.G7.mp3', 'Piano.ff.Ab7.mp3', 'Piano.ff.A7.mp3', 'Piano.ff.Bb7.mp3', 'Piano.ff.B7.mp3', 'Piano.ff.C8.mp3'];
        audio_ivory = ['Piano.ff.A0.mp3', 'Piano.ff.B0.mp3', 'Piano.ff.C1.mp3', 'Piano.ff.D1.mp3', 'Piano.ff.E1.mp3', 'Piano.ff.F1.mp3', 'Piano.ff.G1.mp3', 'Piano.ff.A1.mp3', 'Piano.ff.B1.mp3', 'Piano.ff.C2.mp3', 'Piano.ff.D2.mp3', 'Piano.ff.E2.mp3', 'Piano.ff.F2.mp3', 'Piano.ff.G2.mp3', 'Piano.ff.A2.mp3', 'Piano.ff.B2.mp3', 'Piano.ff.C3.mp3', 'Piano.ff.D3.mp3', 'Piano.ff.E3.mp3', 'Piano.ff.F3.mp3', 'Piano.ff.G3.mp3', 'Piano.ff.A3.mp3', 'Piano.ff.B3.mp3', 'Piano.ff.C4.mp3', 'Piano.ff.D4.mp3', 'Piano.ff.E4.mp3', 'Piano.ff.F4.mp3', 'Piano.ff.G4.mp3', 'Piano.ff.A4.mp3', 'Piano.ff.B4.mp3', 'Piano.ff.C5.mp3', 'Piano.ff.D5.mp3', 'Piano.ff.E5.mp3', 'Piano.ff.F5.mp3', 'Piano.ff.G5.mp3', 'Piano.ff.A5.mp3', 'Piano.ff.B5.mp3', 'Piano.ff.C6.mp3', 'Piano.ff.D6.mp3', 'Piano.ff.E6.mp3', 'Piano.ff.F6.mp3', 'Piano.ff.G6.mp3', 'Piano.ff.A6.mp3', 'Piano.ff.B6.mp3', 'Piano.ff.C7.mp3', 'Piano.ff.D7.mp3', 'Piano.ff.E7.mp3', 'Piano.ff.F7.mp3', 'Piano.ff.G7.mp3', 'Piano.ff.A7.mp3', 'Piano.ff.B7.mp3', 'Piano.ff.C8.mp3'];
        audio_ebony = ['Piano.ff.Bb0.mp3', 'Piano.ff.Db1.mp3', 'Piano.ff.Eb1.mp3', 'Piano.ff.Gb1.mp3', 'Piano.ff.Ab1.mp3', 'Piano.ff.Bb1.mp3', 'Piano.ff.Db2.mp3', 'Piano.ff.Eb2.mp3', 'Piano.ff.Gb2.mp3', 'Piano.ff.Ab2.mp3', 'Piano.ff.Bb2.mp3', 'Piano.ff.Db3.mp3', 'Piano.ff.Eb3.mp3', 'Piano.ff.Gb3.mp3', 'Piano.ff.Ab3.mp3', 'Piano.ff.Bb3.mp3', 'Piano.ff.Db4.mp3', 'Piano.ff.Eb4.mp3', 'Piano.ff.Gb4.mp3', 'Piano.ff.Ab4.mp3', 'Piano.ff.Bb4.mp3', 'Piano.ff.Db5.mp3', 'Piano.ff.Eb5.mp3', 'Piano.ff.Gb5.mp3', 'Piano.ff.Ab5.mp3', 'Piano.ff.Bb5.mp3', 'Piano.ff.Db6.mp3', 'Piano.ff.Eb6.mp3', 'Piano.ff.Gb6.mp3', 'Piano.ff.Ab6.mp3', 'Piano.ff.Bb6.mp3', 'Piano.ff.Db7.mp3', 'Piano.ff.Eb7.mp3', 'Piano.ff.Gb7.mp3', 'Piano.ff.Ab7.mp3', 'Piano.ff.Bb7.mp3'];

        // 黑鍵 (容器)
        ebony = '<div class="ebony"></div>';
        ebony_1 = '<div class="ebony_1"></div>';
        ebony_2 = '<div class="ebony_2"></div>';
        ebony_3 = '<div class="ebony_3"></div>';
        ebony_4 = '<div class="ebony_4"></div>';
        ebony_5 = '<div class="ebony_5"></div>';

        // 黑鍵 (降)
        ebony_bre = '<div class="ebony_child bre"><span>b2</span></div>';
        ebony_bmi = '<div class="ebony_child bmi"><span>b3</span></div>';
        ebony_bsol = '<div class="ebony_child bsol"><span>b5</span></div>';
        ebony_bla = '<div class="ebony_child bla"><span>b6</span></div>';
        ebony_bsi = '<div class="ebony_child bsi"><span>b7</span></div>';
		
		// 黑鍵 (升)
        ebony_udo = '<div class="ebony_child udo"><span>#1</span></div>';
        ebony_ure = '<div class="ebony_child ure"><span>#2</span></div>';
        ebony_ufa = '<div class="ebony_child ufa"><span>#4</span></div>';
        ebony_usol = '<div class="ebony_child usol"><span>#5</span></div>';
        ebony_ula = '<div class="ebony_child ula"><span>#6</span></div>';
		

        //-------------------
        // 左邊 3 鍵
        //-------------------
        $piano.append('<div class="group_left"></div>');
        $group_left = $('.group_left');
        
        // 新增白鍵
        $group_left.append(ivory_la);
        $group_left.append(ivory_si);

        // 上色
        $group_left.find('span').css({
            'background': colors[0],
            'color': '#fff',
            'padding': '1px',
            'border-radius': '5px'
        });

        // 新增黑鍵容器
        $group_left.append(ebony);
        $ebony = $group_left.find('.ebony');
        $ebony.css({left: '35%', top: '0'});
        
		// 新增黑鍵 (升)
        $ebony.append(ebony_ula);
		
		// 新增黑鍵 (降)
        $ebony.append(ebony_bsi);
  
        // 上色
        $group_left.find('.ebony_child').find('span').css({
            'background': colors[0],
            'color': '#fff',
        });

        // 新增白鍵內容
        $group_left.find('.ivory').each(function(index){
            // 新增 key
            $(this).append(`<div class="key">${key_ivory[index]}</div>`);
            // 新增音訊
            $(this).append(`<audio id="${key_ivory[index]}"><source src="./audio/${ audio_ivory[index]}" type="audio/mpeg"></audio>`);
        });

        // 新增黑鍵內容
        $group_left.find('.ebony').each(function(index){
            $ebony.find('.ebony_child').each(function(index2){
                // 新增 key
                if(index2 < 1){ // 第 0 個 (升記號)
                    $(this).append(`<div data-name="${key_ebony_h[index]}" class="key">${key_ebony_b[index]}</div>`);
                }else{ // 第 1 個 (降記號)
                    $(this).append(`<div data-name="${key_ebony_b[index]}" class="key">${key_ebony_b[index]}</div>`);
                }
                // 新增音訊
                $(this).append(`<audio id="${key_ebony_b[index]}"><source src="./audio/${audio_ebony[index]}" type="audio/mpeg"></audio>`);
            });        
        });

        //---------------------
        // 中間 84 鍵
        //---------------------
        for(var i=0;i<7;i++){
            $piano.append('<div class="group"></div>');
        }
        $('.group').each(function(index){
            // 新增白鍵
            $(this).css({left: 14.28 + (50*index) + '%'});
            $(this).append(ivory_do);
            $(this).append(ivory_re);
            $(this).append(ivory_mi);
            $(this).append(ivory_fa);
            $(this).append(ivory_sol);
            $(this).append(ivory_la);
            $(this).append(ivory_si);

            // 上色
            $(this).find('span').css({
                'background': colors[index+1],
                'color': '#fff',
                'padding': '1px',
                'border-radius': '5px'
            });

            // 新增黑鍵容器 1
            $(this).append(ebony_1);
            $ebony_1 = $(this).find('.ebony_1');
            $ebony_1.css({left: '10%', top: '0'});
            // 新增黑鍵容器 2
            $(this).append(ebony_2);
            $ebony_2 = $(this).find('.ebony_2');
            $ebony_2.css({left: '25%', top: '0'});
            // 新增黑鍵容器 3
            $(this).append(ebony_3);
            $ebony_3 = $(this).find('.ebony_3');
            $ebony_3.css({left: '53%', top: '0'});
            // 新增黑鍵容器 4
            $(this).append(ebony_4);
            $ebony_4 = $(this).find('.ebony_4');
            $ebony_4.css({left: '67%', top: '0'});
            // 新增黑鍵容器 5
            $(this).append(ebony_5);
            $ebony_5 = $(this).find('.ebony_5');
            $ebony_5.css({left: '82%', top: '0'});

			
			// 新增黑鍵 (升)------------
            $ebony_1.append(ebony_udo);
            $ebony_2.append(ebony_ure);
            $ebony_3.append(ebony_ufa);
            $ebony_4.append(ebony_usol);
            $ebony_5.append(ebony_ula);
			
			// 新增黑鍵 (降)------------
            $ebony_1.append(ebony_bre);
            $ebony_2.append(ebony_bmi);
            $ebony_3.append(ebony_bsol);
            $ebony_4.append(ebony_bla);
            $ebony_5.append(ebony_bsi);
			
            // 上色
            $(this).find('.ebony_child').find('span').css({
                'background': colors[index+1],
                'color': '#fff',
            });

            // 新增白鍵內容
            $(this).find('.ivory').each(function(index2){
                // 新增 key
                $(this).append(`<div class="key">${key_ivory[2+(7*index)+index2]}</div>`);
                // 新增音訊
                $(this).append(`<audio id="${key_ivory[2+(7*index)+index2]}"><source src="./audio/${audio_ivory[2+(7*index)+index2]}" type="audio/mpeg"></audio>`);
            });

            // 新增黑鍵內容
            $(this).find('.ebony_1').each(function(index2){
                $(this).find('.ebony_child').each(function(index3){
                    // 新增 key (第一個黑鍵 + [一組5個黑鍵] + 現在是第幾個黑鍵)
                    if(index3 < 1){ // 第 0 個 (升記號)
                        $(this).append(`<div data-name="${key_ebony_h[1+(5*index)+0]}" class="key">${key_ebony_b[1+(5*index)+0]}</div>`);
                    }else{ // 第 1 個 (降記號)
                        $(this).append(`<div data-name="${key_ebony_b[1+(5*index)+0]}"  class="key">${key_ebony_b[1+(5*index)+0]}</div>`);
                    }
                    // 新增音訊
                    $(this).append(`<audio id="${key_ebony_b[1+(5*index)+0]}"><source src="./audio/${audio_ebony[1+(5*index)+0]}" type="audio/mpeg"></audio>`);
                });
            });
            $(this).find('.ebony_2').each(function(index2){
                $(this).find('.ebony_child').each(function(index3){
                    // 新增 key (第一個黑鍵 + [一組5個黑鍵] + 現在是第幾個黑鍵)
                    if(index3 < 1){ // 第 0 個 (升記號)
                        $(this).append(`<div data-name="${key_ebony_h[1+(5*index)+1]}" class="key">${key_ebony_b[1+(5*index)+1]}</div>`);
                    }else{ // 第 1 個 (降記號)
                        $(this).append(`<div data-name="${key_ebony_b[1+(5*index)+1]}"  class="key">${key_ebony_b[1+(5*index)+1]}</div>`);
                    }
                    // 新增音訊
                    $(this).append(`<audio id="${key_ebony_b[1+(5*index)+1]}"><source src="./audio/${audio_ebony[1+(5*index)+1]}" type="audio/mpeg"></audio>`);
                });
            });
            $(this).find('.ebony_3').each(function(index2){
                $(this).find('.ebony_child').each(function(index3){
                    // 新增 key (第一個黑鍵 + [一組5個黑鍵] + 現在是第幾個黑鍵)
                    if(index3 < 1){ // 第 0 個 (升記號)
                        $(this).append(`<div data-name="${key_ebony_h[1+(5*index)+2]}" class="key">${key_ebony_b[1+(5*index)+2]}</div>`);
                    }else{ // 第 1 個 (降記號)
                        $(this).append(`<div data-name="${key_ebony_b[1+(5*index)+2]}" class="key">${key_ebony_b[1+(5*index)+2]}</div>`);
                    }
                    // 新增音訊
                    $(this).append(`<audio id="${key_ebony_b[1+(5*index)+2]}"><source src="./audio/${audio_ebony[1+(5*index)+2]}" type="audio/mpeg"></audio>`);
                });
            });
            $(this).find('.ebony_4').each(function(index2){
                $(this).find('.ebony_child').each(function(index3){
                    // 新增 key (第一個黑鍵 + [一組5個黑鍵] + 現在是第幾個黑鍵)
                    if(index3 < 1){ // 第 0 個 (升記號)
                        $(this).append(`<div data-name="${key_ebony_h[1+(5*index)+3]}" class="key">${key_ebony_b[1+(5*index)+3]}</div>`);
                    }else{ // 第 1 個 (降記號)
                        $(this).append(`<div data-name="${key_ebony_b[1+(5*index)+3]}" class="key">${key_ebony_b[1+(5*index)+3]}</div>`);
                    }
                    // 新增音訊
                    $(this).append('<audio id="'+ key_ebony_b[1+(5*index)+3] +'"><source src="./audio/'+ audio_ebony[1+(5*index)+3] +'" type="audio/mpeg"></audio>');
                });
            });
            $(this).find('.ebony_5').each(function(index2){
                $(this).find('.ebony_child').each(function(index3){
                    // 新增 key (第一個黑鍵 + [一組5個黑鍵] + 現在是第幾個黑鍵)
                    if(index3 < 1){ // 第 0 個 (升記號)
                        $(this).append(`<div data-name="${key_ebony_h[1+(5*index)+4]}" class="key">${key_ebony_b[1+(5*index)+4]}</div>`);
                    }else{ // 第 1 個 (降記號)
                        $(this).append(`<div data-name="${key_ebony_b[1+(5*index)+4]}" class="key">${key_ebony_b[1+(5*index)+4]}</div>`);
                    }
                    // 新增音訊
                    $(this).append(`<audio id="${key_ebony_b[1+(5*index)+4]}"><source src="./audio/${audio_ebony[1+(5*index)+4]}" type="audio/mpeg"></audio>`);
                });
            });
        });

        //----------------------
        // 右邊 1 鍵
        //----------------------
        $piano.append('<div class="group_right"></div>');
        $group_right = $('.group_right');
        
        // 新增白鍵
        $group_right.append(ivory_do);
        
        // 上色
        $group_right.find('span').css({
            'background': colors[8],
            'color': '#fff',
            'padding': '1px',
            'border-radius': '5px'
        });

        // 新增白鍵內容
        $group_right.find('.ivory').each(function(){
            // 新增 key
            $(this).append(`<div class="key">${key_ivory[key_ivory.length-1]}</div>`);
            // 新增音訊
            $(this).append(`<audio id="${key_ivory[key_ivory.length-1]}"><source src="./audio/${audio_ivory[audio_ivory.length-1]}" type="audio/mpeg"></audio>`);
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
    function recordNoteSelected(panel, note) {
        note.on('click', function(event){
            // 移除所有焦點
            panel.find('.line').removeClass('selected');
            panel.find('.note').removeClass('selected');
            
            // 移動焦點至該音符
            note.addClass('selected');

            // 移動焦點至該音符所在軌道
            note.parent('.line').addClass('selected');

            // 更新軌道及音符的焦點
            updateFocuse();
        });
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
        let note_html = `<div class="note selected ${key}" style="background-color: ${color};">${number}</div>`
        // 空格
        if (number == '0') {
            note_html = `<div class="note selected whitespace" style="background-color: ${color}; color: transparent">${number}</div>`;
        }

        // 檢查是否存在焦點元素
        if ($selectedNote.length != 0) {
            // 新增音符 至 焦點元素 後方
            $selectedNote.after(note_html);
        } else {
            // 新增音符 至 空白軌道 中
            $selectLine.append(note_html);
        }

        // 安裝焦點事件
        let $lastest_note = $('.note.selected'); // 最新新增的音符
        recordNoteSelected(panel, $lastest_note);

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
        line.on('click', function(event){
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
        });
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

        // 刪除所有軌道焦點
        panel.find('.line.selected').removeClass('selected');

        // 新增軌道
        panel.append(line_html);

        // 移除音符焦點 (讓焦點只保持在新軌道上)
        panel.find('.note.selected').removeClass('selected');

        // 裝上 改變顏色事件
        let $line = panel.find('.line').last();
        $line.on('dblclick', function(event){
            //changeAreaColor($(this)); // 修改區塊顏色
            openColorArea($(this)); // 開啟選擇顏色區塊
        });

        // 裝上 移動焦點事件
        $line.on('click', function(event){
            recordLineSelected(panel, $line);
        });

        // 裝上 刪除軌道事件
        let $line_del_btn = $line.find('.del');
        $line_del_btn.on('click', function(event){
            // 刪除一行簡譜軌道
            delNoteLine(panel, $line);
        });

        moveScrollY(panel); // 移動文字區塊卷軸置最下方

        // 更新軌道及音符的焦點
        updateFocuse();
    }

    //-------------------
    // 使用方向鍵移動焦點
    //-------------------
    function moveFocuse(type, direction) {
        switch (type) {
            case 'line':
                switch (direction) {
                    case 'up':
                        let cur_selected_line_prev = cur_selected_line.prev('.line');
                        if(cur_selected_line_prev.length != 0){
                            // 移除軌道焦點
                            $('.line').removeClass('selected');
                            // 將焦點移至上一行軌道
                            cur_selected_line_prev.addClass('selected');

                            // 移除音符焦點
                            $('.note').removeClass('selected');
                            // 將音符焦點移至該軌道最後一個音符
                            $text_number.find('.line.selected .note').last().addClass('selected');
                            $text_tabs.find('.line.selected .note').last().addClass('selected');
                        }
                        break;
                    case 'down':
                        let cur_selected_line_next = cur_selected_line.next('.line');
                        if(cur_selected_line_next.length != 0){
                            // 移除軌道焦點
                            $('.line').removeClass('selected');
                            // 將焦點移至下一行軌道
                            cur_selected_line_next.addClass('selected');

                            // 移除音符焦點
                            $('.note').removeClass('selected');
                            // 將音符焦點移至該軌道最後一個音符
                            $text_number.find('.line.selected .note').last().addClass('selected');
                            $text_tabs.find('.line.selected .note').last().addClass('selected');
                        }
                        break;
                }
                break;
            case 'note':
                switch (direction) {
                    case 'left':
                        let cur_selected_note_prev = cur_selected_note.prev('.note');
                        if(cur_selected_note_prev.length != 0){
                            // 移除音符焦點
                            $('.note').removeClass('selected');
                            // 將焦點移至上一個音符
                            cur_selected_note_prev.addClass('selected');
                        }
                        break;
                    case 'right':
                        let cur_selected_note_next = cur_selected_note.next('.note');
                        if(cur_selected_note_next.length != 0){
                            // 移除音符焦點
                            $('.note').removeClass('selected');
                            // 將焦點移至下一個音符
                            cur_selected_note_next.addClass('selected');
                        }
                        break;
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
                $('.toolbutton').eq(3).css('display', 'block'); // 開啟鋼琴按鈕
                $('.toolbutton').eq(4).css('display', 'none'); // 關閉鋼琴按鈕
                break;
            }
            case "open": {
                $text.stop().animate({'height': '65%'}, 300);
                $toolbox.stop().animate({'height': '65%'}, 300);
                $piano.stop().animate({'bottom': '0'}, 300);
                $slide.show();
                $piano.animate({'scrollLeft': cur_piano_x_scroll}, 0); // 移動卷軸至上次位置
                $('.toolbutton').eq(3).css('display', 'none'); // 開啟鋼琴按鈕
                $('.toolbutton').eq(4).css('display', 'block'); // 關閉鋼琴按鈕
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
    function openColorArea($element) {
        $(".colorarea").show(); // 顯示選擇區塊

        // line 的顏色: 取得左邊框顏色 rgb(red, green ,blue)
        var rgbString = $element.css('border-left-color');
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
        $(".colorbox").find('.checkbtn').remove();
        // 新增確定按鈕
        $(".colorbox").append('<div class="checkbtn">確定</div>');
        // 按下確定
        $(".checkbtn").on('click', function(){
            // 修改顏色
            $element.css('border-left-color', select_hexString);

            $(".colorarea").hide(); // 隱藏選擇區塊
            $(this).remove(); // 移除確定按鈕元素 (為了清除前次的事件綁定)
        });
    }

    //-------------------
    // 關閉選擇顏色區塊
    //-------------------
    $(".cancelbtn").on('click', function(event) {
        $(".colorarea").hide();
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

        $('.ebony').each(function(index){
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
                        note($text_number, '0', '0', 'rgba(255, 255, 255, 0.2)');
                        note($text_tabs, '0', '0', 'rgba(255, 255, 255, 0.2)'); 
                        break;
                    }
                    case 2: { // 換行
                        // 新增簡譜軌道
                        addNoteLine($text_number);
                        addNoteLine($text_tabs);
                        break;
                    }
                    case 3: { // 開啟鋼琴
                        controlPianoLayout('open');
                        break;
                    }
                    case 4: { // 關閉鋼琴
                        controlPianoLayout('close');
                        break;
                    }
                    case 5: { // 切換 五線譜 <=> 簡譜
                        $text_number.toggleClass('open');
                        $text_tabs.toggleClass('open');
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

        $('.ebony').each(function(index){
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
                        note($text_number, '0', '0', 'rgba(255, 255, 255, 0.2)');
                        note($text_tabs, '0', '0', 'rgba(255, 255, 255, 0)');
                        break;
                    }
                    case 2: { // 換行
                        // 新增簡譜軌道
                        addNoteLine($text_number);
                        addNoteLine($text_tabs);
                        break;
                    }
                    case 3: { // 開啟鋼琴
                        controlPianoLayout('open');
                        break;
                    }
                    case 4: { // 關閉鋼琴
                        controlPianoLayout('close');
                        break;
                    }
                    case 5: { // 切換 五線譜 <=> 簡譜
                        $text_number.toggleClass('open');
                        $text_tabs.toggleClass('open');
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
                    note($text_number, '0', '0', 'rgba(255, 255, 255, 0.2)');
                    note($text_tabs, '0', '0', 'rgba(255, 255, 255, 0)');
					break;
                }
                case 37: { // 左
                    // 移動焦點
                    moveFocuse('note', 'left');
					break;
                }
                case 38: { // 上
                    // 移動焦點
                    moveFocuse('line', 'up');
					break;
                }
                case 39: { // 右
                    // 移動焦點
                    moveFocuse('note', 'right');
					break;
                }
                case 40: { // 下
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