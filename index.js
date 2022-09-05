import mongoose from "mongoose";
import ejercicio1 from "./ejercicios/ejercicio1.js";
import ejercicio2 from "./ejercicios/ejercicio2.js";

const db = mongoose.connection;

db.on('connected', () =>{
    console.log('Se ha conectado a la base de datos');
}).on('connecting', () =>{
    console.log('intentando conectar a la basa');
}).on('error', () =>{
    console.log('Ocurrio un error al intentar conectar a la base de datos', error);
})

mongoose.connect('mongodb://localhost:27017/ejercicio2', async ()=>{
    console.log('Ejercicios');
    //  await ejercicio1()
    await ejercicio2()
    
    /**
     * 1.- Entregue todos los documento de la coleccion restaurants
     * 2.- Entregue los campos restaurant_id, name, borough y couisine de todos los documentos
     */
})