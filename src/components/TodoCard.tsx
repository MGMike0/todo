import React from "react";
import { ITodo } from "../types/todo";
import Button from "react-bootstrap/Button";
import CheckBox from "react-bootstrap/FormCheckInput";
import { useTodo } from "../context/todo";

interface TodoCardProps {
  todo: ITodo;
}

export const TodoCard: React.FC<TodoCardProps> = ({ todo }) => {
  const { updateTodo, deleteTodo } = useTodo();

  const handleChange = () => {
    updateTodo(todo.id);
  };
  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  const id = `Todo${todo.id}`;
  return (
    <div className="p-2 d-flex align-items-center justify-content-between border-start-0 border-top-0 border-end-0 border-bottom rounded">
      <div className="d-flex gap-2">
        <CheckBox id={id} onChange={handleChange} checked={todo.done} />
        <label
          htmlFor={id}
          className={`text-2xl font-bold ${todo.done ? "text-decoration-line-through" : ""}`}
        >
          {todo.description}
        </label>
      </div>
      <Button key={todo.id} onClick={handleDelete}>
        Delete
      </Button>
    </div>
  );
};
