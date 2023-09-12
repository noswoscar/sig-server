/* eslint-disable consistent-return */
const express = require('express');
const schema = require('../db/schema');
const db = require('../db/connection');
const cities = db.get('cities');

const router = express.Router();

/* Get a specific city by name*/
router.get('/:name', async (req, res, next) => {
    try {
      const { name } = req.params;
      const city = await cities.findOne({
        name: name,
      });
  
      if (!city) {
        const error = new Error('City does not exist');
        return next(error);
      }
  
      res.json(city);
    } catch (error) {
      next(error);
    }
  });