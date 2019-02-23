// // var options = {
//   module.exports = {
//   development: {
//       client: 'pg',
//       connection: 'postgres://localhost/schedule',
//       migrations: {
//           directory: __dirname + '/database/migrations',
//         },
//       seeds: {
//           directory: __dirname + '/database/seeds',
//         },
//     },
//   production: {
//       client: 'pg',
//       connection: process.env.DATABASE_URL,
//       migrations: {
//           directory: __dirname + '/database/migrations',
//         },
//       seeds: {
//           directory: __dirname + '/database/seeds/production',
//         },
//     },
// };

// let knex = {
//   development: {
//     client: 'pg',
//     connection: {
//       host: '127.0.0.1',
//       user: 'sdc',
//       password: 'password',
//       database: 'schedule'
//     },
//     seeds: {
//       directory: './database/seeds'
//     }
//   }
// };


// const knex = require('knex')({
//   client: 'pg',
//   connection: {
//     host: process.env.HOST|| '127.0.0.1',
//     user: process.env.POSTGRES_USER || 'sdc',
//     password: process.env.POSTGRES_PASSWORD || 'password',
//     database: 'schedule',
//   },
// });

// module.exports = knex;