var jsdom = require("jsdom");
var fs = require("fs");
var jquery = fs.readFileSync("./jquery-3.0.0.min.js", "utf-8");

jsdom.env({
  url: "http://news.ycombinator.com/",
  src: [jquery],
  done: function(err, window) {
    var $ = window.$;
    console.log("HN Links");
    $("td.title:not(:last) a").each(function() {
      console.log(" -", $(this).text());
    });
  }
});
