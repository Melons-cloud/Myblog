// 应用程序的启动文件
var express =require("express");   //加载express模块
//创建app应用
var app=express();
/*
req request对象
res response对象
next 函数

*/
app.get('/',function (req,res,next) {
    res.send('<h1>欢迎光临我的博客!</h1>');
})

//监听http请求
app.listen(8081);