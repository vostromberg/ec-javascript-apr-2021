module.exports = function(app){
    var todoListController = require('../controllers/todoListController');

    app.route("/todo/")
        .get(todoListController.getAll)
        .post(todoListController.add);

    app.route("/todo/:id")
        .get(todoListController.get)
        .put(todoListController.update)
        .delete(todoListController.delete);
}