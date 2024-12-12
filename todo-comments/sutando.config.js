// Update with your config settings.

module.exports = {
  client: 'pg',
  connection: {
    host : 'comments-db',
    port : 5432,
    user : 'default',
    password : 'secret',
    database : 'comments'
  },
  migrations: {
    table: 'migrations',
    path: './database/migrations',
  },
  models: {
    path: './models'
  }
};
