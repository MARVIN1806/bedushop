const Producto = require('../modules/Producto')

function obtenerProductos(req, res){
    Producto.find()
    .then(data => res.status(200).send(data))
}


function crearProducto(req, res){
    const info = req.body;
    const prod = new Producto(info)
    prod.save()
    .then(
        data => res.status(200).send(data)
    )
    
}


function eliminarProducto(req, res){
    const name = req.body.nombre
    Producto.findOneAndDelete({nombre: name})
    .then(data => res.status(200).send(data))
    .catch(err => res.status(500).send(err))

}


function modificarProducto(req,res){
    const name = req.params.nombre
    const nuevaInfo = req.body
    Producto.findOne({nombre: name})
    .then(producto =>{
        producto = req.body
        producto.save()
        .then( data => res.status(200).send(data))
        
    })
}


module.exports = {
    obtenerProductos,
    crearProducto,
    modificarProducto,
    eliminarProducto
}