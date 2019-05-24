# chicago-array-FE
* Project deployment site:  https://chicago-aot.netlify.com/
* Official site for Chicago Array of Things:  https://arrayofthings.github.io/

* The Chicago Array of Things is doing a fantastic job of collecting all kinds of data, and lots of it. This app is intended to make sense of all this data in an easy-to-visualize way that we can understand and use to better the city of Chicago.  It is also our intent to provide a tool for others to use to evaluate the necessity of CAOT for their own city.


#Project Primary Objectives:
 1. Menu of sensors for selection based on type, time and location
 2. Output of visualization of selected sensors
 3. A button to copy url to reproduce visualization


#Dependencies
1. "@material-ui/core": "^3.9.3",
2. "@material-ui/icons": "^3.0.2",
3. "axios": "^0.18.0",
4. "react": "^16.8.6",
5. "react-clipboard.js": "^2.0.7",
6. "react-dom": "^16.8.6",
7. "react-redux": "^7.0.3",
8. "react-router-dom": "^5.0.0",
9. "react-scripts": "3.0.1",
10. "reactstrap": "^8.0.0",
11. "redux": "^4.0.1",
12. "redux-logger": "^3.0.6",
13. "redux-thunk": "^2.3.0"

#Project Description
* Base URL for server interactions: `https://chicago-aot.herokuapp.com`
* **[POST]** * to `/api/auth/register` : to register unique username and password
* **[POST]** * to `/api/auth/login`: returns a token to be added to the header of all other requests. Pass in the following credentials as the `body` of the request
* **[POST]** * to `/api/nodes`: returns a plotly `url` used to display a visualization of data based on the sensor endpoints requested.

## SENSORS
- 'Environmental Data',
- 'Air Quality',
- 'Image Processing',

## MEASURES
- "Temp", 
- "Ozone etc", 
- "Vehicle Count", 
- "Ped Count",

## TIME & 
- "last 7 days"

##LOCATION
- "all"
