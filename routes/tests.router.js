const express = require("express");
const router = express.Router();

const Test = require("../services/tests")
const Authorization = require('../middleware/authorization');
const auth = new Authorization();
const test = new Test();

router.route('/tests')
    //.all(auth.authorized) /* uncomment to restrick  unauthorized request. */
    .get(test.get)
    .post(test.create)
    .put(test.update)

router.route('/books/:id')
    .get(test.getwp)
    .delete(test.update)

module.exports = router;