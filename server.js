const express = require('express');
const path = require('path');
const routes = require('./controllers');
const { engine } = require('express-handlebars'); // Correct import for v6+

const app = express();

// Set Handlebars as the view engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

// Specify the directory where Handlebars templates are stored
app.set('views', path.join(__dirname, 'views'));

const PORT = process.env.PORT || 3001;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

app.listen(PORT, () => {
  console.log('Now listening on port', PORT);
});
