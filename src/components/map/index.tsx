import { YMaps, Map, Circle } from '@pbe/react-yandex-maps';
import { useState, useEffect } from 'react';

import userMark from "../../assets/imgs/userMark.svg"
import { useAppSelector } from "../../store/hooks";
import CustomPlacemark from '../customPlacemark';

import './styles.css'

const MapComponent = () => {
  const [geoObjectPlacemarks, SetGeoObjectPlacemarks] = useState<JSX.Element[]>()
  const userCoords = useAppSelector((state) => state.userCords.value)
  const userRadius = useAppSelector((state) => state.radius.value)
  const geoObjects = useAppSelector((state) => state.geoObjects.value)

  useEffect(() => {
    const placemarks: JSX.Element[] = geoObjects.map((x) => {

      return <CustomPlacemark key={x.id} markCoords={[x.lat, x.lon]} iconImageHref={x.iconImgHref } />
    })

    SetGeoObjectPlacemarks(placemarks)

  }, [geoObjects])


  return (
    <YMaps query={{
      lang: "en_RU",
      apikey: "18f172d7-21c0-4d35-bac0-a89f15490ad1"
    }}>
      <div className="map-container">
        <Map
          defaultState={{ center: userCoords, zoom: 15 }}
          width="100%" height="100%">
          {userCoords && (
            <>
              <CustomPlacemark markCoords={userCoords} iconImageHref={userMark} />
              {geoObjectPlacemarks}
              <Circle
                geometry={[userCoords, userRadius]}
                options={{
                  fillColor: 'rgba(94, 123, 199, 0.2)',
                  strokeColor: '5E7BC7',
                  strokeOpacity: 0.8,
                  strokeWidth: 2,
                }}
              />
            </>
          )}

        </Map>
      </div>
    </YMaps>
  );
};

export default MapComponent;