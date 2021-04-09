var table = require('../models/table');
// List of all tables
exports.table_list = async function(req, res) {
    try{
        thetables = await table.find();
        res.send(thetables);
    }
    catch(err){
        res.error(500,`{"error": ${err}}`);
    }
//res.send('NOT IMPLEMENTED: table list');
};
// for a specific table.
exports.table_detail = async function(req, res) {
    console.log("detail"  + req.params.id)
    try {
        result = await table.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle table create on POST.
exports.table_create_post = async function (req, res) {
    console.log(req.body)
    let document = new table();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"tabletype":"goat", "cost":12, "size":"large"}
    document.Brand = req.body.Brand;
    document.quality = req.body.quality;
    document.cost = req.body.cost;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.send(`{"error": ${err}}`)
        res.status(500);
    }
};
// Handle table delete form on DELETE.
exports.table_delete = function(req, res) {
res.send('NOT IMPLEMENTED: table delete DELETE ' + req.params.id);
};
// Handle table update form on PUT.
exports.table_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: table update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.table_view_all_Page = async function (req, res) {
    try {
        thetables = await table.find();
        res.render('table', { title: 'table Search Results', results: thetables });
    }
    catch(err) {
        res.error(500,`{"error": ${err}}`);
    }
};