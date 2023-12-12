const express = require('express');
const app = express();
const fs = require('fs');
fs.readFile('./data.json', 'utf8', (err, data) => {
    if (!err) {
        console.log(data);
        app.get('/', function (req, res) {
            res.send(data);
        });
    } else {
        console.log(err);
    }
})



app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});