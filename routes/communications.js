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
   res.send("Form submitted using ajax method")
   
});

// router.get("/fetch", function (req, res) {
//    //res.send("Form submitted using fetch")
//    res.json({ "method": "fetch" });
// });
router.post("/fetch", function (req, res) {
      console.log(req.body["msg"]);
      res.send((req.body["msg"]));
});
router.post("/axios", function (req, res) {
   res.json(req.body["method"]);

})
router.post("/sendbeacon", function (req, res) {
      res.send(req.body["method"]);
})
router.post("/jquery", function (req, res) {
   var data = req.body["data"];
   res.send(`Form submitted using ${data}`);
});

router.get("/window-open", function (req, res) {
   res.sendFile(path.join(__dirname, "../communications/window-open.html"));

});

module.exports = router;