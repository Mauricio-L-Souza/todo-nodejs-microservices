// Update with your config settings.

module.exports = {
  client: 'pg',
  connection: {
    host : 'todo-core-db',
    port : 5432,
    user : 'default',
    password : 'secret',
    database : 'todos'
  },
  migrations: {
    table: 'migrations',
    path: './database/migrations',
  },
  models: {
    path: './models'
  }
};
