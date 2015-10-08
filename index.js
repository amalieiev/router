var express = require('express');
var app = express();

app.listen(3000);

app.use(express.static(__dirname + '/public'));

app.use(function (req, res, next) {
    if(req.url.indexOf("/scripts") === 0) {
        return next();
    } else {
        res.sendFile(__dirname + '/public/index.html');
    }
});