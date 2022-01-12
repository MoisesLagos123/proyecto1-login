const express = require('express')
const session = require('express-session')
const app = express()
const dotenv = require('dotenv')

// motor de plantillas
app.set('view engine','ejs')

//carpeta publica
app.use(express.static('public'))

//prosesar datos de Formularios
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//llamada al Router
app.use('/', require('./routes/router'))

//variables de entorno
dotenv.config({path: './env/.env'})

app.listen(process.env.APP_PORT, ()=>{
    console.log('SERVIDOR INICIADO EN: http://localhost:'+process.env.APP_PORT)


})

