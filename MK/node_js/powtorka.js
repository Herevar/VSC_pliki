const{readFile, writeFile, readdir, stat} = require('fs').promises

const file1 = './js_kurs/node_js/plik1.txt'

async function notArrow() {
    const reader = await readFile(file1, 'utf-8')
    console.log(reader)
    await writeFile(file1, '123', {flag : 'a'})
}
// notArrow()
//-----------------------
const path1 = './js_kurs/node_js/'

async function folderAndFile(path) {
    const reader = await readdir(path)
    for (const x of reader){
    //    console.log(x)
       const checkStat = await stat(`${path}/${x}`)
       if(checkStat.isFile()){
        console.log(`${x} jest plikiem`)
       }else{
        console.log(`${x} jest folderem`)
       }
    }  
}
// folderAndFile(path1)
//-----------------------
const link = 'https://danepubliczne.imgw.pl/api/data/synop'
const { appendFile } = require('fs').promises
const fetch = require('node-fetch');


async function filtrForCity(baseOfCities, theCity) {
    for (x of baseOfCities){
        if(x.stacja === theCity){
            // console.log(x)
            await appendFile('./js_kurs/node_js/saveCity.txt', `\n${x.stacja}`)
        }
    }    
}

async function checkWeathers(link) {
    try{
        const check = await fetch(link);
        const result = await check.json()
        console.log('ok działa fetch i "result" leci do filtra')
        filtrForCity(result,'Tarnów')
    }catch(e){
        console.log('jakis error => ',e)
        
    }
}
// checkWeathers(link)
//-----------------------