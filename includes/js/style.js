function initMap() {
    var location = {lat: 28.630270, lng: 77.371639};
    var map = new google.maps.Map(document.getElementById("map"),{
        zoom : 15,
        center : location
    });
    var marker = new google.maps.Marker({
        position : location,
        map : map
    });
}