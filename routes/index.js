var express=require("express");
const index = require("../index");
var router=express.Router();



router.get("/",function(req,res){
    //res.send("redirecting");
    res.render("index");
});
//     if(req.session.userid)
// {
// res.render("index") ;   
// }

// else
// {
//     //res.send("Invalid Username");
//     res.redirect("/");
// }
// //res.render("index");
// //res.send("indexpage");
// })
module.exports=router;