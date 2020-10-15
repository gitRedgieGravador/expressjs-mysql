const MySql = require("../mysql");
var mysql = new MySql();
module.exports = {
  get(req, res) {
    /* change table name and database to get a success result. */
    mysql.query("select * from test", resp => {
      res.json(resp);
    });
  },
  update(req, res) {
    res.json({
      message: "updating..",
      data: req.body
    });
  },
  create(req, res) {
    res.json({
      message: "creating..",
      data: req.body
    });
  },
  delete(req, res) {
    res.json("delete test.");
  }
}