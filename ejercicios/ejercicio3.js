import Restaurant from "../Restaurant.js";

export default async ()=> {
    const restaurants = await Restaurant.find({borough: "Bronx"}).limit(1)
    console.log(restaurants);
}