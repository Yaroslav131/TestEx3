import { useRef } from 'react';
import MapComponent from '@components/Map';
import MenuBar from '@components/MenuBar';
import { MapContext } from '@/config';

import './styles.css';

const MainPage = () => {
  const contextValue = {
    mapRef: useRef<ymaps.Map>(),
    routeRef: useRef<ymaps.multiRouter.MultiRoute>(),
  }
  return (
    <div className="main-page">
      <MapContext.Provider value={contextValue}>
        <MenuBar />
        <MapComponent />
      </MapContext.Provider>
    </div>
  );
}

export default MainPage;
