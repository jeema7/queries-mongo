import Restaurant from "../Restaurant.js";
//Usando Projection como segundo parametro, podemos obtener documenos especificos de todo los documentos, al agregar el 1 le estamos diciendo si quiero que me traigas "este campo",  si queremos omitir uno se agrega un 0 _id: 0 por ej.
export default async ()=>{
    const restaurants = await Restaurant.find({}, 
        { restaurant_id: 1, name: 1,borough: 1, cuisine: 1})
 
    console.log(restaurants);
}