const express = require("express");
const router = express.Router();
const CustomerController = require("../controller/customer.controller");

router.get("/customer", CustomerController.index);
router.get("/addCustomer", CustomerController.addCustomer);
router.get("/updateCustomer", CustomerController.updateCustomer);
router.get("/deleteCustomer", CustomerController.deleteCustomer);
router.get("/getAllCustomer", CustomerController.getAllCustomer);

module.exports = router;
