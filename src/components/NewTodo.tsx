import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useTodo } from "../context/todo";

export const NewTodo: React.FC = () => {
  const [value, setValue] = useState("");

  const { createTodo } = useTodo();

  const handleCreate = () => {
    createTodo(value);
    setValue("");
  };

  return (
    <div className="d-flex gap-5 p-5">
      <Form.Control
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Enter Todo"
      />
      <Button onClick={handleCreate}>Create</Button>
    </div>
  );
};
