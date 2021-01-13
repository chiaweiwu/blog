---
layout: post
title:  "基本功練習: Hacker News! — Part 6: 使用 Store"
author: cwu
categories: [ Vanilla JS, Fundamentals, front-end my love, study notes, new framework! ]
tags: [Vanilla JS, JS Fundamentals, redux]
image: assets/images/hacker-news/0.png
description: "Vanilla JS study with Hacker News."
featured: false
hidden: false
---

基本功練習: 使用純 JS + Redux 把 Hacker News 做出來。

## 前情提要

![view]({{ site.baseurl }}/assets/images/hacker-news/7.png)

Store 處理好了，兩個主要功能：**加入我的最愛 + 移除我的最愛**也創建了，現在我們來運用它吧！

#### 我的最愛: Store

我們的 store 創建好了，那現在我們要把它擺在哪邊咧？所有 data 在的地方：stories.js

在顯現 stories 的地方，我們需要再加一個 data，用來判斷這條新聞，有沒有被加進「我的最愛」裡面。

```js
${hasStories ? stories.map((story, i) => Story({ ...story, index: i + 1 })).join('') : '沒新聞耶'}
```

該怎麼處理咧？

首先，我們要先把 store 導進來，並拿到我們的「我的最愛」清單。

```js
import store from '../store.js';

const { favorites } = store.getState();
```

他們兩個都進來後，現在我們要判斷每條新聞，是否已經被加進去 favorites 的 state 裡面了。

這時候我們需要寫一個 function 檢查它，再回傳個 true or false boolean。

checkFavorite.js:

```js
import checkFavorite from '../utils/checkFavorite.js';
 
export default function checkFavorite(favorites, story) {
  return favorites.some(favorite => favorite.id === story.id);
}
```

這個檢查 function 寫好後，我們就可以把它塞進我們的 data 裡了！

```js
${hasStories ? stories.map((story, i) => Story({ ...story, index: i + 1, isFavorite: checkFavorite(favorites, story) })).join('') : '沒新聞耶'}
```

這邊 Story function 會接受 object parameter，裡面有個 property 叫做 isFavorite。

isFavorite 裡面會直接用 checkFavorite function 檢查，這條新聞是否有在 favorites state 裡面。

寫好後，我們就可以去 Story.js 按照判斷把 toggle 寫出來。

story.js:

{% raw %}
```jsx
export default function Story(story) {
  return `
    // 中間省略
      <span class="favorite">
        &hearts;
        ${story.isFavorite ? "從我的最愛移除" : "新增至我的最愛"}
      </span>
   // 這邊也省略
  `;
}
```
{% endraw %}

#### 撰寫點擊 event

現在就是當我們按下，「新增至我的最愛」或「從我的最愛移除」這筆資料會進我們的 state，或從我們的 state 裡面消失。

我們需要一個 click event！就放在 <span class="favorite"> 這邊吧！

我們再次回到 stories.js:

```js
document.querySelectorAll('.favorite').forEach(favoriteButton => {
  favoriteButton.addEventListener('click', function() {
    //... 我們要在這裡寫判斷
  }); 
});
```

但是等等，如果這個 span 上面已經有我要的 story data，那我判斷起來會更方便，我們來修改一下 <span class="favorite">

```js
<span class="favorite" data-story='${JSON.stringify(story)}'>
  $hearts;
  ${story.isFavorite ? "從我的最愛移除" : "新增至我的最愛"}
</span>
```

這樣的話，我們直接用 this.dataset.story 就可以抓到 story 了！

首先為了檢查這筆資料是不是在 state 裡面，我們需要把它變回 object，然後檢查他，所以...

```js
const story = JSON.parse(this.dataset.story); // 讓它變回 object
const isFavorited = checkFavorite(favorites, story); // 會回傳 boolean
```

接下來，我們就可以用 dispatch 更新 store 了

```js
store.dispatch({ type: isFavorited ? "REMOVE_FAVORITE" : "ADD_FAVORITE", payload: { favorite: story } })
```

如果他已經被加進「我的最愛」了，那就發 REMOVE_FAVORITE 的 Action，沒有的話那發 ADD_FAVORITE 的 Action。

payload 按照我們的 state object 來寫： { favorite: story }。

接著我們更新 store：

```js
await Stories(path);
```

然後，就出錯了 XD

因為我們的 callback function 不是 async，但是沒關係，加上去就 ok 了：

stories.js:

```js
// 省略 import

export default async function Stories(path) {
  const { favorites } = store.getState();  
  const stories = await getStories(path);
  const hasStories = stories.length > 0;
                    
  view.innerHTML = `<div>
    ${hasStories ? stories.map((story, i) => Story({ ...story, index: i + 1, isFavorite: checkFavorite(favorites, story) })).join('') : '沒新聞耶'}
  </div>`; 
  
  document.querySelectorAll('.favorite').forEach(favoriteButton => {
     favoriteButton.addEventListener('click', async function() {
       const story = JSON.parse(this.dataset.story);  
       const isFavorited = checkFavorite(favorites, story);
       if (isFavorited) {
         store.dispatch({ type: "REMOVE_FAVORITE", payload: { favorite: story } })  
       } else {
         store.dispatch({ type: "ADD_FAVORITE", payload: { favorite: story } })    
       }
       await Stories(path);
     }); 
  });
}

// 省略 getStories
```

我們終於把**加入我的最愛 + 移除我的最愛**，除了讓 code 更精簡以外，還有最後一件事，我們的 Hacker News 就大功告成了，那就是...

創建「我的最愛頁面」！(講了超多次，到底要不要寫啦！