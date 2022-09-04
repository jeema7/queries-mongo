import mongoose from "mongoose";

const db = mongoose.connection;

db.on('connected', () =>{
    console.log('Se ha conectado a la base de datos');
}).on('connecting', () =>{
    console.log('intentando conectar a la basa');
}).on('error', () =>{
    console.log('Ocurrio un error al intentar conectar a la base de datos', error);
})

mongoose.connect('mongodb://localhost:27017', ()=>{
    console.log('Ejercicios');
})