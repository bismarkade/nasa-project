
const express = require('express');

const app = express();

// middleware: It parses incoming requests with JSON payloads
app.use(express.json());

module.exports = app;