const express = require('express');
const bodyParser = require('body-parser');
const ScheduleDB = require('../database/config.js');
const knex = require('../database/config.js');
const app = express();
const port = process.env.PORT || 3000;
const faker = require('faker');


app.use(express.static(`${__dirname}/../client/dist`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Schedule endpoint
app.get('/schedule', (req, res) => {
  knex('schedule').orderBy('id', 'desc').limit(10)
    .then(data => {
      res.send(data)
    })
    .then(() => {
      res.sendStatus(200)
    })
});

app.post('/schedule', (req, res) => {
  knex('schedule').insert({
      vs: " vs ",
      city: "Mailouport",
      team: "Dallas Cowboys",
      teamlogo: "http://lorempixel.com/640/480/sports",
      week: "23:16:44",
      date: "28-Oct-2018",
      opponent: "Jacksonville Jaguars",
      opponentlogo: "http://lorempixel.com/640/480/sports",
      result: "8-3",
      winloss: "7-5",
      wl: " L",
      link: "https://henderson.info",
      feed: "enim distinctio voluptatem",
      playerpass: "Nienow",
      playerrush: "Mosciski",
      pass: 29,
      rush: 164,
      rec: 176
    })
    .then(() => {
      res.send('record inserted')
    })
})

app.delete('/schedule', (req, res) => {
  // console.log( 'req.body', req.body['id'])
  knex('schedule').where('id', req.body['id']).del()
    .then(() => {
      console.log('record deleted')
    })
    .then(() => {
      res.sendStatus(200)
    })
})


app.put('/schedule', (req, res) => {
  knex('schedule').where('id', 10000).update({
      vs: " vs ",
      city: "Mailouport",
      team: "Dallas Cowboys",
      teamlogo: "http://lorempixel.com/640/480/sports",
      week: "23:16:44",
      date: "28-Oct-2018",
      opponent: "Jacksonville Jaguars",
      opponentlogo: "http://lorempixel.com/640/480/sports",
      result: "8-3",
      winloss: "7-5",
      wl: " L",
      link: "https://henderson.info",
      feed: "enim distinctio voluptatem",
      playerpass: "Nienow",
      playerrush: "Mosciski",
      pass: 29,
      rush: 164,
      rec: 176
  })
    .then(() => {
      console.log('record updated')
    })
    .then(() => {
      res.sendStatus(200)
    })
})

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
