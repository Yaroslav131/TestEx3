import { useState } from "react"

import SearchMenuOptions from '@components/SearchMenuOptions';
import InputRadius from '@components/RadiusInput';
import search from '@assets/images/search.svg';
import SearchInput from '@components/SearchInput';
import { getGeoObjectByTags, getGeoObjectByName } from '@api/overpassApi';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { setGeoObjects } from '@store/slices/geoObjectsSlice';
import { hideLoading,showLoading } from '@store/slices/loadingSlice';
import { userSearchTag } from '@/config';

import './styles.css';

const SearchMenu = () => {
  const dispatch = useAppDispatch();
  const tags = useAppSelector((state) => state.tags.value);
  const userCoords = useAppSelector((state) => state.userCords.value);
  const radius = useAppSelector((state) => state.radius.value);
  const [objectName, setObjectName] = useState<string>('')
  const isLoading = useAppSelector((state) => state.loading.value)

  function handleSetObjectName(name: string) {
    setObjectName(name)
  }

  function handleResetetObjectName() {
    setObjectName("")
  }

  function makeMapObjectRequest() {
    if (objectName != '') {
      dispatch(showLoading())

      getGeoObjectByName(objectName, userSearchTag).then((result) => {
        dispatch(setGeoObjects(result));

        dispatch(hideLoading())
      });
    } else if (tags.length != 0) {
      dispatch(showLoading())

      userCoords && getGeoObjectByTags(tags, userCoords, radius).then((result) => {
        dispatch(setGeoObjects(result));

        dispatch(hideLoading())
      });
    }


  }

  return (
    <div className="search-menu">
      <div>
        <SearchInput handleSetObjectName={handleSetObjectName} objectName={objectName}/>
        <h2 className="option-title">Искать:</h2>
        <SearchMenuOptions handleResetObjectName={handleResetetObjectName}/>
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
