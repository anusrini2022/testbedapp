
//webworkers
var w;
//starting webworkers
function startWorker() {
  if (typeof (Worker) !== "undefined") {
    if (typeof (w) == "undefined") {
      w = new Worker("/script/workers.js");
    }
    //posting message to the main.js
    w.onmessage = function (event) {
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


