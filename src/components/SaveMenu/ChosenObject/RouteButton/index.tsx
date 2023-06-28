import { useContext, useEffect, useState } from 'react';
import wayIcon from '../../../../assets/imgs/way.svg';
import { useYMaps } from "@pbe/react-yandex-maps";
import { MapContext } from '../../../../config';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { closeRoutePlace, pickRoutePlace } from '../../../../store/slices/isPickedRoutePlaceSlice';

import './sytles.css'
import { toast } from 'react-toastify';
interface IProps {
  placeCoords: [number, number];
}

export const RouteButton = ({ placeCoords }: IProps) => {
  const dispatch = useAppDispatch();
  const coords = useAppSelector((state) => state.userCords.value);
  const isPicked = useAppSelector((state) => state.pickedRoutePlace.value);
  const { mapRef, routeRef } = useContext(MapContext);
  const ymaps = useYMaps(['multiRouter.MultiRoute']);

  const [isRouteButton, setIsRouteButton] = useState<boolean>(false)

  useEffect(() => {
    if (placeCoords[0] && placeCoords[1]) {
      let test = placeCoords[0] == isPicked[1]?.lan && placeCoords[1] == isPicked[1]?.lon;
      setIsRouteButton(test)
    }
  }, [isPicked, placeCoords])

  const handleRoute = () => {
    const start = coords;
    const destination = placeCoords;

    if (!coords) {
      toast.error("Мы не можем плучить ваше место положение. Проверьте, чтобы была включина геолокация.")
      return
    }

    if (routeRef!.current!) {
      mapRef!.current!.geoObjects.remove(routeRef!.current!);
    }

    if (isPicked[0] && isRouteButton) {
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

      dispatch(pickRoutePlace({ lan: placeCoords[0], lon: placeCoords[1] }))
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
