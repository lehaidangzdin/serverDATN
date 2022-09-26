const express = require("express");
const router = express.Router();
const Book = require("./book.routes");
const Customer = require("./customer.routes");

router.use("/api",Book);
router.use("/api",Customer);


module.exports = router;
