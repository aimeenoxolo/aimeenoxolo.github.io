console.log("in location.js")
navigator.geolocation.getCurrentPosition(function(position) {
	console.log("changing coords");
	var coords = {"lat": position.coords.latitude, "long": position.coords.longitude};
	var globalloc = coords;
	console.log(coords);
	var target = {"lat": 37.875457, "long": -122.259108}
  //var target2 = {"lat": 37.870568, "long": -122.251530}
  var target2 = {"lat": 37.862793, "long": -122.253739}
	if (compareCoords(coords, target, 0.01) or compareCoords(coords,target2, 0.01)) {
	    document.getElementById("sheet_frame").src = "https://goo.gl/forms/zjvZ4msoYoMeXRJv2";
	} 
}, function(error) {
    console.log('cant get location');
    console.log(error);
});
		
		
		
function compareCoords(coord1, coord2, maxDist) {
	var dist = calcCrow(coord1.lat, coord1.long, coord2.lat, coord2.long);
	if (dist <= maxDist) {
		return true;
	}
	return false;
}

function calcCrow(lat1, lon1, lat2, lon2) 
{
  var R = 6371; // km
  var dLat = toRad(lat2-lat1);
  var dLon = toRad(lon2-lon1);
  var lat1 = toRad(lat1);
  var lat2 = toRad(lat2);

  var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  var d = R * c;
  return d;
}

// Converts numeric degrees to radians
function toRad(Value) {
    return Value * Math.PI / 180;
}