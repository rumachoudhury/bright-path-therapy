"use client";

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";

import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const icon = L.icon({
  iconUrl: markerIcon.src,
  shadowUrl: markerShadow.src,
});

export default function Map() {
  return (
    <MapContainer
      center={[40.7128, -74.006]}
      zoom={13}
      style={{
        height: "300px",
        width: "100%",
        borderRadius: "12px",
      }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      <Marker position={[40.7128, -74.006]} icon={icon} />
    </MapContainer>
  );
}
