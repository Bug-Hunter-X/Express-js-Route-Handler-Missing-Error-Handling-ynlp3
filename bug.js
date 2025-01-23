const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid userId
  const user = users.find(user => user.id === userId);
  if (user) {
    res.json(user);
  } else {
    // Should send a 404 status code
    res.json({ message: 'User not found' });
  }
});