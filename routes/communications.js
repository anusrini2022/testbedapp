var express = require("express");
var router = express.Router();
var path = require("path");
const { _router } = require("..");

router.get("/", function (req, res) {
   res.sendFile(path.join(__dirname, "../communications/communication.html"));
  
});

router.post("/", function (req, res) {
   res.end();
});


router.post("/ajax", function (req, res) {
   res.send("Form submitted using ajax method");
   console.log(req.body);
   
});

router.get("/fetch", function (req, res) {
   //res.send("Form submitted using fetch")
   res.json({ "method": "fetch" });
});
router.post("/fetch", function (req, res) {
   res.send((req.body["msg"]));
});
router.post("/axios", function (req, res) {
   //res.json(req.body["method"]);
   var data=req.body["method"];
   res.send(`Form submitted using ${data} method`);

})
router.post("/sendbeacon", function (req, res) {
   res.send("Form submitted using sendbeacon method");
})
router.post("/jquery", function (req, res) {
   var data = req.body["data"];
   res.send(`Form submitted using ${data} method`);
});

router.get("/window-open", function (req, res) {
   res.sendFile(path.join(__dirname, "../communications/window-open.html"));
});

router.get("/childwindow",function(req,res){
   res.sendFile(path.join(__dirname,"../communications/childwindow.html"));

});

module.exports = router;