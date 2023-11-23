const express = require("express");
const random = require("./random");
const common_random = require("./common-random");
const common_words = require("./common-words");
const words = require("./words");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Random Wordle Words API ",
  });
});

router.use("/random", random);
router.use("/common-random", common_random);
router.use("/common-words", common_words);
router.use("/words", words);

module.exports = router;
