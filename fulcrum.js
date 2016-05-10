if (window.location.host === "web.fulcrumapp.com" && document.getElementsByClassName('_s6')[2].getElementsByClassName('_v6')[7] && document.getElementsByClassName('_s6')[2].getElementsByClassName('_v6')[8]) {
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
          parseFloat(document.getElementsByClassName('_s6')[2].getElementsByClassName('_v6')[8].innerText),
          parseFloat(document.getElementsByClassName('_s6')[2].getElementsByClassName('_v6')[7].innerText)
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
