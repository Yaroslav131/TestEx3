import { YMaps, Map, Circle, Placemark } from '@pbe/react-yandex-maps';
import { useState, useEffect } from 'react';

import userMark from "../../assets/imgs/userMark.svg"
import { useAppSelector } from "../../store/hooks";
import CustomPlacemark from '../geoObjectPlacemark';

import './styles.css'

const MapComponent = () => {
  const [geoObjectPlacemarks, SetGeoObjectPlacemarks] = useState<JSX.Element[]>()
  const userCoords = useAppSelector((state) => state.userCords.value)
  const userRadius = useAppSelector((state) => state.radius.value)
  const geoObjects = useAppSelector((state) => state.geoObjects.value)

  useEffect(() => {
    const placemarks: JSX.Element[] = geoObjects.map((x, index) => {
      return <CustomPlacemark
        objectId={x.id}
        key={index}
        markCoords={[x.lat, x.lon]}
        iconImageHref={x.iconImgHref} />
    })

    SetGeoObjectPlacemarks(placemarks)

  }, [geoObjects])

  const userPlacemarkOptions = {
    iconLayout: 'default#image',
    iconImageHref: userMark,
    iconImageSize: [32, 32],
    iconImageOffset: [-16, -16],
  };


  return (
    <YMaps query={{
      lang: "en_RU",
      apikey: import.meta.env.VITE_API_KEY_YMAPS
    }}>
      <div className="map-container">
        <Map
          defaultState={{ center: userCoords, zoom: 15 }}
          width="100%"
          height="100%">
              <Placemark
                geometry={userCoords}
                options={userPlacemarkOptions}
              />
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
        </Map>
      </div>
    </YMaps>
  );
};

export default MapComponent;