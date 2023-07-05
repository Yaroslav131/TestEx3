import { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import { toast } from 'react-toastify';

import images from '@/images';
import SlideMenu from './SlideMenu';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { closeChosenObj } from '@store/slices/isChosenObjPickedSlice';
import IActiveButtons from '@customTypes/IActiveButtons';

import './styles.css';
import AuthButton from './AuthButton';
import { UserAppeals } from '@/config';

const MenuBar = () => {
  const [isSlideMenuOpen, setIsSlideMenuOpen] = useState(false);
  const [activeButtons, setActiveButtons] = useState<IActiveButtons>({
    activeButtons: {
      searchButton: false,
      saveButton: false
    }
  });
  const [user, setUser] = useState<firebase.User | null>(null);

  const dispatch = useAppDispatch();

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
      setActiveButtons({
        activeButtons: {
          searchButton: false,
          saveButton: true
        }
      })
      setIsSlideMenuOpen(true);
    }
  }, [isChosenObjPicked[0]]);

  function disableAllMenuButtons() {
    setActiveButtons({
      activeButtons: {
        searchButton: false,
        saveButton: false
      }
    })
  }

  function handleCloseSlideMenu() {
    setIsSlideMenuOpen(false);
    disableAllMenuButtons();
  }

  function handleOpenSlideMenu(event: React.MouseEvent<HTMLButtonElement>) {
    const buttonName = event.currentTarget.name;

    if (buttonName === 'searchButton') {
      if (activeButtons.activeButtons.searchButton) {
        disableAllMenuButtons();
        setIsSlideMenuOpen(false);
      }
      else {
        disableAllMenuButtons();
        setActiveButtons({
          activeButtons: {
            searchButton: true,
            saveButton: false
          }
        })
        setIsSlideMenuOpen(true);
      }

    } else if (buttonName === 'saveButton' || isChosenObjPicked) {
      if (user) {
        if (activeButtons.activeButtons.saveButton) {
          disableAllMenuButtons();
          setIsSlideMenuOpen(false);
          dispatch(closeChosenObj());
        }
        else {
          disableAllMenuButtons();
          setActiveButtons({
            activeButtons: {
              searchButton: false,
              saveButton: true
            }
          })
          setIsSlideMenuOpen(true);
        }
      }
      else {
        disableAllMenuButtons();
        toast.error(UserAppeals.FirstAuth)
      }
    }
  }

  return (
    <menu className="nav-menu">
      <div className="static-menu">
        <div className="top-button-container">
          <img src={images.logo} className="menu-button menu-item" alt="App logo" />
          <button
            name="searchButton"
            onClick={handleOpenSlideMenu}
            className={
              activeButtons.activeButtons.searchButton
                ? 'active-menu-button menu-item'
                : 'menu-button search-button menu-item'
            }
          >
            <img
              src={activeButtons.activeButtons.searchButton ? images.activeSearch : images.search}
              className="menu-img"
              alt="search button"
            />
          </button>
          <button
            name="saveButton"
            onClick={handleOpenSlideMenu}
            className={
              activeButtons.activeButtons.saveButton
                ? 'active-menu-button menu-item'
                : 'menu-button saved-button menu-item'
            }
          >
            <img
              src={activeButtons.activeButtons.saveButton ? images.activeSave : images.save}
              className="menu-img"
              alt="save button"
            />
          </button>
        </div>
        <AuthButton handleCloseSlideMenu={handleCloseSlideMenu} />
      </div>
      <SlideMenu
        activeButtons={activeButtons}
        isOpen={isSlideMenuOpen}
      />
    </menu>
  );
};

export default MenuBar;
