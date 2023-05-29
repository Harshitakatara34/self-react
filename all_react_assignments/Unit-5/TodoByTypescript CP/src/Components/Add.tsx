import React, { useState } from "react";

type Todo = {
  title: string;
  description: string;
  status: boolean;
};

type AddProps = {
  onAdd: (todo: Todo) => void;
};

const Add = ({ onAdd }: AddProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTodo: Todo = { title, description, status: false };
    onAdd(newTodo);
    setTitle("");
    setDescription("");
  };

  return (
    <form data-testid="form" onSubmit={handleSubmit}>
      <input
        data-testid="title"
        type="text"
        id="title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <textarea
        data-testid="description"
        id="description"
        cols={30}
        rows={10}
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      ></textarea>
      <input type="submit" value="Create Todo" />
    </form>
  );
};

export default Add;
