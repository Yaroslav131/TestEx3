import { useState, useEffect } from "react";

import "./styles.css"

interface Iprops {
    handleSetRadius: (radius: number) => void
}

function inputRadius(props: Iprops) {
    const [inputValue, SetInputValue] = useState<number>(10)

    useEffect(() => {
        props.handleSetRadius(inputValue*1000);
    }, [inputValue])


    function handleOnInputChange(event: any) {
        const inputValue = event.target.value.replace(/\D/g, '');

        const maxLength = 4;

        const truncatedValue = inputValue.slice(0, maxLength);

        const parsedValue = parseInt(truncatedValue);

        if (parsedValue > 0) {
            SetInputValue(parsedValue);

        } else {
            SetInputValue(0);
        }
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