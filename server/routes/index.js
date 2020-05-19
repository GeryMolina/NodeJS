//Acá enlazamos las rutas 
const express = require('express');
const router = express.Router();
//Controllers
const nosotrosController = require('../controllers/nosotrosControllers');
const homeController = require('../controllers/homeController');
const viajerCotrollers = require('../controllers/viajesControllers');
const testimoniosController = require('../controllers/testimoniosController')

//Exportamos las rutas 

module.exports = () => {
    //Se puede usar use y get, pero use responde a todos los verbos de Http(put, get, delete, post) y get solo responde a get

    //En esta parte se define que verbo Http vamos a utilizar
    router.get('/', homeController.consultasHomePage);
    router.get('/nosotros', nosotrosController.infoNosotros);
    router.get('/viajes', viajerCotrollers.infoViajes);
    router.get('/viajes/:id', viajerCotrollers.verViaje);
    router.get('/testimonios', testimoniosController.mostrarTestimonios);
    //Cuando de llena el formulario
    router.post('/testimonios', testimoniosController.agregarTestimonio);

    return router; //Retornamos para poder tener acceso a los metodos de las rutas creadas
}