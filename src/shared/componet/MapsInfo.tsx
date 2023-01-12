import React, { useMemo } from "react";
import { GoogleMap, useJsApiLoader ,MarkerF} from "@react-google-maps/api";

const MapsInfo = ({lat,long}:any) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyA1RO6BWdgnZ_0b_N3kuWqxRmWqOXwPxmU",
  });

  if (!isLoaded) return <div>in caricamento...</div>;
  return <Map/>;

  function Map() {
    const center =useMemo(() => ({lat:lat,lng: long}),[]) ;
    return (
      <GoogleMap
        zoom={5}
        center={center}
        mapContainerClassName="map-container"
      >
        <MarkerF position={center} />
      </GoogleMap>
    );
  }
};
export default MapsInfo;
