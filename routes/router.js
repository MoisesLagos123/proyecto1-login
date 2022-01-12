const express = require('express')
const router = express.Router()
const session = require('express-session')
const conexion = require('../database/db')

//-------------------------------------
//          Autenticacion
//-------------------------------------
router.get('/', (req,res)=>{
    res.render('login')
})
router.get('/password', (req,res)=>{
    res.render('password')
})
router.get('/register', (req,res)=>{
    res.render('register')
})

router.get('/index', (req,res)=>{
    res.render('index')
})
//-------------------------------------
//          Paginas de error
//-------------------------------------
router.get('/401', (req,res)=>{
    res.render('401')
})
router.get('/404', (req,res)=>{
    res.render('404')
})
router.get('/500', (req,res)=>{
    res.render('500')
})
//-------------------------------------
//          llamada al controller
//-------------------------------------

const authController = require('../controllers/authControler')

router.post('/register', authController.registrarCliente)

module.exports = router