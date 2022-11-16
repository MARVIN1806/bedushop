const mongoose = require("mongoose");

const VentaSchema = mongoose.Schema({
    total: Number,
    Productos: Array,
    fecha: String,
    comprador: String,
    vendedor: String
},
{
    collection: "Ventas",
    timestamps: true
});


const Venta = mongoose.model("Venta", VentaSchema);

module.exports = Venta;