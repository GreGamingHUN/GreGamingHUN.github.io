var express = require('express');
var app = express();

const port = 80;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(port);

console.log('Server is listening on port ' + port);