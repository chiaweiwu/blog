---
layout: post
title:  "基本功練習: Hacker News! — Part 7: 「我的最愛」"
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

最後衝刺了，我們把 「我的最愛」寫出來吧！

#### 我的最愛: 頁面

既然要這個頁面，那我們就必須弄一個新的，然後把他加進 routes 裡面：

router.js:

```js
// 省略以上
import Favorites from './pages/favorites.js';

createRoutes() {
  const routes = [
    { path: '/', page: Stories },
    { path: '/new', page: Stories },
    { path: '/ask', page: Stories },
    { path: '/show', page: Stories },
    { path: '/item', page: Item },
    { path: '/favorites', page: Favorites }
  ];

// 省略以下
```

favorites.js:

```js
import view from '../utils/view.js';

export default function Favorites() {
  view.innerHTML = `<div>Favorites</div>`  
}
```

還是一樣，先讓它出來，我們再來改內容。

所以「我的最愛」要幹嘛，顯示 favorite state 啊，廢話。

把 store 丟進來吧！

```js
import store from '../store.js';

const { favorites } = store.getState();  
const hasFavorites = favorites.length > 0; 
```

我們直接取得 favorites 的 state，接著像其他頁面一樣寫判斷，如果有的資料話才顯示，沒有的話顯示訊息叫用戶加吧~

favorites.js:

```js
import view from '../utils/view.js';
import checkFavorite from '../utils/checkFavorite.js';
import store from '../store.js';
import Story from '../components/Story.js';

export default function Favorites() {
  const { favorites } = store.getState();  
  const hasFavorites = favorites.length > 0;  
    
  view.innerHTML = `<div>
    ${hasFavorites ? favorites.map(story => Story({
        ...story,
        isFavorite: checkFavorite(favorites, story)
    })).join('') : "加一點東西進來吧!"}
  </div>`  
}
```

耶，可以加進去了！

![favView]({{ site.baseurl }}/assets/images/hacker-news/9.png)

但怎麼刪不掉咧？**因為你還沒寫啊 XD**

刪除的邏輯跟 Stories 很類似，複製貼上改一改就好了，像這樣...

```js
document.querySelectorAll('.favorite').forEach(favoriteButton => {
  favoriteButton.addEventListener('click', function() {
    const story = JSON.parse(this.dataset.story);  
    const isFavorited = checkFavorite(favorites, story);
    store.dispatch({ type: isFavorited ? "REMOVE_FAVORITE" : "ADD_FAVORITE", payload: { favorite: story } })  
    Favorites();
  }); 
});
```

不過為什麼 addEventListener 的 callback function 不是 async 了？

因為 Favorites 沒有用到 API，所以就不需要用到 async function 啊。

記得發完 action 後，讓 Favorite 重刷即可。

最後...

favorites.js:

```js
import view from '../utils/view.js';
import checkFavorite from '../utils/checkFavorite.js';
import store from '../store.js';
import Story from '../components/Story.js';

export default function Favorites() {
  const { favorites } = store.getState();  
  const hasFavorites = favorites.length > 0;  
    
  view.innerHTML = `<div>
    ${hasFavorites ? favorites.map(story => Story({
        ...story,
        isFavorite: checkFavorite(favorites, story)
    })).join('') : "Add some favorites!"}
  </div>`  
  
   document.querySelectorAll('.favorite').forEach(favoriteButton => {
     favoriteButton.addEventListener('click', function() {
       const story = JSON.parse(this.dataset.story);  
       const isFavorited = checkFavorite(favorites, story);
       store.dispatch({ type: isFavorited ? "REMOVE_FAVORITE" : "ADD_FAVORITE", payload: { favorite: story } })  
       Favorites();
     }); 
  });
}
```

我們的簡易版 Hacker News 就寫好了！

耶~~

