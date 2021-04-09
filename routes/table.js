var express = require('express');
const table_controlers= require('../controllers/table');
var router = express.Router();

/* GET tables */
router.get('/', table_controlers.table_view_all_Page );
module.exports = router;