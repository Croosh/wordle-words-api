const express = require("express");
const common_words = require("./common_words.json");
const router = express.Router();

router.get("/", (req, res) => {
  const randomWord = getRandomCommonWord();
  return res.json(randomWord);
});

function getRandomCommonWord() {
  const randomIndex = Math.floor(Math.random() * common_words.length);
  return common_words[randomIndex];
}

module.exports = router;
