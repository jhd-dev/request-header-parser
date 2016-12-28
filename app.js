var express = require("express");
var path = require("path");
var app = express();

app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/whoami', function(req, res){
    console.log("hi!", req.ip);
    res.writeHead(200, {
        "Content-Type": "application/json" 
    });
    res.end(JSON.stringify({
        "ipaddress": req.ip,
        "language": "",
        "software": ""
    }));
});

app.listen(process.env.PORT || 8080, function(){
    console.log('App listening on port ' + (process.env.PORT || 8080));
});