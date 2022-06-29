const express = require('express');
const app = express();
const port = 8080;

<<<<<<< HEAD
app.get('/', (req, res) => res.send('I love you Gilles!'));
=======
app.get('/', (req, res) => res.send('I love you too much Haly '));
>>>>>>> f3521497c2c38790e74839c78e498757b84130d7

app.listen(port);
console.log(`App running on http://localhost:${port}`);
