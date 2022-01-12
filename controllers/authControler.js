const bcryptjs = require('bcryptjs')
const conexion = require('../database/db')

exports.registrarCliente = async (req, res)=>{

const nombre        = req.body.nombre
const apellido      = req.body.apellido
const correo        = req.body.correo
const password      = req.body.password
const rpassword     = req.body.rpassword
let passwordHassh   = req.body

console.log(nombre)
console.log(apellido)
console.log(correo) 
console.log(password)
console.log(rpassword)


}

exports.login = async (req, res)=>{

}

exports.recuperarContrasenia = async (req, res)=>{

}