export default {
    text: {
        __song_title: '請輸入歌名',
        __song_title_point: '雙擊修改歌名',
    },
    toolbox: {
        __delete_note: '刪除音符',
        __space_note: '空格音符',
        __add_line: '新增一行',
        __copy_line: '複製此行',
        __move_up_line: '上移此行',
        __move_down_line: '下移此行',
        __show_piano: '開啟鋼琴',
        __hidden_piano: '關閉鋼琴',
        __switch_mode: '切換模式',
        __output_result: '輸出圖片',
        __function_description: '功能說明',
        __switch_lang: 'English'
    },
    colorarea: {
        __color_title: '請選擇顏色',
        __check: '確定',
        __cancel: '取消'
    },
    notice: {
        __size_warn: '直式不可以看',
        __capturing: '努力處理中...'
    },
    features: {
        rule: {
            __title: '使用說明',
            __item_1: '輸入歌名：雙擊歌名區塊，可輸入或修改歌名。',
            __item_2: '切換模式：可以在簡譜及五線譜之間切換。',
            __item_3: '輸出圖片：將完成的作品輸出成一張圖片預覽在畫面上，右鍵可另存圖檔。',
            __item_4: {
                __summary: '移動「焦點」：點擊軌道或音符可移動焦點，成為焦點的元素周圍會有發光造型。',
                __details: [
                    '軌道焦點（鍵盤快捷鍵 [上：W，下：S]）：當軌道獲得焦點，軌道中的最後一個音符也會獲得焦點。',
                    '音符焦點（鍵盤快捷鍵 [左：A，右：D]）：當音符獲得焦點，音符所在軌道也會獲得焦點。'
                ]
            }
        },
        note: {
            __title: '音符',
            __item_1: '新增/插入音符：點擊鋼琴琴鍵，會於畫面上的「焦點音符後方」產生音符，並播放音檔。',
            __item_2: '空格音符（鍵盤快捷鍵 [Space]）：增加一個空心音符於「焦點音符後方」。',
            __item_3: '刪除音符（鍵盤快捷鍵 [Backspace]）：刪除一個「焦點音符」。'
        },
        track: {
            __title: '音符軌道',
            __item_1: '新增一行（鍵盤快捷鍵 [Enter]）：增加一行空白軌道。',
            __item_2: '複製此行：複製「焦點軌道和其音符」於其後方。',
            __item_3: '上移此行：將「焦點軌道」往上移動。',
            __item_4: '下移此行：將「焦點軌道」往下移動。',
            __item_5: '改變軌道顏色：雙擊軌道區塊，可改變軌道左側的邊線顏色（白、黃、綠、紫、橘）。',
            __item_6: '刪除指定軌道：點擊軌道右上方的叉叉按鈕，可刪除該軌道及內容。'
        }
    }
}