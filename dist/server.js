'use strict';

const http=require("http");
const fs=require("fs");
const url=require("url");

const server=http.createServer();

server.on('listening',()=>{
console.log("开始监听！http://localhost:8080");
});

server.on('request',(request,response)=>{
   console.log("请求成功!");
   let urlobj=url.parse(request.url);
   if(urlobj.pathname == "/"){
       fs.readFile('html/index.html', (error, info)=>{//读取首页
           response.write(info);
           response.end();
       });
   }
   else if(urlobj.pathname.endsWith(".html")){
       fs.readFile("html"+urlobj.pathname, (error, info)=>{//读取html
       	console.log(urlobj.pathname)
           response.write(info);
           response.end();
       });
   }else if(urlobj.pathname.startsWith('/css')){
       fs.readFile("./"+urlobj.pathname, (error, info)=>{//读取css
           response.write(info);
           response.end();
       });
   }
   else if(urlobj.pathname.startsWith('/data')){
       fs.readFile("."+urlobj.pathname, (error, info)=>{//读取json
           response.write(info);
           response.end();
       });
   }
   else if(urlobj.pathname.startsWith('/js')){
       fs.readFile("."+urlobj.pathname, (error, info)=>{//读取js
           response.write(info);
           response.end();
       });
   }
   else if(urlobj.pathname.startsWith('/images')){
       fs.readFile("."+urlobj.pathname, (error, info)=>{//读取images
           response.write(info);
           response.end();
       });
   }
   else{
       response.write('404');
       response.end();
   }
})

server.listen('8080', 'localhost');


