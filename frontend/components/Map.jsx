"use client";

import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

// delete L.Icon.Default.prototype._getIconUrl;
const defaultIcon = L.icon({
  iconUrl: icon.src,
  shadowUrl: iconShadow.src,
});

L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/marker-icon-2x.png",
  iconUrl: "/marker-icon.png",
  shadowUrl: "/marker-shadow.png",
});

export default function Map() {
  return (
    <MapContainer
      center={[40.7128, -74.006]}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      <Marker position={[40.7128, -74.006]} />
    </MapContainer>
  );
}
