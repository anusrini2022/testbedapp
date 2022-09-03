//document.write("This is Main Javascript File");
 
var para1= document.createElement("P");
para1.innerHTML="<h3>&nbsp;&lt;This is Main Javascript File</h3>";

function scriptLoad(src)
{
    
var script=document.createElement("script");
script.src=src;
document.body.append(para1);
document.head.append(script);

}

//passing the value of src as secondfile.js
function exteranlScriptLoad(){
scriptLoad("/javascript/secondfile.js");
}

//loading extenal file like bootstrap and jquery

function thirdpartyScriptLoad()
{
scriptLoad("https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js");
scriptLoad("https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/js/bootstrap.min.js");
}


