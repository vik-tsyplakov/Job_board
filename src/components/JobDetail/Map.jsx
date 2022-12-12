import React, { useRef, useEffect, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import "./map.css";

export default function Map(props) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(props.location.long);
  const [lat] = useState(props.location.lat);
  const [zoom] = useState(14);
  const [API_KEY] = useState("vvPmfRdAW2R17tnkslnf");

  useEffect(() => {
    if (map.current) return; //stops map from intializing more than once
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/50981751-1804-4552-b1dd-d5b896e32a92/style.json?key=${API_KEY}`,
      center: [lng, lat],
      zoom: zoom,
    });
    new maplibregl.Marker({ color: "#FF0000" })
      .setLngLat([lng, lat])
      .addTo(map.current);
  });

  return (
    <div className="map-wrap">
      <div ref={mapContainer} className="map" />
    </div>
  );
}
