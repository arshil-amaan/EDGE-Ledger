// window.initMap = initMap;

function initMap(){
  let map = new google.maps.Map(document.getElementById("map"), {center: {lat: 26.2886 , lng: 82.08231504662632},zoom: 18});
  let marker = new google.maps.Marker({position: {lat: 26.2886 , lng: 82.08231504662632}, map: map});
}