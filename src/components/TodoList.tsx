import React from "react";
import { useTodo } from "../context/todo";
import { TodoCard } from "./TodoCard";

export const TodoList: React.FC = () => {
  const { todos } = useTodo();

  return (
    <div>
      {todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
