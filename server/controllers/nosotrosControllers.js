exports.infoNosotros = (req, res) => {
    //A render le podemos pasar mas de un parametro el primero siempre el nombre del archivo que contiene la vista
    // y como segundo se puede pasar cierta configuración
    res.render('nosotros', {
        pagina: 'Sobre Nosotros'
    });
}