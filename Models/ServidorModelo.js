const express = require('express')

class ServidorModelo{
    
    constructor(){
        this.app = express()
        this.enrutarPeticiones()



    }

    encenderServidor(){    
     this.app.listen(process.env.PUERTO,function(){
    console.log("servidor encendido" +process.env.PUERTO);
    })

    }

    enrutarPeticiones(){
          this.app.get('/avanzada/v1/jugadores', function (req, res) {
              res.send('peticion de tipo get(para buscar)')
            })
          
          this.app.get('/avanzada/v1/jugadores/id', function (req, res) {
              res.send('peticion de tipo get(para buscar un jugador)')
            })
           
          this.app.post('/avanzada/v1/jugadores', function (req, res) {
              res.send('peticion de tipo post(para insertar) ')
            })
          
          this. app.put('/avanzada/v1/jugadores/id', function (req, res) {
              res.send('peticion de tipo put(para actulizar)')
            })
          
          this. app.delete('/avanzada/v1/jugadores/id', function (req, res) {
              res.send('peticion de tipo delete(para eliminar)')
            })
    }

    conectarConBD(){

    }


}

module.exports=ServidorModelo