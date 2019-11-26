



document.addEventListener("offline", onOffline, false);

function onOffline() {
    navigator.notification.alert(" Sei Offline! \n  ");
    
     $("#getCity").attr("disabled", 'disabled');
    $("#getPosition").attr("disabled", 'disabled');
    
}


document.addEventListener("online", onOnline, false);

function onOnline() {
    $('#getCity').prop("disabled", false);
    $('#getPosition').prop("disabled", false);
}
//insert city
function country() {

    $("#tabmeteo").empty();
    $("#tabmeteo #data").remove();
    $("#title h2").remove();
    var time = new Array();
    var symbol = new Array();
    var icon = new Array();
    var temp = new Array();
    var humid = new Array();
    var i=0;

    var input = document.getElementById("inputcountry").value;
    jQuery(document).ready(function () {
        jQuery.ajax({
            type: "GET",
            url: "http://api.openweathermap.org/data/2.5/forecast?q=" + input + "&mode=xml&APPID=4b7ac61000160677ca1fe64b12ee695b&lang=it ",
            timeout: 5000,
            dataType: "xml",
            success: function (xml) {

                jQuery(xml).find('weatherdata').each(
                    function () {
                        var city_name = jQuery(this).find('location').find('name').text();
                        var country = jQuery(this).find('country').text();

                        $("#title").append("<h2 class='text-center' >" + city_name + "," + country + " </h2>");
                        $("#tabmeteo").append("<table id='data'><tr><th>Giorno</th><th>Condizioni</th><th>Clima</th><th>Umidità</th></tr></table>");
});

                 jQuery(xml).find('time').each(
                      function () {
                       time[i] = ((jQuery(this).attr('from')).replace("T", " ")).toString().slice(0, -3);
                       symbol[i] = jQuery(this).find('symbol').attr('name');
                         icon[i]= jQuery(this).find('symbol').attr('var');
                       temp[i]= ((jQuery(this).find('temperature').attr('value')) - 273.15).toPrecision(3);
                       humid[i] = jQuery(this).find('humidity').attr('value');
                        
i=i+1;




});
for(var j=0; j<time.length; j=j+5){
                
    $('#data ').append("<tr><td>" + time[j] + " </td><td>" + symbol[j] + " <img src='http://openweathermap.org/img/wn/" + icon[j] + ".png'/></td><td>" + temp[j] + "C&#176;</td><td>" + humid[j] + "%</td></tr>");
  
            }
         $(" #data ").append("<tr><td colspan='4' style='padding-bottom:10px; padding-top:10px;'><b>openweathermap.org <b></td></tr>");
            },
            error: function () {
                $("#tabmeteo").append(" Errore: città non trovata!");
            }

        });
    });
}

//get position
function getPosition() {
    $("#tabmeteo").empty();
    $("#tabmeteo #data").remove();
    $("#title h2").remove();
    var time = new Array();
    var symbol = new Array();
    var icon = new Array();
    var temp = new Array();
    var humid = new Array();
    var i=0;
    var options = {
        enableHighAccuracy: true,
        timeout: 3000,
        maximumAge: 3600000
    }
    var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);

    function onSuccess(position) {
        jQuery.ajax({
            type: "GET",
            url: " http://api.openweathermap.org/data/2.5/forecast?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&mode=xml&APPID=4b7ac61000160677ca1fe64b12ee695b&lang=it",
            timeout: 10000,
            dataType: "xml",
            success: function (xml) {

                
                
                
                
                    jQuery(xml).find('weatherdata').each(
                    function () {
                        var city_name = jQuery(this).find('location').find('name').text();
                        var country = jQuery(this).find('country').text();

                        $("#title").append("<h2 class='text-center' >" + city_name + "," + country + " </h2>");
                        $("#tabmeteo").append("<table id='data'><tr><th>Giorno</th><th>Condizioni</th><th>Clima</th><th>Umidità</th></tr></table>");
});

                 jQuery(xml).find('time').each(
                      function () {
                       time[i] = ((jQuery(this).attr('from')).replace("T", " ")).toString().slice(0, -3);
                       symbol[i] = jQuery(this).find('symbol').attr('name');
                         icon[i]= jQuery(this).find('symbol').attr('var');
                       temp[i]= ((jQuery(this).find('temperature').attr('value')) - 273.15).toPrecision(3);
                       humid[i] = jQuery(this).find('humidity').attr('value');
                        
i=i+1;




});
for(var j=0; j<time.length; j=j+5){
                
    $('#data ').append("<tr><td>" + time[j] + " </td><td>" + symbol[j] + " <img src='http://openweathermap.org/img/wn/" + icon[j] + ".png'/></td><td>" + temp[j] + "C&#176;</td><td>" + humid[j] + "%</td></tr>");
  
            }
                
           $(" #data ").append("<tr><td colspan='4' style='padding-bottom:10px; padding-top:10px;'><b>openweathermap.org <b></td></tr>");      
                
                
            },
            error: function () {
                $("#tabmeteo").append(" Errore: città non trovata!");
            }

        });

    };

    function onError(error) {
       navigator.notification.alert('Posizione non rilevata.\n Controlla che il GPS sia attivo sul tuo dispositivo.');
    }









}
