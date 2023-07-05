import { useState, useEffect } from 'react';

import './styles.css';
import { useAppSelector } from '@store/hooks';

interface Iprops {
  theme: string;
  optionIcon: string;
  description: string;
  handleSetSelectedAttractionTag: (selectedAttraction: string) => void;
  handleResetObjectName:()=>void
}

const SearchMenuOption = ({ theme, optionIcon, description, handleSetSelectedAttractionTag, handleResetObjectName }: Iprops) => {
  const [isSelected, setIsSelected] = useState(false);
  const tags = useAppSelector((state) => state.tags.value);

  function handleOptionClick() {
    isSelected ? setIsSelected(false) : setIsSelected(true);

    handleSetSelectedAttractionTag(theme);
    handleResetObjectName();
  }

  useEffect(() => {
    const attractionIndex = tags.indexOf(theme);

    if (attractionIndex == -1) {
      setIsSelected(false)
    } else {
      setIsSelected(true)
    }

  }, [tags])


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
