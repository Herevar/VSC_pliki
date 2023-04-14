const express = require('express');
const {voteRouter} = require('./routes/vote')
const app = express();

app.use(express.static('./public',{
    index : 'exercise1.html'
}));



app.use('/vote', voteRouter);
// sprawdizc czy jak '/' a w routerze bysmy dali opcje /votes/check zeby wszystko było w jednym; co sie stanie


app.listen(3000)