let request = require("request");
let fs = require("fs");
let cheerio = require("cheerio");
let $;

request("https://github.com/topics", getTopicPage);

function getTopicPage(err, res, body){
    if(!err){
        $ = cheerio.load(body);
        let allTopicAnchors = $("");
        
        let allTopicName = $(
            ""
        );


        for(let i = 0; i < allTopicAnchors.length; i++){
            console.log("https://github.com" + $(allTopicAnchors[i]).attr("href"));
            console.log($(allTopicName).text().trim());
            saveTopicPage(
                "https://github.com" + $(allTopicAnchors[i]).attr("href"),
                $(allTopicName).text().trim()
            );
        }
    }
}


function saveTopicPage(url, name){
    request(url, function (err, res, body){
        fs.writeFileSync(name + ".html", body)
    })
}