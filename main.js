const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express()
const path = require('path');

const dbMongo = require('./src/config/mongodb');
dbMongo.connect();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/photos', express.static(path.join(__dirname, 'photos')));


require('./src/routes')(app);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
