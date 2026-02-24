"use client";

import { APIProvider, Map as GoogleMap, Marker } from "@vis.gl/react-google-maps";

// IMPORTANT: You must add your Google Maps API key to your environment variables.
// Create a .env.local file in the root of your project and add the following line:
// NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="YOUR_API_KEY"
const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";
const MAP_ID = "SAP_PATHFINDERS_MAP";

const position = { lat: 34.052235, lng: -118.243683 }; // Default to Los Angeles

export default function Map() {
  if (!API_KEY) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-muted">
        <div className="text-center text-muted-foreground">
          <p className="font-semibold">Map Under Development</p>
          <p className="text-sm">Google Maps API Key is not configured.</p>
        </div>
      </div>
    );
  }

  return (
    <APIProvider apiKey={API_KEY}>
      <GoogleMap
        style={{ width: "100%", height: "100%" }}
        defaultCenter={position}
        defaultZoom={12}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
        mapId={MAP_ID}
      >
        <Marker position={position} />
      </GoogleMap>
    </APIProvider>
  );
}
