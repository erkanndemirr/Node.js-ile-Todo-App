const router = require('express').Router()
const Todo = require('../models/todo')

//routes

router.post("/add/todo", (req,res) =>{
    const {todo1,todo2} = req.body
    const newTodo = new Todo({todo1,todo2})

    //kayıt 

    newTodo
    .save()
    .then(()=>{
        console.log("Kayıt Başarılı")
        res.redirect("/")
    })
    .catch((err)=>{
        console.log(err)
    })
})

.get("/delete/todo/:_id", (req,res) =>{
    const { _id } = req.params
    Todo.deleteOne({_id})
    .then(()=>{
        console.log("Kayıt Silindi")
        res.redirect("/")
    })
    .catch((err) =>{
        console.log(err)
    })
})

module.exports = router