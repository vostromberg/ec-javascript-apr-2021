async function init() {
  const apiService = createTodoApiService();
  const todoList = document.getElementById("todo-list");
  const todoForm = document.getElementById("todo-form");
  const buttonAddTodo = document.getElementById("button-add-todo");
  const buttonSaveTodo = document.getElementById("button-save-todo");
  const buttonDeleteTodo = document.getElementById("button-delete-todo");
  let todos = [];
  let selectedTodo;

  // Ta bort vald todo
  async function deleteTodo() {
    const promptResult = window.confirm(
      "Are you sure you want to delete this todo?"
    );
    if (promptResult) {
      //Ta bort från server om id finns
      if (selectedTodo.todo.id) {
        await apiService.deleteTodo(selectedTodo.todo.id);
      }
      todos = todos.filter((todo) => todo !== selectedTodo);
      selectedTodo = null;
      renderTodos();
      setFormVisibility(false);
    }
  }

  // visa eller dölj formuläret för att redigera en todo
  function setFormVisibility(visible) {
    if (visible) {
      todoForm.style.display = "initial";
    } else {
      todoForm.style.display = "none";
    }
  }

  // markera todo som vald
  async function selectTodo(todo) {
    if (selectedTodo) {
      // tar bort selected-klassen från nuvarande valt element
      selectedTodo.element.classList.remove("selected");
    }
    selectedTodo = todo;
    // lägger till selected-klassen till nya elementet
    selectedTodo.element.classList.add("selected");
    // uppdaterar formuläret med information från det nya elementet
    todoForm["title"].value = todo.todo.title;
    todoForm["description"].value = todo.todo.description;
    setFormVisibility(true);
    todoForm["title"].focus();
  }

  function createTodoListItem(todo) {
    //Skapar ett listobjekt som representerar todo-objektet
    const listItem = document.createElement("li");
    listItem.classList.add("todo-list-item");

    if (todo.id) {
      listItem.innerHTML = `
      <div class="info">
        <h3>${todo.title}</h3>
        ${todo.description ? `<p>${todo.description}</p>` : ""}
      </div>
      <input type="checkbox" ${todo.completed ? "checked" : ""} />`;
    } else {
      listItem.innerHTML = `<div class="info">
          <h3>${todo.title}</h3>
          ${todo.description ? `<p>${todo.description}</p>` : ""}
        </div>
        <input type="checkbox" ${todo.completed ? "checked" : ""} />`;
    }

    return listItem;
  }

  function addTodo() {
    const newTodo = {
      todo: {
        title: "New todo",
        description: "",
      },
    };
    newTodo.element = createTodoListItem(newTodo.todo);
    todos = [newTodo, ...todos];
    selectTodo(newTodo);
    renderTodos();
  }

  async function saveOrUpdateTodo() {
    const title = todoForm["title"].value;
    const description = todoForm["description"].value;
    let updatedTodo;
    // new todo
    if (!selectedTodo.todo.id) {
      updatedTodo = await apiService.createTodo(title, description);
    } else {
      updatedTodo = await apiService.updateTodo(selectedTodo.id, {
        ...selectedTodo,
        title,
        description,
      });
    }
    todos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          todo: updatedTodo,
          element: createTodoListItem(updatedTodo),
        };
      }
      return todo;
    });
    renderTodos();
    selectTodo(todos.find((todo) => todo.todo.id === updatedTodo.id));
    // return false förhindrar en sidomladdning vid submit av formulär
    return false;
  }

  // Hämtar todos och lägger in dem i en lista, tillsammans med tillhörande element
  async function getTodos() {
    const result = await apiService.getTodos();
    return result.map((todo) => {
      return {
        todo,
        element: createTodoListItem(todo),
      };
    });
  }

  function renderTodos() {
    todoList.innerHTML = "";
    todos.forEach((item) => {
      item.element.onclick = () => selectTodo(item);
      todoList.appendChild(item.element);
    });
  }

  buttonAddTodo.onclick = addTodo;
  buttonSaveTodo.onclick = saveOrUpdateTodo;
  buttonDeleteTodo.onclick = deleteTodo;
  todos = await getTodos();
  renderTodos();
}

init();
