//creating script  tag and appending content from the thirdfile.js
var script=document.createElement("script");
script.src="/js/thirdfile.js";

var para=document.createElement("P");

para.innerHTML="<h4>&nbsp;&nbsp;&nbsp;&nbsp;&lt;This is Second Javascript File appended from second.js</h4>";
document.body.append(para);
document.head.append(script);