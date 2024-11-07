const express = require('express');
const cors = require('cors'); // va trebui să instalăm și cors

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Rută de test
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Ruta pentru users
app.get('/api/users', (req, res) => {
  const testUsers = [
    { id: 1, name: 'Bob Carla' },
    { id: 2, name: 'Gherghel Cristian' },
    { id: 3, name: 'Raluca Hodut' }
  ];
  res.send(testUsers); // încercăm res.send în loc de res.json
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});