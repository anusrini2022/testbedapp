var express=require("express");
var router=express.Router();

router.get("/",function(req,res){
    if(req.session.userid)
{
res.render("index") ;   
}

else
{
    //res.send("Invalid Username");
    res.redirect("/");
}
//res.render("index");
//res.send("indexpage");
})
module.exports=router;