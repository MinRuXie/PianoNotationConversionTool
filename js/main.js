$(function(){
    //變數準備
    $piano = $('.piano');
    //var notes = '';
    
    //建立琴鍵
    function buildPiano(){
        //白建
        ivory_do = '<div class="ivory do"><span>1</span></div>';
        ivory_re = '<div class="ivory re"><span>2</span></div>';
        ivory_mi = '<div class="ivory mi"><span>3</span></div>';
        ivory_fa = '<div class="ivory fa"><span>4</span></div>';
        ivory_sol = '<div class="ivory sol"><span>5</span></div>';
        ivory_la = '<div class="ivory la"><span>6</span></div>';
        ivory_si = '<div class="ivory si"><span>7</span></div>';
        colors = ['#9D9D9D', '#96685D', '#FF5959', '#F39C10', '#7FBB19', '#2CACB8', '#1F3C9A', '#8107B6', '#E65389'];
        keys = ['[[[[[]]]]]', '[[[[]]]]', '[[[]]]', '[[]]', '[]', '', '()', '(())', '((()))'];

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
            headstr = keys[0].substring(0, keys[0].length/2);
            endstr = keys[0].substring(keys[0].length/2, keys[0].length);
            $(this).append('<div class="key">' + headstr + $(this).text() + endstr + '</div>');
        });

        //新增黑鍵 Key
        $group_left.find('.ebony').each(function(){
            headstr = keys[0].substring(0, keys[0].length/2);
            endstr = keys[0].substring(keys[0].length/2, keys[0].length);
            $(this).append('<div class="key">' + headstr + $(this).text() + endstr + '</div>');
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
                headstr = keys[index+1].substring(0, keys[index+1].length/2);
                endstr = keys[index+1].substring(keys[index+1].length/2, keys[index+1].length);
                $(this).append('<div class="key">' + headstr + $(this).text() + endstr + '</div>');
            });

            //新增黑鍵 Key
            $(this).find('.ebony').each(function(){
                headstr = keys[index+1].substring(0, keys[index+1].length/2);
                endstr = keys[index+1].substring(keys[index+1].length/2, keys[index+1].length);
                $(this).append('<div class="key">' + headstr + $(this).text() + endstr + '</div>');
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
            headstr = keys[8].substring(0, keys[8].length/2);
            endstr = keys[8].substring(keys[8].length/2, keys[8].length);
            $(this).append('<div class="key">' + headstr + $(this).text() + endstr + '</div>');
        });
    }

    //建立琴鍵
    buildPiano();

    //紀錄簡譜
    function note(key){
        $text = $('.text').find('textarea');
        notes = $text.val() + ' ' + key;
        $text.val(notes);
    }


    if(isMobile.phone){
        //alert(isMobile.phone);
        //註冊點擊事件
        $('.ivory').each(function(index){
            $(this).on('touchstart', function(event){
                $(this).css({'background': '#999'});
                //紀錄簡譜
                note($(this).find('.key').text());
            })
            .on('touchend', function(event){
                $(this).css({'background': '#fff'});
            });
        });

        $('.ebony').each(function(index){
            $(this).on('touchstart', function(event){
                $(this).css({'background': '#999'});
                //紀錄簡譜
                note($(this).find('.key').text());
            })
            .on('touchend', function(event){
                $(this).css({'background': '#000'});
            });
        });
    }else{
        //alert(isMobile.phone);
        //註冊點擊事件
        $('.ivory').each(function(index){
            $(this).on('mousedown', function(event){
                $(this).css({'background': '#999'});
                //紀錄簡譜
                note($(this).find('.key').text());
            })
            .on('mouseup', function(event){
                $(this).css({'background': '#fff'});
            });
        });

        $('.ebony').each(function(index){
            $(this).on('mousedown', function(event){
                $(this).css({'background': '#999'});
                //紀錄簡譜
                note($(this).find('.key').text());
            })
            .on('mouseup', function(event){
                $(this).css({'background': '#000'});
            });
        });
    }

});