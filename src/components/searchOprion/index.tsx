import { useState } from "react"

import './styles.css'

interface Iprops {
    theme: string
    optionIcon: string,
    description: string
    handleSetSelectedAttraction: (selectedAttraction: string) => void
}

function SearcOption(props: Iprops) {
    const [isSelected, SetIsSelected] = useState(false)

    function handleOptionClick() {
        isSelected ? SetIsSelected(false) : SetIsSelected(true)

        props.handleSetSelectedAttraction(props.theme)
    }

    return (
        <button onClick={handleOptionClick} className={isSelected ? "search-option selected-option" : "search-option"} >
            <img className="option-icon" src={props.optionIcon} alt={props.description} />
            <span className="option-description">{props.description} </span>
        </button>
    );
}

export default SearcOption;