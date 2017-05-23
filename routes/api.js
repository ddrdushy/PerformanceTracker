var express = require('express');
var router = express.Router();
const path  = require('path');
const fs = require('fs');
const testFolder = path.join(__dirname+'/../data/');


/* GET users listing. */
router.get('/files', function(req, res, next) {
    fs.readdir(testFolder, (err, files) => {
        res.json(files);
    });
});

router.get('/files/:filename', function(req, res, next) {
  console.log(path.join(testFolder,req.params.filename));
  var ff= path.join(testFolder,req.params.filename);
    fs.readFile(ff,'utf8',(err,data)=>{
      res.json({"data":data});
    });
});

module.exports = router;
