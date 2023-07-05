import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import IGeoObject from '@customTypes/IGeoObject';
import wayIcon from '@assets/images/way.svg';
import { useYMaps } from "@pbe/react-yandex-maps";
import { MapContext } from '@/config';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { closeRoutePlace, pickRoutePlace } from '@store/slices/isPickedRoutePlaceSlice';

import './sytles.css'

interface IProps {
  chosenObject: IGeoObject | null;
}

export const RouteButton = ({ chosenObject }: IProps) => {
  const dispatch = useAppDispatch();
  const coords = useAppSelector((state) => state.userCords.value);
  const routeObject = useAppSelector((state) => state.pickedRoutePlace.value);
  const { mapRef, routeRef } = useContext(MapContext);
  const ymaps = useYMaps(['multiRouter.MultiRoute']);

  const [isRouteButton, setIsRouteButton] = useState<boolean>(false)

  useEffect(() => {
    if (!routeObject?.object) {
      setIsRouteButton(false)
    }
    else if (chosenObject) {
      let isCheckButton = chosenObject.lat == routeObject?.object!.lat && chosenObject.lon == routeObject?.object!.lon;
      setIsRouteButton(isCheckButton)
    }
  }, [routeObject, chosenObject])

  const handleRoute = () => {
    const start = coords;
    const destination = [chosenObject!.lat, chosenObject!.lon];

    if (!coords) {
      toast.error("Мы не можем плучить ваше место положение. Проверьте, чтобы была включина геолокация.")
      return
    }

    if (routeRef!.current!) {
      mapRef!.current!.geoObjects.remove(routeRef!.current!);
    }

    if (routeObject.isPicked && isRouteButton) {
      toast.success("Маршрут отменен")
      dispatch(closeRoutePlace())
    }
    else {
      routeRef!.current = new ymaps!.multiRouter.MultiRoute(
        {
          referencePoints: [start!, destination],
          params: { routingMode: 'pedestrian' },
        },
        { boundsAutoApply: true, wayPointVisible: false },
      );

      mapRef!.current?.geoObjects.add(routeRef!.current!);

      dispatch(pickRoutePlace({ isPicked: true, object: chosenObject }))
      toast.success("Маршрут постоен")
    }
  }

  return (
    <button className={isRouteButton ?
      "active-way-button" : "way-button"} onClick={handleRoute}>
      <img className={isRouteButton ? "active-way-button-img" : "way-button-img"} src={wayIcon} alt="Way Icon" />
      <span className={isRouteButton ? "active-way-span" : "way-span"}>{isRouteButton ? "Закончить" : "Маршрут"}</span>
    </button>
  );
};
