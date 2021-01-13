---
layout: post
title:  "基本功練習: Hacker News! — Part 2: API"
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

我們的 Hacker News 框架已經出來呢，現在就是把資料丟進去。

這裡我們會用 API 去抓資料，配合對應的 routes 把他顯示出來。


## API

先把東西弄出來再慢慢 format。

要用的 API 是這個：https://node-hnapi.herokuapp.com

接著要用 async + await 寫我們的 stories。

stories.js:

{% raw %}
```js
import view from '../utils/view.js';

export default async function Stories(path) {
  const stories = await getStories(path);
  const hasStories = stories.length > 0;
                    
  view.innerHTML = `<div>
    ${hasStories ? stories.map(story => JSON.stringify(story)) : '沒有 stories 耶'}
  </div>`;  
}

async function getStories(path) {
  const isHomeRoute = path === '/';
  const isNewRoute = path === '/new';
  if (isHomeRoute) {
    path = '/news';  
  } else if (isNewRoute) {
    path = '/newest';  
  } 
  const response = await fetch(`https://node-hnapi.herokuapp.com${path}`);
  const stories = await response.json();
  return stories;
}

```
{% endraw %}


我們的畫面就會變成這個鬼樣子：

![completed]({{ site.baseurl }}/assets/images/hacker-news/1.png)

嗯，很醜。

不過，沒關係，我們來美化它。

資料一大坨進來，依照我們的 React 原理，現在是應該把他拆成可以重複使用的原件了，我們的 **Component！**

以此類推，我們要建立一個新的 js 檔來裝每條新聞。

首先我們先把 API data 丟進創建好的 Story Component。

```js
import Story from '../components/Story.js'; // import 進來
import view from '../utils/view.js';

export default async function Stories(path) {
  const stories = await getStories(path);
  const hasStories = stories.length > 0;
                    
  view.innerHTML = `<div>
    ${hasStories ? stories.map((story, i) => Story({ ...story, index: i + 1 })).join('') : '沒新聞耶'}
  </div>`;  
}

// 以下省略
```

我稍微解釋一下為什麼這邊會這樣寫：

```js
stories.map((story, i) => Story({ ...story, index: i + 1 })).join('')
```

首先，stories 會吐出有一堆 object 的 array，所以需要用到 **.join('')** 才不會每一筆資料都有 , 在後面。

然後，我們想要在每條新聞前顯現順序數字，可是 array 是從 0 開始，所以我們在 map 裡面要用 i + 1 來設立 index。

因為 Story Component 只接受一個 parameter，所以我們用 object 的方式，配合 spread operator 去寫他。

最後，只要把 Story Component，照著 Hacker News 的模式 把畫面刻出來，就 OK 了~

story.js:

```js
export default function Story(story) {
  return `
    <div class="story">
      <div> 
        <span class="gray">${story.index}</span>
        <span class="upvote">▲</span>
        <a href="${story.url}">${story.title}</a>
        <span>(${story.domain})</span>
      </div>
      <div>
        <div class="gray">
          ${story.points} points by ${story.user} ${story.time_ago}
          |
          <a href="#/item?id=${story.id}">
            ${story.comments_count} comments
          </a>
          |
          <span class="favorite">
            &hearts;
            Add To Favorites
          </span>
        </div>
      </div>
    </div>
  `;  
}
```

我們再來看看畫面：

![view]({{ site.baseurl }}/assets/images/hacker-news/2.png)

嗯，好多了。

下一篇，我們接著要寫每條新聞按進去後，可以看到留言的頁面~