var express=require("express");
var router=express.Router();
var path=require("path");


 //http://localhost:3001/iframe/
 router.get("/",function(req,res){
  res.sendFile(path.join(__dirname,"../public/iframe/iframe.html")) ;
 // console.log("iframe Page");
  //res.send("Iframe Page"); 
 })

 //http://localhost:3001/iframe/iframe
 router.get("/iframe",function(req,res){
   res.sendFile(path.join(__dirname,"../public/iframe/index.html")) ;
  // console.log("iframe Page");
   //res.send("Iframe Page"); 
  })
 
 //http://localhost:3001/iframe/loadingiframe
 router.get("/loadingiframe",function(req,res){
    res.sendFile(path.join(__dirname,"../public/iframe/loadingiframe.html")) ;
   // console.log("iframe Page");
    //res.send("Iframe Page"); 
   })

   //http://localhost:3001/iframe/hiddeniframe
 router.get("/hiddeniframe",function(req,res){
    res.sendFile(path.join(__dirname,"../public/iframe/hiddeniframe.html")) ;
   // console.log("iframe Page");
    //res.send("Iframe Page"); 
   })

    //http://localhost:3001/iframe/minimizediframe
   router.get("/minimizediframe",function(req,res){
    res.sendFile(path.join(__dirname,"../public/iframe/minimizediframe.html")) ;
   // console.log("iframe Page");
    //res.send("Iframe Page"); 
   })
   //http://localhost:3001/iframe/transparentiframe
   router.get("/transparentiframe",function(req,res){
    res.sendFile(path.join(__dirname,"../public/iframe/transparentiframe.html")) ;
   // console.log("iframe Page");
    //res.send("Iframe Page"); 
   })

module.exports=router;