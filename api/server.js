const express = require('express');

const CarsRouter = require('../cars/cars-router.js');

const server = express();

server.use(express.json());

server.use('/api/cars', CarsRouter);

server.get('/', (req, res) => {
    res.send('<h3>Server online.</h3>');
  });
  
  server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
      message: 'Something went wrong'
    })
  })

module.exports = server;