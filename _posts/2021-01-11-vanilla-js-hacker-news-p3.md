---
layout: post
title:  "基本功練習: Hacker News! — Part 3: 單獨頁面"
author: cwu
categories: [ Vanilla JS, Fundamentals, front-end my love, study notes, new framework! ]
tags: [Vanilla JS, JS Fundamentals]
image: assets/images/hacker-news/0.png
description: "Vanilla JS study with Hacker News."
featured: false
hidden: false
---

基本功練習: 使用純 JS + Redux 把 Hacker News 做出來。

## 前情提要

![view]({{ site.baseurl }}/assets/images/hacker-news/2.png)

我們的列表頁面已經寫好了，現在是個別頁面以及留言顯示了！

#### 個別頁面

注意到之前的頁面了嗎？每當我們點進去一則新聞時，route 會變成這個： <span class="highlight-text">#/item?id=25757398</span>

依照 React 的 Component 邏輯，我們要再創建一個叫做 Item 的 Component 來當個別頁面。

我們先來到 router 這邊把 item 丟進去：

router.js:

```js
import Stories from './pages/stories.js';
import Item from './pages/item.js'; // item 頁面

// 這邊省略
  
  createRoutes() {
    const routes = [
      { path: '/', page: Stories },
      { path: '/new', page: Stories },
      { path: '/ask', page: Stories },
      { path: '/show', page: Stories },
      { path: '/item', page: Item }
    ];
    
// 下面省略
```

還是那句話，先確保東西有吐在畫面上再慢慢 format。

item.js:

```js
import view from '../utils/view.js';

export default function Item() {
  view.innerHTML = `<div>item</div>`  
}
```

好，東西有了，那我們開始把畫面刻出來。

再開始之前，我們知道每條新聞都有自己專屬的 id，我們需要抓到這個 id，才可以呼叫 API 顯示它對應的留言。

那要怎麼拿呢，我們可以用 .split 的方式來寫：

```js
const storyId = window.location.hash.split('?id=')[1];
```

split 會創建一個 array，把 ?id= 前後的資訊分別塞進 array 裡。

我們只要這樣即可拿到 id。

我們接著寫呼叫 API 的 code。

```js
async function getStory() {
  const storyId = window.location.hash.split('?id=')[1];
  const response = await fetch(`https://node-hnapi.herokuapp.com/item/${storyId}`);
  const story = await response.json();
  return story;
}
```

因為是 async 所以我們要等資料回傳，app 才不會壞掉。

可是既然我們要這麼抓 story ，那我們顯示 Item 的那塊就也要變成 async function （要等 story 進來）。

所以...

item.js:

```js
import Story from '../components/Story.js';
import view from '../utils/view.js';

export default async function Item() {
  const story = await getStory();  
  
  view.innerHTML = `
  <div>
    ${Story(story)}
  </div>`  
}

async function getStory() {
  const storyId = window.location.hash.split('?id=')[1];
  const response = await fetch(`https://node-hnapi.herokuapp.com/item/${storyId}`);
  const story = await response.json();
  return story;
}
```

登登~

這邊我們重複利用了之前寫的 Story Component，把資料顯示出來。

不過，因為這個頁面不是列表，所以我們要修改 story.js 把 index 拿掉。

story.js:

```js
<span class="gray">${story.index || ""}</span>
```

這樣 Item 就不會出現 undefined 了（因為沒有排列數字）。

我們接著我們要讓 comments 出來，就像我們之前寫 Story 一樣，以此類推：

item.js:

```js
// 以上省略

export default async function Item() {
  const story = await getStory();  
  const hasComments = story.comments.length > 0;
  
  view.innerHTML = `
  <div>
    ${Story(story)}
  </div>
  <hr/>
  ${hasComments ? story.comments.map(comment => JSON.stringify(comment)).join('') : '沒留言耶'}
  `  
}

// 以下省略
```

然後，我們又可以看到那個醜到不行的頁面了 XD

![view]({{ site.baseurl }}/assets/images/hacker-news/3.png)


可是，如果 Item 的 id 不對呢？ 沒有這個頁面，怎麼辦？

我們可以在呼叫 API 時，寫一個判斷確保它沒出錯，如果出錯了（id 錯誤，抓不到之類的），

我們會直接跟用戶講。

這邊用到配合 async + await function 的 try catch 功能。

```js
let story = null;
let hasComments = false;  
let hasError = false;
  
try { 
    story = await getStory();  
    hasComments = story.comments.length > 0;
} catch(error) {
    hasError = true; 
    console.error(error);
} 

```

另外，既然我們要跟用戶說畫面有錯誤，我就需要一個 local state boolean 去判斷，然後顯示畫面。

```js
let hasError = false;

if (hasError) {
    view.innerHTML = `<div class="error">抓不到資料耶。</div>`;
}
```

再把它裝進 try catch 裡面。

組裝起來就是這樣:

item.js:

```js
export default async function Item() {
  let story = null;
  let hasComments = false;  
  let hasError = false;
    
  try { 
     story = await getStory();  
     hasComments = story.comments.length > 0;
  } catch(error) {
     hasError = true; 
     console.error(error);
  } 
  
  if (hasError) {
     view.innerHTML = `<div class="error">抓不到資料耶。</div>`;
  }
  
  view.innerHTML = `
  <div>
    ${Story(story)}
  </div>
  <hr/>
  ${hasComments ? story.comments.map(comment => JSON.stringify(comment)).join('') : 'No comments'}
  `  
}
```

我們接著來亂輸入 Item id，就會出現這個畫面了：

![view]({{ site.baseurl }}/assets/images/hacker-news/4.png)


接下來就是把 Comments 全部都吐出來了！