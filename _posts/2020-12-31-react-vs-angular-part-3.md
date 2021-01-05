---
layout: post
title:  "React 跟 Angular 的框架分析 — Part 3: 兩個框架的優缺點"
author: cwu
categories: [ Angular, React, front-end my love, observation, analysis notes, trends, study notes, new framework! ]
tags: [Angular 9, React, analysis, observation]
image: assets/images/framework/3.jpg
description: "小孩子才做選擇，我兩個都要！！"
featured: true
hidden: false
---

歡迎再度回到**小孩子才做選擇，我兩個都要！React 跟 Angular 的框架分析系列！**

這篇分析會切成以下四個部分，你現在在這裡：

<ol class="pl-4">
<li>Angular 跟 React 的快速背景</li>
<li>快速帶過近幾年兩個框架的發展 trends （更詳細的 trends 分析會另外開一篇）</li>
<li><span class="highlight-text"><strong>兩個框架的優缺點，每提一點，會附上實作 comparison</strong></span></li>
<li>下集預告：配合後端 + 串起 API 後，誰勝出</li>
</ol>

準備好的話，我們就開始囉~

## 框架優缺點

如果可以拿食物來形容兩個框架的話，React 是單點套餐，可以一直加不同的配餐，而 Angular 就是全家桶一次給你、給你、都給你。

**一切取決於你想要什麼東西。**

但是，嘰裡呱啦講了那麼多，我們怎麼知道誰比較好？

簡單，**寫出來就知道了！**

接來下，我們拿 Todo List 當例子，把這個範例用 **Angular 跟 React 各寫一次**。

<span class="highlight-text">並在寫 code 時分析並提出兩個框架的優劣處。</span>


## 框架結構

**首先我們來理解一下 Angular 的結構**
Angular 是採 MVC 方式，也就是說一個 component 上面，你會有 4 個檔案：
- **TypeScript**：component 邏輯
- **css/scss**: 如名 style 檔案
- **HTML**: 呈現的網頁
- **spec.ts**: 測試檔

在 TypeScript 檔案裡面寫好你的 class，html 顯示你的 template，scss 呈現 style，最後用 spec 來測試。

**而 React 在資料結構上，就乾淨簡潔的許多**

如果採用 JSX 的話， React 就**只有一個 JSX 檔**。

而我們之前提過 React 採取了 Virtual DOM 的方式，用 JSX 寫法的話，我們可以選擇要寫 class component 或是 functional component。

近幾年，因為 React Hooks 的崛起，functional 開始被重用，而 loading 的速度也更快了。

要測試 React 的話，跟 Angular 一樣 React 需要額外寫測試檔，但不一定每個 component 都要單獨寫一個！

**React 個人小偏好**

在 React 的資料夾結構上，我個人偏好是這樣：

components:
  - Book
    - index.js
    - Book.jsx

把寫好的 component 分裝進一個專屬的資料夾，裡面有 index.js 跟 component 的 jsx 檔案。

在將 index.js 輸出 component，方便其他頁面讀取。

看完了結構，我們來聊聊撰寫時的便利度！


<span class="highlight-text">接下來的部分重寫中，上次舉的例子沒有特別好，所以還請各位客官見諒，他很快就會被補回來的！</span>

<!-- ## 框架撰寫便利度

首先，我們用 Todo List 來說，並拿最簡單的 if conditions 說起。

我的 Todo Item 需要一個判斷，顯示用戶已完成/待辦的事項，並給兩個狀態不同的 styles。

假設我們的 style 都已經寫好了 (這邊就不提 styles 的檔案)...


**Angular 寫法**

首先，我會用 @Input() 將 parent component 的東西傳下來（這個我們等等細講）

再來，我會在 ts 檔案裡面寫出我從 parent component 拿到的判斷 boolean。

最後，我會用 Angular 本身創建的 attribute directive 直接寫不同狀態的判斷。


Component 的 TS 檔案：
```typescript
// 以上 import files + 結構什麼的都省略

export class ToDoItemComponent implements OnInit {

  @Input() toDoName: string;
  @Input() isDone: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}

```

Component 的 HTML 檔案：
```htmlmixed=
<div class="todo-item">
  <span 
      [ngClass]="{
      'done': isDone === true,
      'none': isDone === false
      }">
    {{ toDoName }}
  </span>
</div>
```

**React 的話，我會是這樣寫**

首先，我要先有個叫做 done 的 state，這個 state，我可以用 redux 或 hooks 寫。

我會用 props 直接將 parent component 的東西傳下來，取得的方法有很多，好比 lifting the state up 之後再拿、用 Redux 直接抓、又或者用 Hooks 寫好後裝進來。

（這些 state 跟 parent component 我們等等再細講）


JSX 檔案：

```jsx
// 以上 import files + 結構什麼的都省略

const ToDoItem = (props: TodoProps) => {
    return(
    <div className={style.todoItem}>
      <span
        style={{ 
          textDecoration: props.todo.done ? 'done': 'none'
        }}>
        { props.todo.name }
      </span>
    </div>
    )
}

export default ToDoItem;
```

這樣就寫好一個 Todo Item 了，我們再把它裝進 parent component 裡面。

我們來看看兩個框架 for loops 的呈現寫法。


**Angular寫法**

Angular 的話，我們絕對會用內建的 structural directive，也就是我們的 ***ngFor**。

我們現在 TS 檔案裡面導入並取得我們的 todo 清單，把他裝進 todoItems 這個 array 裡面。

（我們當然可以用 TypeScript 寫的更詳細，不過怕講不完，我們先這樣。）

然後，Angular 的好處來了，我們在 app.module.ts 裡面將 components 導入進去後，這個 component 就哪邊都可以用了。

意思就是說，我們可以直接把剛剛寫好的 todo item 的 component 丟進來，並裝入這個 parent component 的資料。

```htmlmixed=
<div *ngFor="let todoItem of todoItems" class="todo-item-list">
  <app-todo-item
      [toDoName]='todoItem.name'
      [isDone]='todoItem.isDone'
  ></app-todo-item>
</div>
```

那 React 呢？

**React**

React 的話比較講求深度的 JS 掌握度，很多東西都得自己寫，而我們的 To Do Item 的大清單，也得自己來，我們用 array 的內建 method, map 來寫~

```jsx
// 省略 import files

const ToDoList = () => {
    const todoList = todoList(); // 這是個拿取資料的 hook，我們之後會寫到

    return(
      <div className={styles.todoItemList}>
       {
         todoList.todos.map( todo => (
           <TodoItem
             key={todo.id}
             todo={todo}
           />
         ))
       }
      </div>
    );
};
```




parent to child comp.

**[Angular 寫法]**
@input & services

**[REAct 寫法]**
lifting the state up
redux
hooks







[個人小結/偏好 ]


## 框架靈活度

**[Angular 寫一遍]**
[Angular 可能寫法]
[Angular built in structural directive]

**[React 寫一遍]**
[React 可能寫法 2 （跟上一段寫不太一樣，展現 React 的靈活度）]

[個人小結/偏好: React 靈活雙刃劍 + 整齊度 + 組織結構 ]


## 框架效能

**[Angular 寫一遍]**
[Angular 可能寫法]

Angular 寫法
React.memo 寫法

**[React 寫一遍]**
[React 可能寫法]

**[為什麼 React 會比較快 V DOM: 實際數字 & 圖片證據 ]**

[個人小結/偏好 ]


## 框架 Community

繼續延伸我們的 To Do List~

如果我們要加額外功能的話，會發生什麼事...

**[Angular 寫一遍]**
[Angular 可能寫法 1: Angular 大禮包，你想要的都可以擁有]
[Angular 可能寫法 2: Angular 大禮包，你想要的都可以擁有，plugin]

**[React 寫一遍]**
[React 可能寫法: 瘦子需要吃更多，你有的我也可以擁有，裝插件]


[個人小結/偏好 ]


## 個人觀察總結

其實幾年前看過的搞笑說法是：**Angular 太胖了，而 React 要學的東西太多了。**

為什麼會這麼說？

我們來思考一下，一開始寫寫寫的時候，我們會覺得 React 真好上手，很快就可以把項目寫完了（而我本人再次碰到 React 時，更是歡樂的不睡覺，一寫就是到天亮。）

可是，我們要 State 啊！那我就來把 Redux 弄進去好了，但是考慮到效能，Redux 好像有點胖，我們用 Mobx 怎麼樣？

裝好 Mobx後... 哦，對了 React 社群比較喜歡 Flow，我們再改改，可是我們也要考慮到除蟲蟲，就來個 TypeScript 吧！

導入 TypeScript後，Async 怎麼辦？ 我們需要 RxJS，這個要進去！

RxJS好了... React Hooks 出來了，我好累啊...

...

等等，這些東西不就是 Angular Service + RxJS + TypeScript 解決的嘛？

**~~恭喜你獲得 Angular 全家桶的鄙視。~~**

當然這些都是之前的笑話，因為 Hooks 來了！

輕快的 Hooks 可以取代 LifeCycle 跟 Redux！

讓我們寫 React 起來更開心~


### 個人對 Angular 的看法

**它真的就是個全家桶。**

適合什麼案子使用...[more goes here later]


### 個人對 React 的看法

是個輕快又有龐大支柱的萬能

覺得它適合什麼案子使用...[more goes here]


[總結之前每個小段提到的偏好 ]
[完整總結全部 ]




#### 下集預告：如果我們配合了後端...

兩個前端框架優劣分析的差不多了，那如果加入跟後端配合的因素呢？

誰還會佔上風？誰會比較好上手？誰比較靈活？

又是誰可以碾壓全場咧？ -->