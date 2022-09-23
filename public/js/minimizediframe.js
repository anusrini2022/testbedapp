      function minimizedIframe(){

        //The Iframe can be minimised by  reducing the  default width and height 
        var frame=document.createElement("IFRAME");
        frame.setAttribute("id","myframe");
        frame.setAttribute("src","sourcefile.html");
        frame.setAttribute("width","100px");
        frame.setAttribute("height","100px");
        document.body.appendChild(frame) ; 
        var framewidth=document.getElementById("myframe").width;
        var frameheight=document.getElementById("myframe").height;
         
      }

   