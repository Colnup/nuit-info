const express = require('express');
const path = require('path')
const faker = require('@faker-js/faker')
const app = express()



const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/public/html/game.html'));
})

app.get('/api/name/female', function(req, res){
    res.send({name:faker.faker.name.firstName("female")});
})
app.get('/api/name/male', function(req, res){
    res.send({name:faker.faker.name.firstName("male")});
})

app.get('/api/def/vih', async function(req, res){
    const { Configuration, OpenAIApi } = require("openai");

    const configuration = new Configuration({
    apiKey: "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",
    });
    const openai = new OpenAIApi(configuration);

    const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "donne moi une courte description de VIH",
    temperature: 0,
    max_tokens: 100,
    top_p: 1,
    frequency_penalty: 0.2,
    presence_penalty: 0,
    });
    console.log()
    res.send({"def": response.data.choices[0].text.replaceAll('\n', "")})
})
app.get('/api/def/sida', async function(req, res){
    const { Configuration, OpenAIApi } = require("openai");

    const configuration = new Configuration({
    apiKey: "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",
    });
    const openai = new OpenAIApi(configuration);

    const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "donne moi une courte description de VIH",
    temperature: 0,
    max_tokens: 100,
    top_p: 1,
    frequency_penalty: 0.2,
    presence_penalty: 0,
    });
    console.log()
    res.send({"def": response.data.choices[0].text.replaceAll('\n', "")})
})
app.get('/api/def/vih', async function(req, res){
    const { Configuration, OpenAIApi } = require("openai");

    const configuration = new Configuration({
    apiKey: "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",
    });
    const openai = new OpenAIApi(configuration);

    const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "donne moi une très courte description de SIDA",
    temperature: 0,
    max_tokens: 100,
    top_p: 1,
    frequency_penalty: 0.2,
    presence_penalty: 0,
    });
    console.log()
    res.send({"def": response.data.choices[0].text.replaceAll('\n', "")})
})
app.get('/api/def/ist', async function(req, res){
    const { Configuration, OpenAIApi } = require("openai");

    const configuration = new Configuration({
    apiKey: "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",
    });
    const openai = new OpenAIApi(configuration);

    const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "donne moi une très courte description de la maladie IST",
    temperature: 0,
    max_tokens: 100,
    top_p: 1,
    frequency_penalty: 0.2,
    presence_penalty: 0,
    });
    console.log()
    res.send({"def": response.data.choices[0].text.replaceAll('\n', "")})
})

app.listen(port)
console.log('Server started at http://localhost:' + port);