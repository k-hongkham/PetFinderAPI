export const fetch = async () => {
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
  console.log("token1", token);
  const result = await fetch("https://api.petfinder.com/v2/animals", {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  const data = await result.json();
  console.log("pets", data);
  return data;
};

export const getAnimals = async (token) => {
  const response = await fetch("https://api.petfinder.com/v2/animals", {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
  const data = await response.json();
  console.log("pets", data);
  return data;
};
