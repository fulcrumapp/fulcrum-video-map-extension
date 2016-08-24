function findMetadata(string) {
  var labelTags = document.getElementsByTagName("label");
  var searchText = string;
  for (var i = 0; i < labelTags.length; i++) {
    if (labelTags[i].textContent == searchText) {
      label = labelTags[i];
      value = label.nextSibling.innerHTML;
      break;
    }
  }
  return value;
}

if (window.location.host === "web.fulcrumapp.com") {
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
          parseFloat(findMetadata("Longitude:")),
          parseFloat(findMetadata("Latitude:"))
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
