const path = require('path');
const express = require('express');
const cors = require('cors');

const planetsRouter = require('./routes/planets/planets.router');
const app = express();

// Cross-Origin-Resource-Sharing: Middleware
app.use(cors({
    origin: 'http://localhost:3000',
}))

// middleware: It parses incoming requests with JSON payloads
app.use(express.json());

// serve the frontend with express.static middleware
app.use(express.static(path.join(__dirname, '..', 'public')))

// Planets Router
app.use(planetsRouter);
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
});

module.exports = app;