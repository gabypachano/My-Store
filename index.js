const express = require('express');
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');

app.get('/', (req, res) => {
  res.send('Hola, este es mi server en express. Yaaaayyy');
});

app.get('/new', (req, res) => {
  res.send("Hi. I'm your new route");
});

app.get('/products', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;

  for (let index = 0; index < 100; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.url(),
    });
  }

  res.json(products);
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    name: 'Product 2',
    price: 2222,
  });
});

app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send('No hay parametros baby');
  }
});

app.listen(port, () => {
  console.log('Escuchando en el puerto: ' + port);
});
