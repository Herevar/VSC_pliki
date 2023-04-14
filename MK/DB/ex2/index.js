const { TodoRecord } = require("./records/todo_record");
const { poolz } = require("./utils/db2");



(async()=> {
    const firstTodo = new TodoRecord( {
        // id: '123',
        task: 'umyc zadek trolla',

    });

    // console.log(firstTodo);
    
    // const newId = await firstTodo.insert();
    // console.log("new task with ID num: ", newId)

    // const pick = await TodoRecord.find('123') // po stworzeniu obiektu tej instacji, pozniej this.id przymuje id tego co tu podalismy
    // await pick.delete()
    
    // pick.title = "zmieniony TASK"
    // await pick.update()

    const pickAll = await TodoRecord.findAll()
    console.log('wynik all:',pickAll)

    await poolz.end();


})();


