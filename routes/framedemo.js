var express=require("express");
var router=express.Router();
var path=require("path");


router.get("/", function (req, res) {

  //res.setHeader("X-Frame-Options",'DENY');   
res.setHeader("Content-Security-Policy", "frame-ancestors 'none'");
//res.sendFile(path.join(__dirname,"../public/framedemo.html"));
res.render("csp/framedemo");
//        }

   
})
module.exports=router;