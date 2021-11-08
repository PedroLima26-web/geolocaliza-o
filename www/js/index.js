var app = {
    initialize: function() {
        document.addEventListener('deviceisready', this.onDeviceReady.bind(this),false);
    },
    ondeviceReady: function(){
        alert("onDeviceReady: function() {...");
        this.receivedEvent('deviceisready');
        navigator.geolocation.getCurrrentPosition(
            this.onGeolocationSecces,
            this.onGeolocationError,
            { timeout: 120000}
        );
    },
    receivedEvent: function(id) {},

    onGeolocationSuccess: function(position) {
        alert('onGeolocationSuccess: function(position) {...');
        alert('Latitude: ' + position.coords.latitude + 
        '\n'+' Longitude: ' + position.coords.longitude +
        '\n'+'Altitude: ' + position.coords.altitude +
        '\n'+'Accuracy: ' + position.coords.accuracy +
        '\n'+'Altitude Accuracy: ' + position.coords.altitudeAccuracy +
        '\n'+'Heading: ' + position.coords.heading +
        '\n'+'Speed: ' + position.coords.speed +
        '\n'+'Timestamp: ' + position.timestamp);

        document.getElementById("lat").value = position.coords.latitude;
        document.getElementById("lon").value = position.coords.longitude;
    },

    onGeolocationError: function(err) {
        alert("onGeolocationError:function(position) {...");
        alert(err.code+" "+err.message);
    }
};
app.initialize();
