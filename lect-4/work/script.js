let request = require("request");
let fs = require("fs");
let cheerio = require("cheerio");
let loadedHtml;

function responseHandler(err, res, body){
    if(!err) {
        loadedHtml = cheerio.load(body);
        let allComments = loadedHtml(".cb-com-ln.ng-binding.ng-scope.cb-col.cb-col-90");
        let topcomment = loadedHtml(allComments[0]);
        let comment = topcomment.text()
        console.log(comment); 
    };
}



request(
    "", 
    responseHandler
);