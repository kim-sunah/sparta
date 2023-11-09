const express = require("express");
const Todo = require("../models/todo.js")

const router = express.Router();

// router.get("/", (req, res) => {
//     res.send("HI")
// })

//할일 추가
router.post('/todos', async (req, res) => {
    const { value } = req.body;
    const maxOrderByUserId = await Todo.findOne().sort("-order").exec();

    const order = maxOrderByUserId ? maxOrderByUserId.order + 1 : 1;

    const todo = new Todo({ value, order });
    await todo.save();
    res.send({ todo })
})

//목록 조회
router.get('/todos', async (req, res) => {
    const todos = await Todo.find({}).sort("-order").exec();
    res.send({ todos })
});

//할일 순서 변경
router.patch('/todos/:todoId', async (req, res) => {
    const { todoId } = req.params;
    const { order } = req.body;

    //1. todoId에 해당하는 할 일이 있는가?
    const currentTodo = await Todo.findById(todoId);
    if (!currentTodo) { return res.status(400).json({ 'errorMessage': '존재하지 않는 할 일입니다.' }) }

    //2. todoId에 해당하는 할 일이 없으면 에러를 출력
    if (order) {
        const targetTodo = await Todo.findOne({ order }).exec();
        if (targetTodo) {
            targetTodo.order = currentTodo.order;
            await targetTodo.save();
        }
        currentTodo.order = order;
        await currentTodo.save();
    }
    res.send();
});
module.exports = router; 