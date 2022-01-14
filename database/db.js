const mysql = require('mysql')



const conexion = mysql.createConnection({
    host: 'localhost',
    database: 'proyecto-1',
    user: 'root',
    password: 'root'
    
})

conexion.connect((error)=>{
    if(error){
        console.log('ERRROR DE CONEXION: ')
        throw error
    }else{
        console.log('...CONEXION A LA BD EXITOSA')
    }
})

module.exports = conexion; 