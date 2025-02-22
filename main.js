const express = require('express')
const app = express()

const port = process.env.PORT || 3000;

require('./src/routes')(app);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
