document.write("Inline Script");
var script=document.createElement("script");
var cont=document.createElement("p")
cont.innerHTML="inline script";
document.head.appendChild(script);
document.body.appendChild(cont);
