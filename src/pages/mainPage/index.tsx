import { useEffect } from "react"

import MapComponent from '../../components/map'
import { getObjectByTags } from "../../api/overpassApi";
import MenuBar from '../../components/menuBar'
import { getUserGeolocation } from '../../api/browserApi';
import { attractionsTags } from "../../config"
import { setCoords } from "../../store/slices/userCordsSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setGeoObjects } from "../../store/slices/geoObjectsSlice";

import './styles.css'

function MainPage() {
  const dispatch = useAppDispatch();
  const radius = useAppSelector((state) => state.radius.value);

  useEffect(() => {
    getUserGeolocation().then(coords => {

      dispatch(setCoords([coords.latitude, coords.longitude]))

      getObjectByTags(attractionsTags, [coords.latitude, coords.longitude], radius).then((result) => {

        dispatch(setGeoObjects(result))
      })
    })
  }, []);

  return (
    <div className='main-page'>
      <MenuBar />
      <MapComponent />
    </div>
  )
}

export default MainPage
