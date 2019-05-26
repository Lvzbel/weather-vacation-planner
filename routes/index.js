var express = require("express");
var router = express.Router();
const axios = require("axios");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const DARKSKY_API_KEY = process.env.DARK_SKY_API;

console.log(DARKSKY_API_KEY);

// Makes a request to the DarkSky API and returns info object

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
