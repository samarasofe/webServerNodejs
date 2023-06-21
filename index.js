// Criando servidor web com Node.js

const http = require('http');  //importando módulo 'http' do Node.js

let server = http.createServer((req, res)=>{  //criando servidor 'http' com método createServer do módulo http. Função de retorno (callback req e res) será executada sempre que o servidor receber uma solicitação HTTP

    console.log('URL:', req.url);
    console.log('METHOD:', req.method);

    res.end('OK!');

});

server.listen(3000, '127.0.0.1', ()=>{  //Chamando o método listen para iniciar o servidor na porta 3000.

    console.log('Servidor Rodando!');
});