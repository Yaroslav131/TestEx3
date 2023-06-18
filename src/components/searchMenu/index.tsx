import SearcOptions from "../searchOptions";
import InputRadius from "../inputRadius/";
import search from "../../assets/imgs/search.svg"

import './styles.css'

function SearchMenu() {
    return (
        <div className="search-menu">
            <label className="option-label">Искать:</label>
            <SearcOptions />
            <label className="option-label">В радиусе:</label>
            <InputRadius />
            <button className="seach-button">
                <img src={search} alt="" />
            </button>
        </div>
    );
}

export default SearchMenu;