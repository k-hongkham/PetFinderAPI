// const base_url = "http://api.petfinder.com/v2";
// const { token } = process.env;

// export const fetchAllAnimals = async () => {
//   try {
//     const response = await fetch(`${base_url}/animals`, {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     const data = await response.json();
//     console.log("animal data: ", data);
//     return data;
//   } catch (error) {
//     console.error(error);
//   }
// };
