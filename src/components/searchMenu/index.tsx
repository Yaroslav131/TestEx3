import { useState } from 'react'

import SearcOptions from "../searchOptions";
import InputRadius from "../radiusInput";
import search from "../../assets/imgs/search.svg"
import { fetchOverpassApiDataByLocal, getGeoObjects, fetchOverpassApiDataByNameAdress } from "../../api/overpassApi"
import IGeoObject from "../../interfaces/IGeoObject"

import './styles.css'
import SearchInput from '../searchInput';


interface Iprops {
    handleSetAttractions: (geoObjectArr: IGeoObject[]) => void
    userCoords: [number, number]
}


function SearchMenu(props: Iprops) {
    const [seacrhRadius, setSeacrhRadius] = useState<number>(0)
    const [attractionThemes, setAttractionThemes] = useState<string[]>([])

    const [nameAdressRequest, setNameAdressRequest] = useState<string>("")

    const [lat, lon] = props.userCoords

    async function makeMapRequest() {
        let geoObjectArr: IGeoObject[] = [];
        if (attractionThemes.length > 1) {
            for (let theme of attractionThemes) {

                let geoObjects = await fetchOverpassApiDataByLocal(theme, seacrhRadius, lat, lon);
                geoObjectArr.push(...getGeoObjects(geoObjects))
            }
        }
        else if (nameAdressRequest != "") {
            let geoObjects = await fetchOverpassApiDataByNameAdress(nameAdressRequest);
            geoObjectArr.push(...getGeoObjects(geoObjects))
        }
        props.handleSetAttractions(geoObjectArr)
    }

    function handleSetRadius(radius: number) {
        setSeacrhRadius(radius)
    }

    function inputSearchValue(nameAdressRequest: string) {
        setNameAdressRequest(nameAdressRequest)
    }

    function handleSetAttractionThemes(attractionThemes: string[]) {
        setAttractionThemes(attractionThemes)
    }

    return (
        <div className="search-menu">
            <SearchInput inputSearchValue={inputSearchValue} />
            <div>
                <label className="option-label">Искать:</label>
                <SearcOptions handleSetAttractionThemes={handleSetAttractionThemes} />
                <label className="option-label">В радиусе:</label>
                <InputRadius handleSetRadius={handleSetRadius} />
            </div>
            <button onClick={makeMapRequest} className="seach-button">
                <img src={search} alt="" />
            </button>
        </div>
    );
}

export default SearchMenu;