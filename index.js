var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var cors = require("cors");
const res = require("express/lib/response");
const axios = require("axios");
const ejs = require("ejs");
var path = require("path");
const webSocket = require("ws");
var router = express.Router();

//session
var session = require("express-session");
var cookieParser = require("cookie-parser");


//websocket Connections
wss = new webSocket.Server({ port: 8081 });
wss.on("connection", function (ws) {
  console.log("new client connected");


  ws.on("message", function (data) {
    const res = JSON.parse(data);
    console.log("Client sent us  data :" + res.uname + res.email);
    ws.send(res.uname);
  });
});


//importing router modules
var loginRouter = require("./routes/login");
var logoutRouter = require("./routes/logout");
var registrationRouter = require("./routes/register");
var indexRouter = require("./routes/index");
var iframeRouter = require("./routes/iframe");
var inputRouter = require("./routes/input");
var javascriptRouter = require("./routes/javascript");
var keyboardRouter = require("./routes/keyboard");
var mediaRouter = require("./routes/media");
var scriptsrcRouter = require("./routes/csp/csp");
var framedemoRouter = require("./routes/framedemo");
var formRouter = require("./routes/form");
var workersRouter = require("./routes/workers");
var insecureddomRouter = require("./routes/insecureddom");
var documentstyleRouter = require("./routes/documentstyle.js");
var storageRouter = require("./routes/clientsidestorage.js");

// creating 24 hours from milliseconds
const oneDay = 1000 * 60 * 60 * 24;
var sess;
//session middleware
app.use(session({
  secret: "thisismysecrctekeyfuiuuuiiiu767",
  saveUninitialized: true,
  cookie: { maxAge: oneDay },
  resave: false
}));



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: ['application/json', 'application/csp-report'] }));

//middleware used to redirect routes to login page
const redirectLogin = function (req, res, next) {

  if (!req.session.userid) {
    res.redirect("/");
  }
  else {
    next();
  }

}

const redirectHome = function (req, res, next) {
  console.log("userId :" + req.session.userId);
  if (req.session.userid) {
    res.redirect("/");
  }
  else {
    console.log(req.session.userid);
    next();
  }

}

//indexpage routers
app.use("/", loginRouter);
app.use("/logout", redirectLogin, logoutRouter);
app.use("/index", redirectLogin, indexRouter);
app.use("/iframe", redirectLogin, iframeRouter);
app.use("/input", redirectLogin, inputRouter);
app.use("/csp", redirectLogin, scriptsrcRouter)
app.use("/javascript", redirectLogin, javascriptRouter)
app.use("/keyboard", redirectLogin, keyboardRouter)
app.use("/media", redirectLogin, mediaRouter)
app.use("/frame", redirectLogin, framedemoRouter);
app.use("/workers", redirectLogin, workersRouter);
app.use("/form", redirectLogin, formRouter);
app.use("/insecureddom", redirectLogin, insecureddomRouter);
app.use("/documentstyle", redirectLogin, documentstyleRouter);
app.use("/clientsidestorage", redirectLogin, storageRouter);
//app.use("/fontsrc",fontsrcRouter)





//static files
app.use(express.static("public"));
app.use(express.static("../iframe"));

app.use("/iframe", express.static(__dirname + "public/iframe"));
app.use("/img", express.static(__dirname + "public/images.png"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/script", express.static(__dirname + "public/script"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001/userdet");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

bodyParser.urlencoded({ extended: false });

//
app.listen(3001, function (req, res) {
  console.log("App started Listening ");
})
module.exports = app;
