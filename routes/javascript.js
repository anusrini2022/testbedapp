var express=require("express");
var router=express.Router();
var path=require("path");

//http://localhost:3001/javascript
router.get("/",function(req,res){
    res.sendFile(path.join(__dirname,"../javascript/index.html"));
 //res.send("Input Page");
   })
   module.exports=router;