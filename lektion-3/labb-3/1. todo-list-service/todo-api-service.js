/*
    Vi ska skapa en api-service som kommunicerar med api:et i todoListApi
    Följ instruktionerna i readme för att få igång api:et

    När api:et är igång kan du bygga klart funktionerna för att todo-api-servicen ska fungera.
    getTodos är redan implementerad som exempel.

    Använd fetch() för att hämta data

    För POST och PUT, behöver följande header anges för att JSON ska fungera:
    headers: 
    {
        "Content-Type": "application/json",
    },

*/
function createTodoApiService() {
  const apiAddress = "http://localhost:3001";

  return {
    getTodos: async () => {
      // GET api/todo
      const result = await fetch(`${apiAddress}/todo`);
      return await result.json();
    },
    getTodo: async (id) => {
      // GET api/todo/:id
      
    },
    createTodo: async (title, description) => {
      /* POST api/todo/
             body:
             {
                 title:string,
                 description:string (optional)
             }
        */
    },
    updateTodo: async (id, updatedTodo) => {
      /* PUT api/todo/:id
             body:
             {
                 id:string,
                 title:string,
                 description:string (optional),
                 completed:boolean
             }
        */
    },
    deleteTodo: async (id) => {
      // DELETE api/todo
    },
  };
}
