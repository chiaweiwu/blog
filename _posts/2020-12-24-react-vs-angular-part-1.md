---
layout: post
title:  "React 跟 Angular 的框架分析 — Part 1: Angular 跟 React 的快速背景"
author: cwu
categories: [ Angular, React, front-end my love, observation, analysis notes, trends, study notes, new framework! ]
tags: [Angular 9, React, analysis, observation]
image: assets/images/framework/1.jpg
description: "小孩子才做選擇，我兩個都要！！"
featured: true
hidden: false
---

歡迎來到**小孩子才做選擇，我兩個都要！React 跟 Angular 的框架分析系列！**

這篇分析會切成以下四個部分，你現在在這裡：

<ol class="pl-4">
<li><span class="highlight-text"><strong>Angular 跟 React 的快速背景</strong></span></li>
<li>快速帶過近幾年兩個框架的發展 trends （更詳細的 trends 分析會另外開一篇）</li>
<li>兩個框架的優缺點，每提一點，會附上實作 comparison</li>
<li>下集預告：配合後端 + 串起 API 後，誰勝出</li>
</ol>

準備好的話，我們就開始囉~

## 關於 Angular 跟 React

我們先來聊聊 Angular。

Angular，後面有 Google 爸爸撐腰的 JavaScript 框架。

講到了 Angular 就必須聊聊 Angular 的前身： <span class="highlight-text">AngularJS</span>

#### AngularJS

最早之前 Google 在 2010 年創建了 AngularJS （Angular 的前身），學習難度不低，但當時的確引發了很多話題。

它最大賣點是可以透過 ```<script>``` 標籤添加到 HTML 頁面，AngularJS 通過這個指令擴展了HTML，並且通過表達式綁定數據到 HTML。

而最大的特性則是：MVC、模塊化、自動化雙向數據綁定、語義化標籤、依賴注入等等。

那為什麼我們要提到 AngularJS 咧？<span class="highlight-text">因為大家很容易搞混 AngularJS 跟 Angular 2+。</span>


**AngularJS** = 2010 年推出的舊框架，明年即將被 Google 冷藏，不再支援。

**Angular 2+** （又或是我們在市場常看的 Angular 7, Angular 8... Angular 11 等） = **2016** 年才推出的框架，是 AngularJS 的**升級版**。


記住我們現在常常聽到的 Angular 7/Angular 8/ Angular 9 什麼的其實都是 Angular 2+ (第二代 Angular)，也是我們的主角。

<span class="highlight-text">而在這篇文章裡，我如果提到 Angular，就是在說 Angular 2+。</span>

#### Angular + 特色

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


對這些部分有興趣的客官們，請移駕至這裡：<a class="highlight-text" href='{{ site.baseurl }}/angular-highlight'>Angular 特色</a>~

這邊我們就不一一帶過了，畢竟這篇是在講 React 跟 Angular 的快速歷史。


<span class="highlight-text">React 部分重整中，待補上。</span>

<!-- ## 關於 React

React 是 Facebook 在 XX 年開發的 JavaScript Library。

#### React 特色



#### React VS Angular 特色 -->

#### 下集預告：關於市場趨勢...

兩個前端框架歷史介紹的差不多了，那他們的市場趨勢又是如何呢？

誰佔上風？誰比較好上手？又是誰默默崛起、誰被誤會？

我們下次見~