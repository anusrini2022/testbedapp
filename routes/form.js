var express = require("express");
var router = express.Router();
var path = require("path");

//http://localhost:3001/form
router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../form/submitform.html"));
    //res.send("Input Page");
})

router.get("/api", function(req,res){
    console.log("posting data");
//res.json({"status":"Success"});
});

router.post("/api", function(req,res){
    res.json({uname:"req.body[uname]"});
    });
//http://localhost:3001/form/userdet
router.post("/userdet", function (req, res) {
    //res.send(`<h3>Welcome ${req.body['uname']}</h3>`);
    res.json({uname:req.body["uname"]});
    console.log("posting data");
    console.log(req.body);

})

//http://localhost:3001/form/ajax
router.get("/ajax", function (req, res) {
    res.sendFile(path.join(__dirname, "../form/submitformajax.html"));
    //res.send("Input Page");
})


//http://localhost:3001/form/axios
router.get("/axios", function (req, res) {
    res.sendFile(path.join(__dirname, "../form/formsubmitaxios.html"));
    //res.send("Input Page");
})


//http://localhost:3001/form/jquery
router.get("/jquery", function (req, res) {
    res.sendFile(path.join(__dirname, "../form/jquerysubmitform.html"));
    //res.send("Input Page");
})


//http://localhost:3001/form/websocket
router.get("/websocket", function (req, res) {
    res.sendFile(path.join(__dirname, "../form/websocket.html"));
    //res.send("Input Page");
})
//http://localhost:3001/form/beacon
router.get("/beacon", function (req, res) {
    res.sendFile(path.join(__dirname, "../form/submitformbeacon.html"));
    //res.send("Input Page");
})


//http://localhost:3001/form/fetchapi
router.get("/fetchapi", function (req, res) {
    res.sendFile(path.join(__dirname, "../form/submitformfetchapi.html"));
    //res.send("Input Page");
})

module.exports = router;