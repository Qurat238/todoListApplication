import React, { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import TodoFilter from "./components/TodoFilter";
import { fetchTodos, saveTodos } from "./utils/localStorage";
import { Todo } from "./types/type";
import "./App.css";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<string>("all");


  useEffect(() => {
    fetchTodos().then((data) => {
      setTodos(data);
    });
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      saveTodos(todos);
    }
  }, [todos]);
  

  const addTodo = (title: string) => {
    if (!title.trim()) return;
    const newTask: Todo = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTodos([newTask, ...todos]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h2 className="heading">To-Do List</h2>
      <TodoForm addTodo={addTodo} />
      <TodoFilter setFilter={setFilter} />
      <TodoList todos={todos} filter={filter} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
