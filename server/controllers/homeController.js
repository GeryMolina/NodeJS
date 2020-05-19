const Viaje = require('../models/Viajes');
const Testimonios = require('../models/Testimonios');

exports.consultasHomePage = async (req, res) => {
    //Crear una arreglo de promises. Esto se usa cuando tenemos multiples consultas
    // const promises = [];
    // promises.push( Testimonios.findAll({
    //     limit:3
    // }))
     //Pasar el promise y ejecutarlo
     //const resultado = Promise.all(promises);
    const viajes = await Viaje.findAll({limit:3});
    const testimonios = await Testimonios.findAll({limit:3});
    res.render('index', {
        pagina: 'Próximos Viajes',
        clase: 'home',
        viajes,
        testimonios
    })

     //send es un metodo que tiene node para poder imprimir algo en la pantalla
    //console.log(req); //Req es una peticíon que a la pagina mientras que res es la respuesta que te da el servidor
}