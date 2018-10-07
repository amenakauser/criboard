// create a database connection and export it
var Sequelize = require('sequelize');

if (process.env.DATABASE_URL !== undefined) {
  var connection = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'mysql'
  })
} else {
  var connection = new Sequelize('criboard', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  })
}

connection
  .authenticate()
  .then(() => {
    console.log(`connection to database has been established successfully`);
  })
  .catch(err => {
    console.log('unable to connect to database');
  });

// sync
connection.sync({
  logging: console.log
});

module.exports = connection;
