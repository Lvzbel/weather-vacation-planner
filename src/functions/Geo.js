import { geoAPI } from "../API/api";
import uuid from "uuid/v4";

// Cleans and preps user input
const sanitizeLocation = userInput => {
  console.log(userInput);
  const cleanInput = userInput
    .trim()
    .toLowerCase()
    .replace(/[^\w^\s]/g, "")
    .replace(/[\s]/g, "+");
  return cleanInput;
};

// Google GeoLocation API call
const geoFetch = async location => {
  const geoLocationGet = `https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${geoAPI}`;

  try {
    const response = await fetch(geoLocationGet);
    const geoLocation = await response.json();
    return geoLocation;
  } catch (error) {
    alert(error);
  }
};

// Country code could be located in a different position depending on the input, this function will find it regarless
const findCountryCode = addressArray => {
  const index = addressArray.findIndex(element => {
    return element.types[0] === "country";
  });

  return index;
};

// Form location object
export const geoLocation = async location => {
  const sanitizeLoc = sanitizeLocation(location);
  const geoResponse = await geoFetch(sanitizeLoc);
  const geoLoc = geoResponse.results[0];
  const countryIndex = findCountryCode(geoLoc.address_components);
  const locationObj = {
    id: uuid(),
    address: geoLoc.formatted_address,
    lat: geoLoc.geometry.location.lat,
    lng: geoLoc.geometry.location.lng,
    countryCode: geoLoc.address_components[countryIndex].short_name
  };

  return locationObj;
};
