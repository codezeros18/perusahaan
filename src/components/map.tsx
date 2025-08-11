import { useRef, useEffect, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

export default function MapComponent() {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const [, setDragEnabled] = useState(false);

  // Koordinat perusahaan (Jl. Geno Utomo No.25)
  const companyLocation: [number, number] = [106.618280, -6.176588]; // [lng, lat]

  useEffect(() => {
    if (mapContainer.current && !mapRef.current) {
      const map = new maplibregl.Map({
        container: mapContainer.current,
        style: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json", // Dark theme
        center: companyLocation,
        zoom: 14,
        dragPan: false, // default tidak bisa drag
        scrollZoom: false, // matikan scroll zoom
      });

      // Marker lokasi perusahaan
      new maplibregl.Marker()
        .setLngLat(companyLocation)
        .addTo(map);

      mapRef.current = map;
    }
  }, []);

  // Aktifkan drag saat mouse down
  const enableDrag = () => {
    if (mapRef.current) {
      mapRef.current.dragPan.enable();
      setDragEnabled(true);
    }
  };

  // Nonaktifkan drag saat mouse keluar
  const disableDrag = () => {
    if (mapRef.current) {
      mapRef.current.dragPan.disable();
      setDragEnabled(false);
    }
  };

  return (
    <div
      style={{
        position: "relative",
        height: "60vh", // full screen
        width: "100%",
      }}
    >
      <div
        ref={mapContainer}
        style={{ height: "100%", width: "100%" }}
        onMouseDown={enableDrag}
        onMouseLeave={disableDrag}
      />
    </div>
  );
}
