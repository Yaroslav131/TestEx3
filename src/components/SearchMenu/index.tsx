import { useState } from "react"

import SearchMenuOptions from '../SearchMenuOptions';
import InputRadius from '../RadiusInput';
import search from '../../assets/images/search.svg';
import SearchInput from '../SearchInput';
import { getObjectByTags, getObjectByName } from '../../api/overpassApi';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setGeoObjects } from '../../store/slices/geoObjectsSlice';
import { setIsLoading } from '../../store/slices/loadingObjectsSlice';
import { userSearchTag } from '../../config';

import './styles.css';

const SearchMenu = () => {
  const dispatch = useAppDispatch();
  const tags = useAppSelector((state) => state.tags.value);
  const userCoords = useAppSelector((state) => state.userCords.value);
  const radius = useAppSelector((state) => state.radius.value);
  const [objectName, setObjectName] = useState<string>('')
  const isLoading = useAppSelector((state) => state.isLoadingObjects.value)

  function handleSetObjectName(name: string) {
    setObjectName(name)
  }

  function makeMapObjectRequest() {
    if (objectName != '') {
      dispatch(setIsLoading(true))

      getObjectByName(objectName, userSearchTag).then((result) => {
        dispatch(setGeoObjects(result));

        dispatch(setIsLoading(false))
      });
    } else if (tags.length != 0) {
      dispatch(setIsLoading(true))

      userCoords && getObjectByTags(tags, userCoords, radius).then((result) => {
        dispatch(setGeoObjects(result));

        dispatch(setIsLoading(false))
      });
    }


  }

  return (
    <div className="search-menu">
      <div>
        <SearchInput handleSetObjectName={handleSetObjectName} />
        <h2 className="option-title">Искать:</h2>
        <SearchMenuOptions />
        <h2 className="option-title">В радиусе:</h2>
        <InputRadius />
      </div>
      <button onClick={makeMapObjectRequest}
        className={isLoading ? "seach-button disabled-button" : "seach-button "}>
        <img src={search} alt="search button" />
      </button>
    </div>
  );
}

export default SearchMenu;
