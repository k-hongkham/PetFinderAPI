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
