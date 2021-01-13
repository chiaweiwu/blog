---
layout: post
title:  "基本功練習: Hacker News! — Part 5: Redux"
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

我們個別頁面跟留言都處理好了，現在我們要來動手寫我的最愛了！

#### Redux

上一篇提到，我們只剩下最後一個功能，我的最愛頁面。

而這一塊，我想用 Redux。

這樣就可以讓用戶在新聞列表直接將喜歡的新聞加進我的最愛頁面，也可以在將新聞從我的最愛移除。

最重要的是，在我們切換頁面時，資料不會流失！

我們來快速回顧下 Redux 是什麼：

![view]({{ site.baseurl }}/assets/images/hacker-news/8.png)

Redux 是個全域的狀態管理物件，用來管理 state，主要目的是方便我們把 state 資料傳來傳去。

我們用 Action 下指令，接著 Reducer 會依照發射的指令處理我們在 state 的資料，再把更新好的資料傳到 store 裡，最後 store 會依照拿到的資料將畫面更新，這樣子輪迴。

喔對了，神奇的小常識。

Redux 跟 Flux 其實基本上指的是同樣的 concept，不過 Flux 可以同時擁有很多 store，Redux 只能有一個。

回顧完了 Redux，我們接著寫 Hacker News。

#### 我的最愛: Store

在開寫前，我們先想想這頁要幹嘛。

我想要搜集所有用戶按下喜歡的新聞，並把它們存放到這頁，而其他的新聞列表上，如果用戶已經按下喜歡了，那列表上則會顯示「從我的最愛中移除」。

要做這個功能的話，我們需要一個地方搜集所有的**喜歡**資料，而這個地方，我就叫它 store.js。

但是在開始創建 store 前，我需要先有 reducer 來幫我保管 state，所以我們先寫 reducer。

Reducer = 如上，在 Redux 裡面，用來保管 state 的東東，可以接受指令去更新 state。

store.js:

```js
const initialState = {
  favorites: []  
}

function favoritesReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  } 
}
```

我們空的 initialState，還有空空的 favoriteReducer。

在 favoriteReducer 裡面，我們需要兩個功能：加入我的最愛 + 移除我的最愛。


加入我的最愛：

```jsx
case "ADD_FAVORITE": {
  const addedFavorite = action.payload.favorite;
  const favorites = [...state.favorites, addedFavorite];
  return { favorites };
}
```
創建一個 array，用 spread operator 在現有的 state 裡面將 addedFavorite 裝進去。

移除我的最愛：

```jsx
case "REMOVE_FAVORITE": {
  const removedFavorite = action.payload.favorite;
  const favorites = state.favorites.filter(favorite => favorite.id !== removedFavorite.id);
  return { favorites };
}
```

找到要移除我的最愛，在現有的 state 裡面，用 .filter 排除掉這個 id。

至於什麼 action 都沒設定時，如果 favoritesReducer 被呼叫，那就會直接回傳 state 了。

```jsx
default:
  return state;
```

把他們加起來，就是這樣：

store.js:

```js
const initialState = {
  favorites: []  
}

function favoritesReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_FAVORITE": {
      const addedFavorite = action.payload.favorite;
      const favorites = [...state.favorites, addedFavorite];
      return { favorites };
    }
    case "REMOVE_FAVORITE": {
      const removedFavorite = action.payload.favorite;
      const favorites = state.favorites.filter(favorite => favorite.id !== removedFavorite.id);
      return { favorites };
    }
    default:
      return state;
  } 
}
```

現在 Reducer 有了，我們把 store 建立出來吧：

```js
function createStore(reducer) {
  let currentState = reducer(undefined, {});
}
```

createStore 會接受一個 reducer，而 currentState 最開始創建事是空的，也沒有任何需要被下的指令，所以我們寫這個: **reducer(undefined, {})**

這樣 default state 就會被回傳回來了。

可是，我們要怎麼拿到這個 currentState 咧？

我們幫 createStore 創建兩個 function: getState 跟 dispatch:

```js
function createStore(reducer) {
  let currentState = reducer(undefined, {});
  
  return {
    getState: () => currentState,
    dispatch: action => {
      currentState = reducer(currentState, action);    
    } 
  }
}
```

getState 可以讓我們拿到現有的 state，而 dispatch 會依照收到的 action 幫我們自動更新 currentState。

剩下就是把 store 建起來，讓整個 app 能用了。

```js
const store = createStore(favoritesReducer);

export default store;
```

這個寫好後，我們就可以將 store 導入進需要的畫面，歡樂的使用 store.getState() 跟 store.dispatch(action) 了!

佈局這麼久，終於可以開始寫我的最愛了，耶~~