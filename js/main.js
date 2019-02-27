$(function(){
    //變數準備
    $piano = $('.piano');
    $text = $('.text');
    
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
        colors = ['#828282', '#AD766A', '#D5404A', '#FFB11B',  '#90B44B', '#58B2DC', '#005CAF',  '#A8497A', '#E87A90'];

        //黑鍵
        ebony_bre = '<div class="ebony bre"><span>b2</span></div>';
        ebony_bmi = '<div class="ebony bmi"><span>b3</span></div>';
        ebony_bsol= '<div class="ebony bsol"><span>b5</span></div>';
        ebony_bla= '<div class="ebony bla"><span>b6</span></div>';
        ebony_bsi= '<div class="ebony bsi"><span>b7</span></div>';

        //-------------------
        // 左邊 2 鍵
        //-------------------
        $piano.append('<div class="group_left"></div>');
        $group_left = $('.group_left');
        $group_left.append(ivory_la);
        $group_left.append(ivory_si);

        //上色
        $group_left.find('span').css({
            'background': colors[0],
            'color': '#fff',
            'padding': '1px',
            'border-radius': '5px'
        });

        //新增黑鍵
        $group_left.append(ebony_bsi);
        $ebony_left_bre = $group_left.find('.bsi');
        $ebony_left_bre.css({left: '35%'});

        //新增白鍵 Key
        $group_left.find('.ivory').each(function(){
            $(this).append('<div class="key">' + $(this).text() + '</div>');
        });

        //新增黑鍵 Key
        $group_left.find('.ebony').each(function(){
            $(this).append('<div class="key">' + $(this).text() + '</div>');
        });


        //---------------------
        // 中間 49 鍵
        //---------------------
        for(var i=0;i<7;i++){
            $piano.append('<div class="group"></div>');
        }
        $('.group').each(function(index){
            //新增白建
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

            //新增黑鍵
            $(this).append(ebony_bre);
            $ebony_bre = $(this).find('.bre');
            $ebony_bre.css({left: '10%'});

            $(this).append(ebony_bmi);
            $ebony_bmi = $(this).find('.bmi');
            $ebony_bmi.css({left: '25%'});

            $(this).append(ebony_bsol);
            $ebony_bsol = $(this).find('.bsol');
            $ebony_bsol.css({left: '53%'});

            $(this).append(ebony_bla);
            $ebony_bla = $(this).find('.bla');
            $ebony_bla.css({left: '67%'});

            $(this).append(ebony_bsi);
            $ebony_bsi = $(this).find('.bsi');
            $ebony_bsi.css({left: '82%'});

            //新增白鍵 Key
            $(this).find('.ivory').each(function(){
                $(this).append('<div class="key">' + $(this).text() + '</div>');
            });

            //新增黑鍵 Key
            $(this).find('.ebony').each(function(){
                $(this).append('<div class="key">' + $(this).text() + '</div>');
            });
        });

        //----------------------
        // 右邊 1 鍵
        //----------------------
        $piano.append('<div class="group_right"></div>');
        $group_right = $('.group_right');
        $group_right.append(ivory_do);
        
        //上色
        $group_right.find('span').css({
            'background': colors[8],
            'color': '#fff',
            'padding': '1px',
            'border-radius': '5px'
        });

        //新增白鍵 Key
        $group_right.find('.ivory').each(function(){
            $(this).append('<div class="key">' + $(this).text() + '</div>');
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
    }


    if(isMobile.phone){
        //alert(isMobile.phone);
        //註冊點擊事件
        $('.ivory').each(function(index){
            $(this).on('touchstart', function(event){
                $(this).css({'background': '#f2f2f2'});
                //紀錄簡譜
                note($(this).find('.key').text(), $(this).find('span').css('background-color'));
            })
            .on('touchend', function(event){
                $(this).css({'background': '#fff'});
            });
        });

        $('.ebony').each(function(index){
            $(this).on('touchstart', function(event){
                $(this).css({'background': '#444'});
                //紀錄簡譜
                note($(this).find('.key').text(), $(this).prevAll('.ivory').find('span').css('background-color'));
            })
            .on('touchend', function(event){
                $(this).css({'background': '#000'});
            });
        });

        $('.toolbutton').each(function(index){
            $(this).on('touchstart', function(event){
                $(this).css({'background': '#999'});

                //刪除
                if (index===0){
                    //刪除簡譜
                    delNote();
                //空格
                }else if(index===1){
                    //紀錄簡譜
                    note('0', 'rgba(255, 255, 255, 0.2)');
                //換行
                }else{
                    //新增簡譜軌道
                    addNoteLine();
                }
            })
            .on('touchend', function(event){
                $(this).css({'background': '#BDBDBE'});
            });
        });
    }else{
        //alert(isMobile.phone);
        //註冊點擊事件
        $('.ivory').each(function(index){
            $(this).on('mousedown', function(event){
                $(this).css({'background': '#f2f2f2'});
                //紀錄簡譜
                note($(this).find('.key').text(), $(this).find("span").css('background-color'));
            })
            .on('mouseup', function(event){
                $(this).css({'background': '#fff'});
            });
        });

        $('.ebony').each(function(index){
            $(this).on('mousedown', function(event){
                $(this).css({'background': '#444'});
                //紀錄簡譜
                note($(this).find('.key').text(), $(this).prevAll('.ivory').find('span').css('background-color'));
            })
            .on('mouseup', function(event){
                $(this).css({'background': '#000'});
            });
        });

        $('.toolbutton').each(function(index){
            $(this).on('mousedown', function(event){
                $(this).css({'background': '#999'});

                //刪除
                if (index===0){
                    //刪除簡譜
                    delNote();
                //空格
                }else if(index===1){
                    //紀錄簡譜
                    note('0', 'rgba(255, 255, 255, 0.2)');
                //換行
                }else{
                    //新增簡譜軌道
                    addNoteLine();
                }
            })
            .on('mouseup', function(event){
                $(this).css({'background': '#BDBDBE'});
            });
        });
    }

});