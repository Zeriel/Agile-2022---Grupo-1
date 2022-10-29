const cors = require('cors');
const express = require('express');
const mysql = require('mysql');

const app = express();

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST_IP,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

app.use(cors());

app.listen(process.env.REACT_APP_SERVER_PORT, () => {
  console.log(`App server now listening on port ${process.env.REACT_APP_SERVER_PORT}`);
});

app.get('/getTable', (req, res) => {
  const { table } = req.query;

  pool.query(`select * from ${table}`, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send(results);
    }
  });
});

app.get('/getIdeas', (req, res) => {

  pool.query(`select ideas.*, usuarios.nombre as nombre_emp, usuarios.apellido as apellido_emp from ideas inner join usuarios on ideas.emprendedor_id = usuarios.id`, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send(results);
    }
  });
});

app.get('/getIdea', (req, res) => {
  const { id_idea } = req.query;

  pool.query(`select ideas.*, usuarios.nombre as nombre_emp, usuarios.apellido as apellido_emp from ideas inner join usuarios on ideas.emprendedor_id = usuarios.id where ideas.id = ${id_idea}`, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send(results);
    }
  });
});