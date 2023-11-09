const express = require("express");
const Todo = require("../models/todo.js")

const router = express.Router();

router.get("/",(req,res)=>{
    res.send("HI")
})

//할일 추가
router.post('/', async(req,res)=>{
    const{value}=req.body;
    const maxOrderByUserId = await Todo.findOne().sort("-order").exec();

    const order = maxOrderByUserId ? maxOrderByUserId.order + 1 : 1;

    const todo = new Todo({value, order});
    await todo.save();
    res.send({todo})
})

module.exports = router; 