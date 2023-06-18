import SearcOptions from "../searchOptions";

import './styles.css'

function SearchMenu() {
    return (
        <div className="search-menu">
            <label className="option-label">Искать:</label>
            <SearcOptions />
        </div>
    );
}

export default SearchMenu;