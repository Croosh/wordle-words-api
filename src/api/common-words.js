const express = require("express");
const common_words = require("./common_words.json");
const router = express.Router();

router.get("/", (req, res) => {
  return res.json(common_words);
});

module.exports = router;
