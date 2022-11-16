const mongoose = require('mongoose')

const ProductoSchema =  mongoose.Schema(
    {
        nombre: {
            type: String,
            unique: true
        },
        precio: Number,
        descripcion: String

    },{
        collection: "Productos",
        timestamps: true
    }
);

const Producto = mongoose.model("Producto", ProductoSchema);

module.exports = Producto