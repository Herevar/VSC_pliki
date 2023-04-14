// const {TickTock} = require('./week4_emitter.js')

// new TickTock()
//   .on('secondElapsed', data => {
//     console.log('1 sec!', data)
//   })
//   .on('fiveSecondElapsed', data => {
//     console.log('5 sec!', data)
//   })
//   .once('secondElapsed', data => {
//     console.log('First second!', data)
//   });

// tutaj na funkcje jest przypisanie
// const {tickTock} = require('./tick-tock')
// const events = tickTock();
// events.on('secondElapsed', data => {
//   console.log('mineła sekunda!', data)
// });

const {Restaurant} = require('./week4_restaurant.js')

const megaRest = new Restaurant();

let tables = 20 ;

function totalTableCount() {
  tables += value
}
function removeTable() {
  tables -= value
}

megaRest
  .on('open', () => {console.log('otwieramy ten burdel')})
  .on('close', () => {console.log('zamykamy ten burdel')})
  .on('reserv', (value) => {
  tables -= 1
  console.log('wolnych stolików zostaje: ', tables)
})
  // .on('free', addToTableCount)
  // .on('taken', removeTable)
  .on('change', value => { //change wartosc (+1/-1)zamiast taken/free
    tables += value
    console.log(`${tables} wolnych stolikow`)
  })
  

megaRest.open(); // otwarte
// megaRest.reseravtion(); // stolik zarezerwowoany , 1szy
// megaRest.reseravtion(); // stolik zarezerwowoany , 2gi
megaRest.change(); //taken(), freeTable()
megaRest.close(); //zamykamy wpizdu