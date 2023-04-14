const {writeFile, readFile} = require('fs').promises;
const {hash, compare} = require('bcrypt');

const PATH = './js_kurs/node_js/haslo_w3_crypt.txt';
const pass = process.argv[2];

async function savePassFunction(file) {
    //jesli {flag: 'w'}
    await writeFile(PATH, JSON.stringify(file));
}

async function loadPassFunction() {
    const reader = await JSON.parse(await readFile(PATH, 'utf8'));
    return reader
}

const hashing = (password) => {
    hash(password, 10, function (err, hashed) {
        if(err){
            console.log('bład => ', err)
        }else{
            console.log('hash=> ', hashed)
            savePassFunction(hashed) 
            
        }   
    })
}
// hashing(pass)
const checkingPass = async (passToCheck) => {
    compare(passToCheck, await loadPassFunction(), function (err, respo) {
        if(err){
            console.log('bład jakis: ', err)
        }else{
            console.log('hasło jest : ',respo)
        }
    })
}

// checkingPass(pass)


module.exports = {
    hashing,
    checkingPass,
};