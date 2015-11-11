var express = require('express');
var app = express();

app.listen(process.env.PORT || 3000);

app.use(express.static(__dirname + '/build'));

app.use(function (req, res, next) {
    if(req.url.indexOf("/js") === 0 ||
        req.url.indexOf("/css") === 0) {
        return next();
    } else {
        res.sendFile(__dirname + '/build/index.html');
    }
});