var express = require('express');
var router = express.Router();
const connection = require("../database");

/* GET users listing. */
router.get('/', function(req, res) {
  connection.query("SELECT * from mahasiswa", function (err, results, ) {
    if(err){
      console.log("database error");
    }
    console.log(results);
    const data =  {mahasiswa: results};
    res.render("Mahasiswa", data);
  })
})

router.post("/add", function (req, res){
  const nama = req.body.nama;
  const nim = req.body.nim;
  const departemen = req.body.departemen;

  connection.query(
    `INSERT INTO mahasiswa (nama,nim,departemen) value('${nama}', '${nim}', '${departemen}')`,
    function(err, results, ){
      if (err){
        console.log("add error!");
      }
      console.log(results);
    }
  )
  return res.redirect("/users")
})

router.post("")

router.get("/update/:id", function (req, res) {
  const id = req.params.id;
  
  connection.query(`SELECT * from mahasiswa WHERE id= "${id}"`,
  function (err, results) {
    if (err) {
      console.log("update error!");
    }
    console.log(results);
    res.render("updateData", {results:results[0]})
  }
  )
})

router.post("/update", function (req, res) {
  const id = req.body.id;
  const nama = req.body.nama;
  const nim = req.body.nim;
  const departemen = req.body.departemen;

  connection.query(
    `UPDATE mahasiswa SET ? WHERE id = '${id}'`,
    {id, nama, nim, departemen},
    function (err, results) {
      if (err){
        console.log("update error!");
      }
      console.log(results)
      
    }
  )
  return res.redirect("/users")
})

router.post("/remove", function (req, res) {
  const id = req.body.id;

  connection.query(
    `DELETE FROM mahasiswa WHERE id ='${id}'`,
    function (err, results) {
      if (err){
        console.log("delete error!");
      }
      console.log(results);
    }
  )
  return res.redirect("/users")
})

module.exports = router;