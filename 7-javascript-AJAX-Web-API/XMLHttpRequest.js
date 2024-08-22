const data = `
    {
        "lat":33.44,
        "lon":94.04,
        "timezone":"America/Chicago",
        "timezone_offset":18000
    }
`;

const weatherObject = JSON.parse(data);
weatherObject.lat = 100;
const stringifyObject = JSON.stringify(weatherObject, null, 2);

// XML HTTP Request
const req = new XMLHttpRequest();

// Onload event triggered when the request completes successfully
req.onload = function () {
    const data = JSON.parse(this.response);
    console.log(data);
};

// On error event is triggered when ther is an error during the request
req.onerror = function () {
    console.log("Error", this);
};

// Setting up an HTTP GET request to the API URL
req.open("GET", "https://swapi.dev/api/people/10");

// Sending the request
req.send();
