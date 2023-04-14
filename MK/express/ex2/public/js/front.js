const numberA = document.querySelector("#numA")
const numberB = document.querySelector("#numB")
const resultDiv = document.querySelector('#result')
const form = document.querySelector('form') // mozna elementowi nadac klase, id i 'łapać' po niej  => const form  = document.getElementById('signup');

form.addEventListener('submit', async event =>{
    event.preventDefault()  // anuluje automatyczne przeładowanie strony po 'enter'

    const numA = Number(numberA.value); // pobieramy wartosc z podanej na html'u
    const numB = Number(numberB.value);

    resultDiv.innerText = 'loading...' //taki tam dodatek przy wolny necie np

    const res = await fetch('/calc/check',{ //na dany adres - adres podstrony(index.html)
        method : 'POST',  //przesyłamy
        body : JSON.stringify({numA, numB,}) , // wartosci w odpowiednim formacie
        headers : {
            'Content-Type' : 'application/json', //musimy podac info w jakim formacie
        }

    });
    const data = await res.json(); // wynik zapisujemy do obiektu jsonowego

    if(data.divider === true){
        resultDiv.innerText = 'Number B is divider of Number A'
    }else{
        resultDiv.innerText = 'Number B is not divider of Number A'
    }
})