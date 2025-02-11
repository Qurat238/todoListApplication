import { Todo } from "../types/type";

export const fetchTodos = async (): Promise<Todo[]> => {
  const savedTodos = localStorage.getItem("todos");
  if (savedTodos) {
    return JSON.parse(savedTodos);
  } else {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=20");
    const todos: Todo[] = await response.json();
    localStorage.setItem("todos", JSON.stringify(todos));
    return todos;
  }
};

export const saveTodos = (todos: Todo[]) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};
