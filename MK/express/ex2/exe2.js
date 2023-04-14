const express = require('express')
const {calcRouter} = require('./routes/calc')
const app = express();


app.use(express.json())  // musi byc zeby 'wiedział i obsłużył' format jsonowy

app.use('/calc', calcRouter);

app.use(express.static('./public',{
    index : 'index.html'
}));


app.listen(3000, 'localhost')