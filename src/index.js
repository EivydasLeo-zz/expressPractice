const express = require('express');
const path = require('path');
const app = express();

const { cars } = require('./js/cars');

const indexPath = path.join(__dirname, 'html', 'index.html');
const aboutPath = path.join(__dirname, 'html', 'about.html');
const postsPath = path.join(__dirname, 'html', 'posts.html');

app.get('/', (req, res) => res.sendFile(indexPath));
app.get('/about', (req, res) => res.sendFile(aboutPath));
app.get('/posts', (req, res) => res.sendFile(postsPath));

app.get('/api/cars', (req, res) => {
  res.json(cars);
});

app.listen(3000, () => console.log('server is running'));
