import { darkAPI } from "../API/api";

export const darkFetch = async (lat, lng, time = "") => {
  try {
    const response = await fetch(
      `https://api.darksky.net/forecast/${darkAPI}/${lat},${lng},${time}`
    );
    const weather = await response.json;
    return weather;
  } catch (error) {
    console.log(error);
  }
};
