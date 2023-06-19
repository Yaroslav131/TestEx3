import { useState,useEffect } from 'react'

import SearcOption from '../searchOprion';

import attractions from "./searchOptions";
import './styles.css'

interface Iprops {
    handleSetAttractionThemes: (attractionThemes: string[]) => void
}

function SearcOptions(props: Iprops) {
    const [selectedAttractions, setSelectedAttractions] = useState<string[]>([]);

    useEffect(() => {
        props.handleSetAttractionThemes(selectedAttractions);
    }, [selectedAttractions]);

    function handleSetSelectedAttraction(selectedAttraction: string) {
        setSelectedAttractions(prevAttractions => {
            const updatedAttractions = [...prevAttractions];

            const attractionIndex = updatedAttractions.indexOf(selectedAttraction);

            if (attractionIndex !== -1) {
                updatedAttractions.splice(attractionIndex, 1);
            } else {
                updatedAttractions.push(selectedAttraction);
            }

            return updatedAttractions;
        });
    }

    const options = attractions.map((x, index) => {
        return <SearcOption
            theme={x.theme}
            handleSetSelectedAttraction={handleSetSelectedAttraction}
            key={index}
            description={x.description}
            optionIcon={x.optionIcon} />
    })

    return (
        <div className="search-select">
            {options}
        </div>
    );
}

export default SearcOptions;


