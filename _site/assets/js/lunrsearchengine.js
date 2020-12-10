
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/blog/404.html",
    "title": "404",
    "body": " 404:  It seems we've run into some issues. Let's go home? "
    }, {
    "id": 1,
    "url": "http://localhost:4000/blog/about",
    "title": "About C. Wu",
    "body": "Who's C?: I am a front-end developer and a UI/UX designer currently based in Taipei, Taiwan. Commonly referred to by friends and colleagues as Lily, I am passionate about weaving pixel-perfect visuals and clean code together to turn them into practical solutions.  When I am not coding or designing, you can usually find me shooting portrait photography, diving into another new JavaScript framework just for fun or walking around with a cup of tea on a sunny day. resume "
    }, {
    "id": 2,
    "url": "http://localhost:4000/blog/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://localhost:4000/blog/",
    "title": "Home",
    "body": "      Featured:                                                                                                                                                                                                           今年黑五不購物，讀書去~                              :               那個去年黑五在打LoL、吃牛排的 Angular 工程師，今年怎麼開始學 React. js 啦？:                                                         All Stories:                                                                                                     今年黑五不購物，讀書去~              :       那個去年黑五在打LoL、吃牛排的 Angular 工程師，今年怎麼開始學 React. js 啦？:               "
    }, {
    "id": 4,
    "url": "http://localhost:4000/blog/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 5,
    "url": "http://localhost:4000/blog/hello-react/",
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