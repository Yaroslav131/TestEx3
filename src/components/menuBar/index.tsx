import { useState, useEffect } from 'react';

import images from '../../images';
import singOut from '../../assets/imgs/singOut.svg';
import SlideMenu from './SlideMenu';
import SearchMenu from '../SearchMenu';
import { useAppSelector } from '../../store/hooks';
import SaveMenu from '../SaveMenu';

import './styles.css';

const MenuBar = () => {
  const [isSlideMenuOpen, setIsSlideMenuOpen] = useState(false);
  const [slideMenuContent, setSlideMenuContent] = useState<JSX.Element | null>(
    null
  );
  const [isSearchButtonActive, setIsSearchButtonActive] = useState(false);
  const [isSaveButtonActive, setIsSaveButtonActive] = useState(false);

  const isChosenObjPicked = useAppSelector(
    (state) => state.isChosenObjPicked.value
  );

  useEffect(() => {
    if (isChosenObjPicked[0]) {
      disableAllMenuButtons();
      setIsSaveButtonActive(true);
      setIsSlideMenuOpen(true);
      setSlideMenuContent(<SaveMenu />);
    }
  }, [isChosenObjPicked[0]]);

  function disableAllMenuButtons() {
    setIsSaveButtonActive(false);
    setIsSearchButtonActive(false);
  }

  function handleCloseSlideMenu() {
    setIsSlideMenuOpen(false);
    disableAllMenuButtons();
  }

  function handleOpenSlideMenu(event: React.MouseEvent<HTMLButtonElement>) {
    const buttonName = event.currentTarget.name;

    if (buttonName === 'searchButton') {
      disableAllMenuButtons();
      setIsSearchButtonActive(true);
      setSlideMenuContent(<SearchMenu />);
    } else if (buttonName === 'saveButton' || isChosenObjPicked) {
      disableAllMenuButtons();
      setIsSaveButtonActive(true);
      setSlideMenuContent(<SaveMenu />);
    }

    setIsSlideMenuOpen(true);
  }

  return (
    <menu className="nav-menu">
      <div className="static-menu">
        <div className="top-button-container">
          <img src={images.logo} className="menu-item logo-img" alt="App logo" />
          <button
            name="searchButton"
            onClick={handleOpenSlideMenu}
            className={
              isSearchButtonActive
                ? 'active-menu-button menu-item'
                : 'menu-button search-button menu-item'
            }
          >
            <div className="img-container">
              <img
                src={isSearchButtonActive ? images.activeSearch : images.search}
                className="menu-img"
                alt=""
              />
            </div>
          </button>
          <button
            name="saveButton"
            onClick={handleOpenSlideMenu}
            className={
              isSaveButtonActive
                ? 'active-menu-button menu-item'
                : 'menu-button saved-button menu-item'
            }
          >
            <div className="img-container">
              <img
                src={isSaveButtonActive ? images.activeSave : images.save}
                className="menu-img"
                alt=""
              />
            </div>
          </button>
        </div>
        <button className="menu-button sing-button menu-item ">
          <div className="img-container">
            <img src={singOut} className="user-img" alt="" />
          </div>
        </button>
      </div>
      <SlideMenu
        isOpen={isSlideMenuOpen}
        content={slideMenuContent}
        handleCloseMenu={handleCloseSlideMenu}
      />
    </menu>
  );
};

export default MenuBar;
