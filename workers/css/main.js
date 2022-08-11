//webworkers
var w;
//starting webworkers
function startWorker() {
  if(typeof(Worker) !== "undefined") {
    if(typeof(w) == "undefined") {
      w = new Worker("../script/workers.js");
    }
    //posting message to the main.js
    w.onmessage = function(event) {
      document.getElementById("result").innerHTML = event.data;
    };
  } else {
    document.getElementById("result").innerHTML = "your browser does not support Web Workers";
  }
}


//treminate webworker
function stopWorker() { 
  w.terminate();
  w = undefined;
}


//if service workers supports by your browser
//register the service worker

// if("serviceWorker" in navigator)
// {
//     window.addEventListener("load",function(){
//     navigator.serviceWorker.register("serviceworker.js").then(function(registration){
//       console.log("Service Registeration successful with scope",registration.scope)

//       var serviceWorker;
//           if (registration.installing) {
//               serviceWorker = registration.installing;
//               document.querySelector('#kind').textContent += 'installing';
//           } else if (registration.waiting) {
//               serviceWorker = registration.waiting;
//               document.querySelector('#kind').textContent += 'waiting';
//           } else if (registration.active) {
//               serviceWorker = registration.active;
//               document.querySelector('#kind').textContent += 'active';
//           }
//           //check whether service worker installed
//           if(navigator.serviceWorker.controller)
//           {console.log("Service worker installed");
       
//           }
  
//           //update or new serviceworker
//           navigator.serviceWorker.oncontrollerchange=(ev)=>
          
//             console.log("New service Worker activated");
          
//     })
    
    //unregister serviceworker
    // navigator.serviceWorker.getRegistrations().then((regs)=>

    // {
    //    for(let reg of regs)
    //    {
    //      reg.unregister().then((isUnreg)=>console.log((isUnreg)));
    //    }
    // })
  
   
    // ,function(err)
    // {
    //     console.log("registeration failed"+err);
    // }
  

  
    window.addEventListener("message",function(event){
      //console.log("posting data from server to client"+event);
    //navigator.postMessage("hi client");
    console.log(`The service worker sent me a message: ${event.data}`);
    console.log(event.data);
    console.log("The Service worker Sent me a messsage");
    
    })
    navigator.serviceWorker.ready.then( registration => {
      registration.active.postMessage("Hi service worker");
      if (registration.sync) {

        // Background Sync is supported.
        console.log("Background Sync is supported.")
    } else {
        // Background Sync isn't supported.
        console.log("Background Sync isn't supported.");
    }
    if (registration.periodicSync) {
      // Periodic Background Sync is supported.
      console.log("Periodic Sync is supported.")

  } else {
      // Periodic Background Sync isn't supported.
      console.log("perodic Sync is  not supported.")
  }
    });

      navigator.serviceWorker.onmessage=(event)=>
      {
        console.log("Message from service worker:" +event.data);
        document.querySelector("#data").textContent +=event.data;
      }

    
    if (!window.Notification) {
          alert("This browser does not support desktop notification");
      }
      var prm = Notification.permission;
      if (prm == 'default' || prm == 'denied') {
         console.log("permission denied or default");
      }else{
        console.log("permission granted");
        configurePushSub();
      }
      
  
    

  //  function showNotification() {
  //     Notification.requestPermission(function(result) {
  //       if (result === 'granted') {

  //         navigator.serviceWorker.ready.then(function(registration) {
  //            registration.showNotification('Vibration Sample', {
  //             body: 'Buzz! Buzz!',
  //              icon: '../images/touch/chrome-touch-icon-192x192.png',
  //              vibrate: [200, 100, 200, 100, 200, 100, 200],
  //              tag: 'vibration-sample'
  //           });
  //          });
  //        }
  //        else
  //        {
  //         console.log("permissions not granted");       
  //        }
  //     });
  //    }
//     })


 // }else
  //{
    console.log("Service worker not supported");
 // }



  async function requestBackgroundSync() {
    const registration = await navigator.serviceWorker.ready;
    await registration.sync.register('my-tag-name');
}
  const registration =  navigator.serviceWorker.ready;
if ('periodicSync' in registration) {
  //const tags = registration.periodicSync.getTags();
  const periodicSync = registration.periodicSync;
  console.log("periodicSync");
  // Only update content if sync isn't set up.
  //if (!tags.includes('content-sync')) {
   // updateContentOnPageLoad();

  }

 else {
  // If periodic background sync isn't supported, always update.
  //updateContentOnPageLoad();
  console.log(" periodic background sync isn't supported");
}



   const stat =  navigator.permissions.query({
    name: 'periodic-background-sync',
 });
  //  if (stat.state === 'granted') {
  //    Periodic background sync can be used.
  //    console.log(" Periodic background sync can be used.")
  //  } else {
  //   Periodic background sync cannot be used.
  //    console.log(" Periodic background sync cannot  be used.")
  //  }

  const status = navigator.permissions.query({name: 'periodic-background-sync'});
if (status.state === 'granted') {
  // Periodic background sync can be used.
  console.log(" Periodic background sync can be used.")
} else {
  // Periodic background sync cannot be used.
  console.log(" Periodic background sync cannot  be used.")
}

async function registerPeriodicSync() {
  await registration.periodicSync.register('get-daily-news', {
      minInterval: 24 * 60 * 60 * 1000
  });
}