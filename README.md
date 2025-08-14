# Weather Mobile App
Android application to forecast weather 

## Introduction
This is a simple weather app. 
Through this application you can use geolocalization signal to find your position and detect weather in your city, you can also write your city name in the search label.
Weather forecast is detected thanks to APIs of openweather.org. Link https://openweathermap.org/

## Description
I realized this app with PhoneGap. I used geolocalization  and connection status plugin by Apache Cordova.
All data for weather forecast is loaded through URL.The data result is formatted in XML. To display xml result I used AJAX and JQuery to allow loading asyncronus resources and to make the navigation more fluid.

There are two controls:

- First of all app check data connection: if device is not connected (WIFI or data), it will open alert popup and the buttons will be diasbled, if the connection is reactivated the buttons will be reactivated again automatically. 
- If the geo signal is disabled and user press on geolocalization button app will notice that user should active geo signal.

## Result

<div align="left">
<table>
  <tr>
    <td><img src="screenshot/screenshot4.gif" width="200"/></td>
  </tr>
</table>
</div>



