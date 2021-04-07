# Piano Notation Tool
 
## DEMO 網址
* https://minruxie.github.io/PianoNotationConversionTool/

## 開發動機
因為我想要得到我想要的音樂的簡譜，但是自己無法聽音扒譜，所以要去求助能夠聽音扒譜的人類。
但是能夠聽音扒譜的人類覺得手寫或打字都太麻煩了，為了讓他只要用滑鼠按一按就能輕鬆產生簡譜，而製造的懶人專屬工具。

## 功能介紹
* 樂譜面板：顯示音符的地方。
    * 輸入歌名：雙擊歌名區塊可以輸入或修改歌名。
    * 修改軌道顏色：雙擊軌道區塊可以修改軌道左側的邊線顏色（白、黃、綠、紫、橘）。
    * 刪除指定軌道：點擊軌道右上方的叉叉按鈕，可以刪除該軌道及內容。
    * 移動「焦點」：點擊軌道或者音符可移動焦點，成為焦點的元素周圍會有發光造型。
        * 軌道焦點（鍵盤快捷鍵 `上：W，下：S`）：當軌道獲得焦點，軌道中的最後一個音符也會獲得焦點。
        * 音符焦點（鍵盤快捷鍵 `左：A，右：D`）：當音符獲得焦點，音符所在軌道也會獲得焦點。
* 鋼琴面板：下方鋼琴面板，初始位置設定在最常用的高音部分。
    * 新增/插入音符：按下鋼琴面板中的琴鍵，即可於畫面上的「焦點音符後方」產生對應的音符。
    * 播放音檔：按下鋼琴面板中的琴鍵，會播放對應的琴鍵音檔。
* 工具箱面板：右側工具箱（預設：開啟）。
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
    * 切換語系
        * 提供兩種語系介面
            * 繁體中文（預設）
            * 英文

## Features Introduction
* Sheet Music Panel: Display musical notation.
    * Enter the song title: Double click song title can enter or modify it.
    * Change left side color of note track: Double click note track can change color (white, yellow, green, purple, orange).
    * Delete specific note track: Click right top side `x` button of note track, can delete note track and notes inside of it.
    * Move "Focus": Click Note track or Note can move focus. When the element get focus, its surroundings will glow.
        * Note track focus (hot key `up: W, down: S`): When Note track get focus, the last note of it will get focus too.
        * Note focus (hot key `left: A, right: D`): When Note get focus, its note track will get focus too.
* Piano Panel: The keyboard default position is the most commonly used treble part.
    * Add / Insert: Press the keyboard of piano will create a note behind the focus note.
    * Play the audio: Press the keyboard of piano will play the audio.
* Toolbox Panel: Press the arrow button can closed it.
    * Note
        * Delete note (hot key `Backspace`): Delete a focused note.
        * Space note (hot key `Space`): Add a hollow note behind "the focused note".
    * Note Track
        * Add new note track (hot key `Enter`): Add a new empty note track.
        * Copy this note track: Copy "the focused track and its notes" behind itself.
        * Move this note track up: Move the order of "the focused track" up.
        * Move this note track down: Move the order of "the focused track" down.
    * Panel Control
        * Close/Open piano: The control display of the piano panel. (Default: Open)。
        * Switch Mode: Switch the display mode of the sheet music panel, there are "numbered notation" and "stave". (Default: Numbered Notation)
    * Output
        * Output an image file: The result will be displayed on the screen, and the image file can be saved.
    * Switch Language
        * Provide two language interfaces:
            * Traditional Chinese (Default)
            * English

## Development
* jQuery
* Javascript
* HTML
* SCSS
* Vue + Vue-i18n

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
    |           |- language.js
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

### Gulp Packages
* `gulp-sass`: Compile SCSS file to CSS file, and output minify file.
* `webpack-stream`: Bundle multiple JS files into `bundle.js`.
* `gulp-terser`: minify ES6 JS file.

#### command
```
gulp build
```

## External Resources
### University of Iowa Electronic Music Studios
* http://theremin.music.uiowa.edu/MISpiano.html

### Loading Animation
* https://loading.io/