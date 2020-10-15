const express = require("express");
const router = express.Router();

const TEST = require("../services/test")
const AUTH = require('../middleware/authorization');

router.post('/test-get', TEST.get)
router.post('/test-create', TEST.create)
router.post('/test-update', TEST.update)
router.post('/test-delete', TEST.delete)

module.exports = router;