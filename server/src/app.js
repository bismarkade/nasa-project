
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

// Planets Router
app.use(planetsRouter);

module.exports = app;