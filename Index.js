const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Api Operativa');
});

app.listen(port, () => {
  console.log(`App escuchando desde http://localhost:${port}`);
});
