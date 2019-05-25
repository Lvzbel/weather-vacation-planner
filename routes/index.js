var express = require("express");
var router = express.Router();
require("dotenv").config();
const DARKSKY_API_KEY = process.env.DARK_SKY_API;
const axios = require("axios");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.send(`${DARKSKY_API_KEY}`);
});

router.post("/weather", (req, res) => {
  const params = req.body;
  const time = params.time ? `,${params.time}` : "";
  const url = `https://api.darksky.net/forecast/${DARKSKY_API_KEY}/${
    params.lat
  },${params.long}${time}`;

  axios({
    url: url,
    responseType: "json"
  }).then(data => res.json(data.data));
});

module.exports = router;
