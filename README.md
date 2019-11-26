# App-weather
Hybrid application for Android device realized with Apache Cordova Framework.

<h2>Introduction </h2>
This is a simple weather app. 
Through this application you can use geolocalization signal to find your position and detect weather in your city or you can write it in the label.
Weather forecast is detected thanks to APIs of openweather.org. Link https://openweathermap.org/

<h2>Description </h2>
I realized this app with PhoneGap. I used gelocation  and connection status plugin by Apache Cordova.
All data for weather forecast is loaded through URL that it is formatted data in XML, to display xml i used AJAX and JQuery to allow loading asyncronus resources and for allow an  navigation more fluid.

There are two controls:

- First of all app check data connection: if device is not connected (WIFI or data) it will open alert popup and buttons will be diasbled, if the connection is reactivated the buttons will be reactivated again automatically. 
- If geo signal is disabled and user press on geolocalization button app will notice that user should to active geo signal.



<h2> Images </h2>
<img src="screenshot/screenshot4.gif" width="20%">
Demonstration of use

<img src="screenshot/screenshot2.png" width="20%">
Main page

<img src="screenshot/screenshot1.png" width="20%">
Check connection data

<img src="screenshot/screenshot3.png" width="20%">
Check geolocalization signal active

