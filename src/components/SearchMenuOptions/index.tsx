import { addTag, deleteTag } from '@store/slices/tagsSlice';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import SearchMenuOption from './SearchMenuOption';
import { geoIcons, seachOptions } from '@/config';

import './styles.css';

const SearchMenuOptions = () => {
  const dispatch = useAppDispatch();
  const tags = useAppSelector((state) => state.tags.value);

  function handleSetSelectedAttractionTag(selectedAttraction: string) {
    const attractionIndex = tags.indexOf(selectedAttraction);

    if (attractionIndex !== -1) {
      dispatch(deleteTag(selectedAttraction));
    } else {
      dispatch(addTag(selectedAttraction));
    }
  }

  const options = seachOptions.map((x, index) => {
    const icon = geoIcons.find((y) => y.tag == x.tag)?.optionIcon || '';

    return (
      <SearchMenuOption
        theme={x.tag}
        handleSetSelectedAttractionTag={handleSetSelectedAttractionTag}
        key={index}
        description={x.description}
        optionIcon={icon}
      />
    );
  });

  return <div className="search-select">{options}</div>;
}

export default SearchMenuOptions;
