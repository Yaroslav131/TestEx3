// import { useContext,useState,useEffect,useCallback} from 'react'
// import { shallowEqual } from 'react-redux';

// import { Button, useYMaps } from "@pbe/react-yandex-maps";


// export const RouteButton = () => {
//     // const [lat, lon] = useAppSelector(selectPersonCoords);
//     // const place = useAppSelector(selectCurrentPlace);

//     const { mapRef, routeRef } = useContext(MapContext);
//     const ymaps = useYMaps(['multiRouter.MultiRoute']);

//     const [current, setCurrent] = useState(false);

//     useEffect(() => {
//         if (routeRef!.current) {
//             const destination = routeRef!.current.model.getReferencePoints()[1];
//             if (shallowEqual(destination, place!.position)) setCurrent(true);
//         }
//     }, [routeRef, place]);

//     const handleRoute = useCallback(() => {
//         if (routeRef!.current) {
//             mapRef!.current!.geoObjects.remove(routeRef!.current);
//             const destination = routeRef!.current?.model.getReferencePoints()[1];
//             routeRef!.current = undefined;
//             if (shallowEqual(destination, place!.position)) return setCurrent(false);
//         }

//         const start = [lat!, lon!];
//         const destination = place!.position;

//         routeRef!.current! = new ymaps!.multiRouter.MultiRoute(
//             {
//                 referencePoints: [start, destination],
//                 params: { routingMode: 'pedestrian' },
//             },
//             { boundsAutoApply: true, wayPointVisible: false },
//         );

//         setCurrent(true);
//         mapRef!.current!.geoObjects.add(routeRef!.current);
//     }, [lat, lon, mapRef, routeRef, place, ymaps]);


//     return <Button variant="contained" startIcon={<LocationIcon />} onClick={handleRoute}>
//         {current ? 'Убрать' : 'Маршрут'}
//     </Button>;
// };