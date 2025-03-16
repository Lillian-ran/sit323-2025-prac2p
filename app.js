// 导入 Express 模块
const express = require('express');

// 创建 Express 应用实例
const app = express();

// 端口号
const PORT = 3000;

// 托管静态文件（HTML、CSS、JS）
app.use(express.static('public'));

// 根路径路由
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// /about
app.get('/about', (req, res) => {
  res.send('This is the about page.');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});