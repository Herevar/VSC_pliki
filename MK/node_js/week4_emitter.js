const {EventEmitter} = require('events');

class TickTock extends EventEmitter {
  constructor() {
    super();
    setInterval(() => {
      this.emit('secondElapsed', 'test1');
    }, 1000);
    setInterval(() => {
      this.emit('fiveSecondElapsed', 'test5');
    }, 5000);
  }
}

module.exports = {
  TickTock,
}