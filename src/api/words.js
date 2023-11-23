const express = require("express");
const words = require("./data.json");
const router = express.Router();

router.get("/", (req, res) => {
  return res.json(words);
});

module.exports = router;
