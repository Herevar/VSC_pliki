//ZADANIE 3:------------------------------------------------------

const numOfBook = prompt('podaj numer ksiązki: ')
fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${numOfBook}`)
    .then(response => response.json())
    .then(show => console.log(show))
    .catch(error => console.log('jakis error: ', error));

async function numOfBook() {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:978-83-7229-270-4`)
    const read = await response.json()
    console.log('asd', read.items[0].volumeInfo.title)
}
numOfBook()

//promise przyjmuje 1 parametr ktorym jest funkcja(ta funkcja sie wykonuje od razu): new Promise( ()=>{} )
  //jako parametry tej funkcji dostajemy 2 dodatkowe funkcje new Promise((resolve, reject)=>{})
    //normalnie gdy uzyjemy funkcji wewnatrz tej =>{} to dajemy return ALE chca uzyc asynchronicznie zamiast poinformowac return'em - return cos_tam, uzyjemy reslove(cos_tam) 
// return new Promise(resolve => { setTimeout(() => { resolve('resolved'); czyli resolve dostał wartość 'resolved' po x sekundach

// promise generalnie zwraca (resolve, reject) i w tej funkcji do zwrotki 'resolve' jest przypisane słowo 'resolved' na joł tubie pytałem o to  : Live MG 5.12.2022 V3

function resolveAfter2Seconds() {
    return new Promise(pomidor => {
        setTimeout(() => {
            pomidor('resolved');                  // czemu nie console.log('resolved') //to sie wywoluje po prostu gdyby nie 'new Promise' to by trzeba było to wywalic do zewnetrzenj funkcji bo jakoś trzeba ja uruchomic/wywołac ale jest return i po przypisaniu 'resolved' returnem wraca do asyncCall()
        }, 2000);
    });
}
async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
}
asyncCall();