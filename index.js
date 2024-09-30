const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());


const users = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
  { id: 2, name: 'chika khan', email: 'chika.khan@example.com' },
  { id: 3, name: 'hero Alom', email: 'hero.alom@example.com' },
  { id: 3, name: 'falguni begum', email: 'falguni.begum@example.com' },
];

app.get('/', (req, res) => {
  res.send('Hello, World! this code for add this node with flutter');
});

app.get('/users', (req, res) => res.send(users));

app.post('/users', (req, res) => { 
  const newUser = req.body;
  newUser.id = users.length + 1;

  if (newUser.name && newUser.email) {
    users.push(newUser);
    res.status(201).json({ message: 'User added successfully', user: newUser });
  } else {
    res.status(400).json({ message: 'name and email are required' });
  }
});

app.listen(port, () => { 
  console.log(`server listening on port ${port}`);
});