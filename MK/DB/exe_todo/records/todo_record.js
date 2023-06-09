const { poolz } = require("../utils/db2");
const {v4: uuid} = require('uuid');

class TodoRecord  {
    constructor(obj) {
        
        this.id = obj.id ;
        this.title = obj.task ;
        
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

        await poolz.execute("INSERT INTO `todo` VALUES (:id, :title)", {
            id : this.id, 
            title: this.title
        
        })
        return this.id
        
    }
    async delete(){
        if (!this.id){
            throw new Error("no such id in todo's")
        }
        await poolz.execute("DELETE FROM `todo` WHERE `id` = :id", {
            id : this.id,
        })
    }
    
    static async find(id) { //podajemy z zewnatrz ( nie bierze pod uwage this. - chyba)
        const [result] = await poolz.execute("SELECT * FROM `todo` WHERE `id` = :id", {
            id: id
        })
        return result.length === 1 ? new TodoRecord(result[0]) : null // TWORZYMY NOWA INSTACJE KLASE ZEBY TEGO UZYC / jezeli jest to zwracamy a jezeli nie ma (bo np w id podalismy byle co) to zwroci null
    }

    static async findAll(){
        //..
        const [all] = await poolz.execute("SELECT * FROM `todo`")
        return all 
    }

    async update() {

        if (!this.id){
            throw new Error("no such id in todo's")
        }
        
        this._validate()

        await poolz.execute("UPDATE `todo` SET `task` = :title WHERE `id`= :id", {
            title: this.title,
            id : this.id, 
        })
        return this.id

    }
}

module.exports = {
    TodoRecord,
}



