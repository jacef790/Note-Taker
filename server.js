const express = require('express');
const path = require('path');
const notes = require('./routes/noteRoutes.js');
const home = require('./routes/homeRoutes.js');

const PORT = process.env.PORT || 3001;

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use('/api', notes);
app.use('/', home);





app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);