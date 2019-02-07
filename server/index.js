const express = require('express');
const bodyParser = require('body-parser');
// const ScheduleDB = require('../database/Models/ScheduleDB.js');
const app = express();
const port = process.env.PORT || 3000;


app.use(express.static(`${__dirname}/../client/dist`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Schedule endpoint
app.get('/schedule', (req, res) => {
  res.json({info: 'Node.js, Expres and postgres schedule running'})
});



app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
