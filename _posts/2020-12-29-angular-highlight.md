---
layout: post
title:  "學習筆記：Angular 特色"
author: cwu
categories: [ Angular, front-end my love, study notes, new framework! ]
tags: [Angular 9, study]
image: assets/images/framework/0.jpg
description: "Angular特色記載篇！！"
featured: false
hidden: false
---

學習筆記之Angular特色記載篇！！

## Angular 特色

Angular 是 2016 年被推出的框架，一樣是 Google 開發的，可是兩者基本上是 Java 跟 JavaScript 的差別，基本上兩個不同的語言。

Angular 採用 JS ES6 來開發，它主要由 8 個部分組成：

<ol class="pl-4">
<li>模塊 (Modules)</li>
<li>組件 (Components)</li>
<li>模板 (Templates)</li>
<li>元數據 (Metadata)</li>
<li>數據綁定 (Data Binding)</li>
<li>指令 (Directives)</li>
<li>服務 (Services)</li>
<li>依賴注入 (Dependency Injection)</li>
</ol>


**1. 模塊 (Modules)**

模塊，如名由一塊塊代碼組成，用來執行簡單任務。

Angular 是模塊化的，有自己的模塊系統：NgModules。

而每個 Angular 專案至少要有一個模塊(根模塊，所謂的 Root Module)，一般為：**AppModule**。

Angular 模塊是一個帶有 **@NgModule** 裝飾器的類，它接收一個用來描述模塊屬性的元數據對象。

範例：

```javascript
import { NgModule } from'@angular/core';

import { BrowserModule } from'@angular/platform-browser';

@NgModule(
  {imports: [BrowserModule],
  providers: [Logger],
  declarations: [AppComponent],
  exports: [AppComponent],
  bootstrap: [AppComponent]
  })
  
export class AppModule {

}

```

NgModule 裡面的屬性我就不一一講解了。

創建完 AppModule 後，通過導入根模塊來啟動我們的專案，開發過程通常在 main.ts 裡面來 import AppModule。

範例：

```javascript
import { platformBrowserDynamic } from'@angular/platform-browser-dynamic';

import { AppModule } from'./app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

```

**2. 組件(Components)**

Angular 核心，用來處理應用和邏輯頁面的 view，可用於整個專案。

要創建 Component ，我們得從 @angular/core 中引入 Component 修飾器

```javascript
@Component({
  selector:    'app-hero-list',
  templateUrl: './hero-list.component.html',
  providers:  [ HeroService ]
})
export class HeroListComponent implements OnInit {
/* . . . */
}
```

**3. 模板 (Templates)**

模板 = HTML view

透過 component 裡面的 templateUrl 即可告知 Angular 如何顯示組件。

```html
<div><h1>Hello World!</h1></div>
```

**4.元數據 (Metadata)**

Metadata 其實就是 Angular 用來將 class 定義成 component 的資訊。

範例：

```javascript
@Component({
  selector:    'app-hero-list',
  templateUrl: './hero-list.component.html',
  providers:  [ HeroService ]
})
export class HeroListComponent implements OnInit {
/* . . . */
```

**5. 數據綁定 (Data Binding)**

管理應用程式裡面數值的一種機制，可以從HTML裡面取值和賦值，使得數據的讀寫，數據的持久化操作變得更加簡單快捷。

Angular 則有四種 data binding 模式。

每種形式都有自己的一個方向：從 DOM 來、到 DOM 去、雙向

我們看張圖：

![dataBinding]({{ site.baseurl }}/assets/images/framework/dataBinding.jpg)


插值: 在 HTML 中顯示組件值。

```js
<h3>{{title}}</h3>
<img src="{{ImageUrl}}">

```

屬性綁定: 把元素的屬性設置為組件中屬性的值。

```js
<img [src]="userImageUrl">
```

事件綁定: 在組件方法名被點擊時觸發。

{% raw %}
```js
<button (click)="onSave()">save</button>
```
{% endraw %}

雙向綁: 使用 Angular 里的 NgModel 指令進行雙向綁定。

{% raw %}
```js
<input [value]="currentUser.firstName"
(input)="currentUser.firstName=$event.target.value" >
```
{% endraw %}



**6. 指令 (Directives)**

當 Angular 渲染模板時，它會根據指令對 DOM 進行修改。

Angular 有三種類型的 directives:

1. 屬性指令：以元素的屬性形式來使用的指令。
2. 結構指令：用來改變DOM樹的結構
3. 組件：作為指令的一個重要子類，組件本質上可以看作是一個帶有模板的指令。

範例：

```js
<li *ngFor="let book of books"></li>

<book-info *ngIf="selectedBook"></book-info>
```

*ngFor 告訴 Angular 為 books 列表中的每個項生成一個 <li> 標籤。

*ngIf 表示只有在 selectedBook 等於 true 時，才會包含 book-info 組件。


**7. 服務 (Services)**

服務是封裝了某一特定功能，並且可以通過注入的方式讓人使用的獨立模塊。

服務有內建，也可自己撰寫。

一個 service 的範例

```
export class BookListService {

  AddBook(book: BookModel) { console.log('added book:'${book}); }

  EditBook(book: BookModel) { console.warn('edited book:'${book}); }

  DeleteBook(book: BookModel) { console.error('deleted book:'${book}); }

}

```


**8. 依賴注入 (Dependency Injection)**

因為 DI 本身有太多可以講，故我們這邊就只提到 Service 的 DI。

拿 Service 來說。

```js
import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {
  constructor() { }
}
```

@Injectable()是angular的service使用做依賴注入的裝飾詞，可以使Service成為可被注入的元件。

當我們在provider設定這個服務給這個module使用，如下：

```js
providers: [
  UserService
],
```

接著我們就可以在整個專案中從constructor直接宣告這個服務，在所有地方取得的都會是同一個 service。

```js
export class HeroListComponent {
  heroes: Hero[];
 
  constructor(heroService: HeroService) {
    this.heroes = heroService.getHeroes();
  }
}
```


當然還有很多功能，區區一小篇 blog post 講不完。

就請各位至 Angular 官網慢慢啃食囉~
