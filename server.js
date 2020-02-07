const express = require('express');
const path = require('path');
const app = express();
const { readJSON } = require('./db')
const products = require('./products.json')

app.get('/', (req, res, next)=> {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/products', (req, res, next)=> {
    res.sendFile(path.join(__dirname, 'products.json'))
})

const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`Listening on port ${ port }`));