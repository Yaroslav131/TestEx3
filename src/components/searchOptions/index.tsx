import attractions from "./searchOptions";

import './styles.css'

function SearcOptions() {
    const options = attractions.map((x, index) => {
        return <div className="search-option" key={index} id={x.value}>
            <img className="option-icon" src={x.optionIcon} alt={x.value} />
            <span className="option-description">{x.description} </span>
        </div>
    })

    return (
        <div className="search-select">
            {options}
        </div>
    );
}

export default SearcOptions;