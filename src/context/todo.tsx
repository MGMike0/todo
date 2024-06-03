import { createContext, useContext, useState } from "react";
import { ITodo, TodoContextType } from "../types/todo";

export const TodoContext = createContext<TodoContextType | null>(null);

export const TodoProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const createTodo = (description: string) => {
    const newTodo: ITodo = {
      done: false,
      description,
      id: Math.floor(Math.random() * 10000),
    };
    setTodos([newTodo, ...todos]);
  };

  const updateTodo = (id: number) => {
    const todoIndex = todos.findIndex((t) => t.id === id);
    if (todoIndex === -1) {
      return 0;
    }
    const todosCopy = [...todos];
    todosCopy[todoIndex].done = !todos[todoIndex].done;
    setTodos(todosCopy);
  };

  const deleteTodo = (id: number) => {
    const deletedIndex = todos.findIndex((t) => t.id === id);
    if (deletedIndex === -1) {
      return;
    }

    const todosCopy = [...todos];
    todosCopy.splice(deletedIndex, 1);
    setTodos(todosCopy);
  };

  return (
    <TodoContext.Provider value={{ createTodo, todos, updateTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("Context must be used inside TODO Context Provider");
  }
  return context;
};
