const express = require('express');
const app = express();
const DbConnection = require('./Database');
const cors = require('cors');
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const SignUpController = require('./Controllers/SignUpController');

require('dotenv').config();

// Database connection
DbConnection.authenticate()
  .then(() => {
    console.log('MySQL database connected');
    return DbConnection.sync({ force: false }); 
  })
  .then(() => {
    console.log('Database and tables are synchronized.');
  })
  .catch((err) => {
    console.error('Error syncing the database:', err);
  });

// Routes
app.use('/', SignUpController); 

app.get('/*', (req, res) => {
  res.status(404).send('<h1>404 Error</h1>');
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
