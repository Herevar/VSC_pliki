const express = require('express')
const { TodoList } = require('../utils/list_todo')
const { poolOf } = require('../utils/db2')

const listRouter = express.Router()

listRouter
    .get('/', async(req,res) => {
        const tasks = await TodoList.findAll();
        res.render('hbs_y/list_all', {
            tasks,
        })
    })

    .get('/:id', async(req,res)=>{
        const oneTask = await TodoList.find(req.params.id)
        res.render('hbs_y/list_one', {
            oneTask
        })
    })

    .delete('/del/:id', async(req,res)=> {
        const pickid = await TodoList.find(req.params.id)
        if (pickid === null){
            throw new Error("no such id in todo's")
        }
        else { 
            await pickid.delete()
            res.render('hbs_y/deleted')
        }
    })

    .post('/', async(req,res)=>{
        const task = new TodoList({task :req.body.task})
        id = await task.insert()
        res.render('hbs_y/added',{
            id
        })
    })
   



module.exports = {
    listRouter
}