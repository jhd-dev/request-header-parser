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
        "ipaddress": req.headers['x-forwarded-for'] //http://stackoverflow.com/questions/8107856/how-to-determine-a-users-ip-address-in-node
            || req.connection.remoteAddress 
            || req.socket.remoteAddress 
            || req.connection.socket.remoteAddress 
            || req.ip,
        "language": "",
        "software": ""
    }));
});

app.listen(process.env.PORT || 8080, function(){
    console.log('App listening on port ' + (process.env.PORT || 8080));
});