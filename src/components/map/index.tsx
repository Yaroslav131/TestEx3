import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { useEffect, useState } from 'react';
import './styles.css'

const MapComponent = () => {
  const [userCoords, setUserCoords] = useState<[number, number] | null>(null);
  // const [userHeading, setUserHeading] = useState<number | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserCoords([latitude, longitude]);
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }

    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', handleDeviceOrientation, true);
    } else {
      console.error('DeviceOrientationEvent is not supported by this browser.');
    }

    return () => {
      window.removeEventListener('deviceorientation', handleDeviceOrientation);
    };
  }, []);

  const handleDeviceOrientation = (event: DeviceOrientationEvent) => {
    const { alpha } = event;
    if (alpha !== null) {
      // const heading = 360 - alpha;
      // setUserHeading(heading);
    }
  };


  return (
    <YMaps>
      <div className={"map-container"}>
        <Map defaultState={{ center: userCoords!, zoom: 15 }}
          width="100%" height="100%">
          {userCoords && <Placemark geometry={userCoords} />}
        </Map>
      </div>
    </YMaps>
  );
};

export default MapComponent;