import SearcOptions from "../searchOptions";
import InputRadius from "../radiusInput";
import search from "../../assets/imgs/search.svg"
import SearchInput from '../searchInput';
import { getObjectByTags, getObjectByName } from "../../api/overpassApi";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setGeoObjects } from "../../store/slices/geoObjectsSlice";
import {userSearchTag} from '../../config'

import './styles.css'

function SearchMenu() {
    const dispatch = useAppDispatch()
    const name = useAppSelector((state) => state.objectName.value)
    const tags = useAppSelector((state) => state.tags.value)
    const userCoords = useAppSelector((state) => state.userCords.value)
    const radius = useAppSelector((state) => state.radius.value)

    function makeMapObjectRequest() {
        if (name != "") {
            getObjectByName(name,userSearchTag).then((result) => {
                dispatch(setGeoObjects(result))
            })
        }
        else {
            if (tags.length != 0) {
                getObjectByTags(tags, userCoords, radius).then((result) => {
                    dispatch(setGeoObjects(result))
                })
            }
        }
    }

    return (
        <div className="search-menu">
            <div>
                <SearchInput />
                <h2 className="option-title">Искать:</h2>
                <SearcOptions />
                <h2 className="option-title">В радиусе:</h2>
                <InputRadius />
            </div>
            <button onClick={makeMapObjectRequest} className="seach-button">
                <img src={search} alt="search button" />
            </button>
        </div>
    );
}

export default SearchMenu;