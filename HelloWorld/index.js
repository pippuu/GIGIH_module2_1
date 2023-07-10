const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/sirentest', (req, res) => {
    res.send('Wiu wiu wiu!');
  });
  

app.use((req, res) => {
    res.status(404).send('Page not found');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
