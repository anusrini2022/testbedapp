var express=require("express");
var router=express.Router();
var path=require("path");
const { _router } = require("..");

router.get("/",function(req,res){
   res.sendFile(path.join(__dirname,"../clientsidestorage/storage.html"));

});
router.get("/localstorage",function(req,res){

   res.sendFile(path.join(__dirname,"../clientsidestorage/localstorage.html"));

});
router.get("/data",function(req,res){

   res.sendFile(path.join(__dirname,"../clientsidestorage/data.json"));

});
router.get("/indexeddb",function(req,res){
   res.sendFile(path.join(__dirname,"../clientsidestorage/indexeddb.html"));

});

router.get("/cacheapi",function(req,res){
   res.sendFile(path.join(__dirname,"../clientsidestorage/cacheapi.html"));

});

router.get("/javascriptvariable",function(req,res){
   res.sendFile(path.join(__dirname,"../clientsidestorage/javascriptvariable.html"));

});

router.get("/domnodestorage",function(req,res){
   res.sendFile(path.join(__dirname,"../clientsidestorage/domnodestorage.html"));

});

router.get("/sessionstorage",function(req,res){
   res.sendFile(path.join(__dirname,"../clientsidestorage/sessionstorage.html"));

});
router.get("/cookie",function(req,res){
   res.sendFile(path.join(__dirname,"../clientsidestorage/cookie.html"));

});
router.get("/window-name",function(req,res){
   res.sendFile(path.join(__dirname,"../clientsidestorage/window-name.html"));

});

router.get("/window-open",function(req,res){
   res.sendFile(path.join(__dirname,"../clientsidestorage/window-open.html"));

});
router.get("/childwindow",function(req,res){
   res.sendFile(path.join(__dirname,"../clientsidestorage/childwindow.html"));

});
router.get("/filesystemaccessapi",function(req,res){
   res.sendFile(path.join(__dirname,"../clientsidestorage/filesystemaccessapi.html"));

});

router.get("/fileentriesapi",function(req,res){
   res.sendFile(path.join(__dirname,"../clientsidestorage/fileentriesapi.html"));

});


router.get("/websql",function(req,res){
   res.sendFile(path.join(__dirname,"../clientsidestorage/websql.html"));

});
module.exports=router;