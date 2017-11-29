# NodeJS_WeatherApp
This is a CLI weather app built in Node.js which makes use of asynchronous HTTP requests. The application communicates with third party APIs ->Google's geo-location API and dark sky API.
<hr>

Asynchronous, non-blocking application =>  app will continue to run while it waits for someting else to happen
<hr>
Google geo location API takes address and returns lattitude and longitude co-ordinates whereas Dark Sky API takes lattitude and longitude co-ordinates as input and generates weather information.
<hr>

### Dependencies

Third party NPM modules used in this application are
<ul>
<li><a href="https://www.npmjs.com/package/request">request</a> -> To make http request</li>
<li><a href="https://www.npmjs.com/package/yargs">yargs</a> -> To encode user input[to format the address given as input by user]</li>
  <li><a href="https://www.npmjs.com/package/axios">axios</a> -> Promise based HTTP client for the browser and node.js</li>
</ul>
Run the following commands to save following dependencies

```
npm install request --save
```
```
npm install yargs --save
```
<hr>
For Reference,
https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia

<hr>
To get the live weather data from the latitude and longitude passed, use Dark Sky Weather API, https://darksky.net/dev

<hr>
<img src="https://github.com/patilankita79/NodeJS_WeatherApp/blob/master/screenshots/Screenshot%202017-11-26%2015.47.19.png" />
<img src="https://github.com/patilankita79/NodeJS_WeatherApp/blob/master/screenshots/Screenshot%202017-11-26%2015.46.56.png" />
<img src="https://github.com/patilankita79/NodeJS_WeatherApp/blob/master/screenshots/Screenshot%202017-11-26%2015.59.05.png" />

