var count = 0;

function timeCount() {
  count = count+1;
  postMessage(count);
  setTimeout("timeCount()",500);
}

timeCount();