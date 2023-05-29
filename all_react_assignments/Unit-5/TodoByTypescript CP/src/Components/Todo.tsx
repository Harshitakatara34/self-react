import React from "react";

type TodoProps = {
  title: string;
  description: string;
  status: boolean;
  onToggle: () => void;
};

const Todo = ({ title, description, status, onToggle }: TodoProps) => {
  return (
    <div data-testid="todo-container">
      <h2 data-testid="todo-title">{title}</h2>
      <p data-testid="todo-desc">{description}</p>
      <input
        data-testid="todo-status"
        type="checkbox"
        checked={status}
        onChange={onToggle}
      />
    </div>
  );
};

export default Todo;
