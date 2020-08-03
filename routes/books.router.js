const express = require("express");
const router = express.Router();

const Books = require("../services/books")
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