# NodeJS_WeatherApp
This is a weather app built in Node.js which makes use of asynchronous HTTP requests. The application communicates with third party APIs ->Google's geo-location API and dark sky API.
<hr>

Asynchronous, non-blocking application => app will continue to run while it waits for someting else to happen
<hr>
Google geo location API takes address and returns lattitude and longitude co-ordinates whereas Dark Sky API takes lattitude and longitude co-ordinates as input and generates weather information.
<hr>

### Dependencies

Third party NPM modules used in this application are
<ul>
<li><a href="https://www.npmjs.com/package/request">request</a> -> To make http request</li>
<li><a href="https://www.npmjs.com/package/yargs">yargs</a> -> To encode user input[to format the address given as input by user]</li>
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
