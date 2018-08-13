let path = require('path');// nodejs自带模块
let express = require('express');// 引入express
let app = express();// 创建exprss实例

app.use('/', require('./src/lottery.js'));

app.use(express.static('src'));// 指定静态资源所在的目录

// 设置路由配置
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'src/index.html'));
})

// 监听端口，创建服务器
let server = app.listen(9006, function () {
    console.log('app listening at http:localhost:9006');
})