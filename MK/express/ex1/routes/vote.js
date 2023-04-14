const express =  require('express');
const {Ip_res} = require('../utils/ip-check')
const voteRouter = express.Router();

let votes = {
    Yes : 0,
    No : 0,
}

const IpRestrict = new Ip_res();

voteRouter

    .get('/check', (req,res)=>{
        const items = Object.entries(votes)
        let ar =[]
        for (let x of items){
            // res.send(`klucz: ${x[0]}, wartość: ${x[1]}`)  nie moze tak byc, bo nawet jesli to kazda pozycje osonno przesyłac to glupi pomysł
            ar.push(`klucz: ${x[0]}, wartość: ${x[1]}`)
        }
        ar = ar.join('<br>')
        res.send(ar)
        // albo prostsza metoda w 1 linijce:
        //const items = Object.entries(votes).map(pos => `klucz: ${pos[0]}, wartość: ${pos[1]}`).join('<br>')
    })



    .get('/:voteFor', (req, res)=>{
        if( !IpRestrict.checkIp(req.ip)){
            res.send('już głosowane')
            return;
        }
        //trzeba zadeklarować zmienna
        const {voteFor} = req.params
        // nie da sie tak ze add/append czy cos tam, trzeba klucz-wartosc albo do instenijacego klucza dopisac wartość
        if(typeof votes[voteFor] === 'undefined'){
            votes[voteFor] = 0;
        }
        votes[voteFor] += 1 ;
        res.send(votes)
    })

   


module.exports = {
  voteRouter
}







//step 1 ==>>

// let voteYes = 0;
// let voteNo = 0 ;
// voteRouter
//     .get('/vote/yes', (req, res)=>{

//         voteYes += 1;
//         res.send('voted YES')
//     })
//     .get('/vote/no', (req,res)=>{
//         voteNo += 1;
//         res.send('voted NO')
//     })
//     .get('/vote/check', (req,res)=>{
//         res.send(`liczba głosów na tak: ${voteYes}, liczba głosów na nie: ${voteNo}`)
//     })



//step 0 ==>>

// app.get('/' , (req,res)=>{
//     res.send('wpisanie w sciezne /vote/yes zagłosuj na tak, vote/no zagłosuje na nie')
// })


// app.get('/vote/:yesno', (req,res)=>{
//     if (`${req.params.yesno}` === 'yes'){
//         voteYes +=1
//         res.json({
//         voteforYES : voteYes
      
//     })
//     }else if (`${req.params.yesno}` === 'no'){
//         voteNo +=1
//         res.json(`vote for NO : ${voteNo}`)
//     }else{
//         res.send("wrong adress")
//     }
// })
    
// app.get('/votes/check', (req,res)=>{
//     res.send(`vote YES: ${voteYes} , vote NO ${voteNo}`)
// })