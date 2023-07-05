import { Map, Circle, Placemark } from '@pbe/react-yandex-maps';
import { useEffect, useContext, useCallback, useMemo } from 'react';
import { toast } from 'react-toastify';

import CustomPlacemark from '@components/GeoMarker';
import { getGeoObjectByTags } from '@api/overpassApi';
import { getUserGeolocation } from '@helpers/geolocationFunctions';
import IGeoObject from '@customTypes/IGeoObject';
import {
  attractionsTags,
  userPlacemarkOptions,
  mapDefaulteCoords,
  defaulteRadius,
  MapContext,
  UserAppeals
} from '@/config';
import { setCoords } from '@store/slices/userCordsSlice';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { setGeoObjects } from '@store/slices/geoObjectsSlice';
import locFilled from '@assets/images/tablerLocationFilled.svg';
import { showLoading, hideLoading } from '@store/slices/loadingSlice';
import images from '@/images';

import './styles.css';

const MapComponent = () => {
  const { mapRef } = useContext(MapContext);
  const dispatch = useAppDispatch();
  const userCoords = useAppSelector((state) => state.userCords.value);
  const userRadius = useAppSelector((state) => state.radius.value);
  const geoObjects = useAppSelector((state) => state.geoObjects.value);
  const isLoading = useAppSelector((state) => state.loading.value);
  const routeObject = useAppSelector((state) => state.pickedRoutePlace.value);

  const setMapObjects = useCallback((geoObjects: IGeoObject[]) => {
    const placemarks: JSX.Element[] = geoObjects.map((geoObject, index) => {
      return (
        <CustomPlacemark
          objectId={geoObject.id}
          key={index}
          markCoords={[geoObject.lat, geoObject.lon]}
          imageIconHref={geoObject.iconImgHref}
        />
      );
    });

    return placemarks;
  }, []);

  const updateMap = useCallback(async () => {
    try {
      dispatch(showLoading());
      const coords = await getUserGeolocation();
      dispatch(setCoords([coords.latitude, coords.longitude]));

      const geoObjects = await getGeoObjectByTags(
        attractionsTags,
        [coords.latitude, coords.longitude],
        defaulteRadius
      );

      await dispatch(setGeoObjects(geoObjects));
    } catch {
      toast.error(UserAppeals.NoGPS);
    } finally {
      dispatch(hideLoading());
    }
  }, [dispatch, setCoords, setGeoObjects]);

  useEffect(() => {
    updateMap();
  }, [updateMap]);

  const placemarks = useMemo(() => {
    if (geoObjects) {
      return setMapObjects(geoObjects);
    }
    return [];
  }, [geoObjects, setMapObjects]);

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
        {routeObject.isPicked ? (
          <>
            <Placemark geometry={userCoords!} options={userPlacemarkOptions} />
            <CustomPlacemark
              objectId={routeObject.object?.id!}
              markCoords={[routeObject.object?.lat!, routeObject.object?.lon!]}
              imageIconHref={images.mapPin}
            />
          </>
        ) : (
          <>
            {userCoords && (
              <>
                <Placemark geometry={userCoords} options={userPlacemarkOptions} />
                {placemarks}
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
        )}

        <button
          onClick={updateMap}
          className={isLoading ? 'location-button disabled-button' : 'location-button'}
        >
          <img src={locFilled} className='loc-img' alt="geolocation" />
        </button>
      </Map>
    </div>
  );
};

export default MapComponent;
