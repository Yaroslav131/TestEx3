import { Map, Circle, Placemark } from '@pbe/react-yandex-maps';
import { useState, useEffect, useContext } from 'react';
import { toast } from 'react-toastify';

import CustomPlacemark from '../GeoObjectPlacemark';
import { getObjectByTags } from '../../api/overpassApi';
import { getUserGeolocation } from '../../helpingFunctions';
import IGeoObject from '../../types/IGeoObject';
import {
  attractionsTags,
  userPlacemarkOptions,
  mapDefaulteCoords,
  defaulteRadius,
  MapContext
} from '../../config';
import { setCoords } from '../../store/slices/userCordsSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setGeoObjects } from '../../store/slices/geoObjectsSlice';
import locFilled from '../../assets/imgs/tablerLocationFilled.svg';
import { setIsLoading } from '../../store/slices/loadingObjectsSlice';

import './styles.css';
import images from '../../images';

const MapComponent = () => {
  const { mapRef } = useContext(MapContext)
  const dispatch = useAppDispatch();
  const [geoObjectPlacemarks, setGeoObjectPlacemarks] = useState<JSX.Element[]>();
  const userCoords = useAppSelector((state) => state.userCords.value);
  const userRadius = useAppSelector((state) => state.radius.value);
  const geoObjects = useAppSelector((state) => state.geoObjects.value);
  const isLoading = useAppSelector((state) => state.isLoadingObjects.value)
  const routeObject = useAppSelector((state) => state.pickedRoutePlace.value);

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
      dispatch(setIsLoading(true))
      const coords = await getUserGeolocation();
      dispatch(setCoords([coords.latitude, coords.longitude]));

      const geoObjects = await getObjectByTags(
        attractionsTags,
        [coords.latitude, coords.longitude],
        defaulteRadius
      );

      await dispatch(setGeoObjects(geoObjects));
      setMapObjects(geoObjects);

    } catch (error) {
      console.log(error)
      toast.error(`Нам не удалось получить ваше местоположение. Возможно у ваc отключена геолакация.`);
    }
    finally {
      dispatch(setIsLoading(false))
    }
  };

  return (
    <div className="map-container">
      {isLoading && (
        <div id="loadingOverlay">
          <div className="loadingSpinner"></div>
        </div>
      )}
      <Map
        defaultState={{ center: mapDefaulteCoords, zoom: 15 }}
        state={{ center: userCoords || mapDefaulteCoords, zoom: 15 }}
        width="100%"
        height="100%"
        instanceRef={mapRef!}
      >
        {routeObject.isPicked ?
          <>
            <Placemark geometry={userCoords!} options={userPlacemarkOptions} />
            <CustomPlacemark
              objectId={routeObject.object?.id!}
              markCoords={[routeObject.object?.lat!, routeObject.object?.lon!]}
              iconImageHref={images.mapPin}
            />
          </>
          :
          <>
            {userCoords && (
              <>
                <Placemark geometry={userCoords} options={userPlacemarkOptions} />
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
          </>
        }

        <button onClick={updateMap}
          className={isLoading ? "location-button disabled-button" : "location-button"} >
          <img src={locFilled} alt="геолакация" />
        </button>
      </Map>
    </div>

  );
};

export default MapComponent;
