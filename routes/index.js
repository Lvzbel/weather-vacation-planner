var express = require("express");
var router = express.Router();
require("dotenv").config();
const DARKSKY_API_KEY = process.env.DARK_SKY_API;
const axios = require("axios");
const path = require("path");

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "react-frontend/build")));

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
