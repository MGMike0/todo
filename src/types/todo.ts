export interface ITodo {
  description: string;
  done?: boolean;
  id: number;
}

export type TodoContextType = {
  todos: ITodo[];
  createTodo: (desc: string) => void;
  updateTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};
