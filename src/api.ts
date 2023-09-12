import express from 'express';
export const app = express();

app.use(express.json());
app.use(express.raw({ type: 'application/vnd.custom-type' }));
app.use(express.text({ type: 'text/html' }));

// Healthcheck endpoint
app.get('/api', (req, res) => {
  res.status(200).send("Functionnal API");
});

/* Get a specific city by name*/
app.get('/city', async (req, res, next) => {
    try {
    //   const { name } = req.params;

      const city = "Paris";
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