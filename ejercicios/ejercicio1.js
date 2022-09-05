import Restaurant from "../Restaurant.js";
// Funcion asincrona que devulve todos los documentos de la base de datos con la funcion find()
export default async ()=>{
    const restaurants = await Restaurant.find({
      
    });
    console.log(restaurants);
}