const itemRepo = require('../../data/itemRepo');

module.exports = {
    getRoutes:(req,res) => {
        res.json(itemRepo().getRoutes());
    },
    getAll:(req, res) => {
        res.json(itemRepo(req.params.area).getAll());
    },
    add:(req, res) => {
        const item = req.body;
        if(!item){
            res.status(500).send("Cannot create empty items")
        }
        else{
            res.json(itemRepo(req.params.area).addItem(item))
        }
    },
    get:(req, res) => {
        const item = itemRepo(req.params.area).getItem(req.params.id);
        if(item){
        res.json(item);
        }
        else{
            res.status(404).send("Could not find item with given id")
        }
    },
    update:(req,res) => {
        const updatedItem = itemRepo(req.params.area).updateItem(req.params.id, req.body);
        if(updatedItem){
            res.json(updatedItem);
        }
         else{
            res.status(404).send("Could not find item with given id")
        }
    },
    delete:(req, res) => {
        const deletedItem = itemRepo(req.params.area).removeItem(req.params.id);
        if(deletedItem){
            res.json(deletedItem);
        }
         else{
            res.status(404).send("Could not find item with given id")
        }
    }
}