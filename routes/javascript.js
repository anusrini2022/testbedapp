var express=require("express");
var router=express.Router();
var path=require("path");

//http://localhost:3001/javascript
router.get("/",function(req,res){
    res.sendFile(path.join(__dirname,"../javascript/main.html"));
 //res.send("Input Page");
   })

   router.get("/subresourceintegrity",function(req,res){
    res.sendFile(path.join(__dirname,"../javascript/sri.html"));
  
     });

     router.get("/nonce",function(req,res){
    //res.setHeader("Content-Security-Policy", "script-src 'none' 'nonce-bh123456'");
    res.sendFile(path.join(__dirname,"../javascript/nonce.html"));
    // res.render("csp/nonce");
    });
   module.exports=router;