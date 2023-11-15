import React, { useState } from "react";
import "./App.css";
import Todos from "./components/Todos";
import { todosData } from "./todosData";
import AddTodo from "./components/AddTodo";
import { TodoType } from "./types";

function App() {
  const [todos, setTodos] = useState(todosData);

  //delete todo
  const handleDeleteTodo = (id: string) => {
    const filterTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filterTodos);
  };

  const handleAddNewTodo = (newTodo: TodoType) => {
    setTodos((prevState) => [...prevState, newTodo]);
  };
  return (
    <div>
      <AddTodo handleAddNewTodo={handleAddNewTodo} />
      <Todos todos={todos} handleDeleteTodo={handleDeleteTodo} />
    </div>
  );
}

export default App;
