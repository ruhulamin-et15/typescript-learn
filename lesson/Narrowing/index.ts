function printTodos(todos: string[] | null) {
  if (todos) {
    todos.map((todo) => console.log(todo));
  } else {
    console.log("no todos");
  }
}

const todos = ["todo1", "todo2"];
printTodos(null);
