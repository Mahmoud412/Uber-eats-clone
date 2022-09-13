// const YELP_API_KEY =
//   "OTSAaTeIvVnQGHaD-f94B51SCwFt40HYfNYjqApXnKXnSyZggvEHcY3E-NTRMC0cMmddlQ5p0eDq5ggpjp7zGcGsl4VjWMHpa-KEeb-ReazgsMnzDig8ComP9_4cY3Yx";

// export default function getRestaurantsFromYelp({ city, deliveryType }) {
//   const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

//   const apiOptions = {
//     headers: {
//       Authorization: `Bearer ${YELP_API_KEY}`,
//     },
//     params: {
//       term: "restaurants",
//     },
//   };
//   return fetch(yelpUrl, apiOptions)
//     .then((res) => res.json())
//     .then((json) =>
//       setRestaurantData(
//         json.businesses.filter((businesses) =>
//           businesses.transactions.includes(deliveryType)
//         )
//       )
//     );
// }
