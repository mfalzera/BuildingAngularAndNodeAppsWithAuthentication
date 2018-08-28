var express = require('express');
var app = express();

var messages = [{test: 'some text', owner: 'Tim'},{text: 'other message', owner: 'Jane'}];

app.get('/messages', (req, res) => {
    res.json(messages);
})

app.listen(1234);