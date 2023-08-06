var express = require('express');
var cors = require('cors');
require('dotenv').config();
const multer = require('multer')
const upload = multer({ dest: './public/data/uploads/' })

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});



app.post('/api/fileanalyse', upload.single('upfile'), function(req, res) {
  // req.file is the name of your file in the form above, here 'uploaded_file'
  // req.body will hold the text fields, if there were any 
  // console.log(req.file, req.body)

  res.json({
    // file: req.file, // uncomment and run for more info
    //req.file is a property provided by the multer middleware. 
    //The req.file object typically includes various properties

    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size,
  })
});

const port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log('Your app is listening on port ' + port)
});
