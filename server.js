console.time("web server started in ");

var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {

    var msg = 'Page has been requested'
    logActivities(['Server Activity : ']+[msg]);

    res.send('hello world')

    msg = 'Response set to hello world'
    logActivities(['Server Activity : ']+[msg]);
    
})

// list to a particular port
app.listen(3000)

// add the function that logs activities
var logActivities = function () {
    return console.log.apply(
        console,
        [new Date().toTimeString().slice(0,8)].concat(
            Array.prototype.slice.call(arguments)
        )
    );
};

logActivities(['Server Activity']+[' :  Web server started']);

console.timeEnd("web server started in ");