import React, { useState } from "react";

type Props = {
  addTodo: (title: string) => void;
};

const TodoForm: React.FC<Props> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new task"
        style={{padding:"0.5rem"}}
      />
      <button className="button" type="submit">Add</button>
    </form>
  );
};

export default TodoForm;