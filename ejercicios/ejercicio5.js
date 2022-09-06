import Restaurant from "../Restaurant.js";

export default async () =>{
    const restaurants = await Restaurant.find({cousin: "American "},{ name:1}).sort('-name').limit(10)
    console.log(restaurants);
}