console.log("I´m Alive !!!");
// import mongoose from "mongoose";
const mongoose = require("mongoose");

const db = "BeduShop";
const dbUser = "MARVIN664"
const dbPass = "SHAKER2108"

const uri = `mongodb+srv://${dbUser}:${dbPass}@instalaciones.sjfyopx.mongodb.net/${db}?retryWrites=true&w=majority`;

mongoose.connect(uri);
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


function obtenerProductops(){
    Producto.find()
.then(data => console.log(data));

}


function crearProducto(producto){
    const prod = new Producto(producto);
    prod.save()
    .then(res => console.log(res))
}


const info = {
    nombre:"marvin",
    precio: 50,
    descripcion: "proveedor"
}


function obtenerProdporprecio(precio){
    const query = {
        'precio': {
          '$lte': precio
        }
      }

      Producto.find(query)
      .then(data => console.log(data))
}
//crearProducto(info);
//obtenerProductops();

function agregacion(precio){
    const agr = [
        {
          '$project': {
            'name': 1, 
            'precio': 1, 
            '_id': 0
          }
        }, {
          '$match': {
            'precio': {
              '$lte': precio
            }
          }
        }, {
          '$sort': {
            'precio': -1
          }
        }
      ];

      Producto.aggregate(agr)
      .then(data => console.log(data));

}

agregacion(20);


const gods = { 
  Zeus: { live: 'Olympus', symbol: 'Thunderbolt' }, 
  Hades : { live : 'Underworld', symbol: 'Cornucopia' } 
};

app.listen(PORT,() => console.log("The server is Alive!!!"));

// app.get('/carreteras/reportes',() => console.log("hola mundo"));  
app.get('/',(req,res) => res.send("hola mundo"));  

app.get('/gods',(req,res) => {
      
      res.send(gods)
    }
  ); 
  
  app.get('/god/:name',(req,res) =>{
    var name = gods[req.params.name];

    console.log(req.query);
    if(name)
      res.status(200).send(name); 
    else
      res.status(400).send('No se encontro informacion'); 
  } )
app.put('/gods/:name', (req, res) => {
    const god = req.body;

    console.log(god);
    gods[req.params.name]= god;

    res.status(200).send(gods)

});


app.post('/god',(req, res) =>{
    const name  = req.query.name
    const newGod = req.body
    gods[name] = newGod

    res.status(200).send(gods)
});


app.delete('/god/:name', (req, res) => {
    const name = req.params.name

    console.log(name);
    if (delete gods[name])
    res.status(200).send(gods)
    else
    res.status(500)
});


app.get('/productos',(req, res) => {
  Producto.find()
  .then(data => {
    res.status(200).send(data)
  })
});