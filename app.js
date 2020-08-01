const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
var mung = require('express-mung');
const MySql = require("./mysql");
var Encryptor = require("./middleware/encryption");

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

var aes = new Encryptor()

app.use(mung.json((body, req, res) => {
  console.log(req.path)
  if (req.path != "/decrypt") {
    res.json({
      cypher: aes.encrypt(body)
    })
  }
  return
}));

app.post("/decrypt", (req, res) => {
  var cypher = req.body.cypher
  console.log(cypher)
  res.json(aes.decrypt(cypher));
});


var routes = require('./routes/books.router')
app.use(routes)

app.get("/", (req, res) => {
  res.json("Hello world.");
});


var mysql = new MySql("localhost", "root", "", "migrator");
app.get("/:db/:table", (req, res) => {
  mysql.setDatabase(req.params.db);
  mysql.query(`select * from ${req.params.table}`, resp => {
    return res.json(resp);
  });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}.`);
});