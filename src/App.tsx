import React from "react";
import { TodoProvider } from "./context/todo";
import { TodoList } from "./components/TodoList";
import { NewTodo } from "./components/NewTodo";

function App() {
  return (
    <TodoProvider>
      <div className="d-flex justify-content-center">
        <div
          className="p-5 d-flex flex-column"
          style={{ maxWidth: "1150px", width: "80%" }}
        >
          <h1>TODO APP </h1>
          <NewTodo />
          <TodoList />
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
