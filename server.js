const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Temp user storage (in-memory)
const users = [];

app.use(express.urlencoded({ extended: true }));
app.use('/css', express.static(__dirname + '/css'));
app.use('/images', express.static(__dirname + '/images'));
// Route for Sad mood
app.get('/sad', (req, res) => {
  res.sendFile(path.join(__dirname, 'sad.html'));
});
app.use('/js', express.static(__dirname + '/js'));
app.get('/self', (req, res) => {
  res.sendFile(path.join(__dirname, 'selfcare.html'));
});


// Main page (after login)
app.get('/main', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/happy', (req, res) => {
  res.sendFile(path.join(__dirname, 'happy.html'));
});
app.get('/chill', (req, res) => {
  res.sendFile(path.join(__dirname, 'chill.html'));
});

// Login page (contact.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact.html'));
});
app.get('/hype', (req, res) => {
  res.sendFile(path.join(__dirname, 'hype.html'));
});
// Signup page (signup.html)
app.get('/signup', (req, res) => {
  res.sendFile(path.join(__dirname, 'signup.html'));
});

app.get('/relaxed', (req, res) => {
  res.sendFile(path.join(__dirname, 'relaxed.html'));
});
// Handle general form (you can remove if unused)
app.post('/submit', (req, res) => {
  const { username, email } = req.body;
  console.log("Form Data Received:");
  console.log("Username:", username);
  console.log("Email:", email);
  res.send("Form submitted successfully!");
});

// Handle login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    res.redirect('/main');
  } else {
    res.send("<h2>Invalid username or password</h2>");
  }
});

// Handle signup
app.post('/signup', (req, res) => {
  const { email, username, password } = req.body;

  const existing = users.find(u => u.username === username);
  if (existing) {
    return res.send("<h2>Username already taken. Try another.</h2>");
  }

  users.push({ email, username, password });
  console.log("User registered:", { email, username });

  // After successful signup, redirect to login
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
