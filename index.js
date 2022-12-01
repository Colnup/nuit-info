const express = require('express');
const path = require('path')
const faker = require('@faker-js/faker')
const app = express()



const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/text.html'));
})

app.get('/api/name/female', function(req, res){
    res.send({name:faker.faker.name.firstName("female")});
})
app.get('/api/name/male', function(req, res){
    res.send({name:faker.faker.name.firstName("male")});
})

app.listen(port)
console.log('Server started at http://localhost:' + port);