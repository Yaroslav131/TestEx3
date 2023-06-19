import { useEffect, useState } from "react"

import searchIcon from '../../assets/imgs/searchInput.svg'

import "./styles.css"

interface Iprops {
    inputSearchValue: (event:any) => void
}

function SearchInput(props: Iprops) {
    const [inputValue, SetInputValue] = useState<string>("")

    useEffect(() => {
        props.inputSearchValue(inputValue);
        SetInputValue("")
    }, [inputValue])

    function handleOnInputChange(event: any) {
        const inputValue = event.target.value;

        SetInputValue(inputValue);
    }

    return (<div className='search-container'>
        <img className='search-icon' src={searchIcon} alt='search icon' />
        <input onChange={handleOnInputChange} placeholder='Место, адрес...' type="text" className="search-input" />
    </div>);
}

export default SearchInput;