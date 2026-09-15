const http = require('http');
const PORT=3000;



const server=http.createServer((request,response)=>{

    response.end(request);
  
});



server.listen(PORT,function exec(){
    console.log(`server has started at ${PORT}`);
});