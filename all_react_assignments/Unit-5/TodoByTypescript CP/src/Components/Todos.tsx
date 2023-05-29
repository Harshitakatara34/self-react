import React, { useEffect, useState } from "react";
import Add from "./Add";
import Todo from "./Todo";

type Todo = {
  title: string;
  description: string;
  status: boolean;
};

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAdd = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  const handleToggle = (index: number) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, status: !todo.status } : todo
      )
    );
  };

  return (
    <div>
      <Add onAdd={handleAdd} />
      {todos.map((todo, index) => (
        <Todo
          key={index}
          title={todo.title}
          description={todo.description}
          status={todo.status}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default Todos;
