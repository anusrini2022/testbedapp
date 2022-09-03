var express = require("express");
const session = require("express-session");
var router = express.Router();

router.get("/", function (req, res) {
    sess = req.session;

    req.session.destroy();

    res.redirect("/");
    //res.render("logout");
    //res.send("indexpage");
})
module.exports = router;