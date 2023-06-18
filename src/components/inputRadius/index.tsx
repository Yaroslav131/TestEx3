import { useState } from "react";
import "./styles.css"

function inputRadius() {
    const [inputValue, SetInputValue] = useState("")

    function handleOnInputChange(e: any) {
        SetInputValue(e.target.value)
    }

    return (
        <div className="radius-input-container">
            <input onChange={handleOnInputChange} 
            value={inputValue} type="text" className="radius-input" />
            <span className="radius-measure-text">км</span>
        </div>
    );
}

export default inputRadius;