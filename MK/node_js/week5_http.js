const {createServer} = require('http');
const server = createServer();
const {readFile, writeFile} = require('fs').promises;


(async()=>{
let counter = Number(await readFile('./JS_kurs/node_js/w5_counter.txt', 'utf-8'))
// let counter = 1;

server.on('request', async (req, res)=> {    // na 'requesta' zareaguje funkcja; uruchamia callback, który zwraca obiekt typu incomingMessage - req, oraz ServerResponse - res
    if(req.url === '/'){
    console.log('jest ok; ',req.url);
    res.writeHead(200, {'Content-type' : 'text/html',
    });
    res.write('<h1>hellllllllooooooooooouuuuyyyyyy</h1>');
    res.write('<h1>hellllllllooooooooooouuuuyyyyyy</h1>');
    await writeFile('./JS_kurs/node_js/w5_counter.txt', `${counter}` )
    res.end(counter++ +'')
    
    }else{
        console.log('cos nie tak')
        //wyswietli bo sie favicon.ico wpycha
    }
    
})

server.listen(3000, 'localhost') //nasłuchuje na -> 3000 taki ustalony po prostu, localhost - czyli u nas tylko (127.0.0.1) a jakby dac 0.0.0.0 to wszystko zewsząd 
})()