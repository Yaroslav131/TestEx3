import { YMaps, Map, Circle, Placemark } from '@pbe/react-yandex-maps';

import { useState, useEffect } from 'react';

import CustomPlacemark from '../GeoObjectPlacemark';
import { getObjectByTags } from '../../api/overpassApi';
import { getUserGeolocation } from '../../helpingFunctions';
import IGeoObject from '../../types/IGeoObject';
import {
  attractionsTags,
  userPlacemarkOptions,
  mapDefaulteCoords,
} from '../../config';
import { setCoords } from '../../store/slices/userCordsSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setGeoObjects } from '../../store/slices/geoObjectsSlice';
import locFilled from '../../assets/imgs/tablerLocationFilled.svg';

import './styles.css';

const MapComponent = () => {
  const dispatch = useAppDispatch();
  const [geoObjectPlacemarks, setGeoObjectPlacemarks] = useState<JSX.Element[]>();
  const userCoords = useAppSelector((state) => state.userCords.value);
  const userRadius = useAppSelector((state) => state.radius.value);
  const geoObjects = useAppSelector((state) => state.geoObjects.value);

  useEffect(() => {
    setMapObjects(geoObjects)
  }, [geoObjects])


  const setMapObjects = (geoObjects: IGeoObject[]) => {
    const placemarks: JSX.Element[] = geoObjects.map((geoObject, index) => {
      return (
        <CustomPlacemark
          objectId={geoObject.id}
          key={index}
          markCoords={[geoObject.lat, geoObject.lon]}
          iconImageHref={geoObject.iconImgHref}
        />
      );
    });

    setGeoObjectPlacemarks(placemarks);
  };

  const updateMap = async () => {
    try {
      const coords = await getUserGeolocation();
      await dispatch(setCoords([coords.latitude, coords.longitude]));

      const geoObjects = await getObjectByTags(
        attractionsTags,
        [coords.latitude, coords.longitude],
        userRadius
      );

      await dispatch(setGeoObjects(geoObjects));
      setMapObjects(geoObjects);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  return (
    <YMaps
      query={{
        lang: 'en_RU',
        apikey: "18f172d7-21c0-4d35-bac0-a89f15490ad1",
      }}
    >
      <div className="map-container">
        <Map
          defaultState={{ center: mapDefaulteCoords, zoom: 15 }}
          state={{ center: userCoords || mapDefaulteCoords, zoom: 15 }}
          width="100%"
          height="100%"
        >
          {userCoords && (
            <Placemark geometry={userCoords} options={userPlacemarkOptions} />
          )}
          {userCoords && geoObjectPlacemarks}
          {userCoords && (
            <Circle
              geometry={[userCoords, userRadius]}
              options={{
                fillColor: 'rgba(94, 123, 199, 0.2)',
                strokeColor: '5E7BC7',
                strokeOpacity: 0.8,
                strokeWidth: 2,
              }}
            />
          )}

          <button className="location-button" onClick={updateMap}>
            <img src={locFilled} alt="геолакация" />
          </button>
        </Map>
      </div>
    </YMaps>
  );
};

export default MapComponent;
