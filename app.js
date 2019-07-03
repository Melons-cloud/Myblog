// 应用程序的启动文件
var express =require("express");   //加载express模块
//创建app应用

//加载模板
var swig=require('swing');
var app=express();

// 配置应用模板

//定义当前应用所使用的模板引擎
// 第一个参数：模板引擎的名称，同时也是模板引擎的后缀，第二个参数表示用于解析处理模板内容的方法
app.engine('html',swig.renderFile);
// 设置模板文件存放的目录,第一个参数必须是view，第二个参数是目录
app.set('views','./views');

// 注册所使用的模板引擎,第一个参数必须是view engine,第二个参数和app.engine这个方法中定义的模板引擎的名称（第一个参数）是一致的
app.set('view engine','html');


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