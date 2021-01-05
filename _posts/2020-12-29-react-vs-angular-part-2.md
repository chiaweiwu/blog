---
layout: post
title:  "React 跟 Angular 的框架分析 — Part 2: 框架趨勢"
author: cwu
categories: [ Angular, React, front-end my love, observation, analysis notes, trends, study notes, new framework! ]
tags: [Angular 9, React, analysis, observation]
image: assets/images/framework/2.jpg
description: "小孩子才做選擇，我兩個都要！！"
featured: true
hidden: false
---

歡迎回到**小孩子才做選擇，我兩個都要！React 跟 Angular 的框架分析系列！**

這篇分析會切成以下四個部分，你現在在這裡：

<ol class="pl-4">
<li>Angular 跟 React 的快速背景</li>
<li><span class="highlight-text"><strong>快速帶過近幾年兩個框架的發展 trends （更詳細的 trends 分析會另外開一篇）</strong></span></li>
<li>兩個框架的優缺點，每提一點，會附上實作 comparison</li>
<li>下集預告：配合後端 + 串起 API 後，誰勝出</li>
</ol>

準備好的話，我們就開始囉~


## 框架趨勢

### 崛起的 React

雖然 React 在 2013 正式發佈，但是根據各大網站分析 React 還是壟斷了市場。

我們來看一些 React vs Angular 的數據圖：

每年的下載數據：
![](https://i.imgur.com/irbL5jy.png)

過去兩年的下載數據 (2018-2020, NPMTrends.com)：
![](https://i.imgur.com/64x8ffn.png)

過去 5 年，在 Google Trends 上大家都在搜尋的框架 (2015-2020)：
![](https://i.imgur.com/UgVSygv.png)



這三張數據圖，都可以看到 React 已經稱霸前端框架了。

可是 Angular 不是比 React 早出來嗎？這是怎麼一回事？

這裡我們要講到 Angular 的一段小歷史。

### 哭泣的 Angular

上一篇有提到，其實大家很容易搞混 AngularJS 跟 Angular 2+。

我們來回顧下：

**AngularJS** = 2010 年就推出的舊框架，明年即將被 Google 冷藏，不再支援。

**Angular 2+** （又或是我們在市場常看的 Angular 7, Angular 8... Angular 11 等） = **2016** 年才推出的框架，是 AngularJS 的**升級版**。

功能比 AngularJS 強大，但是還是很多人容易誤會，以為 Angular 2 = AngularJS。

也可以說 Angular 2+ 無辜被前輩 AngularJS 陷害，讓大家以為他還是很難用。 

另外，我們現在 2020 年，公司一般如果提到 Angular，其實都是在說 **Angular 2+**，基本上已經沒有人在用 AngularJS 了。

但還是有很多人不明白，以為市場上說的 Angular 是 AngularJS。

<span class="highlight-text">而在這篇文章裡，我如果提到 Angular，就是在說 Angular 2+。</span>


### 更新速度

講完了兩個框架的趨勢已經釐清了小誤會，我們來聊一下框架版本的更新速度。

拿 Angular 來講，Angular 的官網表示每半年就會出一個 major release，每個 major release 都會被 Angular 支援 18 個月（半年 active support，一年 LTS）。

換句話說就是 **Angular 工程師們有差不多半年的時間可以快速學習該版本的更新**，學完後就要繼續迎接更新版本的 updates。

而 React 每個版本差不多是**一年大更新一次**，近幾年來最重大的是 React 16.8，帶來了 React 未來的趨勢-- Hooks! (這個我們接下來再細聊)

那我們再來看看 StackOverflow 上面的數據：

2020 年 StackOverflow 上，工程師最愛框架統計問卷:
![](https://i.imgur.com/jPVI0VA.png)


我們一比之下，React 佔了快 7 成的前端市場，緊追在後的是近幾年崛起的 Vue.js（這個有機會我們再聊）。

而我們的 Angular ，雖然近幾年在前端沒有比 React 那麼吃香，但也佔據了 5 成。

而大家常常搞混的 AngularJS （ Angular的前身 ）只佔了 24 %，而且還榮登大家最討厭的框架之一：

2020 年 StackOverflow 上，工程師最恨框架統計問卷:
![](https://i.imgur.com/TXBF4t1.png)


其實 Angular 跟 React 只差了 10% 而已，所以我們也可以說 Angular 其實是被 AngularJS 害慘了（因為大家常常分不清楚他們兩個）。

那都說 React 比 Angular 好，那他到底好在哪裡？

我們看下去！



#### 下集預告：框架優缺點...

市場趨勢講完了，我們終於要進入重頭戲框架優缺點，以及非常刺激的大對比。

沒錯，接下來我會以以往寫過不同案子的功能舉例，同時撰寫 Angular + React 並分析他們的優缺點！

我們下次見，掰掰~