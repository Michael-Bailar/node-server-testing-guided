module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/hobbits.db3",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
  testing: {
    client: "sqlite3",
    connection: {
      filename: "./data/test.db3",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
  //code we've added to conect to Heroku app
  //Heroku will look for 'production configuration
  production: {
    client: 'pg', //npm i pg
    connection: process.env.DATABASE_URL, // provided by Heroku
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  }
};
