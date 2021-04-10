var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'savebucks-db.c55gr0njkwsc.us-west-1.rds.amazonaws.com',
  user     : 'admin',
  password : 'osu040921',
  database: 'savebucks-db',
  port     : 3306
});

connection.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }

  console.log('Connected to database.');
});

connection.end();
