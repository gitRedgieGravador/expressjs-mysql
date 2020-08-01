const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
router.use(bodyParser.urlencoded({
    extended: false
}));

router.use(bodyParser.json());
const Books = require("../controls/books")
const Authorization = require('../middleware/authorization');
const auth = new Authorization();
const book = new Books();

router.route('/books')
    //.all(auth.routeEnter, auth.authorized) /* uncomment to restrick  unauthorized request. */
    .get(book.get)
    .post(book.create)
    .put(book.update)

router.route('/books/:id')
    .get(book.getwp)
    .delete(book.update)

module.exports = router;