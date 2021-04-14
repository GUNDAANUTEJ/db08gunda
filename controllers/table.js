var table = require('../models/table');
// List of all tables
exports.table_list = async function(req, res) {
    try{
        thetable = await table.find();
        res.send(thetable);
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
    // {"Brand":"Brand1", "quality":"high", "cost":150}
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
exports.table_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await table.findById( req.params.id)
        // Do updates of properties
        if(req.body.Brand) toUpdate.Brand = req.body.Brand;
        if(req.body.quality) toUpdate.quality = req.body.quality;
        if(req.body.cost) toUpdate.cost = req.body.cost;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
    }
};


// VIEWS
// Handle a show all view
exports.table_view_all_Page = async function (req, res) {
    try {
        thetable = await table.find();
        res.render('table', { title: 'table Search Results', results: thetable });
    }
    catch(err) {
        res.error(500,`{"error": ${err}}`);
    }
};

// Handle table delete form on DELETE.
exports.table_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await table.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle a show one view with id specified by query
exports.table_view_one_Page = async function(req, res) {
    console.log("single view for id "  + req.query.id)
    try{
        result = await table.findById( req.query.id)
        res.render('tabledetail', { title: 'Table Detail', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.table_create_Page = function(req, res) {
    console.log("create view")
    try{
        res.render('tablecreate', { title: 'Table Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a table.
// query provides the id
exports.table_update_Page =  async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
        let result = await table.findById(req.query.id)
        res.render('tableupdate', { title: 'Table Update', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query
exports.table_delete_Page = async function(req, res) {
    console.log("Delete view for id "  + req.query.id)
    try{
        result = await table.findById(req.query.id)
        res.render('tabledelete', { title: 'Table Delete', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};