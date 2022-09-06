import Restaurant from "../Restaurant.js";

export default async () => {
    const restaurants = Restaurant.find({ grades: { $elemMatch: {
        score: { $gt: 9 },

      } } },
{name: 1 })
console.log((await restaurants).length);
}