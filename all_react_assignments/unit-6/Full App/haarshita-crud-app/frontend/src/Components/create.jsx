import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Create = () => {
  const [form, setForm] = useState({
    title: '',
    author: '',
  });

  const { title, author } = form;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const noteData = {
      title,
      author,
    };
    fetch("https://fair-gray-swallow-yoke.cyclic.app/create", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": token
  },
  body: JSON.stringify(noteData)
})
.then((res) => res.json())
.then((data) => {
  console.log(data);
  if (data.success) {
    console.log(data.message);
    // Do something if notes are added successfully
  } else {
    console.log("Notes could not be added");
    // Do something if notes are not added
  }
})
.catch((err) => {
  console.log("Error:", err);
})
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter the title"
          value={title}
          name="title"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Enter Author name"
          value={author}
          name="author"
          onChange={handleChange}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Create;
