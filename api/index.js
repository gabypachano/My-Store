const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const {
  errorLogs,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

app.get('/api', (req, res) => {
  res.send('Hola, este es mi server en express. Yaaaayyy');
});

app.get('/api/new', (req, res) => {
  res.send("Hi. I'm your new route");
});

routerApi(app);
app.use(errorLogs);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Escuchando en el puerto: ' + port);
});
