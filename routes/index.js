var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Tugas Web Membuat CRUD Menggunakan Tailwind CSS dengan MySQL' });
});

module.exports = router;
