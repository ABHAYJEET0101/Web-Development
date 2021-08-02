let request = require("request");
let fs = require("fs");
let cheerio = require("cheerio");
let loadedHtml;

function responseHandler(err, res, body){
    if(!err) {
        loadedHtml = cheerio.load(body);
        let allComments = loadedHtml(/* class name */"");
        let topcomment = loadedHtml(allComments[0]);
        let comment = topcomment.text()
        console.log(comment); 
    };
}

//for loop fot batsman
//for loop for bowler

/* in case of batsman bowler two function are writtrn for their name and Born details */

request(
    /*reference link for web Scrappinh*/"", 
    responseHandler
);