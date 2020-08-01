const MySql = require("../mysql");
var mysql = new MySql("localhost", "root", "", "yourdatate");
class Books {
  constructor() {}
  get(req, res) {
    /* change table name and database to get a success result. */
    mysql.query("select * from table", resp => {
      res.json(resp);
    });
  }
  getwp(req, res) {
    res.json("all books. " + req.params.id);
  }
  update(req, res) {
    res.json({
      message: "updating..",
      data: req.body
    });
  }
  create(req, res) {
    res.json({
      message: "creating..",
      data: req.body
    });
  }
  delete(req, res) {
    res.json("delete books." + req.params.id);
  }
}

module.exports = Books;
