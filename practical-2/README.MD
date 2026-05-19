# WEB101 P2: RESTful Weather API Dashboard

This file is written for the GitHub practical documentation requirement. It summarizes the instruction, solution, testing evidence, and learning from the submitted practical report.

## Folder / Practical

Practical 2 / RESTful API Weather Application

## Aim

Build a weather dashboard that demonstrates RESTful API methods using HTML, CSS, and JavaScript. The app uses GET to retrieve weather data, POST to save a location, PUT to update a location, and DELETE to remove a saved location.

## Technologies Used

- HTML
- CSS
- JavaScript
- Fetch API
- OpenWeatherMap API
- JSONPlaceholder API

## Main Concepts Applied

- RESTful API communication
- HTTP methods: GET, POST, PUT, DELETE
- Fetch API with async/await
- JSON request and response handling
- Client-side state management using an array

## Functional Requirements / Features

- Weather search using city name
- Save custom locations
- Edit saved locations using PUT
- Delete locations using DELETE
- API information panel showing method, URL, status, and response

## Setup / How to Run

- Create a `weather-api-dashboard` folder.
- Add `index.html` for the user interface.
- Add `script.js` for API logic.
- Add a valid OpenWeatherMap API key in the JavaScript configuration.
- Open the HTML file in the browser and test each tab.

## Implementation Summary

- Created tab-based sections for GET Weather, POST Location, Saved Locations, and API Info.
- Used OpenWeatherMap endpoint to fetch live weather details.
- Used JSONPlaceholder to practice POST, PUT, and DELETE requests.
- Stored saved locations in memory using `savedLocations`.
- Added an edit modal for updating location details.
- Displayed request and response details after API actions.

## Testing / Output Evidence

- GET returned weather details such as temperature, humidity, wind, and description.
- POST saved a user-defined location.
- PUT updated an existing saved location.
- DELETE removed a saved location from the display.
- API Info tab showed the latest request details.

## Notes

- Screenshots and detailed output evidence were included in the submitted practical report.
- This README keeps the explanation clear and concise for GitHub documentation.
- Sensitive values such as API keys, JWT secrets, database passwords, and service role keys should be stored in `.env` files and must not be committed to GitHub.

## References

- GeeksforGeeks REST API introduction
- GeeksforGeeks Fetch API guide
- OpenWeatherMap API documentation
- JSONPlaceholder documentation
