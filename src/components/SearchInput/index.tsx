import searchIcon from '@assets/images/searchInput.svg';

import './styles.css';

interface IProps {
  handleSetObjectName: (name: string) => void
  objectName:string
}

const SearchInput = (props: IProps) => {
  function handleOnInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value;

    props.handleSetObjectName(inputValue)
  }
  return (
    <div className="search-container">
      <img className="search-icon" src={searchIcon} alt="Search icon" />
      <input
        value={props.objectName}
        onChange={handleOnInputChange}
        placeholder="Место, адрес..."
        type="text"
        className="search-input"
      />
    </div>
  );
}

export default SearchInput;
