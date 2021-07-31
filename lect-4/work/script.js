let request = require("request");
let fs = require("fs");

request("http://www.google.com", function(err, res, body){
    fs.writeFileSync("index.html", body);
})