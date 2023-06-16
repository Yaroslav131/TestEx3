import { YMaps, Map, Placemark, GeolocationControl, ObjectManager } from '@pbe/react-yandex-maps';
import { useEffect, useState } from 'react';

import { getUserGeolocation } from '../../api/browserApi';

import './styles.css'

const MapComponent = () => {
  const [userCoords, setUserCoords] = useState<[number, number] >([55.751574, 37.573856]);

  useEffect(() => {
    const unsubscribe = getUserGeolocation((latitude, longitude) => {
      setUserCoords([latitude, longitude]);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <YMaps query={{
      lang: "en_RU",
      apikey: "18f172d7-21c0-4d35-bac0-a89f15490ad1"
    }}>
      <div className="map-container">
        <Map defaultState={{ center: userCoords, zoom: 15 }} width="100%" height="100%">
          {userCoords && (
            <Placemark
              geometry={userCoords}
              options={{
                iconLayout: 'default#image',
                iconImageHref: 'src/assets/imgs/userMark.svg',
                iconImageSize: [40, 40],
                iconImageOffset: [0, 0],
              }}
            />
          )}
        </Map>
      </div>
    </YMaps>
  );
};

export default MapComponent;

