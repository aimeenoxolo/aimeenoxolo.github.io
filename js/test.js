navigator.geolocation.getCurrentPosition(function(position) {
	    	console.log("changing coords");
			coords = {"lat": position.coords.latitude, "long": position.coords.longitude};
			globalloc = coords;
			console.log(coords);
			target = {"lat": 37.869487, "long": -122.257933}
			if (compareCoords(coords, target, 10)) {
			    document.getElementById("sheet_frame").src = "https://docs.google.com/spreadsheets/d/14erh4bjjIYZNZSerr--E2P8ENQY8sElgbEst2L61puo/edit#gid=0";
			}
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

