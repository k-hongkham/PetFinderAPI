export const fetchAccessToken = async () => {
  try {
    const petfinderRes = await fetch(
      "http://api.petfinder.com/v2/oauth2/token",
      {
        method: "POST",
        body: params,
      }
    );
    console.log("petfinderRes:", await petfinderRes.json());
  } catch (error) {}
};
