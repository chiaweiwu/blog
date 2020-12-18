---
layout: post
title:  "前端也可以寫手機 app ? 神奇的框架: NativeScript"
author: cwu
categories: [ Angular, front-end my love, new framework!, mobile development ]
tags: [Angular 9, NativeScript, Mobile App Development ]
image: assets/images/ns/0.jpg
description: "準備中"
featured: true
hidden: false
---

「魔鏡啊，魔鏡，什麼東西可以讓我寫一次就產生蘋果和安卓的 app？」

「...哈囉？魔鏡？」

呃，好，不玩了，我們直接進主題。

#### 首先，我們先來聊聊前端跟手機 app 這個話題

<span class="highlight-text">~~這個 section 廢話很多，歡迎你跳過~~</span>

在人人一台手機，以及只會寫 static site 就直接被淘汰的年代（哈囉，2004!），我們前端每年也有越來越多好玩的新玩具，任君挑選。

![frameworks]({{ site.baseurl }}/assets/images/ns/1.png)

<strong>是的，華生</strong>，在前端框架年年出、年年更新的盛況下，現在前端寫的已經不是靜態網站了，我們基本上都在寫 web app ，配合可愛的後端隊友，一個個網頁版的 start up 服務就這樣被孵化出來。

那網頁版的都出來了，為什麼不寫<strong>手機 app </strong>呢？

~~呃，因為我是前端我不會（喂~~

因為寫手機 app 真的是個學問，每個平台都有自己的寫法、規範，除此之外還得學習不同的語言才寫的出來，寫的出來還只是基礎，還要畫面好看、功能好用、效能夠快。

喔，對了，還要 UI/UX 好用哦，啾咪。

不過，話說回來，各種 app 不就是這樣嘛，哈哈。

![phone]({{ site.baseurl }}/assets/images/ns/2.jpg)

<strong>BUT</strong>，沒錯，就是這個 BUT 他出現了，我是前端就不能寫手機 app 嘛？ 我也想寫啊，可是因為（以下省略幾十行理由）我無法。

沒關係，這時候我們的心聲被聽到了（耶~

我們現在有種神奇的科技，主張只要寫一次 code 就可以產出雙平台 apps，那就是 hybrid apps！

關於 hybrid apps ，我們之後會細說，我們先來聊聊今天的主角（也是 hybrid apps 之一的）: <span class="highlight-text">NativeScript!</span>

![ns]({{ site.baseurl }}/assets/images/ns/3.png)

#### 原理

所以 NativeScript 到底是什麼東東？

<span class="highlight-text">以下為了方便起見，我會直接將 Native Script 縮寫成 NS。</span>

簡單來說，它就是個可以寫原生 <strong>iOS</strong> 跟 <strong>Android app</strong> 的 <strong>JavaScript Framework</strong>。

它不僅是 Open Source，也有著偉大的理想，就是讓工程師可以寫一次，就哪裡（ iOS + Android ）都可以用的框架（當然這是夢想，跟實際還是有很大的差別，不過夠接近了啦~）

那我們需要會什麼語言才能寫它咧？

NS 的好處是它有多種寫法可以選擇，前端三大框架霸主都可以：
  - React
  - Angular
  - Vue

那泥，你不會？不想寫？ 沒關係，它還可以用最單純寫法：
  - Vanilla JavaScript
  - TypeScript

然後，重頭戲來了！

<span class="highlight-text">NS 最大特點就是可以存取原生（Native） iOS 跟 Android 的 classes！</span>

可是為什麼他可以寫原生 app，他不是用 JavaScript嗎？而 Native 又是什麼鬼？

這個跟 NS 的結構有關，我們往下看。 


#### 結構

所以他到底是怎麼讓雙平台 apps 跑起來的 & 他到底用了什麼?

我們先來看看這個圖:

![ns]({{ site.baseurl }}/assets/images/ns/4.png)

NS 是用了來自 Google 的 JavaScript V8 virtual machine、Runtime & bridge module 組建而成。

那他們都在幹嘛咧？我們快速看一下圖，對照下面的工作列表：

- Virtual machine 負責翻譯 + 執行 JS code
- <strong>Bridge Module</strong> 負責翻譯呼叫原生手機的 API call，並把結果回傳，
- <strong>NS Runtimes</strong> 讓你可以用 JavaScript 呼叫 Android 跟 iOS 框架的 API
- <strong>NS Core modules</strong> 會幫你創建個 API ，把你的 JS 程式碼翻譯成原生平台可用的程式碼
- <span class="highlight-text">NativeScript CLI 就是你要寫 app 的平台</span>
- NativeScript 插件<strong>（{N} Plugins）</strong>，是整個 NS 的核心


<strong>簡單來說</strong>：
因為可以使用 API call 就能操控手機功能，所以 NS 可以讓你直接用 JavaScript （不需要會 Objective-C 或 Java ）寫出手機 app。 

它可以讓你直接用 JS 就可以寫手機才有的功能！（就好比拍照啦、查看聯絡人啦、打電話...etc）


#### 那我們能怎麼寫呢？

說到這，可能很多朋友不確定 NS 是不是適合自己。

沒關係，我們有個試水溫的好方法，那就是 NS 官方推出的線上 Web IDE - <strong>NativeScript Playground！</strong>

<a class="highlight-text" href="https://play.nativescript.org/" target="_blank">NS Playground</a>

![playground]({{ site.baseurl }}/assets/images/ns/5.png)

只要下載官方推出的兩個 app， preview 跟 playground 即可線上編寫手機 app ，live 測試（很酷吧！

而試水溫過，覺得 NS 好像還可以，就可以直接下載 Local Machine CLI 寫起來！

<a class="highlight-text" href="https://docs.nativescript.org/start/quick-setup#full-setup" target="_blank">Full Setup Guide</a>

因為 setup 太繁雜，就不帶大家一步步過了，請自行移步樓上鏈接處理 setup。

講完了 setup，我們接著來看看 NS 是怎麼產生 UI Layout 的。

#### NativeScript 的 UI Layout

我們先看這張圖：

![uiLayout]({{ site.baseurl }}/assets/images/ns/6.png)

NS 其實有一套類似 XML 的 UI 寫法，拿大家最熟悉的按鈕來說，一個按鈕就是:

```
<Button (tap)="onTap()" class="btn-primary" />
```

再配合 CSS、 ScSS 的結合，就可以把 UI 繪製出來！

可是，我們總不可能整個 app 都要自己寫吧？ 對，這個時候我們就要開始來聊聊 NS 的缺點，跟如何找資源了（抱大神大腿

#### NativeScript 插件 （主要結構之一）

之前稍稍提到的 NS 本身也是靠插件堆起來的，包括主要核心 NativeScript Core，那 NS 官方的工程師有沒有釋放出資源給我們用呢？

要說有嗎，其實並沒有，很多東西都得自己手寫，但是還是有啦。

我們的 NS MarketPlace ( NS 市集 )

可是 NativeScript 實在是太冷門了，所以很多東西都沒有 up to date，都得自己創建，但還是有差不多<strong> 1563</strong> 個插件。

不過 2014 年被創建後，只有<strong> 16</strong> 個是被官方認證的插件，而半年內有更新的插件也只有<strong> 71</strong> 個。


嗯哼，你沒看錯，我們來聊聊 NS 的缺點吧。

#### NativeScript & Hybrid Apps 缺點

在開始前，我們先說說 Native vs Hybrid Apps。

我們看這個圖：

![appComp]({{ site.baseurl }}/assets/images/ns/7.png)


<strong>Native Apps</strong> = <strong>原生語言</strong>程式寫的 app，就是所謂的用<strong> Java </strong>寫的 Android app 或<strong> Objective-C/Swift </strong>寫的 iOS app。

<strong>Hybrid Apps</strong> = <strong>混合語言</strong>程式寫的 app，就是前端三寶 <strong>(HTML/CSS/JS)</strong> 寫的，寫好的這些 code 會被裝進原生容器 <strong>(Native Container) </strong>，透過手機上的瀏覽器引擎來呈現和執行


<span class="highlight-text">但是，其實 hybrid apps 跟實際 native apps 開發還是有差別的！</span>

<strong>為什麼? </strong>

因為 NS、React Native 這些 hybrid apps 相較於 native apps，還是有做不到的 <strong>10-20%</strong>。拿 React Native 來說，就是那些在 Facebook 的工程師不願意寫出來的那些複雜功能。（~~請去追殺這群傢伙~~


接著，我們來說 hybrid app 的<span class="highlight-text">性能</span>

Hybrid Apps 依靠手機的瀏覽器速度 (假設我們用 Ionic 這個框架)，也就表示它基本上不可能像 native apps 那麼快。

那這和 NS 有什麼關係？

因為 NS 也是 hybrid apps，所以它啟動的 loading 時間，基本上就是等待 Windows 95 電腦啟動，功能也是，而且 app 越大越慢。

<span class="highlight-text">非常小的討論社群</span>

剛剛在講 plugins 的時候有提到。

NS 剛出來時，已經被大多數想寫 mobile 的工程師淘汰（那時 React & React Native 都崛起啊，加上 NS 又複雜，當時也不支援 React...

所以基本上想寫 hybrid apps 都跑去寫 React Native，NS 根本沒人寫。

#### Hybrid Apps 框架大亂鬥

![chart]({{ site.baseurl }}/assets/images/ns/8.png)

這是之前研究框架是搜集出來的結果，不用一個字一個字查。

我直接以因為專案需求使用 NS 的主要工程師角色，很負責的用一句話帶過：<span class="highlight-text">珍惜生命，遠離 NativeScript。</span>

好啦，也不能這麼混，我還是總結一下這個表單：

<strong>社團小、開發者也少、開發難度也不低，很多東西要自己寫</strong>

那，一直提到的社團小、開發者也少、開發難度也不低，NativeScript 到底有什麼能贏的過其他兩位的呢？

<span class="highlight-text">第一點 Access to Native API。</span>

NS 最大的賣點就是他可以直接呼叫 API，讓我們用寫 JS 的方法寫手機 app ，做到打電話、拍照、查看聯絡人的功能，可是 React Native 也可以啊，React Native 有 Native Module 不是嗎？

對，可是相較於 Ionic 的話，NS 還是佔上風的，因為 Ionic 不支援手機 Native 的功能。

好吧，那這樣我們用 React Native，不就好了嗎？

我們來看看第二點，<span class="highlight-text">不限制於 React</span>

記得最開始我們有講到嗎？ NS 有5種不同的寫法，不會 React 還是可以寫！

<strong>NS 可以寫 Angular、Vue、React、JavaScript & TypeScript</strong>

（而我這個目前還在啃食 React 資訊、又因公司專案需求的工程師就這樣入了 NS 的坑）


<strong>那重點來了…</strong>

Native Script 的缺點那麼多，為什麼我還會從零學起，並用 NativeScript 寫手機 app 呢？


嗯，很簡單。

<strong>因為客戶要求。</strong>

![shiba]({{ site.baseurl }}/assets/images/ns/9.png)


> 其實，我還想私心跟大家 demo 一下 NS 的功能，可是礙於公司產品不可以 showcase，我之後再奉上一小段其他 side project app 的迷你 demo 吧， 請敬請期待。


謝謝各位的閱讀。


-----
#### References
<small>https://dev.to/ronakpatel70/nativescript-v-s-react-native-what-to-choose-for-cross-platform-app-development-d20
https://tylerablake.github.io/nativescript-intro/
https://buzzorange.com/techorange/2013/11/28/native-app-or-hybrid/
https://insights.daffodilsw.com/blog/nativescript-vs-react-native-overview-and-comparison
https://blog.jscrambler.com/react-native-vs-ionic-vs-nativescript-a-practical-guide/
https://blog.jscrambler.com/introduction-to-nativescript/
https://www.quora.com/What-are-the-bad-sides-if-I-build-an-app-for-iOS-and-Android-using-NativeScript-and-Angular-compared-to-native-apps
https://nativescript.org/faq/how-does-nativescript-work/
https://www.quora.com/Has-anyone-built-a-project-with-NativeScript-or-React-Native-and-which-seems-to-have-the-upper-hand
https://www.quora.com/Should-I-explore-iOS-development-along-with-my-hybrid-knowledge-and-experience-with-Angular-Ionic-and-NativeScript-Will-it-be-worth-my-time
https://www.itread01.com/content/1544417462.html
</small>