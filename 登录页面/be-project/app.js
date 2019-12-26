const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// 配置 body-parser
// 只要加入这个配置，则在 req 请求对象上会多出来一个属性：body
// 也就是说你就可以直接通过 req.body 来获取表单 POST 请求体数据了
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
// parse application/json
app.use(bodyParser.json());

//设置跨域访问
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

// Access-Control-Allow-Origin
const todos = [{id: 1, title: '吃饭'}, {id: 2, title: '喝水'}, {id: 3, title: "玩"}];

// RESTful用法
// 增删改查 todos
// GET /todos 获取所有的todos
// POST /todos 添加一个todo
// PATCH /todos/:todoId 更新指定的todo
// DELETE /todos/:todoId

app
    .get('/todos', (req, res) => {
        res.json(todos);
    })
    .post('/todos', (req, res) => {
        const todo = {
            title: req.body.title,
            id: todos[todos.length - 1].id + 1
        };
        todos.push(todo);
        res.json(todo);
    })
    .patch('/todos/:todoId', (req, res) => {

    })
    .delete('/todos/:todoId', (req, res) => {

    });

app.listen(3000, () => console.log('api server running 3000'));
