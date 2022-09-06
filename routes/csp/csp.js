
var express = require("express");
var router = express.Router();
var path = require("path");
var title = "scriptsrc";
var obj = { dir: "", csp: "", title: title, msg: "", header: "" };
router.get("/", function (req, res) {
  res.render("csp/csp.ejs", obj);

})

router.get("/reporturi", function (req, res) {

  res.send("reporturi");

});

router.post("/reporturi", function (req, res) {


  var refr = req.body["referrer"];
  var policy = req.body["policy"];
  var documenturi = req.body["documenturi"];
  var blockeduri = req.body["blockeduri"];
  var violdir = req.body["violdir"];
  var effdir = req.body["effdir"];
  var dispos = req.body["dispos"];
  var status = req.body["status"];

  var cspdir = { policy: policy, documenturi: documenturi, refr: refr, blockeduri: blockeduri, violdir: violdir, effdir: effdir, dispos: dispos, status: status };


  res.render("csp/reporturi", cspdir);
});

router.get("/reportto", function (req, res) {

  res.send("reporturi");
});

router.post("/reportto", function (req, res) {
  res.send("posting policy toreporturi");


  res.send("posting policy data");
});
router.get("/scriptsrc", function (req, res) {
  var obj = { dir: "", csp: "", title: title, msg: "", header: "" };
  var header = "";
  res.render("csp/scriptsrc", obj)
});

router.get("/scriptsrc/dir", function (req, res) {
  var dir = req.query["dir"];
  var csp = req.query["csp"]
  var title = "Scriptsrc"
 
  if (dir == "scriptsrc" && csp == "off") {
    title = "scriptsrcwithoutcsp";
    obj = { dir: dir, csp: csp, title: title, msg: "csp is off", header: header };

    res.render("csp/scriptsrc", obj)
  }
  else if (dir == "scriptsrc" && csp == "on") {
    title = "scriptsrcwithcsp";
    var header = "script-src 'self'";
    obj = { dir: dir, csp: csp, msg: "csp is on", header: header, title: title };

    res.setHeader("Content-Security-Policy", "script-src 'self' 'unsafe-inline'");

    res.render("csp/scriptsrc", obj);
  }
  else if (dir == "unsafeinline" && csp == "on") {
    var header = "script-src  'unsafe-inline'";
    var title = "script-srcunsafeinline";
    obj = { dir: dir, csp: csp, title: title, msg: "csp is on", header: header };

    res.setHeader("Content-Security-Policy", "script-src 'self' 'unsafe-inline'");
    res.render("csp/scriptsrc", obj);
  }
  else if (dir == "nonce" && csp == "on") {
    var header = "script-src  'nonce-bh3097129'";
    var title = "script-srcnonce";
    obj = { dir: dir, csp: csp, msg: "csp is on", title: title, header: header };

    res.setHeader("Content-Security-Policy", "script-src 'self' 'nonce-bh3097129'");
    res.render("csp/scriptsrc", obj);
  }
})

router.get("/fontsrc", function (req, res) {

  var obj = { dir: "", csp: "", title: title, msg: "", header: "", title: title };
  var header = "";
  var title = "fontsrc";
  res.render("csp/fontsrc", obj)
});

router.get("/fontsrc/dir", function (req, res) {
  var dir = req.query["dir"];
  var csp = req.query["csp"];
  
  if (dir == "fontsrc" && csp == "off") {

   var obj = { dir: dir, csp: csp, title: title, msg: "csp is off", header: "" };
    res.render("csp/fontsrc", obj);
  }

  else if (dir == "fontsrc" && csp == "on") {

    //res.send("csp is on");
    var header = "font-src 'self'";
    var obj = { dir: dir, csp: csp, msg: "csp is off", title: title, header: header };
    res.setHeader("Content-Security-Policy", "font-src 'self'");
    res.render("csp/fontsrc", obj);
  }


})

router.get("/imgsrc", function (req, res) {
  //res.send("Imagesrc Page");
  var obj = { dir: "", csp: "", msg: "", header: "" };
  var header = "";
  res.render("csp/imgsrc", obj)
});


router.get("/imgsrc/dir", function (req, res) {
  var dir = req.query["dir"];
  var csp = req.query["csp"];
 var msg = "csp is off"
  var obj = { dir: dir, csp: csp, msg: msg, header: "" };
  if (dir == "imgsrc" && csp == "off") {
    res.render("csp/imgsrc", obj);
  }

  else if (dir == "imgsrc" && csp == "on") {
    //res.send("csp is on");
    var msg = "csp is on";
    var header = "img-src 'none'";
    var obj = { dir: dir, csp: csp, msg: msg, header: header };
    res.setHeader("Content-Security-Policy", "img-src 'none'");
    res.render("csp/imgsrc", obj);

  }

});

router.get("/stylesrc", function (req, res) {
  //res.send("Imagesrc Page");
  var obj = { dir: "", csp: "", msg: "", header: "" };
  var header = "";
  res.render("csp/stylesrc", obj)
});
router.get("/stylesrc/dir", function (req, res) {

  var dir = req.query["dir"];
  var csp = req.query["csp"];
  var msg = "csp is off"
  var obj = { dir: dir, csp: csp, msg: msg, header: "" };
  if (dir == "stylesrc" && csp == "off") {
    res.render("csp/stylesrc", obj);
  }

  else if (dir == "stylesrc" && csp == "on") {
    //res.send("csp is on");
    var header = "style-src 'self'";
    var obj = { dir: dir, csp: csp, msg: msg, header: header };
    res.setHeader("Content-Security-Policy", "style-src 'self'  cdn.jsdelivr.net");
    res.render("csp/stylesrc", obj);

  }
});

router.get("/framesrc", function (req, res) {
  var obj = { dir: "", csp: "", msg: "", header: "" };
  res.render("csp/framesrc", obj);

})
router.get("/framesrc/dir", function (req, res) {
  var dir = req.query["dir"];
  var csp = req.query["csp"];

   if (dir == "framesrc" && csp == "off") {
    var msg = "csp is off"
    var obj = { dir: dir, csp: csp, msg: msg, header: "" };
    res.render("csp/framesrc", obj);
  }

  else if (dir == "framesrc" && csp == "on") {
       var header = "frame-src 'none'";
    var obj = { dir: dir, csp: csp, msg: msg, header: header };
    res.setHeader("Content-Security-Policy", "frame-src 'none'");
    res.render("csp/framesrc", obj);

  }
});

router.get("/frameancestors", function (req, res) {
  var obj = { dir: "", csp: "", msg: "", header: "" };
  res.render("csp/frameancestors", obj);

})

router.get("/frameancestors/dir", function (req, res) {
  var dir = req.query["dir"];
  var csp = req.query["csp"];
  
  if (dir == "frameancestors" && csp == "off") {
    var msg = "csp is off"
    var obj = { dir: dir, csp: csp, msg: msg, header: "" };
    res.render("csp/frameancestors", obj);
  }

  else if (dir == "frameancestors" && csp == "on") {
    var msg = "csp is on"
    var obj = { dir: dir, csp: csp, msg: msg, header: "" };
    res.render("csp/frameancestors", obj);

  }

});

router.get("/mediasrc", function (req, res) {
  var obj = { dir: "", csp: "", msg: "", header: "" };
  var header = "";
  res.render("csp/mediasrc", obj)
})
router.get("/mediasrc/dir", function (req, res) {
  var dir = req.query["dir"];
  var csp = req.query["csp"];
  
  if (dir == "mediasrc" && csp == "off") {
    var msg = "csp is off"
    var obj = { dir: dir, csp: csp, msg: msg, header: "" };
    res.render("csp/mediasrc", obj);
  }

  else if (dir == "mediasrc" && csp == "on") {
    var header = "media-src 'none'";
    var obj = { dir: dir, csp: csp, msg: msg, header: header };
    res.setHeader("Content-Security-Policy", "media-src 'none'");
    res.render("csp/mediasrc", obj);

  }

});

router.get("/objectsrc", function (req, res) {
  var obj = { dir: "", csp: "", msg: "", header: "" };
  var header = "";
  res.render("csp/objectsrc", obj)
})
router.get("/objectsrc/dir", function (req, res) {
  var dir = req.query["dir"];
  var csp = req.query["csp"];
   if (dir == "objectsrc" && csp == "off") {
    var msg = "csp is off"
    var obj = { dir: dir, csp: csp, msg: msg, header: "" };
    res.render("csp/objectsrc", obj);
  }

  else if (dir == "objectsrc" && csp == "on") {
    var header = "object-src 'none'";
    var obj = { dir: dir, csp: csp, msg: msg, header: header };
    res.setHeader("Content-Security-Policy", "object-src 'none'");
    res.render("csp/objectsrc", obj);

  }

});


router.get("/formaction", function (req, res) {
  var obj = { dir: "", csp: "", msg: "", header: "" };
  var header = "";
  res.render("csp/formaction", obj)
})
router.get("/formaction/dir", function (req, res) {
  var dir = req.query["dir"];
  var csp = req.query["csp"];
 
  if (dir == "formaction" && csp == "off") {
    var msg = "csp is off"
    var obj = { dir: dir, csp: csp, msg: msg, header: "" };
    res.render("csp/formaction", obj);
  }

  else if (dir == "formaction" && csp == "on") {

    var msg = "csp is on"
    var header = "form-action 'none'";
    var obj = { dir: dir, csp: csp, msg: msg, header: header };
    res.setHeader("Content-Security-Policy", "form-action 'none'");
    res.render("csp/formaction", obj);
  }

});

router.get("/reportonly", function (req, res) {
  var obj = { dir: "", csp: "", msg: "", header: "" };
  var header = "";
  res.render("csp/reportonly", obj)
})
router.get("/reportonly/dir", function (req, res) {
  var dir = req.query["dir"];
  var csp = req.query["csp"];
    if (dir == "reportonly" && csp == "off") {
    var msg = "csp is off"
    var obj = { dir: dir, csp: csp, msg: msg, header: "" };
    res.render("csp/reportonly", obj);
  }
  else if (dir == "reportonly" && csp == "on") {
    var msg = "csp is on"
    var header = "Content-Security-Policy-Report-only, form-action 'none'";
    var obj = { dir: dir, csp: csp, msg: msg, header: header };
    res.setHeader("Content-Security-Policy-Report-Only", "form-action 'none'; report-uri http://localhost:3001/csp/reporturi ");
    res.render("csp/reportonly", obj);
  }
});


router.get("/navigateto", function (req, res) {
  var obj = { dir: "", csp: "", msg: "", header: "" };
  var header = "";
  res.render("csp/navigate", obj);

})
router.get("/navigateto/dir", function (req, res) {
  var dir = req.query["dir"];
  var csp = req.query["csp"];
  
  if (dir == "navigateto" && csp == "off") {
    var msg = "csp is off"
    var obj = { dir: dir, csp: csp, msg: msg, header: "" };
    res.render("csp/navigate", obj);
  }

  else if (dir == "navigateto" && csp == "on") {

    var msg = "csp is on"
    var header = "navigate-to 'self'";
    var obj = { dir: dir, csp: csp, msg: msg, header: header };
    res.setHeader("Content-Security-Policy", "navigate-to 'none'");
    res.render("csp/navigate", obj);


  }


});

router.get("/workersrc", function (req, res) {
  var obj = { dir: "", csp: "", msg: "", header: "" };
  var header = "";
  res.render("csp/workersrc", obj)
})
router.get("/workersrc/dir", function (req, res) {
  var dir = req.query["dir"];
  var csp = req.query["csp"];
  
  if (dir == "workersrc" && csp == "off") {
    var msg = "csp is off"
    var obj = { dir: dir, csp: csp, msg: msg, header: "" };
    res.render("csp/workersrc", obj);
  }

  else if (dir == "workersrc" && csp == "on") {

    var msg = "csp is on"
    var header = "worker-src 'none'";
    var obj = { dir: dir, csp: csp, msg: msg, header: header };
    res.setHeader("Content-Security-Policy", "worker-src 'none'");
    res.render("csp/workersrc", obj)

  }

});

router.post("/userdet", function (req, res) {

  res.send("posting data")
})



router.get("/sandbox", function (req, res) {
  var msg = "sandbox";
  title = "Sandboxhomepage";
  var obj = { dir: "", csp: "", msg: msg, header: "", title: title };
  var header = "";

  res.render("csp/sandbox", obj)
})
router.get("/sandbox/dir", function (req, res) {
  var dir = req.query["dir"];
  var csp = req.query["csp"];
  var title = "allow-script";
  
  if (dir == "sandbox" && csp == "off") {
    var msg = "csp is off"
    var title = "allow-script without csp";
    var obj = { dir: dir, csp: csp, msg: msg, header: "", title: title };

    res.render("csp/sandbox", obj);
  }

  else if (dir == "sandbox" && csp == "on") {
   
    var msg = "csp is on"
    var header = "Content-Security-Policy,sandbox";
    var title = "allow-script with csp";
    var obj = { dir: dir, csp: csp, msg: msg, header: header, title: title };
    res.setHeader("Content-Security-Policy", "sandbox");

    res.render("csp/sandbox", obj);

  }

  else if (dir == "sandboxallow" && csp == "on") {
    var msg = "csp is on"
    header = "Content-Security-Policy, sandbox allow-scripts";
    var title = "allow-scripts with csp&sandbox";
    var obj = { dir: dir, csp: csp, msg: msg, header: header, title: title };
    res.setHeader("Content-Security-Policy", "sandbox allow-scripts");
    res.render("csp/sandbox", obj);
  }



});


router.get("/sandbox/sameorgindir", function (req, res) {
  var dir = req.query["dir"];
  var csp = req.query["csp"];
  var title = "same-orgin with out csp";

  if (dir == "sameorgindir" && csp == "off") {
    var msg = "sameorgindir";
    var title = "same-orgin without csp";
    var obj = { dir: dir, csp: csp, msg: msg, header: "", title: title };
    res.render("csp/sandbox", obj);
  }

  else if (dir == "sameorgindir" && csp == "on") {
    var msg = "csp is on"
    var header = "Content-Security-Policy,sandbox ";
    var title = "same-origin with csp sandbox";
    var obj = { dir: dir, csp: csp, msg: msg, header: header, title: title };
    res.setHeader("Content-Security-Policy", "sandbox");
    res.render("csp/sandbox", obj);

  }

  else if (dir == "sandboxsameorgindir" && csp == "on") {
    var msg = "csp is on"
    header = "Content-Security-Policy,sandbox allow-same-orgin";
    var title = "same-orgin with csp&sandbox";
    var obj = { dir: dir, csp: csp, msg: msg, header: header, title: title };
    res.setHeader("Content-Security-Policy", "sandbox  allow-scripts allow-same-origin");
    res.render("csp/sandbox", obj);
  }
});


router.get("/sandbox/allowformdir", function (req, res) {
  var dir = req.query["dir"];
  var csp = req.query["csp"];
  (dir);
  (csp);



  if (dir == "allowformdir" && csp == "off") {
    var msg = "allowformdir";
    var title = "allowform with out csp";
    var obj = { dir: dir, csp: csp, msg: msg, header: header, title: title };
    res.render("csp/sandbox", obj);
  }

  else if (dir == "allowformdir" && csp == "on") {
   var msg = "csp is on"
    var header = "Content-Security-Policy,sandbox ";
    var title = "allowform with csp";
    var obj = { dir: dir, csp: csp, msg: msg, header: header, title: title };
    res.setHeader("Content-Security-Policy", "sandbox");

    res.render("csp/sandbox", obj);

  }
  else if (dir == "sandboxallowformdir" && csp == "on") {
    var msg = "csp is on"
    var header = "Content-Security-Policy,sandbox allow-forms ";
    var title = "allowform with csp";
    var obj = { dir: dir, csp: csp, msg: msg, header: header, title: title };
    res.setHeader("Content-Security-Policy", "sandbox allow-forms");

    res.render("csp/sandbox", obj);

  }
});

router.get("/sandbox/topnavdir", function (req, res) {
  var dir = req.query["dir"];
  var csp = req.query["csp"];
  var title = "topnav without csp";
  (dir);
  (csp);



  if (dir == "topnavdir" && csp == "off") {
    var msg = "allowformdir";
    var title = "topnav without csp";
    var obj = { dir: dir, csp: csp, msg: msg, header: "", title: title };
    res.render("csp/sandbox", obj);
  }

  else if (dir == "topnavdir" && csp == "on") {
   var msg = "csp is on";
    var title = "topnav with csp";
    var header = "Content-Security-Policy,sandbox ";
    var obj = { dir: dir, csp: csp, msg: msg, header: header, title: title };
    res.setHeader("Content-Security-Policy", "sandbox");

    res.render("csp/sandbox", obj);

  }

  else if (dir == "sandboxtopnavdir" && csp == "on") {
    var msg = "csp is on";
    var title = "topnav with csp";
    var header = "Content-Security-Policy, sandbox allow-top-navigation ";
    var obj = { dir: dir, csp: csp, msg: msg, header: header, title: title };
    res.setHeader("Content-Security-Policy", "sandbox allow-top-navigation");

    res.render("csp/sandbox", obj);

  }
});

router.get("/sandbox/popupdir", function (req, res) {
  var dir = req.query["dir"];
  var csp = req.query["csp"];
  var title = "popup without csp";
 
  if (dir == "popupdir" && csp == "off") {
    var msg = "popupdir";
    var title = "popup without csp";
    var obj = { dir: dir, csp: csp, msg: msg, header: "", title: title };
    res.render("csp/sandbox", obj);
  }

  else if (dir == "popupdir" && csp == "on") {
    var msg = "csp is on"
    var header = "Content-Security-Policy,sandbox ";
    var title = "popup with csp";
    var obj = { dir: dir, csp: csp, msg: msg, header: header, title: title };
    res.setHeader("Content-Security-Policy", "sandbox");

    res.render("csp/sandbox", obj);

  }

  else if (dir == "sandboxpopupdir" && csp == "on") {
    var msg = "csp is on"
    var header = "Content-Security-Policy, sandbox allow-popups";
    var title = "popup with csp";
    var obj = { dir: dir, csp: csp, msg: msg, header: header, title: title };
    res.setHeader("Content-Security-Policy", "sandbox allow-popups");

    res.render("csp/sandbox", obj);

  }
});

router.get("/sandbox/allowdownloaddir", function (req, res) {
  var dir = req.query["dir"];
  var csp = req.query["csp"];
  
  if (dir == "allowdownloaddir" && csp == "off") {
    var msg = "allowdownloaddir";
    var title = "allowdownloaddirwithoutcsp";
    var obj = { dir: dir, csp: csp, msg: msg, header: "", title: title };
    res.render("csp/sandbox", obj);
  }

  else if (dir == "allowdownloaddir" && csp == "on") {
    var msg = "csp is on"
    var header = "Content-Security-Policy,sandbox ";
    var title = "allowdownloadwithcsp";
    var obj = { dir: dir, csp: csp, msg: msg, header: header, title: title };
    res.setHeader("Content-Security-Policy", "sandbox");

    res.render("csp/sandbox", obj);

  }

  else if (dir == "sandboxallowdownloaddir" && csp == "on") {
     var msg = "csp is on"
    var header = "Content-Security-Policy, sandbox allow-downloads";
    var title = "allowdownloadwithsandbox";
    var obj = { dir: dir, csp: csp, msg: msg, header: header, title: title };
    res.setHeader("Content-Security-Policy", "sandbox allow-scripts allow-same-origin allow-downloads");

    res.render("csp/sandbox", obj);

  }
});

router.get("/sandbox/allowmodaldir", function (req, res) {
  var dir = req.query["dir"];
  var csp = req.query["csp"];
  
  if (dir == "allowmodaldir" && csp == "off") {
    var msg = "allowmodaldir";
    var title = "allowmodaldirwithoutcsp";
    var obj = { dir: dir, csp: csp, msg: msg, header: "", title: title };
    res.render("csp/sandbox", obj);
  }

  else if (dir == "allowmodaldir" && csp == "on") {
    var msg = "csp is on"
    var header = "Content-Security-Policy,sandbox ";
    var title = "allowmodalwithcsp";
    var obj = { dir: dir, csp: csp, msg: msg, header: header, title: title };
    res.setHeader("Content-Security-Policy", "sandbox");

    res.render("csp/sandbox", obj);

  }

  else if (dir == "sandboxallowmodaldir" && csp == "on") {
    var msg = "csp is on"
    var header = "Content-Security-Policy, sandbox allow-modal";
    var title = "allowmodalwithsandbox";
    var obj = { dir: dir, csp: csp, msg: msg, header: header, title: title };
    res.setHeader("Content-Security-Policy", "sandbox allow-scripts allow-modals");

    res.render("csp/sandbox", obj);

  }
});

router.get("/sandbox/useractivation", function (req, res) {
  var dir = req.query["dir"];
  var csp = req.query["csp"];
  (dir);
  (csp);



  if (dir == "useractivation" && csp == "off") {
    var msg = "useractivation";
    var title = "useractivationwithoutcsp";
    var obj = { dir: dir, csp: csp, msg: msg, header: "", title: title };
    res.render("csp/sandbox", obj);
  }

  else if (dir == "useractivation" && csp == "on") {
    var msg = "csp is on"
    var header = "Content-Security-Policy,sandbox ";
    var title = "useractivationwithcsp";
    var obj = { dir: dir, csp: csp, msg: msg, header: header, title: title };
    res.setHeader("Content-Security-Policy", "sandbox");
    res.render("csp/sandbox", obj);

  }

  else if (dir == "sandboxuseractivation" && csp == "on") {
    var msg = "csp is on"
    var header = "Content-Security-Policy, sandbox allow-modal";
    var title = "useractivationwithsandbox";
    var obj = { dir: dir, csp: csp, msg: msg, header: header, title: title };
    res.setHeader("Content-Security-Policy", "sandbox allow-scripts allow-same-origin allow-downloads allow-downloads-without-user-activation");
    res.render("csp/sandbox", obj);

  }
});

router.get("/sandbox/escapesandboxdir", function (req, res) {
  var dir = req.query["dir"];
  var csp = req.query["csp"];
  (dir);
  (csp);



  if (dir == "escapesandbox" && csp == "off") {
    var msg = "escapesandbox";
    var title = "escapesandboxwithoutcsp";
    var obj = { dir: dir, csp: csp, msg: msg, header: "", title: title };
    res.render("csp/sandbox", obj);
  }

  else if (dir == "escapesandbox" && csp == "on") {
    var msg = "csp is on"
    var header = "Content-Security-Policy,sandbox ";
    var title = "escapesandboxwithcsp";
    var obj = { dir: dir, csp: csp, msg: msg, header: header, title: title };
    res.setHeader("Content-Security-Policy", "sandbox");

    res.render("csp/sandbox", obj);

  }

  else if (dir == "sandboxescape" && csp == "on") {
    var msg = "csp is on"
    var header = "Content-Security-Policy, sandbox allow-popups-to-escape-sandbox";
    var title = "escapesandbox";
    var obj = { dir: dir, csp: csp, msg: msg, header: header, title: title };
    res.setHeader("Content-Security-Policy", "sandbox  allow-popups-to-escape-sandbox ");
    res.render("csp/sandbox", obj);

  }
});



module.exports = router;