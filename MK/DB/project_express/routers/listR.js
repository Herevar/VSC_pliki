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
        res.render('hbs_y/list_one.hbs', {
            oneTask
        })
    })

    // .delete()

    .post('/', (req, res)=>{
        console.log(req.body)
        const task_id = new TodoList(req.body.task)
        res.render('hbs_y/added.hbs',{
            task_id
        })
        
    })

    
    // console.log('wynik all:',pickAll)

    // await poolOf.end();


module.exports = {
    listRouter
}