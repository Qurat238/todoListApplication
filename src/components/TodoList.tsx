import React from "react";
import { Todo } from "../types/type";

type Props = {
  todos: Todo[];
  filter: string;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

const TodoList: React.FC<Props> = ({ todos, filter, toggleTodo, deleteTodo }) => {
  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });

  return (
    <ul>
      {filteredTodos.map((todo) => (
        <li key={todo.id} className="todoItem">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          {todo.title}
          <button className="button" onClick={() => deleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
