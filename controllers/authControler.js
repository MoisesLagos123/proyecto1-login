const bcryptjs = require('bcryptjs')
const conexion = require('../database/db')



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
        const sql = 'CALL crearUsuario(?,?,?,?,?)'
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

exports.login = async (req, res)=>{

}

exports.recuperarContrasenia = async (req, res)=>{

}