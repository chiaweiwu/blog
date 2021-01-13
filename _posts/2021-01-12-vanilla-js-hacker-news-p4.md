---
layout: post
title:  "基本功練習: Hacker News! — Part 4: Recursion"
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

![view]({{ site.baseurl }}/assets/images/hacker-news/3.png)

我們個別頁面已經寫好啦，現在該來處理醜醜的留言顯示了！

#### 留言顯示

開始前，我們先來觀察一下 comments。

注意到了嗎？<span class="highlight-text">他是一層又一層的！(nested object)</span>

我們在寫 comments 這頁時，要把這個特點考慮進去。

先繼續依照 React 的 Component 邏輯，把每個 comments 拆到他們各自的 Component 裡面吧：

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
  ${hasComments ? story.comments.map(comment => Comment(comment)).join('') : '沒留言耶'}
  `  
}

// 以下省略
```

Comment.js:

```js
export default function Comment(comment) {
    console.log(comment); 
    return `
    <div class="nested-comments-0">
      <p class="comment-header">
        ${comment.user} | ${comment.time_ago}
      </p>
      ${comment.content}
    </div>
  `   
}
```

我們來看看畫面：

![view]({{ site.baseurl }}/assets/images/hacker-news/5.png)


留言出來了沒錯，可是有看到每一筆下面還有一層 comments 嗎？

這就是我們之前觀察到的 nested comments，我們需要處理他！

我們需要讓 Comment 一直產生畫面直到 comments 裡面沒有任何 comments 為止。

所以，先寫個判斷是否有 nested comments 吧。

```js
const hasNestedComments = comment.comments.length > 0;
```

如果有 nested comments 的話，那我們加個判斷讓他產生畫面：


```js
export default function Comment(comment) {
  const hasNestedComments = comment.comments.length > 0;

  return `
    <div class="nested-comments-0">
      <p class="comment-header">
        ${comment.user} | ${comment.time_ago}
      </p>
      ${comment.content}
      ${hasNestedComments ? comment.comments.map(comment => Comment(comment)).join("") : ""}
    </div>
  `   
}

```

```js
${hasNestedComments ? comment.comments.map(comment => Comment(comment)).join("") : ""}
```

這一行的意思是，如果 hasNestedComments = true 的話，那 Comment function 會<span class="highlight-text">一直自己呼叫自己</span>直到 hasNestedComments = false。

也就是所謂的 <span class="highlight-text">recursion function</span>！

再修改一下 css，讓每一層巢狀 comments 都會被往右邊推。

```js
<div class="nested-comments-${comment.level}">
```

我們的留言區就變成這樣了~

![view]({{ site.baseurl }}/assets/images/hacker-news/6.png)

快寫完了！現在我們只剩下最後一個功能，我的最愛頁面。

而這一塊，我想用 Redux pattern。

這樣就可以讓用戶在新聞列表直接將喜歡的新聞加進我的最愛頁面，也可以在將新聞從我的最愛移除。

最重要的是，在我們切換頁面時，資料不會流失！