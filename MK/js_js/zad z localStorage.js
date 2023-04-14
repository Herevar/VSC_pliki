// ZADANIE 4:------------------------------------------------------


// const btn = document.querySelector('.btn-toggle-color');
// const h1 = document.querySelector('.h1');
// const body = document.body;

// btn.addEventListener('click', () => {
//     h1.innerText = ++h1.innerText; 
//     const isDarkMode = body.classList.toggle('dark-mode');

//     if (isDarkMode) {
//         btn.innerText = 'Turn on light mode';
//     } else {
//         btn.innerText = 'Turn on dark mode';
//     }
// });

//takie tam wstepne testy do zadania
// const adding = document.querySelector('.question');
// adding.classList.add('first-p');
// const firstp = document.querySelector('.first-p');
// firstp.style.color = "red";


// const h1 = document.querySelector('h1');
// const p1 = document.querySelector('.first-p-counter');
// const p2 = document.querySelector('.second-p-counter');

// const btnCounter = document.querySelector('.counter');
// const btnGood = document.querySelector('.good');
// const btnBad = document.querySelector('.bad');

// btnCounter.addEventListener('click', count() );
// function count() {
//     h1.innerText = ++h1.innerText
// }
// const answersValue = {
//     goodmod : 0 ,
//     badmod : 0,
// }
// btnGood.addEventListener('click', ()=>{
//     p1.innerText = ++p1.innerText;
//     answersValue.goodmod += 1;
//     saveAnswers();
//     } );

// btnBad.addEventListener('click', ()=> {
//     p2.innerText= ++ p2.innerText;
//     answersValue.badmod += 1;
//     saveAnswers();

// });
// function saveAnswers() {
//     localStorage.setItem("good/bad", JSON.stringify(answersValue)) 
// }

// moja wersja testy: ------------------------------------------------
const h1 = document.querySelector('h1');
const p1 = document.querySelector('.first-p-counter');
const p2 = document.querySelector('.second-p-counter');

const btnCounter = document.querySelector('.counter');
const btnGood = document.querySelector('.good');
const btnBad = document.querySelector('.bad');

btnCounter.addEventListener('click', () => count(h1));
btnGood.addEventListener('click', () => count(p1));
btnBad.addEventListener('click', () => count(p2));


function count(arg) {
    if (arg == h1) {
        arg.innerText = ++arg.innerText;
    } else if (arg === p1) {
        p1.innerText = ++p1.innerText;
    } else {
        p2.innerText = ++p2.innerText;
    }
}



const pLicznik = document.querySelector('.array-value');
const btnLicznik = document.querySelector('.licznik');


let numbers = localStorage.getItem('licznik');
// console.log('getter',numbers, ":",)         
if (numbers === null) {
    array = [];
} else {
    array = JSON.parse(numbers);
    console.log('hmmh', array)
    // pLicznik.innerText = //werja z lekcji to polaczyc liczbe 'join'em (i w osbny selektorze pokazac tych liczb) i pozniej 'reduce'em dodac (i do <p> .licznika)
    for (x of array) {
        let nArray = Number(pLicznik.innerText);
        nArray += x;
        pLicznik.innerText = nArray;
    }
}

// array.forEach((element, i) => {array[i] += element} 
// );
// console.log('hm',array) ; 


btnLicznik.addEventListener('click', () => {
    const number = Number(prompt("podaj liczbe: "));
    console.log('wpisales', number);
    array.push(number);
    localStorage.setItem("licznik", JSON.stringify(array));
    let changeToNumber = Number(pLicznik.innerText) + number;
    pLicznik.innerText = changeToNumber;
});