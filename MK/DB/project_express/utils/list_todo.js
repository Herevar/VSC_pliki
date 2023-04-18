
const {v4: uuid} = require('uuid');
const { poolOf } = require('./db2');

class TodoList  {
    constructor(obj) {
        console.log('obj->',obj)
        this.id = obj.id ;
        this.title = obj.task ;
        console.log('this.title->',this.title)
        this._validate()
    }

    _validate(){
        
        if (this.title.trim().length < 3){
            throw new Error("Task must contain description")
        }
        if (this.title.length >150){
            throw new Error("to long task descripton; limit is 150 char")
        }


    }

    async insert() {
        this.id = this.id ?? uuid();

        await poolOf.execute("INSERT INTO `todo` VALUES (:id, :title)", {
            id : this.id, 
            title: this.title
        
        })
        return this.id
        
    }
    async delete(){
        if (!this.id){
            throw new Error("no such id in todo's")
        }
        await poolOf.execute(" DELETE FROM `todo` WHERE `id` = :id", {
            id : this.id,
        })
    }
    
    static async find(id) {
        const [result] = await poolOf.execute("SELECT * FROM `todo` WHERE `id` = :id", {
            id: id
        })
        return result.length === 1 ? new TodoList(result[0]) : null // TWORZYMY NOWA INSTACJE KLASE ZEBY TEGO UZYC / jezeli jest to zwracamy a jezeli nie ma (bo np w id podalismy byle co) to zwroci null
    }

    static async findAll(){
        //..
        const [all] = await poolOf.execute("SELECT * FROM `todo`")
        return all 
    }

    async update() {

        if (!this.id){
            throw new Error("no such id in todo's")
        }
        
        this._validate()

        await poolOf.execute("UPDATE `todo` SET `task` = :title WHERE `id`= :id", {
            title: this.title,
            id : this.id, 
        })
        return this.id

    }
}

module.exports = {
    TodoList,
}



