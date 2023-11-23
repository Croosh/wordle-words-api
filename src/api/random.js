const express = require("express");
const words = require("./data.json");
const router = express.Router();

router.get("/", (req, res) => {
  const randomWord = getRandomWord();
  return res.json(randomWord);
});

function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}

module.exports = router;
