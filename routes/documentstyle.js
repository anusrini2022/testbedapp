var express=require("express");
var router=express.Router();
var path=require("path");
const app = require("..");

router.get("/",function(req,res){
res.sendFile(path.join(__dirname,"../styledocument/inlinestyle.html"));


});
router.get("/external",function(req,res){
    res.sendFile(path.join(__dirname,"../styledocument/externalstyle.html"));
    
    
    });

    router.get("/internal",function(req,res){
        res.sendFile(path.join(__dirname,"../styledocument/internalstyle.html"));
        
        
        });

        router.get("/thirdparty",function(req,res){
            res.sendFile(path.join(__dirname,"../styledocument/thirdpartystyle.html"));
            
            
            });
module.exports=router;