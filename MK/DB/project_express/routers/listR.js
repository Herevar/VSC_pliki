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
        console.log('get jest', req.body)
        const oneTask = await TodoList.find(req.params.id)
        res.render('hbs_y/list_one', {
            oneTask
        })
    })

    // .delete()

    .post('/', async(req,res)=>{
        // console.log('post jest', req.body.task), ok
        const task_id = new TodoList({title :req.body.task})
        console.log(task_id)
        // res.render('hbs_y/added',{
        //     title : task_id
        // })
    })




    
    // console.log('wynik all:',pickAll)

    // await poolOf.end();


module.exports = {
    listRouter
}