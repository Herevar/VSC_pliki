const express = require('express')
const hbs = require('express-handlebars');
const { listRouter } = require('./routers/listR');
const methodOverride = require('method-override')

const app = express();

app.use(methodOverride('_method'))

app.engine(".hbs", hbs.engine({ 
    extname: ".hbs",  
  //   helpers: handlebarsHelpers, 
      }));
app.set("view engine", ".hbs");
app.set("views", "./views");



app.use('/list', listRouter)
// app.use('/', listRouter )






app.listen(3015, 'localhost', ()=> {console.log("listening on localhost 3015")})