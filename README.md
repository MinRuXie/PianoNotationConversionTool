﻿# 鋼琴簡譜工具
 
## DEMO 網址
* https://minruxie.github.io/PianoNotationConversionTool/

## 開發動機
因為我想要得到我想要的音樂的簡譜，但是自己無法聽音扒譜，所以要去求助能夠聽音扒譜的人類。
但是能夠聽音扒譜的人類覺得手寫或打字都太麻煩了，為了讓他只要用滑鼠按一按就能輕鬆產生簡譜，而製造的懶人專屬工具。

## 功能介紹
* 樂譜面板：顯示音符的地方。
    * 輸入歌名：雙擊歌名區塊可以輸入或修改歌名。
    * 修改軌道顏色：雙擊軌道區塊可以修改軌道左側的邊線顏色（白、黃、綠、紫、橘）。
    * 刪除指定軌道：點擊軌道右上方的叉叉按鈕，即可刪除該軌道及內容。
    * 移動「焦點」：成為焦點的元素周圍會有發光造型。
        * 軌道焦點（鍵盤快捷鍵 `上：W，下：S`）：成為焦點的軌道會發光，新增音符會在其內部產生，或將焦點移動至該軌道最後一個音符。
        * 音符焦點（鍵盤快捷鍵 `左：A，右：D`）：成為焦點的音符會發光，新增音符會在其「後方」產生。
* 鋼琴面板：下方鋼琴面板，初始位置設定在最常用的高音部分。
    * 新增/插入音符：按下鋼琴面板中的琴鍵，即可於畫面上的「焦點音符後方」產生對應的音符。
    * 播放音檔：按下鋼琴面板中的琴鍵，會播放對應的琴鍵音檔。
* 工具箱面板：右側工具箱（預設開啟；可收合）。
    * 音符
        * 刪除音符（鍵盤快捷鍵 `Backspace`）：刪除一個「焦點音符」。
        * 空格音符（鍵盤快捷鍵 `Space`）：增加一個空心的音符於「焦點音符後方」。
    * 軌道
        * 新增一行（鍵盤快捷鍵 `Enter`）：增加一行空白軌道。
        * 複製此行：複製「焦點軌道和其音符」於其後方。
        * 上移此行：將「焦點軌道」往上移動。
        * 下移此行：將「焦點軌道」往下移動。
    * 面板控制
        * 關閉/開啟鋼琴：控制鋼琴面板是否顯示於畫面（預設：開啟）。
        * 切換模式：切換樂譜面板的顯示模式，有簡譜及五線譜（預設：簡譜模式）。
    * 輸出
        * 輸出圖片：將完成的作品輸出成一張圖片預覽在畫面上，右鍵可另存圖檔。

## Development
* jQuery
* Javascript
* HTML
* SCSS

### plugin
* [html2canvas](https://www.geeksforgeeks.org/how-to-take-screenshot-of-a-div-using-javascript/)

## Project Structure
```
project
    |- index.html (use /dist)
    |
    |- src (development)
    |   |- assets
    |       |- illustrator
    |       |- scss
    |       |   |- style.scss
    |       |
    |       |- js
    |           |- piano-note.js
    |           |- main.js
    |
    |- dist (production)
    |   |- assets
    |       |- css
    |       |   |- style.css
    |       |   
    |       |- js
    |       |   |- plugins
    |       |   |- bundle.js
    |       |
    |       |- audio
    |       |- image
    |
```

### 使用 gulp 管理專案
* `gulp-sass`：編譯 SCSS 成 CSS
* `gulp-clean-css`：壓縮 CSS 
* `gulp-terser`：壓縮 ES6 JS
* `webpack-stream`：打包 JS 檔案為 `bundle.js`

#### 自動化
將 `src` 資料夾下的檔案處理到 `dist` 資料夾中。
```
gulp build
```

## 外部資源
### University of Iowa Electronic Music Studios 鋼琴鍵音檔資源
* http://theremin.music.uiowa.edu/MISpiano.html

### Loading Animation
* https://loading.io/