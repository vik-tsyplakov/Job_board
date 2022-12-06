import React from "react";
import * as L from "leaflet";
export default function Map() {
  var map = L.map("my-map").setView([48.1500327, 11.5753989], 6);
  const myAPIKey = "f7a03daa0ece430cbba8697b4abfc959";
  var mapURL = L.Browser.retina
    ? `https://maps.geoapify.com/v1/tile/{mapStyle}/{z}/{x}/{y}.png?apiKey={apiKey}`
    : `https://maps.geoapify.com/v1/tile/{mapStyle}/{z}/{x}/{y}@2x.png?apiKey={apiKey}`;

  // Add map tiles layer. Set 20 as the maximal zoom and provide map data attribution.
  L.tileLayer(mapURL, {
    attribution:
      'Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | <a href="https://openmaptiles.org/" rel="nofollow" target="_blank">© OpenMapTiles</a> <a href="https://www.openstreetmap.org/copyright" rel="nofollow" target="_blank">© OpenStreetMap</a> contributors',
    apiKey: myAPIKey,
    mapStyle: "osm-bright-smooth", // More map styles on https://apidocs.geoapify.com/docs/maps/map-tiles/
    maxZoom: 20,
  }).addTo(map);

  // Add Geoapify Address Search control
  const addressSearchControl = L.control.addressSearch(myAPIKey, {
    position: "topleft",
    resultCallback: (address) => {
      console.log(address);
    },
    suggestionsCallback: (suggestions) => {
      console.log(suggestions);
    },
  });
  map.addControl(addressSearchControl);
  L.control.zoom({ position: "bottomright" }).addTo(map);

  return <div id="my-map" className="container "></div>;
}
