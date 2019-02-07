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

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'sdc',
      password: 'password',
      database: 'schedule'
    },
    seeds: {
      directory: './database/seeds'
    }
  }
};