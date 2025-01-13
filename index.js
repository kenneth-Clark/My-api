const request = require('supertest');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

let colorDictionary = {
  "red": "#FF0000",
  "green": "#00FF00",
  "blue": "#0000FF",
  "yellow": "#FFFF00",
  "black": "#000000",
  "white": "#FFFFFF",
  "purple": "#800080",
  "orange": "#FFA500",
  "pink": "#FFC0CB",
  "gray": "#808080"
};

// GET endpoint to fetch color hex by name
app.get('/color/:name', (req, res) => {
  const colorName = req.params.name.toLowerCase();
  const hexValue = colorDictionary[colorName];
  
  if (hexValue) {
    res.json({
      //color: colorName,
      hex: hexValue
    });
  } else {
    res.status(404).json({
      message: `Color '${colorName}' not found.`
    });
  }
});

app.get('/colors', (req, res) => {
  res.json(colorDictionary);
});

const server = app.listen(port, () => {
  console.log(`Color API is running at http://localhost:${port}`);
});

// Export the app and server for testing purposes
module.exports = { app, server };