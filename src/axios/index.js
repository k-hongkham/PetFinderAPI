import axios from "axios";

export async function getAPIHealth() {
  try {
    const { data } = await axios.get("/api/health");
    return data;
  } catch (error) {
    console.error(error);
    return { healthy: false };
  }
}

export const getToken = async () => {
  try {
    const { data } = await axios.get(
      "https://api.petfinder.com/v2/oauth2/token",
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    console.log("axios-token", data);
    return data;
  } catch (error) {
    throw error.response.data;
  }
};
export const getMammals = async (token) => {
  try {
    const { data } = await axios.get("https://api.petfinder.com/v2/animals", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    console.log("axios-animals", data);
    return data;
  } catch (error) {
    throw error.response.data;
  }
};
