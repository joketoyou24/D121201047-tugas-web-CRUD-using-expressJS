const mysql = require('mysql')

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'demo'
})

connection.connect((error) => {
  if (error) throw error
  console.log('Database Terhubung!')
})

module.exports = connection


