const { exec } = require('child_process');
const { stdout, stderr } = require('process');
const { promisify } = require('util');
const execPromised = promisify(exec);
const {rename } = require('fs').promises;
const {normalize, resolve} = require('path');

// exec('dir', (error, stdout, stderr) => {
//     if(error){
//         console.log('smthg wrong', error)
//     }else if(stderr){
//         console.log('another kinf of error', stderr)
//     }else{
//         console.log('work fine', stdout)
//     }
// });


// exec('node js_kurs/node_js/new_test.js', (error, stdout, stderr)=>{
//     console.log('2: ',stdout)
//     console.log('3: ',stderr)
// })

const calc_1 = 'calc.exe';
const paint_2 = 'mspaint.exe';

async function run_program(program) {
    if(program === '1'){
        await execPromised(calc_1)
    }else if(program === '2'){
        await execPromised(paint_2)
    }else{
        console.log('nie ma takiego')
    }
}
// const pickedNumber = process.argv[2];
// run_program(pickedNumber)

const path1 = 'C:/downloads'

function safeJoin(targetPath) {
    const path = '.' + normalize('/'+targetPath)
    console.log('norm',path)
    console.log('===>',resolve(path1))
}
// safeJoin(path1)


// const {promisify} = require('util')
// const{exec} = require('child_process')
// const execProm = promisify(exec)

async function dirFiles(params) {
    // const kurwamac = resolve(normalize(params))
    try{
        const {stdout} = await execPromised('dir', {
            cwd: path1 ,
        })
        console.log(stdout)
    }catch(e){
        console.log('cos nie trybi', e)
    }
}

dirFiles(path1)


// const desktopPath = `${process.env.HOME}/Desktop`;
// const executablePath = `${desktopPath}/Nowy_folder`;

// exec(`${executablePath}`, (error, stdout, stderr) => {
//   if (error) {
//     console.error(`exec error: ${error}`);
//     return;
//   }
//   console.log(`stdout: ${stdout}`);
//   console.error(`stderr: ${stderr}`);
// });

//---------------------------------------------------------------------------------------------------------------------

const {writeFile, readFile} = require('fs').promises;
const { promisify } = require('util');
const scrypt = promisify(require('crypto').scrypt);
const randomBytes = promisify(require('crypto').randomBytes);
const { createCipheriv, createDecipheriv } = require('crypto');



async function crypting(text, password, salt) {

  const algorithm = 'aes-192-cbc';
  const key = await scrypt(password, salt, 24);
  const iv = await randomBytes(16);

  const cipher = createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  // console.log({
  //   encrypted,
  //   iv: iv.toString('hex'),
  // })
  return{
    encrypted,
    iv: iv.toString('hex'),
  }
};

async function savePass(text, password,salt,path){
  try{
    const coding = await crypting(text, password, salt);
    // const tojson = JSON.stringify(coding);
    console.log(coding);
    await writeFile(path, JSON.stringify(coding), {flag : 'w'})
  }catch(err){
    console.log('error jakis => ', err)
  }
}
//----//----//----//----//----//----//----//----
const PASSWORD = process.argv[2]; //student123
//----//----//----//----//----//----//----//----

// path to bedzie zapisanie do ./testowy/haslo.txt
const path = process.argv[3]; 
const text = 'super tajne';
const salt = '@sj45t45yGH^H5634Gh5$4hh45';
// crypting(text,PASSWORD,salt);
// savePass(text, PASSWORD,salt, path)

//------------------------------DECRYPT---------------------------

async function decryptText(text, password, salt, ivHex) {
  //First, we'll generate the key. The key length is dependent on the algorithm.
  //In this case for aes192, it is 24 bytes (192 bits).
  const algorithm = 'aes-192-cbc';
  const key = await scrypt(password, salt, 24);
  const iv = Buffer.from(ivHex, 'hex'); //Initialization vector.

  const decipher = createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(text.encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

const decrypting = async (password) => {
  const reader = await JSON.parse(await readFile('./testowy/haslo.txt', 'utf8'))
  console.log(reader.iv)
  //password zostowiam. Wypadaloby stowrzyc nowa zmienna ktora przyjmuje argv[2] i tam hasło w lini komend ale by sie gryzło z czescia szyfrujaca 
  //DZIWNE ZE TO WOGOLE DZIAŁA...ze z globalnej password bierze
  const decode = await decryptText(reader, password, salt, reader.iv )
  console.log(decode)
}
// decrypting(PASSWORD)


//---------------------------------------------------------------------------------------------------------------------