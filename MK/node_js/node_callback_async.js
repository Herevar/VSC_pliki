// //ver 1
// const {lookup} = require (dns)

// lookup('google.com', (err, data) => {
//     if(err === null){
//         console.log(data)
//     }else{
//         console.log('coś nie tak', err)
//     }
// })

// //ver 2

// // const {lookup} = require('dns')
// const {promisify} = require('util')

// const promisedLookup = promisify(lookup)
// promisedLookup('google.comg')
//     .then(zwrotka => console.log(zwrotka))
//     .catch(errorx => console.log('=>>smthg gone wrong =>>',errorx))

// //ver3

// const {lookup} = require('dns').promises

// (async ()=>{
//     try{
//         const data = await lookup('google.com')
//         console.log(data)
//     }catch(errX){
//         console.log("errrrrors", errX)
//     }
// })(); 
// //musi sie wywołać ta funkcja jakos stąd samowywowłujaca sie w () i na koncu()

const fs = require('fs')

fs.readFile('./js_kurs/node_js/node_callback.txt', 'utf-8', (err, data) => {
    if (err) {
      // ...
    }
    const d = Number(data) * 2;
  
    fs.writeFile('./js_kurs/node_js/node_callback.txt', d.toString(), 'utf-8',(err, data) => {
      if (err) {
        // ...
      }     
      console.log('File saved successfully');
    })
  });

console.log("przykladowy_tekst")

//-------------------------------------------------------------------------------------


// const {readFile, writeFile} = require('fs').promises; 
// const FILE_NAME = './JS_kurs/node_js/plik1.txt';


async () => {
    try {
        const readTheFile = await readFile(FILE_NAME, 'utf8')
        console.log(readTheFile)
        const splitedOne = readTheFile.split('\n')
        // console.log(splitedOne.reverse())
        // console.log(splitedOne[splitedOne.length-1])
        console.log(splitedOne.at(-1))

        // await writeFile(FILE_NAME, `\n${splitedOne[-1]*2}` , {flag : 'a'})



    } catch (error) {
        console.log('cos poszło nie tak', error)
    }
}

//----------------------------------------------------------------------------

// const {readFile, readdir,access,stat} = require('fs').promises
// const {W_OK, R_OK} = require('fs').constants

// const FILE_NAME = './JS_kurs/node_js/plik1.txt'

async function nameInsteadOfArrow() {

    // const read1File = await readFile(FILE_NAME, 'utf-8')
    // console.log(read1File)

    const readerDir = await readdir('.');
    //---------------------------------------------------------
    //jak z typem(withFileTypes) przeslemy do stat() to cos tam sie krzaczy 
    //const readerDir = await readdir('.', {withFileTypes: true,});
    //console.log(readerDir)
    //----------------------------------------------------------
    for (const x of readerDir) {
        console.log(readerDir.indexOf(x), ': ', x)

        const fileStat = await stat(`./${x}`)
        console.log(fileStat)

    }
}
// nameInsteadOfArrow()

//----------------------------------------------------------------------------


const { readFile, writeFile, readdir, stat } = require('fs').promises
//writeFile(gdzie - path, co-zmienna, {jak-flag:''}/kodowanie)
const dane = [1, 2, 7, 20, 56, 22, 8888]
const dane2 = '234'
const created_file = './JS_kurs/node_js/array.txt';

//wywaliłem cos-tam initial function
async () => {
    try {
        // await writeFile(created_file, JSON.stringify(dane), {flag :'w'})
        const readThisFile = await readFile(created_file, 'utf-8')
        console.log(readThisFile)
        const obj = JSON.parse(readThisFile)
        console.log(obj)
        y = 0
        for (const x of obj) {
            y += x
        }
        console.log(y)
    } catch (eror) {
        if (eror === "ENOENT") {
            console.log(eror)
        } else {
            await writeFile(created_file, JSON.stringify(dane2), { flag: 'w' })
        }
    }
    // try {
    //     await writeFile(created_file, `${JSON.stringify(y)}`, { flag: 'a' })
    // } catch (err) {
    //     console.log("cos nie trybi")
    // }
}

//----------------------------------------------------------------------------
// FS.STATS MA SWOJE METODY !!!!!!!!!!!WIEC isFile() isDirectory jest metoda fs.stat
// const FILE_NAME = `./JS_kurs/node_js`;

// async function NotArrow(path) {

//     const readerFolder = await readdir(path)
//     for(x of readerFolder){
//         // console.log(`<---------- ${x} ---------->`);
//         const xStat = await stat(`${path}/${x}`);
//         // console.log(xStat.isDirectory())
//         if(xStat.isDirectory()){
//             console.log("FOLDER ===>: ", x)
//             await NotArrow(`${path}/${x}`)
//         }else{
//             console.log('FILE: ',x)
//         }

//     }

// }
// console.log(NotArrow(FILE_NAME))
// ----------------------------------------------------------------------------
const { mkdir, unlink, rename } = require('fs').promises;

// (async () => {
//     // await mkdir('./js_kurs/node_js/folder_testowy', {recursive: true})
//     // await rename('./js_kurs/node_js/folder_testowy' , './js_kurs/node_js/folder_testowy_2') 
//     const asd = 123
// })();

// (async () => {
//     const thingToDelete = process.argv[2]
//     try {
//         // await rmdir(thingToDelete)
//         // await rm(thingToDelete, {recursive: true})
//         await unlink(thingToDelete)
//     } catch (e) {
//         if (e === "ENOENT") {
//             console.log(`${e}, file doesn't exist`)
//         } else {
//             console.log('smthg else wrong;', e)
//         }
//     }
// })
// const { write } = require('fs')
// ()

//----------------------------------------------------------------------------

const {normalize, resolve, join} = require('path');

// function safeJoin(base, target) {
//     const targetPath = '.' + normalize('/'+ target)
//     return targetPath
// }


// const userPath = normalize(join(__dirname, process.argv[2]));
// console.log(userPath)

// const userPath2 = resolve('/aaa','/bbb', process.argv[2])
// console.log(userPath2)

//----------------------------------------------------------------------------

// const {basename, dirname, resolve, normalize, join} = require('path');

// const userPath2 = process.argv[2]

// // console.log(__dirname)
// // console.log(__filename)
// // console.log(basename(__dirname))
// // console.log(basename(__filename))

// // console.log('dirname',dirname(userPath))
// // console.log('basename',basename(userPath))

// const pathres = normalize(join(__dirname, userPath2))
// const pathres2 = resolve(process.argv[2])
// console.log('normalize => : ',pathres)
// console.log('resolve => : ',pathres2)

//----------------------------------------------------------------------------

const fetch = require('node-fetch');
const {appendFile} = require('fs').promises
const theCity = process.argv[2];



// function safeJoin(base, cityName){
//     const path = '.' + normalize('/' + cityName)
//     return resolve(base + path)
//   }


async function filtrForCity(baseOfCities, theCity) {
    for(const city of baseOfCities ){
        // console.log(city.stacja)
        if (city.stacja === theCity){
            console.log('JEST: ', city.stacja)
            await appendFile('./JS_kurs/node_js/node_js/saveCity.txt', `${city.stacja} o to to`)
        }
    }
    
}

checkCityForWeather = async (city)=>{
    try{
        const check = await fetch('https://danepubliczne.imgw.pl/api/data/synop');
        const result = await check.json()
        // console.log(result)
        filtrForCity(result, theCity)
    }catch(e){
        console.log('!!!==> ', e)
    }


}

// checkCityForWeather()