

//creating avariable  cachename
var CACHE_NAME="mycatche";
//moving all files into cache
var filesaddtoCatche=[
     "workers/serviceworker/serviceworkers.html",
    "serviceworker.js",
   "swmain.js"
    

];


//install event
self.addEventListener("install",function(event){
console.log("Service worker installed")
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache){
            console.log("Cache opened");
            return cache.addAll(filesaddtoCatche)


        }).error(function(err){
          console.log("can not open file:"+err);
        })
        
    );
});
//

//fetch event
self.addEventListener("fetch",function(event){
    console.log("inetercepting",event.request);
    console.log("Service Worker: Fetching Event");
 

});

//activate event
//
self.addEventListener("activate",function(event){
console.log("Service Event activated");
});

self.addEventListener("message",function(event){
    event.source.postMessage("Hi client");
    console.log("Message from server" +event.data);
   
   
    
    
});

self.addEventListener('sync', event => {
  if (event.tag === 'my-tag-name') {
      event.waitUntil(doTheWork());
  }
});


  self.addEventListener('push', function (e) { 
      console.log('Push Received...')
      const data = e.data;
    console.log(data);
    //e.data(JSON.stringify(json()));
    const headers = {
        responseType: 'text'
  }
});


 
  self.addEventListener("push", function(event) {
    console.log("[Service Worker] Push Received.", event.data.text());
    var options = {
      body: "This notification was generated from a push!"
    };
   
   event.waitUntil(self.registration.showNotification("Hello world!", options));
  });

  self.addEventListener('periodicsync', event => {
    if (event.tag === 'get-daily-news') {
        event.waitUntil(getDailyNewsInCache());
    }
});

function getDailyNewsInCache(){
  console.log("get daily news");


}

function doTheWork(){
  console.log("do the work");
}


