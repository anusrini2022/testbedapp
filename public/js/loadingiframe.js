
        function loadIframe(){
        //creating an iframe html element
        var frame=document.createElement("IFRAME");
        //setting attributes dynamically using setAttribute function
        frame.setAttribute("id","myframe");
        frame.setAttribute("src","content.html");
        //Appending  iframe in document
        document.body.appendChild(frame);
        }
        function removeIframe()
        {
            var myframe=document.getElementById("myframe");
            myframe.remove();
            
        }
    

  