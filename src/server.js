const express = require('express')
const mysql = require('mysql2')
const path = require('path')
const server = express()

const db = mysql.createPool({
    host: 'localhost',
    user: "root",
    database: 'pokemon',
    //port: '3307'
})

console.log(db);

server.use(express.static(path.resolve('public')))

server.get('/api/pokemon', (req, res) => {
    const name = req.query.params;
    db.query(`SELECT * FROM pokemon WHERE name LIKE "%${req.query.name}%"`, (err, rows) => {
        if (err) throw err.message
        res.status(200).json(rows)
    })
})




server.listen(3000)