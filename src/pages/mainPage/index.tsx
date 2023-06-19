import { useState, useEffect } from "react"

import MapComponent from '../../components/map'
import MenuBar from '../../components/menuBar'
import { getUserGeolocation } from '../../api/browserApi';
import IGeoObject from "../../interfaces/IGeoObject"

import './styles.css'

function MainPage() {
  const [attractionsRequest, SetAttractionsRequest] = useState<IGeoObject[] | null>(null)
  const [userCoords, setUserCoords] = useState<[number, number]>([55.751574, 37.573856]);

  function handleSetAttractions(attractions: IGeoObject[]) {
    SetAttractionsRequest(attractions)
    console.log(attractions)
  }

  useEffect(() => {
    const unsubscribe = getUserGeolocation((latitude, longitude) => {
      setUserCoords([latitude, longitude])
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className='main-page'>
      <MenuBar
        userCoords={userCoords}
        handleSetAttractions={handleSetAttractions} />
      <MapComponent userCoords={userCoords} />
    </div>
  )
}

export default MainPage
