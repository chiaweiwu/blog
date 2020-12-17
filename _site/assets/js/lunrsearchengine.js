
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": " 404:  It seems we've run into some issues. Let's go home? "
    }, {
    "id": 1,
    "url": "http://localhost:4000/about",
    "title": "About C. Wu",
    "body": "追求使用者體驗的前端工程師。 熟悉JavaScript ES2015+、TypeScript 與 Angular 9。 Who's C?: I am a front-end developer and a UI/UX designer currently based in Taipei, Taiwan. Commonly referred to by friends and colleagues as Lily, I am passionate about weaving pixel-perfect visuals and clean code together to turn them into practical solutions.  When I am not coding or designing, you can usually find me shooting portrait photography, diving into another new JavaScript framework just for fun or walking around with a cup of tea on a sunny day. resume "
    }, {
    "id": 2,
    "url": "http://localhost:4000/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://localhost:4000/",
    "title": "Home",
    "body": "      Featured:                                                                                                                                                                                                                       前端也可以寫手機 app ? 神奇的框架: NativeScript                              :               「魔鏡啊，魔鏡，什麼東西可以讓我寫一次就產生蘋果和安卓的 app？」:                                                                                                                                                                                                                                                     今年黑五不購物，讀書去~                              :               那個去年黑五在打LoL、吃牛排的 Angular 工程師，今年怎麼開始學 React. js 啦？:                                                         All Stories:                                                                                             ES6              :       ES6 for React:                                                                                               Intro to React              :       Intro to React:                                                                                               前端也可以寫手機 app ? 神奇的框架: NativeScript              :       「魔鏡啊，魔鏡，什麼東西可以讓我寫一次就產生蘋果和安卓的 app？」:                                                                                               今年黑五不購物，讀書去~              :       那個去年黑五在打LoL、吃牛排的 Angular 工程師，今年怎麼開始學 React. js 啦？:               "
    }, {
    "id": 4,
    "url": "http://localhost:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 5,
    "url": "http://localhost:4000/react-02/",
    "title": "ES6",
    "body": "2020/12/17 - ES6 for React: JavaScript = a “dialect” of ECMAScript ES6 = ECMAScript 2015 = JavaScript standard. React uses ES6. ES6 is also getting popularity for writing server applications and services via Node. js. Variables: In ES6, variables are declared using const, let and var keywords. We cannot redeclare const or let variables. And, we can only update let variable. Block Scope vs Function Scope: var is global scope. It can be accessed everywhere. let is a block scope. It can only be accessed inside the block where it is defined. New Update: Arrow Function &amp; Regular Function: Regular Function 123var hello = function(name) {  return name}ES6 Arrow function 1let hello = (name) =&gt; { return name }Even more ways to define arrow functions… We can omit {}, if there’s only one expression 1let hello = (num1, num2) =&gt; num1 + num2;We can omit (), if there’s only one argument 1let hello = name =&gt; name;We can use _, if there’s no argument 1let hello = _ =&gt; 1 + 2;this keyword: In regular function, the this keyword represents the object called inside a function. In arrow function, the this keyword represents the object that defined the function, which is the window. object. Template Literals: Quoted between ``, string literals that can include expressions. Like this… 12let name = 'Boop';let greeting = `Hello, ${name}`;Destructuring: Arrays: 12let array = [1,2,3,4,5];let [value1,value2,value3] = array;this is equivalent to 1234let array = [1,2,3,4,5];let value1 = array[0];let value2 = array[1];let value3 = array[2];Destructuring: Objects: Similar to destructuring array… 123456let obj = { key1: 'boop', key2: 'foo', key3: 'bar'};let [key1,key2,key3] = obj;Spread Operator: The spread operator spreads the values in an iterable, such as array &amp; strings, across arguments or elements. 123456let fruits = ['apples','bananas','strawberry'];let veggies = ['cabbage','asparagus','green onions'];let grocery = [. . . fruits,. . . veggies];console. log(grocery);// ['apples','bananas','strawberry','cabbage','asparagus','green onions']Spread operator can also be used to clone an array &amp; objects in an arrow function. 123456const dog1 = { name: 'Boop', breed: 'Corgi'}const dog2 = {. . . dog1}Rest Parameter: This is used to pass an arbitrary number of argument, and to process these args within the arrow function. Rest parameters are array instances. We use rest parameters if we need extra parameters other than the specified ones. 1234567let foo = function(a, b, . . . args) { console. log(args);}foo(1,2); // [], nothing will print inside the array, because we don't have extra parametersfoo(1,2,3,4,5) // [3,4,5]Difference between rest parameter and normal arguments Rest parameters returns an array by default, so methods like map, sort, shift, forEach… can be used directly. But for normal args, they need to be converted into an array because normal args are objects. "
    }, {
    "id": 6,
    "url": "http://localhost:4000/react-01/",
    "title": "Intro to React",
    "body": "2020/12/17 - Intro to React: React = JS library for building user interfaces or UI components. Features:  JSX - JavaScript Syntax Extension Virtual DOM One way data binding Extensions DebuggingAdvantages &amp; Limitations: Virtual DOM: React uses virtual DOM which is a JS object. This will improve apps performance, since JS virtual DOM is faster than regular DOM. Usability:React can be used on client and server sides as well as with other frameworks (i. e. NativeScript). Maintenance:Component and data patterns improve readability, which helps to maintain larger apps. But React covers only the view part of the app. So to complete the entire development we would have to choose other technologies. "
    }, {
    "id": 7,
    "url": "http://localhost:4000/hello-native-script/",
    "title": "前端也可以寫手機 app ? 神奇的框架: NativeScript",
    "body": "2020/12/11 - 「魔鏡啊，魔鏡，什麼東西可以讓我寫一次就產生蘋果和安卓的 app？」 「…哈囉？魔鏡？」 呃，好，不玩了，我們直接進主題。 首先，我們先來聊聊前端跟手機 app 這個話題: 這個 section 廢話很多，歡迎你跳過 在人人一台手機，以及只會寫 static site 就直接被淘汰的年代（哈囉，2004!），我們前端每年也有越來越多好玩的新玩具，任君挑選。 是的，華生，在前端框架年年出、年年更新的盛況下，現在前端寫的已經不是靜態網站了，我們基本上都在寫 web app ，配合可愛的後端隊友，一個個網頁版的 start up 服務就這樣被孵化出來。 那網頁版的都出來了，為什麼不寫手機 app 呢？ 呃，因為我是前端我不會（喂 因為寫手機 app 真的是個學問，每個平台都有自己的寫法、規範，除此之外還得學習不同的語言才寫的出來，寫的出來還只是基礎，還要畫面好看、功能好用、效能夠快。 喔，對了，還要 UI/UX 好用哦，啾咪。 不過，話說回來，各種 app 不就是這樣嘛，哈哈。 BUT，沒錯，就是這個 BUT 他出現了，我是前端就不能寫手機 app 嘛？ 我也想寫啊，可是因為（以下省略幾十行理由）我無法。 沒關係，這時候我們的心聲被聽到了（耶~ 我們現在有種神奇的科技，主張只要寫一次 code 就可以產出雙平台 apps，那就是 hybrid apps！ 關於 hybrid apps ，我們之後會細說，我們先來聊聊今天的主角（也是 hybrid apps 之一的）: NativeScript! 原理: 所以 NativeScript 到底是什麼東東？ 以下為了方便起見，我會直接將 Native Script 縮寫成 NS。 簡單來說，它就是個可以寫原生 iOS 跟 Android app 的 JavaScript Framework。 它不僅是 Open Source，也有著偉大的理想，就是讓工程師可以寫一次，就哪裡（ iOS + Android ）都可以用的框架（當然這是夢想，跟實際還是有很大的差別，不過夠接近了啦~） 那我們需要會什麼語言才能寫它咧？ NS 的好處是它有多種寫法可以選擇，前端三大框架霸主都可以：  React Angular Vue那泥，你不會？不想寫？ 沒關係，它還可以用最單純寫法：  Vanilla JavaScript TypeScript然後，重頭戲來了！ NS 最大特點就是可以存取原生（Native） iOS 跟 Android 的 classes！ 可是為什麼他可以寫原生 app，他不是用 JavaScript嗎？而 Native 又是什麼鬼？ 這個跟 NS 的結構有關，我們往下看。 結構: 所以他到底是怎麼讓雙平台 apps 跑起來的 &amp; 他到底用了什麼? 我們先來看看這個圖: NS 是用了來自 Google 的 JavaScript V8 virtual machine、Runtime &amp; bridge module 組建而成。 那他們都在幹嘛咧？我們快速看一下圖，對照下面的工作列表：  Virtual machine 負責翻譯 + 執行 JS code Bridge Module 負責翻譯呼叫原生手機的 API call，並把結果回傳， NS Runtimes 讓你可以用 JavaScript 呼叫 Android 跟 iOS 框架的 API NS Core modules 會幫你創建個 API ，把你的 JS 程式碼翻譯成原生平台可用的程式碼 NativeScript CLI 就是你要寫 app 的平台 NativeScript 插件（{N} Plugins），是整個 NS 的核心簡單來說：因為可以使用 API call 就能操控手機功能，所以 NS 可以讓你直接用 JavaScript （不需要會 Objective-C 或 Java ）寫出手機 app。 它可以讓你直接用 JS 就可以寫手機才有的功能！（就好比拍照啦、查看聯絡人啦、打電話…etc） 那我們能怎麼寫呢？: 說到這，可能很多朋友不確定 NS 是不是適合自己。 沒關係，我們有個試水溫的好方法，那就是 NS 官方推出的線上 Web IDE - NativeScript Playground！ NS Playground 只要下載官方推出的兩個 app， preview 跟 playground 即可線上編寫手機 app ，live 測試（很酷吧！ 而試水溫過，覺得 NS 好像還可以，就可以直接下載 Local Machine CLI 寫起來！ Full Setup Guide 因為 setup 太繁雜，就不帶大家一步步過了，請自行移步樓上鏈接處理 setup。 講完了 setup，我們接著來看看 NS 是怎麼產生 UI Layout 的。 NativeScript 的 UI Layout: 我們先看這張圖： NS 其實有一套類似 XML 的 UI 寫法，拿大家最熟悉的按鈕來說，一個按鈕就是: 1&lt;Button (tap)= onTap()  class= btn-primary  /&gt;再配合 CSS、 ScSS 的結合，就可以把 UI 繪製出來！ 可是，我們總不可能整個 app 都要自己寫吧？ 對，這個時候我們就要開始來聊聊 NS 的缺點，跟如何找資源了（抱大神大腿 NativeScript 插件 （主要結構之一）: 之前稍稍提到的 NS 本身也是靠插件堆起來的，包括主要核心 NativeScript Core，那 NS 官方的工程師有沒有釋放出資源給我們用呢？ 要說有嗎，其實並沒有，很多東西都得自己手寫，但是還是有啦。 我們的 NS MarketPlace ( NS 市集 ) 可是 NativeScript 實在是太冷門了，所以很多東西都沒有 up to date，都得自己創建，但還是有差不多 1563 個插件。 不過 2014 年被創建後，只有 16 個是被官方認證的插件，而半年內有更新的插件也只有 71 個。 嗯哼，你沒看錯，我們來聊聊 NS 的缺點吧。 NativeScript &amp; Hybrid Apps 缺點: 在開始前，我們先說說 Native vs Hybrid Apps。 我們看這個圖： Native Apps = 原生語言程式寫的 app，就是所謂的用 Java 寫的 Android app 或 Objective-C/Swift 寫的 iOS app。 Hybrid Apps = 混合語言程式寫的 app，就是前端三寶 (HTML/CSS/JS) 寫的，寫好的這些 code 會被裝進原生容器 (Native Container) ，透過手機上的瀏覽器引擎來呈現和執行 但是，其實 hybrid apps 跟實際 native apps 開發還是有差別的！ 為什麼? 因為 NS、React Native 這些 hybrid apps 相較於 native apps，還是有做不到的 10-20%。拿 React Native 來說，就是那些在 Facebook 的工程師不願意寫出來的那些複雜功能。（請去追殺這群傢伙 接著，我們來說 hybrid app 的性能 Hybrid Apps 依靠手機的瀏覽器速度 (假設我們用 Ionic 這個框架)，也就表示它基本上不可能像 native apps 那麼快。 那這和 NS 有什麼關係？ 因為 NS 也是 hybrid apps，所以它啟動的 loading 時間，基本上就是等待 Windows 95 電腦啟動，功能也是，而且 app 越大越慢。 非常小的討論社群 剛剛在講 plugins 的時候有提到。 NS 剛出來時，已經被大多數想寫 mobile 的工程師淘汰（那時 React &amp; React Native 都崛起啊，加上 NS 又複雜，當時也不支援 React… 所以基本上想寫 hybrid apps 都跑去寫 React Native，NS 根本沒人寫。 Hybrid Apps 框架大亂鬥: 這是之前研究框架是搜集出來的結果，不用一個字一個字查。 我直接以因為專案需求使用 NS 的主要工程師角色，很負責的用一句話帶過：珍惜生命，遠離 NativeScript。 好啦，也不能這麼混，我還是總結一下這個表單： 社團小、開發者也少、開發難度也不低，很多東西要自己寫 那，一直提到的社團小、開發者也少、開發難度也不低，NativeScript 到底有什麼能贏的過其他兩位的呢？ 第一點 Access to Native API。 NS 最大的賣點就是他可以直接呼叫 API，讓我們用寫 JS 的方法寫手機 app ，做到打電話、拍照、查看聯絡人的功能，可是 React Native 也可以啊，React Native 有 Native Module 不是嗎？ 對，可是相較於 Ionic 的話，NS 還是佔上風的，因為 Ionic 不支援手機 Native 的功能。 好吧，那這樣我們用 React Native，不就好了嗎？ 我們來看看第二點，不限制於 React 記得最開始我們有講到嗎？ NS 有5種不同的寫法，不會 React 還是可以寫！ NS 可以寫 Angular、Vue、React、JavaScript &amp; TypeScript （而我這個目前還在啃食 React 資訊、又因公司專案需求的工程師就這樣入了 NS 的坑） 那重點來了… Native Script 的缺點那麼多，為什麼我還會從零學起，並用 NativeScript 寫手機 app 呢？ 嗯，很簡單。 因為客戶要求。  其實，我還想私心跟大家 demo 一下 NS 的功能，可是礙於公司產品不可以 showcase，我之後再奉上一小段其他 side project app 的迷你 demo 吧， 請敬請期待。 謝謝各位的閱讀。 References: https://dev. to/ronakpatel70/nativescript-v-s-react-native-what-to-choose-for-cross-platform-app-development-d20https://tylerablake. github. io/nativescript-intro/https://buzzorange. com/techorange/2013/11/28/native-app-or-hybrid/https://insights. daffodilsw. com/blog/nativescript-vs-react-native-overview-and-comparisonhttps://blog. jscrambler. com/react-native-vs-ionic-vs-nativescript-a-practical-guide/https://blog. jscrambler. com/introduction-to-nativescript/https://www. quora. com/What-are-the-bad-sides-if-I-build-an-app-for-iOS-and-Android-using-NativeScript-and-Angular-compared-to-native-appshttps://nativescript. org/faq/how-does-nativescript-work/https://www. quora. com/Has-anyone-built-a-project-with-NativeScript-or-React-Native-and-which-seems-to-have-the-upper-handhttps://www. quora. com/Should-I-explore-iOS-development-along-with-my-hybrid-knowledge-and-experience-with-Angular-Ionic-and-NativeScript-Will-it-be-worth-my-timehttps://www. itread01. com/content/1544417462. html "
    }, {
    "id": 8,
    "url": "http://localhost:4000/hello-react/",
    "title": "今年黑五不購物，讀書去~",
    "body": "2020/11/25 - 那個去年黑五在打LoL、吃牛排的 Angular 工程師，今年怎麼開始學 React. js 啦？ 今年黑五不購物，讀書去~: 如題，去年的黑五我在打LoL、吃牛排，今年的我，不一樣了！我讀書。 我是一個平凡的 Angular 工程師，直到在誠品看到了一本 React. js 的教學書。於是，我變成了一個，會一點點 React. js 的前端工程師。 這週的星期五就是黑色星期五了，黑色星期五想必是要大大的購物一番，不過，因為我買到了這本書，我便一頭栽進去 React. js 的世界。 今年的黑五，都在看書和寫扣。 在這一週，我學會了 + 花費時間: 這一週每天約花五個小時念這本書，因為我的中文程度只有小學四年級。所以我需要花費大量時間理解 Concept，轉成英文確保自己理解後，再繼續實作。 於是他變成了這樣： 接下來的週末兩天，星期五花了 7 小時，星期六花了 5 小時，於是，新版的履歷就生出來囉！ 之前我的履歷長這樣 現在的履歷，登登！ RWD 也沒有問題！ 使用技術：React. js, React Hooks 欸，對，他上線了，在這裡: resume "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});