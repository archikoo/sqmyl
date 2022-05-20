var express = require('express')
var cors = require('cors')
const mysql = require('mysql2');
const PORT = process.env.PORT || 5000

const connection = mysql.createConnection({
    host: '157.245.59.56',
    port: '3366',
    user: '6090059',
    password: '6090059',
    database: '6090059'
  });
  

var app = express()
app.use(cors())
app.use(express.json())

app.get('/users', function (req, res, next) {
  connection.query(
    'SELECT * FROM `6301503`',
    function(err, results, fields) {
      res.json(results);
    }
  );
})

app.get('/users/:id', function (req, res, next) {
  const id = req.params.id;
  connection.query(
    'SELECT * FROM `6301503` WHERE `id` = ?',
    [id],
    function(err, results) {
      res.json(results);
    }
  );
})

app.post('/users', function (req, res, next) {
  connection.query(
    'INSERT INTO `6301503`(`fname`, `lname`, `username`, `password`, `avatar`) VALUES (?, ?, ?, ?, ?)',
    [req.body.fname, req.body.lname, req.body.username, req.body.password, req.body.avatar],
    function(err, results) {
      res.json(results);
    }
  );
})

app.put('/users', function (req, res, next) {
  connection.query(
    'UPDATE `6301503` SET `fname`= ?, `lname`= ?, `username`= ?, `password`= ?, `avatar`= ? WHERE id = ?',
    [req.body.fname, req.body.lname, req.body.username, req.body.password, req.body.avatar, req.body.id],
    function(err, results) {
      res.json(results);
    }
  );
})

app.delete('/users', function (req, res, next) {
  connection.query(
    'DELETE FROM `6301503` WHERE id = ?',
    [req.body.id],
    function(err, results) {
      res.json(results);
    }
  );
})

app.listen(PORT, function () {
  console.log('CORS-enabled web server listening on port' +PORT)
})
