const todoListRepo = require('../../data/todoListRepo');

module.exports = {
    getAll:(req, res) => {
        res.json(todoListRepo.getAll());
    },
    add:(req, res) => {
        const todo = req.body;
        if(!todo.title || todo.title === ""){
            res.status(500).send("Title is required")
        }
        else{
            res.json(todoListRepo.addTodo(todo))
        }
    },
    get:(req, res) => {
        const todo = todoListRepo.getTodo(req.params.id);
        if(todo){
        res.json(todo);
        }
        else{
            res.status(404).send("Could not find item with given id")
        }
    },
    update:(req,res) => {
        const updatedTodo = todoListRepo.updateTodo(req.params.id, req.body);
        if(updatedTodo){
            res.json(updatedTodo);
        }
         else{
            res.status(404).send("Could not find item with given id")
        }
    },
    delete:(req, res) => {
        const deletedTodo = todoListRepo.removeTodo(req.params.id);
        if(deletedTodo){
            res.json(deletedTodo);
        }
         else{
            res.status(404).send("Could not find item with given id")
        }
    }
}