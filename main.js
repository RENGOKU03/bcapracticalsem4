// var http = require('http');
// var fs = require('fs');

// http.createServer(function (req, res) {
//     fs.readFile('index.html', function (err, data) {
//         if (err) {
//             res.writeHead(200 ,{'content-type': 'text/html'});
//             return res.end('Error loading index.html');
//         }
//         res.writeHead(200);
//         res.write(data);
//         res.end(data);
//     });
// }).listen(3000);

// // node create server and read data from html file


//1.
var http = require('http');
var fs = require('fs');
//2.
var server = http.createServer(function (req, resp) {
    //3.
    if (req.url === "/create") {
        fs.readFile("index.html", function (error, pgResp) {
            if (error) {
                resp.writeHead(404);
                resp.write('Contents you are looking are Not Found');
            } else {
                resp.writeHead(200, { 'Content-Type': 'text/html' });
                resp.write(pgResp);
            }
             
            resp.end();
        });
    }
});
//5.
server.listen(5050);