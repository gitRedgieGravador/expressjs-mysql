const MySql = require("../mysql");
var mysql = new MySql("localhost", "root", "", "migrator");
class Books {
    constructor() {}
    get(req, res) {
        mysql.query("select * from test", resp => {
            res.json(resp)
        })
    };
    getwp(req, res) {
        res.json("all books. " + req.params.id)
    };
    update(req, res) {
        res.json({
            message: "updating..",
            data: req.body
        })
    };
    create(req, res) {
        res.json({
            message: "creating..",
            data: req.body
        })
    };
    delete(req, res) {
        res.json("delete books." + req.params.id)
    };
}


module.exports = Books;