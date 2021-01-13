---
layout: post
title:  "基本功練習: Hacker News! — Part 1: 骨架"
author: cwu
categories: [ Vanilla JS, Fundamentals, front-end my love, study notes, new framework! ]
tags: [Vanilla JS, JS Fundamentals]
image: assets/images/hacker-news/0.png
description: "Vanilla JS study with Hacker News."
featured: false
hidden: false
---

基本功練習: 使用純 JS + Redux 把 Hacker News 做出來。

## Hacker News！

![completed]({{ site.baseurl }}/assets/images/hacker-news/0.png)

這是簡單版的 Hacker News 成品~

最近在練習 JS 基本功，不用框架直接用了 vanilla JS  + Redux 把它寫出來。

之後會同場加映 React 版本（包含 Hooks）。

我們開始吧~



#### 骨架

其實 Hacker News 網頁的本身框架很簡單，就是 header 加一個 nav 再來一個 body container，這邊就不多講 HTML，直接跳 JS 的部分。

因為練習基本功所以不用框架，但我還是想按照類似結構：<span class="highlight-text">使用單個 html 檔案，並將其他網頁語法用 JS 填進去。</span>

如果我想要這個 app 的框架原理跟 React 類似，那我們回想下 React 的基礎結構：

React 的 setup 原理採用只有單個 html 檔案，並將其他網頁語法用 JS 填進去。

{% raw %}
```js
<div id="root"></div>

ReactDOM.render(<App />, document.getElementbyId('root'));

class App extends React.Component {
  //...
}
```
{% endraw %}

Ok，那我們以此類推，用 JS module 把整個畫面寫出來，然後想辦法讓 JS 只 update 一個地方即可。

關於 routing 的部分，我們用 hash router 來連結不同頁面，為了節省時間用第三方插件 Navigo。（用純 JS 把 Router 寫出來太費時了，我還要寫 React 啊！）

我們先寫一些測試 code 確保這個寫法是 OK 的。

首先是單個 html 框架：

```html
<!-- 上面省略 -->

<div id="route-container">
  <div id="router-outlet"></div>
</div>  
        
<script type="module" src="app.js"></script>
<script src="//unpkg.com/navigo@6"></script>

<!-- 下面省略 -->
```

先把我們的 Router 架好，並在 app.js 設定它：

App.js:

```js
import RouterHandler from './router.js'

class App {
  constructor() {
    new RouterHandler();
  }  
}

new App();
```


Router 本身：

router.js:

```js
const router = new Navigo(null, true, '#');
```

有了 router，就可以切換頁面了。

跟著 React 的結構繼續走，畫面要更新那 JS 會直接在某個 div 裡面添加資訊，這裡是： 

```html
<div id="router-outlet"></div> 
```

所以我們需要一個 **querySelector**，就叫他 view.js。

view.js:

```js
export default document.querySelector('#router-outlet');
```

然後把我們要的資訊裝進去。

stories.js:

```js
import view from '../utils/view.js';

export default function Stories(path) {
  view.innerHTML = `<div>${path}</div>`;  
}
```

我把每個 route 的放進一個叫 Stories 的 container 頁面（因為 Stories 裡面之後會裝一條條單個 Story）。

為什麼會是 path 當 parameter 咧？

之前提到過，我們用 hash router 來連結不同頁面，而用戶點擊不同頁面的時候，我的 router 會顯示不同畫面。

每個畫面產生的東西（之後會從 API 抓資訊），當然是透過 path 進去。

我們看下 Navigo 的 doc，把 router 切換寫好。

router.js:

```js
import Stories from './pages/stories.js';

const router = new Navigo(null, true, '#');

export default class RouterHandler {
  constructor() {
    this.createRoutes()  
  }  
  
  createRoutes() {
    const routes = [
      { path: '/', page: Stories },
      { path: '/new', page: Stories },
      { path: '/ask', page: Stories },
      { path: '/show', page: Stories }  
    ];
    
    routes.forEach(({ path, page }) => {
      router.on(path, () => {
         page(path); 
      }).resolve();
    })
  }
}
```

頁面 setup 就完成了，我們下一集會接著把每條新聞用 API 抓進來。

