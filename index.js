const express = require('express');
const app = express();
const port = 8000;
app.use(express.json());

const routerApi = require('./routes');
routerApi(app);

app.get('/', (req, res) => {
  res.send('Hola, este es mi server en express. Yaaaayyy');
});

app.get('/new', (req, res) => {
  res.send("Hi. I'm your new route");
});

app.listen(port, () => {
  console.log('Escuchando en el puerto: ' + port);
});
