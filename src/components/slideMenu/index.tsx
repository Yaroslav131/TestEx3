import searchIcon from '../../assets/imgs/searchInput.svg'

import './styles.css'

interface Iprops {
    isOpen: boolean,
    content: JSX.Element|null
    handleCloseSlideMenu: () => void
}

function SlideMenu({ isOpen, content, handleCloseSlideMenu }: Iprops) {
    return (
        <div className={isOpen ?  "side-menu" : "close-side-menu"}>
            <div className="main-container">
                <div className='search-container'>
                    <img className='search-icon' src={searchIcon} alt='search icon' />
                    <input placeholder='Место, адрес...' type="text" className="search-input" />
                </div>
                {content}
            </div>
            <div className="uvula-container">
                <button onClick={handleCloseSlideMenu} className="uvula" />
            </div>
        </div>
    );
}

export default SlideMenu;