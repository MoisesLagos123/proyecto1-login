const bcryptjs = require('bcryptjs')
const conexion = require('../database/db')
const {promisify} = require('util')
const jwt = require('jsonwebtoken')

//-------------------------------------
//       FORMULARIO DE REGISTRO
//-------------------------------------

exports.registrarCliente = async (req, res)=>{

const nombre        = req.body.nombre
const apellido      = req.body.apellido
const correo        = req.body.correo
const password      = req.body.password
const rpassword     = req.body.rpassword
const ROLL_idROLL   = req.body.roll
let contrasenia     = await bcryptjs.hash(password, 8)
const sql = 'CALL crearUsuario(?,?,?,?,?)' 


//Validacion de contraseña CORRECTA
if(password != rpassword){
    res.render('register', {
        alert:              true,
        alertTitle:         "contraseña no coincide",
        alertMessage:       "Favor ingresa nuevamente una contraseña ",
        alertIcon:          'error',
        showConfirmButton:  true,
        timer:              undefined,
        ruta:               'register' 
        })  
}else{
    //Inserción a la tabla de usuarios 
    try{
        conexion.query(sql, [nombre,apellido,correo,contrasenia,ROLL_idROLL], async(error,results)=>{

        if(error){
            console.log(error)
            res.render('register', {
                alert:                  true,
                alertTitle:             "Error al crear Usuario",
                alertMessage:           "No fue posible crear el usuario",
                alertIcon:              'error',
                showConfirmButton:      true,
                timer:                  undefined,
                ruta:                   'register' 
                }) 
        }else{
            res.render('register', {
                alert:                  true,
                alertTitle:             "Se Agregó un Nuevo Usuario",
                alertMessage:           "Usuario Agregado",
                alertIcon:              'success',
                showConfirmButton:      true,
                timer:                  undefined,
                ruta:                   'register'
            })
        }
    })

    }catch{
        res.render('register', {
            alert:                  true,
            alertTitle:             "Error inesperado",
            alertMessage:           "Se ha producido un error inesperado ",
            alertIcon:              'error',
            showConfirmButton:      true,
            timer:                  undefined,
            ruta:                   'register'
        })
    }
    
}


}

//-------------------------------------
//        FORMULARIO DE LOGIN
//-------------------------------------

exports.login = async (req, res)=>{

    const correo        = req.body.email
    const contrasenia   = req.body.pass
    const sql ="SELECT idUSUARIO,nombre,apellido,correo,contrasenia,ROLL_idROLL  FROM usuario where correo =  ?"

    try{
        conexion.query(sql,[correo], async (error,results)=>{
            console.log(results[0])

            //login incorrecto............................................
            if(results.length == 0 || ! (await bcryptjs.compare(contrasenia, results[0].contrasenia))){
                res.render('login', {
                    alert:              true,
                    alertTitle:         "Usuario o Contraseña incorrecta",
                    alertMessage:       "Conexion fallida",
                    alertIcon:          'error',
                    showConfirmButton:  true,
                    timer:              undefined,
                    ruta:               '/'
                    })
            }else{
            //login correcto..............................................
                res.redirect('/index')
            }
        })
    }catch{
        res.render('login', {
            alert:                  true,
            alertTitle:             "Error inesperado",
            alertMessage:           "Se ha producido un error inesperado ",
            alertIcon:              'error',
            showConfirmButton:      true,
            timer:                  undefined,
            ruta:                   '/'
        })
    }
}

//-------------------------------------
//        COMPROBACION LOGIN
//-------------------------------------



//-------------------------------------
//     FORMULARIO DE RECUPERACION
//-------------------------------------

exports.recuperarContrasenia = async (req, res)=>{

}

