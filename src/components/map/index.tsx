import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

import userMark from "../../assets/imgs/userMark.svg"
import { useAppSelector } from "../../store/hooks";

import './styles.css'

const MapComponent = () => {
  const userCoords = useAppSelector((state) => state.userCords.value)

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
                iconImageHref: userMark,
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

