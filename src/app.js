const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

//ROUTES
app.use(require('./routes/index.routes'))

//STATIC FILES

app.use(express.static(path.join(__dirname,'../public')));

app.use((req,res)=>{
    res.sendFile(path.join(__dirname,'../public/404.html'))
});

app.listen(port, ()=>{
    console.log(`Corriendo en el puerto ${port}`)
});