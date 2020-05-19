const Testimonios = require('../models/Testimonios');

exports.mostrarTestimonios = async(req, res) => {
    const testimonios = await Testimonios.findAll()
    res.render('testimonios', {
        pagina: 'Testimonios', 
        testimonios
    })
}

exports.agregarTestimonio = async (req, res) => {
    //Validar que todos los campos esten llenos
    let {nombre, correo, mensaje} = req.body;
    let errores = [];
    if(!nombre) {
        errores.push({'mensaje': 'Agregar tu Nombre'})
    }
    if(!correo) {
        errores.push({'mensaje': 'Agregar tu Correo'})
    }
    if(!mensaje) {
        errores.push({'mensaje': 'Agregar tu Mensaje'})
    }
    
    //Revisar por errores
    if(errores.length > 0) {
        //muestra la vista con errores
        const testimonios = await (Testimonios.findAll())
        res.render('testimonios', {
             errores,
             nombre,
             correo,
             mensaje,
             pagina: 'Testimonios',
             testimonios
         })
    } else {
        //almacena en la BD
        Testimonios.create({
            nombre,
            correo,
            mensaje
        }).then(testimonio => res.redirect('/testimonios'))
            .catch(error => console.log(error))

    }

}