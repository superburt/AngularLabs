var express = require("express"); //used for routing
var app = express();
var http = require("http").Server(app); //used to provide http functionality
app.use(express.static(__dirname + "/www"));
require("./routes/accountroute.js")(app,path);

let server = http.listen(3002, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log('My First Nodejs Server!');
    console.log("Server listening on: "+ host + " port:" + port);
});
module.exports = function(app,path){
    // app passes in the express object needed for the route.
    // path passes in a path object needed to find the file. The path module is part of node and needs to be required in the server.js file
    app.get('/mypage',function(req,res){
    let filepath = path.resolve('./www/mypage.html');
    res.sendFile(filepath);
    });
    }

app.get("/test", function (req, res) {
res.sendFile(__dirname + "/www/test.html");
});