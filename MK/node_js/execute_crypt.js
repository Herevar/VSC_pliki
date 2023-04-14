const {exec} = require('child_process');
const {promisify} = require('util');
const execPromised = promisify(exec);

//exec moze nie byc dobry pomysłem bo on odpala program jakis po prostu(jak tam przesłać cos,jakies kombinacje...bezsensu), chyba lepiej sobie zimportowac moduły/funkcje
//pozatym do execa nie jest bezpieczne przekazywanie danych podanych przez osoby 3cie


const fTest = async () => {
  try{
    // 'C:/downloads'
    const {stdout} = await execPromised('dir', {cwd:'./js_kurs/node_js/'  })
    console.log(stdout)  
  }catch(e){
    console.log('po co by miało działac...',e)
  }
}
// fTest()

const {hashing, checkingPass} = require('./week3_crypt')
const {createGzip, createGunzip} = require('zlib')
const {createReadStream, createWriteStream} = require('fs');
const {pipeline} = require('stream').promises ;
// const psw = process.argv[2]
// const test3 = process.argv[2]
const test1 = './js_kurs/node_js/test1.txt'
const test2 = './js_kurs/node_js/test2.txt'
const fx =  async() =>{

    await pipeline(
        createReadStream(test1),
        createGzip(),
        createWriteStream(test2),
    )
}
fx()




// const algorithm = 'aes-192-cbc';
// const { promisify } = require('util');
// const scrypt = promisify(require('crypto').scrypt);
// const { createDecipheriv } = require('crypto');




function first(params) {
  return x
}

function second(params) {
    z = first() + y 
}





function one(params, (err, key) => {
  

});

const scrypt = promisify(require('crypto').scrypt);

scrypt(password, salt, 24, (err, key) => {


} )
  
