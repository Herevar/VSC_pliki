const {EventEmitter} = require('events');

class Restaurant extends EventEmitter {
  // constructor() {
  //   super();
  //   }
    open() {
            // //otwarcie
      this.emit('open', 'otwarte!')
    }
    // reseravtion(){
    //   this.emit('taken', -1) //('reserv', -1)
    // }
    taken(){
      this.emit('taken') //np change zmiast taken/free w wtedy bazujac na przesłanej wartość -1/+1
    }
    change(){ //nazwa wtedy nie ma wiekszego znaczenia dla czynnosci
      this.emit('change', -1)
    };
    freeTable(){
      this.emit('free')
    };
    close(){
      this.emit('close', 'zamykamy, bo tak')
    }
}
module.exports = {
  Restaurant,
}