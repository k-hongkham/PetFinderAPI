const base_url = "http://api.petfinder.com/v2";

const API_KEY = "07B9tnFdmotIIeQHpcEasyG7s6VGdt8MMpd4tVhguFIDcZjvbK";
const SECRET = "0rWM3LXYqcuQfxQgFKxZcLKXBlbHl1xSqvrBmakf";

// Call the API
// This is a POST request, because we need the API to generate a new token for us
// export const fetchPets = async () => {
//   const petFinderResp = await fetch(
//     "https://api.petfinder.com/v2/oauth2/token",
//     {
//       method: "POST",
//       body:
//         "grant_type=client_credentials&client_id=" +
//         API_KEY +
//         "&client_secret=" +
//         SECRET,
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//     }
//   );

//   // Return the response as JSON
//   const token = await petFinderResp.json();

//   // Log the API data

//   console.log("token", token);
//   const petResponse = await fetch("https://api.petfinder.com/v2/animals", {
//     headers: {
//       Authorization: token.token_type + " " + token.access_token,
//       "Content-Type": "application/x-www-form-urlencoded",
//     },
//   });
//   const petData = await petResponse.json();
//   console.log("petdata: ", petData);
//   return petData;
// };

export const fetchToken = async () => {
  try {
    const response = await fetch("https://api.petfinder.com/v2/oauth2/token", {
      method: "POST",
      body:
        "grant_type=client_credentials&client_id=" +
        API_KEY +
        "&client_secret=" +
        SECRET,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    const token = await response.json();
    return token.access_token;
  } catch (error) {
    console.error(error);
  }
};

export const fetchAnimals = async (token) => {
  try {
    const response = await fetch("https://api.petfinder.com/v2/animals", {
      headers: {
        Authorization: `Bearer  ${token}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
