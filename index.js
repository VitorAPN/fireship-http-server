const { readFile } = require('fs');
const express = require('express');

const app = express();

app.get('/', (request, response)=>{
   
    readFile('./home.html', 'utf-8', (err, html)=>{
       
        if(err){
           response.status(500).send('Desculpe, não está funcionando'); 
        }

        response.send(html); 
    })
});

app.listen(process.env.PORT || 5000, ()=> console.log('Site funcionando em http://localhost:5000'));