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

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

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

app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  pool.query(`select usuarios.id, usuarios.nombre, usuarios.mail, usuarios.apellido from usuarios where usuarios.mail = '${email}' && usuarios.password = '${password}'`, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send(results);
    }
  });
});

app.post('/register', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;

  pool.query(`select usuarios.mail from usuarios where usuarios.mail = '${email}'`, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      if (results.length !== 0) {
        return res.send('repetido');
      }
      else {
        pool.query(`insert into usuarios (password, nombre, apellido, mail) values ('${password}', '${firstname}', '${lastname}', '${email}')`, (err, results) => {
          if (err) {
            return res.send(err);
          } else {
            return res.send(results);
          }
        });
      }
    }
  });
});

app.post('/upload_idea', (req, res) => {
  const nombre = req.body.nombre;
  const descripcion = req.body.descripcion;
  const presupuesto = req.body.presupuesto;
  const cronologia = req.body.cronologia;
  const mail = req.body.mail;
  const id_user = req.body.id_user;

  pool.query(`insert into ideas (nombre, descripcion, presupuesto, cronologia, mail, emprendedor_id) values ('${nombre}', '${descripcion}', ${presupuesto}, '${cronologia}', '${mail}', ${id_user})`, (err, results) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send(results);
    }
  });
});