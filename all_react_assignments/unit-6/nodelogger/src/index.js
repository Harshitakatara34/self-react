// import required modules

// export the server

const express = require('express');
const morgan = require('morgan');
const fs = require('fs');

const app = express();
const PORT = 8080;

// Create a write stream to append logs to access.log file
const accessLogStream = fs.createWriteStream('./src/access.log');

// Middleware to log HTTP requests using morgan
app.use(morgan(':method :status :res[content-length] :response-time ms :date[web] :http-version :url\n', { stream: accessLogStream }));

// Parse JSON request body
app.use(express.json());

// Route: GET - /
app.get('/', (req, res) => {
  res.status(200).json({ message: 'welcome to server' });
  
});

// Route: GET - /get-users
app.get('/get-users', (req, res) => {
    console.log(res)
  res.status(200).json({ message: 'here is the list of all users' });
});

// Route: POST - /add-user
app.post('/add-user', (req, res) => {
  res.status(201).json({ message: 'user added successfully' });
});

// Route: PUT - /user/:id
app.put('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.status(201).json({ message: `user ${userId} updated successfylly` });
});

// Route: DELETE - /user/:id
app.delete('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.status(200).json({ message: `user ${userId} deleted successfylly` });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// eg.module.exports = app;
module.exports = app;