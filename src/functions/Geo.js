import { geoAPI } from "../API/api";

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

// Form location object
export const geoLocation = async location => {
  const sanitizeLoc = sanitizeLocation(location);
  const geoResponse = await geoFetch(sanitizeLoc);
  console.log(geoResponse.results);
  const geoLoc = geoResponse.results[0];
  const locationObj = {
    id: geoLoc.place_id,
    address: geoLoc.formatted_address,
    lat: geoLoc.geometry.location.lat,
    lng: geoLoc.geometry.location.lng,
    countryCode:
      geoLoc.address_components[geoLoc.address_components.length - 1].short_name
  };

  return locationObj;
};
