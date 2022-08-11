var express=require("express");
var router=express.Router();
var path=require("path");

//http://localhost:3001/media
router.get("/",function(req,res){
    res.sendFile(path.join(__dirname,"../media/videoaudio.html"));
 //res.send("Input Page");
   })

   //http://localhost:3001/media
router.get("/geolocations",function(req,res){
    res.sendFile(path.join(__dirname,"../media/geolocation.html"));
 //res.send("Input Page");
   })
   module.exports=router;