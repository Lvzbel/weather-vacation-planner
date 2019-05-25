var express = require("express");
var router = express.Router();
require("dotenv").config();
const DARKSKY_API_KEY = process.env.DARK_SKY_API;

/* GET home page. */
router.get("/", function(req, res, next) {
  res.send(`${DARKSKY_API_KEY}`);
});

module.exports = router;
