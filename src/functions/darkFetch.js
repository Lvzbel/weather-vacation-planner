import { darkAPI } from "../API/api";
import uuid from "uuid/v4";

export const darkFetch = async (lat, lng, time = "") => {
  const timeString = time ? `,${time}` : time;
  try {
    const response = await fetch(
      `/forecast/${darkAPI}/${lat},${lng}${timeString}`
    );
    const weather = await response.json();
    console.log(weather);
    return weather;
  } catch (error) {
    console.log(error);
  }
};

// Build the object to be ready to store in state
export const darkBuildData = async (lat, lng, time = "") => {
  const originalResponse = await darkFetch(lat, lng, time);
  const currentTemp = originalResponse.currently.temperature || false;
  const weatherCast =
    originalResponse.daily.data[0] || originalResponse.hourly.data[0];

  console.log("Done");

  const weatherData = {
    id: uuid(),
    summary: weatherCast.summary,
    icon: weatherCast.icon,
    high: weatherCast.temperatureHigh,
    low: weatherCast.temperatureLow,
    current: currentTemp || weatherCast.temperature
  };

  return weatherData;
};
