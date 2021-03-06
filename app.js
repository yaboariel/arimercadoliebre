const express = require('express');
const app = express();
const path = require('path');

const publicFolderPath = path.resolve(__dirname,'./public')
app.use(express.static(publicFolderPath))

app.listen(3000,()=> 
    {console.log("Levantando un servidor con Express")
    console.log(__dirname)})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/home.html'))
});

app.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/registro.html'))
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/login.html'))
});