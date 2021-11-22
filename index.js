const express = require('express');
let questionList = require('./questions.json')

const app = express();

app.use(express.static('static'));

app.get('/questionsInJson', function(req,res){
    res.json(questionList); 
})

app.listen(80);