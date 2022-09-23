       function hiddenIframe(){
        //iframe is hidden by using hidden attribute hidden="hidden"
        var frame=document.createElement("IFRAME");
        frame.setAttribute("id","myframe");
        frame.setAttribute("src","sourcefile.html");
        frame.setAttribute("hidden","hidden");
        document.body.appendChild(frame);
       }
