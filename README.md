# 鋼琴簡譜工具
<img src="https://i.imgur.com/AXnU5WV.png" width="600" style="padding-bottom: 20px;">

<img src="https://i.imgur.com/9kKutZL.png" width="600">

## 需求
* 讓懶得手寫簡譜的人可以用點擊完成簡譜
* 讓沒有音樂知識的人也可以透過顏色看得懂譜（就是我）
* ~~基本上是為了使用完美鋼琴APP而客製化的工具~~

## 開發工具
* jQuery
* Javascript
* HTML
* CSS

## 功能介紹
* 樂譜面板：顯示音符的地方。
    * 修改歌名：雙擊歌名區塊可以輸入歌名。
    * 修改軌道顏色：雙擊軌道區塊可以選擇顏色。
    * 刪除指定軌道：點擊軌道右上方的叉叉按鈕，即可刪除該軌道及內容。
    * 移動焦點
        * 軌道焦點（滑鼠點擊/上：W，下：S）：成為焦點的軌道會發光，新增音符會在其內部產生，或將焦點移動至該軌道最後一個音符。
        * 音符焦點（滑鼠點擊/左：A，右：D）：成為焦點的音符會發光，新增音符會在其「後方」產生。
* 鋼琴面板：下方鋼琴面板。
    * 新增音符：按下鋼琴面板中的琴鍵，即可於畫面上的「焦點音符後方」產生對應的音符。
* 工具箱面板：右方工具箱（開啟；收合）。
    * 刪除（Backspace）：刪除一個「焦點音符」。
    * 空格（Space）：增加空格於「焦點音符後方」。
    * 新增一行（Enter）：增加一行軌道。
    * 複製此行：複製「焦點軌道和其音符」於面板最後方。
    * 上移此行：將「焦點軌道」往上移動。
    * 下移此行：將「焦點軌道」往下移動。
    * 關閉/開啟鋼琴：可控制鋼琴面板的顯示（開啟；收合）。
    * 切換模式：可控制樂譜面板的顯示模式（簡譜；五線譜）。

## 外部資源
### University of Iowa Electronic Music Studios 鋼琴鍵音檔資源
http://theremin.music.uiowa.edu/MISpiano.html

### 載入動畫
https://loading.io/

### 壓縮工具
* [csscompressor](https://csscompressor.com/)
* [javascript-minifier](https://javascript-minifier.com/)