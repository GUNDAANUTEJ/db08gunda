var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var table_controller = require('../controllers/table');
const table = require('../models/table');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/table', table_controller.table_create_post);
// DELETE request to delete Costume.
router.delete('/table/:id', table_controller.table_delete);
// PUT request to update Costume.
router.put('/table/:id', table_controller.table_update_put);
// GET request for one Costume.
router.get('/table/:id', table_controller.table_detail);
// GET request for list of all Costume items.
router.get('/table', table_controller.table_list);
module.exports = router;