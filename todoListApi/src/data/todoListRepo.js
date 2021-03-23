const {v4: uuidv4} = require("uuid");
let todoList = [];

module.exports = {
  getAll: () => todoList,
  addTodo: (todo) => {
    const newTodo = {
      id: uuidv4(),
      title: todo.title,
      description: todo.description,
      completed: false,
      created: Date.now()
    };
    todoList = [...todoList, newTodo];
    return newTodo;
  },
  removeTodo: (id) => {
    const removedTodo = todoList.find((x) => x.id === id);
    if (removedTodo) {
      todoList = todoList.filter((x) => x.id != id);
      return removedTodo;
    } else {
      throw `Could not find todo with id ${id}`;
    }
  },
  updateTodo: (id, todo) => {
    todoList = todoList.map((x) => {
      if (x.id !== id) {
        return x;
      } else {
        return {
          ...x,
          ...todo,
          updated: Date.now()
        };
      }
    });
    return todoList.find((x) => x.id === id);
  },
  getTodo: (id) => {
    return todoList.find((x) => x.id === id);
  },
};
