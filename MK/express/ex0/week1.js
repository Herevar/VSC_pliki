const express = require('express');
// const { listen } = require('express/lib/application');
const app = express();

// app.get('/', (req,res)=>{
//     // console.log(req)
//     res.send('helooooyu')
//     // res.send(req.get('user-agent')) - nie czaje czemu nie działa
//     // console.log(req.headers['user-agent']) //ok
//     console.log(req.get('user-agent')) //ok
// })
// app.get('/zxc', (req,res)=>{
//     res.send('jest ok');
//     // console.log(req.query);

// })

app.get('/start/:idik', (req, res)=> {
    res.json({idpodanewadressie : `${req.params.idik}`
                });
//     // PO JSONIE NIE PRZESYŁA JUZ HEADERSOW !!!!!!!!!!!!!!!!!!!!!!!!!!
//     // res.location('https://mistrzowie.org/');
//     // res.end();
//     // res.redirect("https://mistrzowie.org/")
//     res.sendFile('obrazek_megaK.jpg',{
//         root : './JS_kurs'
//     })
})



app.use(express.json());

app.post('/start', (req,res)=> {
    console.log(req.body); // musiby byc uzyty middlewere express.json zeby moc odczytac go z body przesyłanego pod wskazany adress na serwer
    res.send('dziala')

})
// MK\express\ex0
app.use(express.static('./'
, {index: 'home.html',}
    ))



app.listen(3000,'localhost')




// orientuje sie ktoś może czy da rade na onlineowym srodowisku odpalac "u siebie server" ? - nie wiem jak to opisać xD
// ogólnie to tak: 
// - na kompie w pracy nie moge nic zainstalowac - polityka firmy itd
// - robie swoim tempem jakies zadanka ale nie moge zrobić np osatnich zadań z expressa, bo moge tylko scieżke do głownego pliku tj : ```
// app.get('/', (req,res)=>{}
// ```
// ale już np ```
// app.get('/start', (req,res)=>{})
// ```
// nie moge - cały kod dobrze napisany ale nie wiem czy to jakies