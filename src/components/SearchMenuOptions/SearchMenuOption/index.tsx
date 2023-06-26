import { useState } from 'react';

import './styles.css';

interface Iprops {
  theme: string;
  optionIcon: string;
  description: string;
  handleSetSelectedAttractionTag: (selectedAttraction: string) => void;
}

const SearchMenuOption = ({theme,optionIcon,description,handleSetSelectedAttractionTag}: Iprops) => {
  const [isSelected, setIsSelected] = useState(false);

  function handleOptionClick() {
    isSelected ? setIsSelected(false) : setIsSelected(true);

    handleSetSelectedAttractionTag(theme);
  }

  return (
    <button
      onClick={handleOptionClick}
      className={isSelected ? 'search-option selected-option' : 'search-option'}
    >
      <img
        className="option-icon"
        src={optionIcon}
        alt={description}
      />
      <span className="option-description">{description} </span>
    </button>
  );
}

export default SearchMenuOption;
