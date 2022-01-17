const express = require('express')
const router = express.Router()
const session = require('express-session')
const conexion = require('../database/db')

//-------------------------------------
//          Autenticacion
//-------------------------------------
router.get('/', (req,res)=>{
    res.render('login',{alert:false})
})
router.get('/password', (req,res)=>{
    res.render('password',{alert:false})
})
router.get('/register', (req,res)=>{
    res.render('register',{alert:false})
})

router.get('/index', (req,res)=>{
    res.render('index',{alert:false})
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
router.post('/', authController.login)


module.exports = router