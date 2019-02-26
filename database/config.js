// const knex = require('../knexfile.js')

const knex = require('knex')({
  client: 'pg',
  connection: {
    host: process.env.HOST|| '127.0.0.1',
    user: process.env.POSTGRES_USER || 'sdc',
    password: process.env.POSTGRES_PASSWORD || 'password',
    database: 'schedule',
  },
});


var bookshelf = require('bookshelf')(knex);

bookshelf.knex.schema.hasTable('schedule').then(function (exists) {
  if (exists) {
    // bookshelf.knex.schema.dropTable(('schedule'))
    //   .then(function (table) {
    //     console.log('Table Dropped')
    //   })
    return;
  }
  bookshelf.knex.schema.createTable(('schedule'), function (table) {
    table.increments('id');
    table.string('vs').notNullable();
    table.string('city').notNullable();
    table.string('team').notNullable();
    table.string('teamlogo').notNullable();
    table.time('week').notNullable();
    table.string('date').notNullable();
    table.string('opponent').notNullable();
    table.string('opponentlogo').notNullable();
    table.string('result').notNullable();
    table.string('winloss').notNullable();
    table.string('wl').notNullable();
    table.string('link').notNullable();
    table.string('feed').notNullable();
    table.string('playerpass').notNullable();
    table.string('playerrush').notNullable();
    table.integer('pass').notNullable();
    table.integer('rush').notNullable();
    table.integer('rec').notNullable();
  }).then(function (table) {
    console.log('Table Created: ', table)
  })
})

module.exports = bookshelf;
module.exports = knex;