const faker = require('faker');

let generateTeamFunc = function (number) {
 let teams = [
  "Arizona Cardinals",
  "Atlanta Falcons ",
  "Baltimore Ravens",
  "Buffalo Bills",
  "Carolina Panthers",
  "Chicago Bears",
  "Cincinnati Bengals",
  "Cleveland Browns",
  "Dallas Cowboys",
  "Denver Broncos",
  "Detroit Lions",
  "Green Bay Packers",
  "Houston Texans",
  "Indianapolis Colts",
  "Jacksonville Jaguars",
  "Kansas City Chiefs",
  "Los Angeles Chargers",
  "Los Angeles Rams",
  "Miami Dolphins",
  "Minnesota Vikings",
  "New England Patriots",
  "New Orleans Saints",
  "New York Giants",
  "New York Jets",
  "Oakland Raiders",
  "Philadelphia Eagles",
  "Pittsburgh Steelers",
  "San Francisco 49ers",
  "Seattle Seahawks",
  "Tampa Bay Buccaneers",
  "Tennessee Titans",
  "Washington Redskins"]

  return teams[number]
}

let generateRandomNumber = function (num) {
  return Math.floor(Math.random() * num);
}


let generateDataFunc = function (numberOfRecords) {
  let results = [];
  for (let i = 0; i < numberOfRecords; i++) {
    let record = {
      vs: " vs ",
      city: faker.address.city(),
      team: generateTeamFunc(generateRandomNumber(32)),
      teamlogo: faker.image.sports(),
      week: "23:16:44",
      date: "28-Oct-2018",
      opponent: generateTeamFunc(generateRandomNumber(32)),
      opponentlogo: faker.image.sports(),
      result: generateRandomNumber(10) +  "-"  + generateRandomNumber(10),
      winloss: generateRandomNumber(10) +  "-"  + generateRandomNumber(10),
      wl: " L",
      link: faker.internet.url(),
      feed: faker.lorem.words()
    }
    
    results.push(record);
  }
  return results;
}


exports.seed = knex => knex('schedule').del()
            .then(() => knex.batchInsert('schedule', generateDataFunc(1000000), 1000)
              .then(() => knex.batchInsert('schedule', generateDataFunc(1000000), 1000))
              // .then(() => knex.batchInsert('schedule', generateDataFunc(1000000), 1000))
              // .then(() => knex.batchInsert('schedule', generateDataFunc(1000000), 1000))
              // .then(() => knex.batchInsert('schedule', generateDataFunc(1000000), 1000))
              // .then(() => knex.batchInsert('schedule', generateDataFunc(1000000), 1000))
              // .then(() => knex.batchInsert('schedule', generateDataFunc(1000000), 1000))
              // .then(() => knex.batchInsert('schedule', generateDataFunc(1000000), 1000))
              // .then(() => knex.batchInsert('schedule', generateDataFunc(1000000), 1000))
              .then(() => knex.batchInsert('schedule', generateDataFunc(1000000), 1000)));
           