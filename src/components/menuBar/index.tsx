import { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';

import images from '../../images';
import SlideMenu from './SlideMenu';
import SearchMenu from '../SearchMenu';
import { useAppSelector } from '../../store/hooks';
import SaveMenu from '../SaveMenu';

import './styles.css';
import AuthButton from './AuthButton/indexx';
import { toast } from 'react-toastify';

const MenuBar = () => {
  const [isSlideMenuOpen, setIsSlideMenuOpen] = useState(false);
  const [slideMenuContent, setSlideMenuContent] = useState<JSX.Element | null>(null);
  const [isSearchButtonActive, setIsSearchButtonActive] = useState(false);
  const [isSaveButtonActive, setIsSaveButtonActive] = useState(false);
  const [user, setUser] = useState<firebase.User | null>(null);

  const isChosenObjPicked = useAppSelector(
    (state) => state.isChosenObjPicked.value
  );

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

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
      setIsSlideMenuOpen(true);
    } else if (buttonName === 'saveButton' || isChosenObjPicked) {
      if (user) {
        disableAllMenuButtons();
        setIsSaveButtonActive(true);
        setSlideMenuContent(<SaveMenu />);
        setIsSlideMenuOpen(true);
      }
      else
      {
        disableAllMenuButtons();
        toast.error("Сперва вам надо авторизироваться")
      }
    }
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
            <img
              src={isSearchButtonActive ? images.activeSearch : images.search}
              className="menu-img"
              alt=""
            />
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
            <img
              src={isSaveButtonActive ? images.activeSave : images.save}
              className="menu-img"
              alt=""
            />
          </button>
        </div>
        <AuthButton handleCloseSlideMenu={handleCloseSlideMenu} />
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
