/* eslint-disable consistent-return */
import express from 'express';
const cities = [];

export const app = express();

app.use(express.json());
app.use(express.raw({ type: 'application/vnd.custom-type' }));
app.use(express.text({ type: 'text/html' }));

// Healthcheck endpoint
app.get('/', (req, res) => {
  res.status(200).send("Functionnal API");
});

const api = express.Router();

/* Get a specific city by name*/
api.get('/:name', async (req, res, next) => {
    try {
      const { name } = req.params;

      const city = "";
      // await cities.findOne({
      //   name: name,
      // });
  
      if (!city) {
        const error = new Error('City does not exist');
        return next(error);
      }
  
      res.json(city);
    } catch (error) {
      next(error);
    }
  });