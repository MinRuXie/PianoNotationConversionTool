//等HTML載入完成
$(function(){

    //等資源載入完成後才顯示畫面
    window.onload = function(){
        $('.loading').hide();
    };

    //變數準備
    $piano = $('.piano');
    $text = $('.text');
    $toolbox = $('.toolbox');
    var cur_piano_x_scroll = 0;//卷軸位置

    $('.toolbutton').eq(3).css('display', 'none'); //開啟

    //設定卷軸(人為觸發才生效)
    $piano.animate({'scrollLeft': '2000vw'}, 500);
    recordScrollX(); //紀錄卷軸位置
    
    //建立琴鍵
    function buildPiano(){
        //白鍵
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
        
        // audio = ['Piano.ff.A0.mp3', 'Piano.ff.Bb0.mp3', 'Piano.ff.B0.mp3', 'Piano.ff.C1.mp3', 'Piano.ff.Db1.mp3', 'Piano.ff.D1.mp3', 'Piano.ff.Eb1.mp3', 'Piano.ff.E1.mp3', 'Piano.ff.F1.mp3', 'Piano.ff.Gb1.mp3', 'Piano.ff.G1.mp3', 'Piano.ff.Ab1.mp3', 'Piano.ff.A1.mp3', 'Piano.ff.Bb1.mp3', 'Piano.ff.B1.mp3', 'Piano.ff.C2.mp3', 'Piano.ff.Db2.mp3', 'Piano.ff.D2.mp3', 'Piano.ff.Eb2.mp3', 'Piano.ff.E2.mp3', 'Piano.ff.F2.mp3', 'Piano.ff.Gb2.mp3', 'Piano.ff.G2.mp3', 'Piano.ff.Ab2.mp3', 'Piano.ff.A2.mp3', 'Piano.ff.Bb2.mp3', 'Piano.ff.B2.mp3', 'Piano.ff.C3.mp3', 'Piano.ff.Db3.mp3', 'Piano.ff.D3.mp3', 'Piano.ff.Eb3.mp3', 'Piano.ff.E3.mp3', 'Piano.ff.F3.mp3', 'Piano.ff.Gb3.mp3', 'Piano.ff.G3.mp3', 'Piano.ff.Ab3.mp3', 'Piano.ff.A3.mp3', 'Piano.ff.Bb3.mp3', 'Piano.ff.B3.mp3', 'Piano.ff.C4.mp3', 'Piano.ff.Db4.mp3', 'Piano.ff.D4.mp3', 'Piano.ff.Eb4.mp3', 'Piano.ff.E4.mp3', 'Piano.ff.F4.mp3', 'Piano.ff.Gb4.mp3', 'Piano.ff.G4.mp3', 'Piano.ff.Ab4.mp3', 'Piano.ff.A4.mp3', 'Piano.ff.Bb4.mp3', 'Piano.ff.B4.mp3', 'Piano.ff.C5.mp3', 'Piano.ff.Db5.mp3', 'Piano.ff.D5.mp3', 'Piano.ff.Eb5.mp3', 'Piano.ff.E5.mp3', 'Piano.ff.F5.mp3', 'Piano.ff.Gb5.mp3', 'Piano.ff.G5.mp3', 'Piano.ff.Ab5.mp3', 'Piano.ff.A5.mp3', 'Piano.ff.Bb5.mp3', 'Piano.ff.B5.mp3', 'Piano.ff.C6.mp3', 'Piano.ff.Db6.mp3', 'Piano.ff.D6.mp3', 'Piano.ff.Eb6.mp3', 'Piano.ff.E6.mp3', 'Piano.ff.F6.mp3', 'Piano.ff.Gb6.mp3', 'Piano.ff.G6.mp3', 'Piano.ff.Ab6.mp3', 'Piano.ff.A6.mp3', 'Piano.ff.Bb6.mp3', 'Piano.ff.B6.mp3', 'Piano.ff.C7.mp3', 'Piano.ff.Db7.mp3', 'Piano.ff.D7.mp3', 'Piano.ff.Eb7.mp3', 'Piano.ff.E7.mp3', 'Piano.ff.F7.mp3', 'Piano.ff.Gb7.mp3', 'Piano.ff.G7.mp3', 'Piano.ff.Ab7.mp3', 'Piano.ff.A7.mp3', 'Piano.ff.Bb7.mp3', 'Piano.ff.B7.mp3', 'Piano.ff.C8.mp3'];
        audio_ivory = ['Piano.ff.A0.mp3', 'Piano.ff.B0.mp3', 'Piano.ff.C1.mp3', 'Piano.ff.D1.mp3', 'Piano.ff.E1.mp3', 'Piano.ff.F1.mp3', 'Piano.ff.G1.mp3', 'Piano.ff.A1.mp3', 'Piano.ff.B1.mp3', 'Piano.ff.C2.mp3', 'Piano.ff.D2.mp3', 'Piano.ff.E2.mp3', 'Piano.ff.F2.mp3', 'Piano.ff.G2.mp3', 'Piano.ff.A2.mp3', 'Piano.ff.B2.mp3', 'Piano.ff.C3.mp3', 'Piano.ff.D3.mp3', 'Piano.ff.E3.mp3', 'Piano.ff.F3.mp3', 'Piano.ff.G3.mp3', 'Piano.ff.A3.mp3', 'Piano.ff.B3.mp3', 'Piano.ff.C4.mp3', 'Piano.ff.D4.mp3', 'Piano.ff.E4.mp3', 'Piano.ff.F4.mp3', 'Piano.ff.G4.mp3', 'Piano.ff.A4.mp3', 'Piano.ff.B4.mp3', 'Piano.ff.C5.mp3', 'Piano.ff.D5.mp3', 'Piano.ff.E5.mp3', 'Piano.ff.F5.mp3', 'Piano.ff.G5.mp3', 'Piano.ff.A5.mp3', 'Piano.ff.B5.mp3', 'Piano.ff.C6.mp3', 'Piano.ff.D6.mp3', 'Piano.ff.E6.mp3', 'Piano.ff.F6.mp3', 'Piano.ff.G6.mp3', 'Piano.ff.A6.mp3', 'Piano.ff.B6.mp3', 'Piano.ff.C7.mp3', 'Piano.ff.D7.mp3', 'Piano.ff.E7.mp3', 'Piano.ff.F7.mp3', 'Piano.ff.G7.mp3', 'Piano.ff.A7.mp3', 'Piano.ff.B7.mp3', 'Piano.ff.C8.mp3'];
        audio_ebony = ['Piano.ff.Bb0.mp3', 'Piano.ff.Db1.mp3', 'Piano.ff.Eb1.mp3', 'Piano.ff.Gb1.mp3', 'Piano.ff.Ab1.mp3', 'Piano.ff.Bb1.mp3', 'Piano.ff.Db2.mp3', 'Piano.ff.Eb2.mp3', 'Piano.ff.Gb2.mp3', 'Piano.ff.Ab2.mp3', 'Piano.ff.Bb2.mp3', 'Piano.ff.Db3.mp3', 'Piano.ff.Eb3.mp3', 'Piano.ff.Gb3.mp3', 'Piano.ff.Ab3.mp3', 'Piano.ff.Bb3.mp3', 'Piano.ff.Db4.mp3', 'Piano.ff.Eb4.mp3', 'Piano.ff.Gb4.mp3', 'Piano.ff.Ab4.mp3', 'Piano.ff.Bb4.mp3', 'Piano.ff.Db5.mp3', 'Piano.ff.Eb5.mp3', 'Piano.ff.Gb5.mp3', 'Piano.ff.Ab5.mp3', 'Piano.ff.Bb5.mp3', 'Piano.ff.Db6.mp3', 'Piano.ff.Eb6.mp3', 'Piano.ff.Gb6.mp3', 'Piano.ff.Ab6.mp3', 'Piano.ff.Bb6.mp3', 'Piano.ff.Db7.mp3', 'Piano.ff.Eb7.mp3', 'Piano.ff.Gb7.mp3', 'Piano.ff.Ab7.mp3', 'Piano.ff.Bb7.mp3'];

        //黑鍵(容器)
        ebony = '<div class="ebony"></div>';
        ebony_1 = '<div class="ebony_1"></div>';
        ebony_2 = '<div class="ebony_2"></div>';
        ebony_3 = '<div class="ebony_3"></div>';
        ebony_4 = '<div class="ebony_4"></div>';
        ebony_5 = '<div class="ebony_5"></div>';

        //黑鍵(降)
        ebony_bre = '<div class="ebony_child bre"><span>b2</span></div>';
        ebony_bmi = '<div class="ebony_child bmi"><span>b3</span></div>';
        ebony_bsol = '<div class="ebony_child bsol"><span>b5</span></div>';
        ebony_bla = '<div class="ebony_child bla"><span>b6</span></div>';
        ebony_bsi = '<div class="ebony_child bsi"><span>b7</span></div>';
		
		//黑鍵(升)
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
        
        //新增白鍵
        $group_left.append(ivory_la);
        $group_left.append(ivory_si);

        //上色
        $group_left.find('span').css({
            'background': colors[0],
            'color': '#fff',
            'padding': '1px',
            'border-radius': '5px'
        });

        //新增黑鍵容器
        $group_left.append(ebony);
        $ebony = $group_left.find('.ebony');
        $ebony.css({left: '35%', top: '0'});
        
		//新增黑鍵(升)
        $ebony.append(ebony_ula);
		
		//新增黑鍵(降)
        $ebony.append(ebony_bsi);
  
        //上色
        $group_left.find('.ebony_child').find('span').css({
            'background': colors[0],
            'color': '#fff',
        });

        //新增白鍵內容
        $group_left.find('.ivory').each(function(index){
            //新增 key
            $(this).append('<div class="key">' + key_ivory[index] + '</div>');
            //新增音訊
            $(this).append('<audio id="'+ key_ivory[index] +'"><source src="./audio/'+ audio_ivory[index] +'" type="audio/mpeg"></audio>');
        });

        //新增黑鍵內容
        $group_left.find('.ebony').each(function(index){
            $ebony.find('.ebony_child').each(function(index2){
                //新增 key
                $(this).append('<div class="key">' + key_ebony_b[index] + '</div>');
                //新增音訊
                $(this).append('<audio id="'+ key_ebony_b[index] +'"><source src="./audio/'+ audio_ebony[index] +'" type="audio/mpeg"></audio>');
            });        
        });

        //---------------------
        // 中間 84 鍵
        //---------------------
        for(var i=0;i<7;i++){
            $piano.append('<div class="group"></div>');
        }
        $('.group').each(function(index){
            //新增白鍵
            $(this).css({left: 14.28 + (50*index) + '%'});
            $(this).append(ivory_do);
            $(this).append(ivory_re);
            $(this).append(ivory_mi);
            $(this).append(ivory_fa);
            $(this).append(ivory_sol);
            $(this).append(ivory_la);
            $(this).append(ivory_si);

            //上色
            $(this).find('span').css({
                'background': colors[index+1],
                'color': '#fff',
                'padding': '1px',
                'border-radius': '5px'
            });

            //新增黑鍵容器 1
            $(this).append(ebony_1);
            $ebony_1 = $(this).find('.ebony_1');
            $ebony_1.css({left: '10%', top: '0'});
            //新增黑鍵容器 2
            $(this).append(ebony_2);
            $ebony_2 = $(this).find('.ebony_2');
            $ebony_2.css({left: '25%', top: '0'});
            //新增黑鍵容器 3
            $(this).append(ebony_3);
            $ebony_3 = $(this).find('.ebony_3');
            $ebony_3.css({left: '53%', top: '0'});
            //新增黑鍵容器 4
            $(this).append(ebony_4);
            $ebony_4 = $(this).find('.ebony_4');
            $ebony_4.css({left: '67%', top: '0'});
            //新增黑鍵容器 5
            $(this).append(ebony_5);
            $ebony_5 = $(this).find('.ebony_5');
            $ebony_5.css({left: '82%', top: '0'});

			
			//新增黑鍵(升)------------
            $ebony_1.append(ebony_udo);
            $ebony_2.append(ebony_ure);
            $ebony_3.append(ebony_ufa);
            $ebony_4.append(ebony_usol);
            $ebony_5.append(ebony_ula);
			
			//新增黑鍵(降)------------
            $ebony_1.append(ebony_bre);
            $ebony_2.append(ebony_bmi);
            $ebony_3.append(ebony_bsol);
            $ebony_4.append(ebony_bla);
            $ebony_5.append(ebony_bsi);
			
            //上色
            $(this).find('.ebony_child').find('span').css({
                'background': colors[index+1],
                'color': '#fff',
            });

            //新增白鍵內容
            $(this).find('.ivory').each(function(index2){
                //新增 key
                $(this).append('<div class="key">' + key_ivory[2+(7*index)+index2] + '</div>');
                //新增音訊
                $(this).append('<audio id="'+ key_ivory[2+(7*index)+index2] +'"><source src="./audio/'+ audio_ivory[2+(7*index)+index2] +'" type="audio/mpeg"></audio>');
            });

            //新增黑鍵內容
            $(this).find('.ebony_1').each(function(index2){
                $(this).find('.ebony_child').each(function(index3){
                    //新增 key
                    $(this).append('<div class="key">' + key_ebony_b[1+(5*index)+0] + '</div>'); //第一個黑鍵+(一組5個黑鍵)+現在是第幾個黑鍵
                    //新增音訊
                    $(this).append('<audio id="'+ key_ebony_b[1+(5*index)+0] +'"><source src="./audio/'+ audio_ebony[1+(5*index)+0] +'" type="audio/mpeg"></audio>');
                });
            });
            $(this).find('.ebony_2').each(function(index2){
                $(this).find('.ebony_child').each(function(index3){
                    //新增 key
                    $(this).append('<div class="key">' + key_ebony_b[1+(5*index)+1] + '</div>'); //第一個黑鍵+(一組5個黑鍵)+現在是第幾個黑鍵
                    //新增音訊
                    $(this).append('<audio id="'+ key_ebony_b[1+(5*index)+1] +'"><source src="./audio/'+ audio_ebony[1+(5*index)+1] +'" type="audio/mpeg"></audio>');
                });
            });
            $(this).find('.ebony_3').each(function(index2){
                $(this).find('.ebony_child').each(function(index3){
                    //新增 key
                    $(this).append('<div class="key">' + key_ebony_b[1+(5*index)+2] + '</div>'); //第一個黑鍵+(一組5個黑鍵)+現在是第幾個黑鍵
                    //新增音訊
                    $(this).append('<audio id="'+ key_ebony_b[1+(5*index)+2] +'"><source src="./audio/'+ audio_ebony[1+(5*index)+2] +'" type="audio/mpeg"></audio>');
                });
            });
            $(this).find('.ebony_4').each(function(index2){
                $(this).find('.ebony_child').each(function(index3){
                    //新增 key
                    $(this).append('<div class="key">' + key_ebony_b[1+(5*index)+3] + '</div>'); //第一個黑鍵+(一組5個黑鍵)+現在是第幾個黑鍵
                    //新增音訊
                    $(this).append('<audio id="'+ key_ebony_b[1+(5*index)+3] +'"><source src="./audio/'+ audio_ebony[1+(5*index)+3] +'" type="audio/mpeg"></audio>');
                });
            });
            $(this).find('.ebony_5').each(function(index2){
                $(this).find('.ebony_child').each(function(index3){
                    //新增 key
                    $(this).append('<div class="key">' + key_ebony_b[1+(5*index)+4] + '</div>'); //第一個黑鍵+(一組5個黑鍵)+現在是第幾個黑鍵
                    //新增音訊
                    $(this).append('<audio id="'+ key_ebony_b[1+(5*index)+4] +'"><source src="./audio/'+ audio_ebony[1+(5*index)+4] +'" type="audio/mpeg"></audio>');
                });
            });
        });

        //----------------------
        // 右邊 1 鍵
        //----------------------
        $piano.append('<div class="group_right"></div>');
        $group_right = $('.group_right');
        
        //新增白鍵
        $group_right.append(ivory_do);
        
        //上色
        $group_right.find('span').css({
            'background': colors[8],
            'color': '#fff',
            'padding': '1px',
            'border-radius': '5px'
        });

        //新增白鍵內容
        $group_right.find('.ivory').each(function(){
            //新增 key
            $(this).append('<div class="key">' + key_ivory[key_ivory.length-1] + '</div>');
            //新增音訊
            $(this).append('<audio id="'+ key_ivory[key_ivory.length-1] +'"><source src="./audio/'+ audio_ivory[audio_ivory.length-1] +'" type="audio/mpeg"></audio>');
        });
    }

    //建立琴鍵
    buildPiano();

    //新增簡譜軌道
    addNoteLine();

    //-------------------
    // 紀錄簡譜
    //-------------------
    function note(key, color){
        //移除前一個焦點
        $text.find(".note").removeClass('selected');

        //取得目前軌道
        $noteLine = $text.find('.line').last();

        if(key=='0'){
            //新增空格
            $noteLine.append('<div class="note selected" style="background-color: '+ color +'; color: transparent">' + key + '</div>');
        }else{
            //新增音符
            $noteLine.append('<div class="note selected" style="background-color: '+ color +';">' + key + '</div>');
        }

        moveScrollY(); //移動文字區塊卷軸置最下方
    }

    //-------------------
    // 刪除簡譜
    //-------------------
    function delNote(){    
        //目前焦點音符
        $focuseNote = $text.find(".selected");

        //如果軌道刪完是空的就移除
        if($focuseNote.parent('.line').children().length==1 && $text.find('.line').length!==1){
            $focuseNote.parent('.line').remove();
        }else{
            //移除目前焦點音符
            $focuseNote.remove();

            //先按換行再按刪除的人
            if($text.find('.line').length!==1 && $text.find('.line').last().children().length==0){
                $text.find('.line').last().remove();
            }
        }

        //將焦點移至最後一個音符
        $nextfocuseNote = $text.find(".note").last();

        //將焦點移至下一個音符
        $nextfocuseNote.addClass("selected");

        moveScrollY(); //移動文字區塊卷軸置最下方
    }

    //-------------------
    // 新增一行簡譜軌道
    //-------------------
    function addNoteLine(){      	
		if($text.find('.line').length>=1){
            if($text.find('.line').last().children().length!==0){
                $text.append("<div class='line'></div>");
            }
        }else{
            $text.append("<div class='line'></div>");
        }

        moveScrollY(); //移動文字區塊卷軸置最下方
    }

    //-------------------
    // 播放音訊
    //-------------------
    function playaudio(key){
        notekey = document.getElementById(key);

        //暫停
        notekey.pause();

        //讓音訊進度回歸 0 
        notekey.currentTime = 0;

        //播放
        notekey.play();
    }

    //-------------------
    // 移動文字區塊卷軸位置
    //-------------------
    function moveScrollY(){
        var text_height = $text.height(); //取得元素高度
        $text.animate({'scrollTop': text_height}, 200); //移動卷軸至文字區塊最下方
    }

    //-------------------
    // 紀錄鋼琴卷軸位置
    //-------------------
    function recordScrollX(){
        cur_piano_x_scroll = $piano.scrollLeft();
    }

    //-------------------
    // 鋼琴面板控制
    //-------------------
    function controlPianoLayout(kind){
        switch(kind){
            case "close": {
                $text.stop().animate({'height': '100%'}, 300);
                $toolbox.stop().animate({'height': '100%'}, 300);
                $piano.stop().animate({'height': '0%'}, 300);
                recordScrollX(); //紀錄卷軸位置
                $('.toolbutton').eq(3).css('display', 'block'); //開啟
                $('.toolbutton').eq(4).css('display', 'none'); //關閉
                break;
            }
            case "open": {
                $text.stop().animate({'height': '65%'}, 300);
                $toolbox.stop().animate({'height': '65%'}, 300);
                $piano.stop().animate({'height': '35%'}, 300);
                $piano.animate({'scrollLeft': cur_piano_x_scroll}, 200); //移動卷軸至上次位置
                $('.toolbutton').eq(3).css('display', 'none'); //開啟
                $('.toolbutton').eq(4).css('display', 'block'); //關閉
                break;
            }
        }
    }

    //-------------------
    // 修改歌名
    //-------------------
    $('.title').on('dblclick', function(event){
        var pre_name = $('.title').html(); // 預設值為上次輸入的歌名
        var song_name = prompt('請輸入歌名：', pre_name);
        if(song_name==null){
            song_name = pre_name;
        }
        $('.title').text(song_name); // 顯示新歌名
    });

	//-------------------
    // 行動裝置
    //-------------------
    if(isMobile.phone){
        //alert(isMobile.phone);
        //註冊點擊事件
        $('.ivory').each(function(index){
            $(this).on('touchstart', function(event){
                $(this).css({'background': '#f2f2f2'});
                //紀錄簡譜
                note($(this).find('span').text(), $(this).find('span').css('background-color'));
                //播放音訊
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
                    //紀錄簡譜
                    note($(this).find('span').text(), $(this).find('span').css('background-color'));
                    //播放音訊
                    playaudio($(this).find('.key').text());
                })
                .on('touchend', function(event){
                    $(this).css({'background': '#000'});
                });
            });
        });

        $('.toolbutton').each(function(index){
            $(this).on('touchstart', function(event){
                $(this).css({'background': '#999'});

                switch(index){
                    case 0: { //刪除
                        delNote(); //刪除簡譜
                        break;
                    }
                    case 1: { //空格
                        note('0', 'rgba(255, 255, 255, 0.2)'); //紀錄簡譜
                        break;
                    }
                    case 2: { //換行
                        addNoteLine(); //新增簡譜軌道
                        break;
                    }
                    case 3: { //開啟鋼琴
                        controlPianoLayout('open');
                        break;
                    }
                    case 4: { //關閉鋼琴
                        controlPianoLayout('close');
                        break;
                    }
                }
            })
            .on('touchend', function(event){
                $(this).css({'background': '#BDBDBE'});
            });
        });
	//-------------------
    // 電腦
    //-------------------
    }else{
        //alert(isMobile.phone);
        //註冊點擊事件
        $('.ivory').each(function(index){
            $(this).on('mousedown', function(event){
                $(this).css({'background': '#f2f2f2'});
                //紀錄簡譜
                note($(this).find('span').text(), $(this).find("span").css('background-color'));
                //播放音訊
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
                    //紀錄簡譜
                    note($(this).find('span').text(), $(this).find('span').css('background-color'));
                    //播放音訊
                    playaudio($(this).find('.key').text());
                })
                .on('mouseup', function(event){
                    $(this).css({'background': '#000'});
                });
            });
        });

        $('.toolbutton').each(function(index){
            $(this).on('mousedown', function(event){
                $(this).css({'background': '#999'});

                switch(index){
                    case 0: { //刪除
                        delNote(); //刪除簡譜
                        break;
                    }
                    case 1: { //空格
                        note('0', 'rgba(255, 255, 255, 0.2)'); //紀錄簡譜
                        break;
                    }
                    case 2: { //換行
                        addNoteLine(); //新增簡譜軌道
                        break;
                    }
                    case 3: { //開啟鋼琴
                        controlPianoLayout('open');
                        break;
                    }
                    case 4: { //關閉鋼琴
                        controlPianoLayout('close');
                        break;
                    }
                }
            })
            .on('mouseup', function(event){
                $(this).css({'background': '#BDBDBE'});
            });
        });
		
		$(window).on('keydown', function(event){
			//alert(event.keyCode);
			switch(event.keyCode){
				case 8: { //Backspace
					//刪除簡譜
                    delNote();
					break;
				}
				case 13: { //Enter
					//新增簡譜軌道
                    addNoteLine();
					break;
				}
				case 32: { //Space
					//紀錄簡譜
					note('0', 'rgba(255, 255, 255, 0.2)');
					break;
				}
			}
		});
    }
});