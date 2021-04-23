var express = require('express');
const table_controlers= require('../controllers/table');
var router = express.Router();
// A little function to check if we have an authorized user and continue on
// or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
req.session.returnTo = req.originalUrl;
res.redirect("/login");
}

/* GET tables */
router.get('/', table_controlers.table_view_all_Page );
module.exports = router;

/* GET detail table page */
router.get('/detail', table_controlers.table_view_one_Page);

/* GET create table page */
router.get('/create', table_controlers.table_create_Page);

/* GET create update page */
router.get('/update', secured, table_controlers.table_update_Page);

/* GET create Icecream page */
router.get('/delete', table_controlers.table_delete_Page);