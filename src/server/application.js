var bodyParser = require('body-parser')
var cors = require('cors')
const express = require('express')
var path = require('path')

const application = express()
application.use(cors())

application.use(bodyParser.json())

application.use(bodyParser.urlencoded({
    extended: true
}))
application.use(express.static('dist'));

var aylien_api = require("aylien_textapi");


var textapi = new aylien_api({
    application_id: "e686eb78",
    application_key: "ec7e68ce361b0f3e15cd871cf220aa25"
});


application.post('/news_url', function(req, res) {
    console.log(req);
    console.log("Formulating a reques for article analysis... ", req.body);
    textapi.sentiment({
        'url': req.body.url
    }, function(error, response) {
        console.log("Got results! ", response)
        res.send(response)
    });
})

application.get('/', function (req, res) {
    res.sendFile(path.resolve('dist/index.html'));
})

application.get('/test', function (req, res) {
    res.send(json);
})
var jsonStrings = {
    'title': 'test json response',
    'message': 'this is a message',
    'time': 'now'
}
module.exports = application

