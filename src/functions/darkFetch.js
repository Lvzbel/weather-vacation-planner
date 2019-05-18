import { darkAPI } from "../API/api";

export const darkFetch = async (lat, lng, time = "") => {
  const timeString = time ? `,${time}` : time;
  try {
    const response = await fetch(
      `/forecast/${darkAPI}/${lat},${lng}${timeString}`
    );
    const weather = await response.json();
    return weather;
  } catch (error) {
    console.log(error);
  }
};
