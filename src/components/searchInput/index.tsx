import { setName } from "../../store/slices/searchNameSlice";
import { useAppDispatch } from "../../store/hooks";
import searchIcon from '../../assets/imgs/searchInput.svg'

import "./styles.css"

function SearchInput() {
    const dispatch = useAppDispatch();
    function handleOnInputChange(event: any) {
        const inputValue = event.target.value;
        
        dispatch(setName(inputValue));
    }

    return (<div className='search-container'>
        <img className='search-icon' src={searchIcon} alt='search icon' />
        <input onChange={handleOnInputChange} placeholder='Место, адрес...' type="text" className="search-input" />
    </div>);
}

export default SearchInput;