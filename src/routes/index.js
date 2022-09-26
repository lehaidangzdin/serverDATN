const express = require("express");
const router = express.Router();
const Book = require("./book.routes");
const Customer = require("./customer.routes");
router.get("/home", function (req, res, next) {
  res.json({
    user: "abc",
    name: "asdadwq qwdq",
  });
});
// router.use("/api", Book);
// router.use("/api", Customer);

module.exports = router;
