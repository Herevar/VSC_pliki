const express = require('express');
const calcRouter = express.Router();

calcRouter
    .post('/check', (req,res)=>{  // tutaj z fornta przesyłany postem
        // console.log(req.body);
        // res.json( {ok : true});
        const{numA, numB} = req.body // odbieramy dane i destrukturyzacja zeby dane wyciagnac
        // console.log(numA, numB)
        // if (numA % numB === 0){divider : true} wogole kilka opcji jest
        const divider = numA % numB === 0 ? true : false 
        res.json({divider}) // divider:divider  // odpowiadamy w formacie jsonowym
    })



module.exports = {
    calcRouter,
};