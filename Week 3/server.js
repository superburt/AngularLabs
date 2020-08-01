var express = require("express"); //used for routing
var app = express();
var path = require('path');
var http = require("http").Server(app); //used to provide http functionality
app.use(express.static(__dirname + "/www"));
require("./routes/account.js")(app,path);
require("./routes/login.js")(app,path);

let server = http.listen(3002, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log('My First Nodejs Server!');
    console.log("Server listening on: "+ host + " port:" + port);
});
app.get("/form", function (req, res) {
    res.sendFile(__dirname + "/www/form.html");
    });

app.get("/account", function (req, res) {
res.sendFile(__dirname + "/www/account.html");
});


