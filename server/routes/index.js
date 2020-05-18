//Acá enlazamos las rutas 
const express = require('express');
const router = express.Router();

const Viaje = require('../models/Viajes')

//Exportamos las rutas 

module.exports = () => {
    
    //Se puede usar use y get, pero use responde a todos los verbos de Http(put, get, delete, post) y get solo responde a get

    //En esta parte se define que verbo Http vamos a utilizar
    router.get('/', (req, res) => {
        res.render('index'); //send es un metodo que tiene node para poder imprimir algo en la pantalla
        //console.log(req); //Req es una peticíon que a la pagina mientras que res es la respuesta que te da el servidor
    })
    router.get('/nosotros', (req, res) => {
        //A render le podemos pasar mas de un parametro el primero siempre el nombre del archivo que contiene la vista
        // y como segundo se puede pasar cierta configuración
        res.render('nosotros', {
            pagina: 'Sobre Nosotros'
        });
    })
    router.get('/viajes', (req, res) => {
        Viaje.findAll()
            .then(viajes => res.render('viajes', {
                pagina: 'Próximos Viajes',
                viajes 
            }))
            .catch(error => console.log(error))
    })
    router.get('/viajes/:id', (req, res) => {
        Viaje.findByPk(req.params.id)
            .then(viaje => res.render('viaje', {
                viaje
            }))
            .catch(error => console.log(error))
    })

    return router; //Retornamos para poder tener acceso a los metodos de las rutas creadas

}