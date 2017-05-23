var express = require('express');
var router = express.Router();
const path  = require('path');
const fs = require('fs');
const testFolder = path.join(__dirname+'/../data/');


/* GET users listing. */
router.get('/files', function(req, res, next) {
  //var files =[];
    fs.readdir(testFolder, (err, files) => {
        res.json(files);
    });

});

module.exports = router;
