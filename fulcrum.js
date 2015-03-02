if (window.location.host === "web.fulcrumapp.com" && document.getElementsByClassName("metadata-location-longitude")[0] && document.getElementsByClassName("metadata-location-latitude")[0]) {
  if (!featureCollection) {
    var featureCollection = {
      "type": "FeatureCollection",
      "features": []
    };
  }
  var title = prompt("Enter a feature title:");
  if (title) {
    featureCollection.features.push({
      "type": "Feature",
      "properties": {
        "title": title
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          parseFloat(document.getElementsByClassName("metadata-location-longitude")[0].innerHTML),
          parseFloat(document.getElementsByClassName("metadata-location-latitude")[0].innerHTML)
        ]
      }
    });
    var response = confirm("Continue adding features? Click Cancel to map added features in geojson.io");
    if (response === false) {
      window.open("http://geojson.io/#data=data:application/json,"+encodeURIComponent(JSON.stringify(featureCollection)));
      featureCollection.features = [];
    }
  }
}
else {
  alert("This only works from the Fulcrum Video viewer screen!");
}
