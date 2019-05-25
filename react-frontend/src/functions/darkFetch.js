import { darkAPI } from "../API/api";
import uuid from "uuid/v4";
import moment from "moment";

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

// Build the object to be ready to store in state
export const darkBuildData = async (lat, lng, time = "") => {
  const originalResponse = await darkFetch(lat, lng, time);
  try {
    const currentTemp = originalResponse.currently.temperature || false;
    const year = moment.unix(originalResponse.currently.time).format("YYYY");
    const weatherCast =
      originalResponse.daily.data[0] || originalResponse.hourly.data[0];

    const weatherData = {
      id: uuid(),
      summary: weatherCast.summary,
      icon: weatherCast.icon,
      high: weatherCast.temperatureHigh,
      low: weatherCast.temperatureLow,
      current: currentTemp || weatherCast.temperature,
      year
    };
    return weatherData;
  } catch (error) {
    console.log("Failed: ", error);
    const weatherData = {
      id: uuid(),
      summary: undefined,
      icon: undefined,
      high: undefined,
      low: undefined,
      current: undefined,
      year: undefined
    };
    return weatherData;
  }
};
