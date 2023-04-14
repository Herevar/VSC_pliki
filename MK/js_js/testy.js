// const dayofweek = "wtorek" ;

// // switch ('dayofweek') :
// //     case 'poniedzialek' :
// //         console.log('poniedzialek');
// //         break;
// // powyzej pierwsze z głowy, a ponizej ok 

// switch ('dayofweek')  {
//     case 'poniedzialek' :
//         console.log('poniedzalek');
//         break;
//     case 'wtorek' :
//         console.log('fetorek');
//         break;
// }
// // chuj wie czy to działą bo poki co nie wiem jak sprawdzic
// let nameOfPlayer = "mietek" ;
// console.log(`siemanko kolano ${nameOfPlayer == true ? nameOfPlayer : 'jakis tam ludziku'}`)
// wyswitli ludzka - warunek nie moze byc tak skonstruowany pewnie, nie moze byc ""== true" - ciekawe czemu

//--------------------------------------------------------------------  

// const [nameUser, idUser, ageUser ] = ['mietek', 253, 23]
// const game = [120, 12, 'kowalski']
// let [value, time, surname] = game
// console.log(value)
// console.log(surname)

//--------------------------------------------------------------------

// const funkcja = new Function('asd', 'alert(asd)');
// // funkcja('abdc!!!')


// // document.body.addEventListener("click", function () {
// //   console.log('klik-pl')
// // })
// // alert , click - musza byc dokladnie tak napisane - to jest nazwa tego co je wywołuje

//--------------------------------------------------------------------

// let example1 = "globalna";
//     if( true) {
//         let example2 = "wewnetrzna lokalna example2";
//         let example1 = 'globalna w warunku';
//         // jak nie zadeklaruje 'let' lokalnie to dziala na globalna
//         console.log(example2);
//         console.log(example1);
//     }
// console.log('log-glob',example1);

//--------------------------------------------------------------------


function Person(name, surname) {
    this.name = name;
    this.surname = surname;
    this.say = function () {
        console.log('hello ', this.name)
    };

}

const pplBase = [];

for (let i = 0; i < 2; i++) {

    // wersja kek, no ale działa :v
    // pplBase.push([prompt('podaj imie: '),
    //               prompt('podaj nazwisko: '),])

    // const name = prompt("podaj imie: ");
    // const surname = prompt('podaj nazwisko: ');
    pplBase.push(new Person('mietek', 'kinga'));
    // pplBase.push(new Person(prompt("podaj imie: "), prompt('podaj nazwisko: ')));
}
console.log(pplBase[1].say())

//--------------------------------------------------------------------

function summoning(...args) {
    let result = 0;
    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] !== 'number') {
            console.log('wrong typ of argument');
        }
        result += args[i];
    }
    return result;
}
//w prompcie czy cos przy przesyłaniu danym mozna to sformatowac tak zeby jakis list nie wsyłało itp
const sumOfNum = summoning(1, 2, 3, 4, 5, 6, 7);
console.log(sumOfNum);

//--------------------------------------------------------------------

const obj1 = {
    id: 10,
    name: 'xardas',
    fraction: 'beliar',
    avatar: true,
};

function filterSaveData(object) {
    const { name: nick, avatar } = obj1;
    const listOF = [nick, avatar];
    // return {listOF, nick, avatar};
    return listOF;

};
console.log(filterSaveData(obj1));

//--------------------------------------------------------------------

array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 66, 77];
newA = [];
let y = 0;
for (const x of array)
y += x;
//-------------------------------------------------------------------
// for (const x of array){  // "in" odwołuje sie do indeksu "of" do wartości
//     newA.push(x)     
//     y += x;
// }
// console.log(y)
// console.log(newA)

//--------------------------------------------------------------------
for (const x in array) {
    y += Number(array[x]);
}
// console.log(y)
// console.log(newA)

//--------------------------------------------------------------------
const result = array.reduce((prev, curr) => {
    return prev + curr
}, 0)
console.log('metoda .reduce :', result);
//--------------------------------------------------------------------
objectX = {
    name: 'Tolek',
    surname: 'Banan',
}



for (const key in objectX) {  // "in" sie odwoluje do indeksów ( i działa) a "of" do warości wiec nie zadziała
    // console.log("in ...",key, objectX[key])
}

const obj = Object.entries(objectX);
console.log('Object.entries(objectX) to:', obj);
for (const asd of obj) {
    console.log('kazda pozycja z Object.entries: ', asd)
}


const obj2 = Object.keys(objectX);
for (const x of obj2) {
    console.log('kazda pozycja z Object.keys() ', x)
}
//--------------------------------------------------------------------
// const arr = new Array(30000000).fill(1);

// let result1 = 0;
// let result2 = 0;
// let i = arr.length;

// console.log(new Date());

// arr.reduce((prev, curr) => prev + curr, 0);
// console.log(new Date());

// for (let i = 0; i < arr.length; i++) {
//   result1 += arr[i];
// }
// console.log(new Date());

// while (i--) {
//   result2 += arr[i];
// }
// console.log(new Date());

//--------------------------------------------------------------------