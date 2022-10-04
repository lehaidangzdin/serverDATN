const express = require("express");
const router = express.Router();
const Book = require("./book.routes");
const Customer = require("./customer.routes");
const user = require("./user.router");

router.use("/api", Book);
router.use("/api", Customer);
router.use("/auth",user)

module.exports = router;
