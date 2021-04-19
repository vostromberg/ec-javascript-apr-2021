module.exports = function(app){
    var itemController = require('../controllers/itemController');

    app.route("/")
        .get(itemController.getRoutes)

    app.route("/:area/")
        .get(itemController.getAll)
        .post(itemController.add);

    app.route("/:area/:id")
        .get(itemController.get)
        .put(itemController.update)
        .delete(itemController.delete);
}