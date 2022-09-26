const Customer = require("../models/db_config").customer;

class CustomerController {
  index(req, res) {
    res.send("index customer");
  }

  async addCustomer(req, res, next) {
    try {
      const result = await Customer.create({
        name: "Customer 002",
      });

      res.send(result);
    } catch (error) {
      console.log(error);
    }
  }
  async updateCustomer(req, res, next) {
    res.send("updateBook!");
  }
  async deleteCustomer(req, res, next) {
    try {
      const result = await Customer.destroy({
        where: {
          id: 2,
        },
      });

      if (result == 0) {
        res.send("ok");
      } else {
        res.send("not ok");
      }
    } catch (error) {
      console.log(error);
    }
  }
  async getAllCustomer(req, res, next) {
    const data = await Customer.findAll();
    res.send(data);
  }
}

module.exports = new CustomerController();
