const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config(); // Load environment variables from .env file    

const registrationRoutes= require('./src/routes/registration')
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', registrationRoutes);


// app.use('/api');
app.get('/', (req, res) => {
    res.send('Hello Stckdot.io');  
  });

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


