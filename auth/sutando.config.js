// Update with your config settings.

module.exports = {
  client: 'pg',
  connection: {
    host : 'auth-db',
    port : 5432,
    user : 'default',
    password : 'secret',
    database : 'auth'
  },
  migrations: {
    table: 'migrations',
    path: './database/migrations',
  },
  models: {
    path: './models'
  }
};
