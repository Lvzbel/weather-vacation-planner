# Weather Vacation Planner

This project tries to solve a simple problem when people are trying to decide where their next vacation would be, by checking how the weather was the last couple of years in the date that you are planning to travel.

[Live Demo!](https://frozen-fortress-91739.herokuapp.com/) (Please allow for the Heroku dyno to start up.)

### APIs used

- DarkSky API
- Google Geolocation API

### Technologies used

- React
- Node.js
- Express.js
- localStorage
- CSS3/SASS

### Hiding API

The DarkSky needs to be protected with proxy server calls, to avoid for anyone having access to the key.

To achieve this a small Nodejs server was used and hide the API key in the backend of this server.

### Todos

- ~~Remove bug where spacing is different in production and development envoriments.~~
- ~~Make the web app responsive.~~
- Use travel advisory API.
- ~~Update suggestions when typing a location using the Google API~~
