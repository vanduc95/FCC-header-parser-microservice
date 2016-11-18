var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 8080));

app.get('/api', function(req, res) {
    if (req.url === '/favicon.ico') return;
    res.json({
        ip:         req.headers['x-forwarded-for'] || 
                    req.connection.remoteAddress || 
                    req.socket.remoteAddress ||
                    req.connection.socket.remoteAddress,

        language:   req.headers["accept-language"].split(",")[0],
        software:   req.headers["user-agent"].match(/\((.*?)\)/)[1]
    });
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
