const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
var mung = require('express-mung');
var Encryptor = require("./middleware/encryption");

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

var aes = new Encryptor()
const encrypted = false
app.use(mung.json((body, req, res) => {
  if (req.path != "/decrypt" && encrypted) {
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


var books = require('./routes/books.router')
var tests = require('./routes/tests.router')
app.use(books)
app.use(tests)

app.get("/", (req, res) => {
  res.json("Hello world.");
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}.`);
});