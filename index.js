var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var cors = require("cors");
const res = require("express/lib/response");
const axios=require("axios");
const ejs=require("ejs");
var path= require("path");

//importing router modules
var indexRouter=require("./routes/index");
var iframeRouter=require("./routes/iframe");
var inputRouter=require("./routes/input");
var javascriptRouter=require("./routes/javascript");
var keyboardRouter=require("./routes/keyboard");
var mediaRouter=require("./routes/media");
var scriptsrcRouter=require("./routes/csp/csp");
var framedemoRouter=require("./routes/framedemo");
var formRouter=require("./routes/form");
var workersRouter=require("./routes/workers");
//var fontsrcRouter=require("./routes/csp/fontsrc");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.text());
app.use(bodyParser.json({type: ['application/json', 'application/csp-report']}));




//indexpage routers
app.use("/",indexRouter);
app.use("/iframe",iframeRouter);
app.use("/input",inputRouter);
app.use("/csp",scriptsrcRouter)
app.use("/javascript",javascriptRouter)
app.use("/keyboard",keyboardRouter)
app.use("/media",mediaRouter)
app.use("/frame",framedemoRouter);
app.use("/workers",workersRouter);
app.use("/form",formRouter);
//app.use("/fontsrc",fontsrcRouter)



//static files
app.use(express.static("public"));
  app.use(express.static("../iframe"));
   
  app.use("/iframe",express.static(__dirname+"public/iframe")); 
    app.use("/img",express.static(__dirname+"public/images.png"));
    app.use("/css",express.static(__dirname+"public/css"));
    app.use("/js",express.static(__dirname+"public/js"));
    app.use("/script",express.static(__dirname+"public/script"));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001/userdet");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

//videw engine set up
app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

bodyParser.urlencoded({ extended: false });

//http://localhost:3001/home
// app.get("/home",function(req,res){
//     res.sendFile(__dirname+'/index.html')
// })



// //http://localhost:3001/iframe/content
// app.get("/iframe/content",function(req,res){
//     res.sendFile(__dirname+"/iframe/content.html")  
//   })

//   //http://localhost:3001/iframe/hiddeniframe
// app.get("/iframe/hiddeniframe",function(req,res){
//     res.sendFile(__dirname+"/iframe/hiddeniframe.html")  
//   })

//    //http://localhost:3001/iframe/loadingiframe
// app.get("/iframe/loadingiframe",function(req,res){
//     res.sendFile(__dirname+"/iframe/loadingiframe.html")  
//   })

//   //http://localhost:3001/iframe/minimizediframe
// app.get("/iframe/minimizediframe",function(req,res){
//     res.sendFile(__dirname+"/iframe/minimizediframe.html")  
//   })

//   //http://localhost:3001/iframe/transparentiframe
// app.get("/iframe/transparentiframe",function(req,res){
//     res.sendFile(__dirname+"/iframe/transparentiframe.html")  
//   })
//   //http://localhost:3001/iframe/sourcefile
// app.get("/iframe/sourcefile",function(req,res){
//     res.sendFile(__dirname+"/iframe/sourcefile.html")  
//   })


//   //http://localhost:3001/input/hiddeninput
// app.get("/input/hiddeninput",function(req,res){
//   res.sendFile(__dirname+"/input/hiddeninput.html") ;
// })

// //http://localhost:3001/input/deleteinputs
// app.get("/input/deleteinputs",function(req,res){
//   res.sendFile(__dirname+"/input/deleteinputs.html") ;
// })


//   //http://localhost:3001/javascript/index
// app.get("/javascript/index",function(req,res){
//     res.sendFile(__dirname+"/javascript/index.html") ;
//   })
//   //http://localhost:3001/keyboard/keyboardevent
//   app.get("/keyboard/keyboardevent",function(req,res){
//     res.sendFile(__dirname+"/keyboard/keyboardevnt.html") ;
//   })

//    //http://localhost:3001/keyboard/gettextvalue
//    app.get("/keyboard/gettextvalue",function(req,res){
//     res.sendFile(__dirname+"/keyboard/gettextvalue.html") ;
//   })


//   //http://localhost:3001/keyboard/keyboardglobal
//   app.get("/keyboard/keyboardglobal",function(req,res){
//     res.sendFile(__dirname+"/keyboard/keyboardglobal.html") ;
//   })


//    //http://localhost:3001/media/videoaudio
//    app.get("/media/videoaudio",function(req,res){
//     res.sendFile(__dirname+"/media/videoaudio.html") ;
//   })

//  //http://localhost:3001/workers/webworkers/webworkers
//   app.get("/workers/webworkers/webworkers",function(req,res){
//     res.sendFile(__dirname+"/workers/webworkers/webworkers.html") ;
//   })

//   //http://localhost:3001/workers/webworkers/sharedworkers
//   app.get("/workers/webworkers/sharedworkers",function(req,res){
//     res.sendFile(__dirname+"/workers/webworkers/sharedworkers.html") ;
//   })

//   //http://localhost:3001/workers/serviceworkers/serviceworker
//   app.get("/workers/serviceworkers/serviceworker",function(req,res){
//     res.sendFile(__dirname+"/workers/serviceworker/serviceworker.html") ;
//   })

//   //http://localhost:3001/workers/worklets/audioworklet
//   app.get("/workers/worklets/audioworklet",function(req,res){
//     res.sendFile(__dirname+"/workers/worklets/audioworklet.html") ;
//   })
// //http://localhost:3001/
// app.get("/submitform", function (req, res) {
//     //res.send("homePage");
//     res.sendFile(__dirname + '/form/submitform.html');

// });


// //http://localhost:3001/ajax
// app.get("/ajax", function (req, res) {
//     //res.send("homePage");
//     res.sendFile(__dirname + '/form/submitformajax.html');

// });

// //http://localhost:3001/fetchapi
// app.get("/fetchapi",function(req,res){
//     res.sendFile(__dirname +"/form/submitformfetchapi.html")
// })

// //http://localhost:3001/jqueryform
// app.get("/jqueryform",function(req,res){

//     res.sendFile(__dirname+'/form/jquerysubmitform.html')
// });

// http://localhost:3001/axios
// app.get("/axios", function (req, res) {
//     //res.send("User Details");
//     res.sendFile(__dirname + '/form/formsubmitaxios.html');

// });

// http://localhost:3001/beacon
// app.get("/beacon",function(req,res){
//     res.sendFile(__dirname+'/form/submitformbeacon.html')
// })

// http://localhost:3001/userdet
// app.post("/userdet", function (req, res) {
//     console.log("posting Data");
//     console.log(req.body);

//     res.send(req.body);
// });

// http://localhost:3001/csp
// app.get("/csp",function(req,res){
//     res.setHeader("Content-Security-Policy", "script-src 'self'");
//     res.sendFile(__dirname+"/csp/scriptsrc.html")
// })

 app.listen(3001, function (req, res) {
    console.log("App started Listening ");
 })
module.exports=app;