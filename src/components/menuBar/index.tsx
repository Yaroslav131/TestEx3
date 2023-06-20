import { useState } from 'react';

import logo from "../../assets/imgs/logo.svg"
import save from "../../assets/imgs/save.svg"
import search from "../../assets/imgs/search.svg"
import activeSave from '../../assets/imgs/activeSave.svg'
import activeSearch from '../../assets/imgs/activeSearch.svg'
import singOut from "../../assets/imgs/singOut.svg"
import SlideMenu from '../slideMenu';
import SearchMenu from '../searchMenu';

import './styles.css'

export default function MenuBar() {
    const [isSlideMenuOpen, SetIsSlideMenuOpen] = useState(false)
    const [slideMenuСontent, SetSlideMenuСontent] = useState<JSX.Element | null>(null)
    const [isSearchButtonActive, SetIsSearchButtonActive] = useState(false)
    const [isSaveButtonActive, SetIsSaveButtonActive] = useState(false)

    function handleDisableAllMenuButton() {
        SetIsSaveButtonActive(false)

        SetIsSearchButtonActive(false)
    }

    function handleCloseSlideMenu() {
        SetIsSlideMenuOpen(false)

        handleDisableAllMenuButton()
    }

    function handleSlideMenuOpen(event: React.MouseEvent<HTMLButtonElement>) {
        const buttonName = event.currentTarget.name;

        if (buttonName === "searchButton") {

            handleDisableAllMenuButton();

            SetIsSearchButtonActive(true)

            SetSlideMenuСontent(
                <SearchMenu />);

        } else if (buttonName === "saveButton") {

            handleDisableAllMenuButton();

            SetIsSaveButtonActive(true)

            SetSlideMenuСontent(<></>);
        }

        SetIsSlideMenuOpen(true);
    }

    return (
        <menu className="nav-menu">
            <div className='static-menu'>
                <div className='top-button-container'>
                    <img src={logo} className="menu-item  logo-img" alt="App logo" />
                    <button
                        name='searchButton'
                        onClick={handleSlideMenuOpen}
                        className={isSearchButtonActive ?
                            "active-menu-button menu-item" :
                            "menu-button search-button menu-item"}>
                        <div className="img-container">
                            <img src={isSearchButtonActive ? activeSearch : search}
                                className="menu-img" alt="" />
                        </div>
                    </button>
                    <button
                        name='saveButton'
                        onClick={handleSlideMenuOpen}
                        className={isSaveButtonActive ?
                            "active-menu-button menu-item" :
                            "menu-button saved-button menu-item"}>
                        <div className="img-container">
                            <img src={isSaveButtonActive ? activeSave : save}
                                className="menu-img"
                                alt="" />
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
                content={slideMenuСontent}
                handleCloseSlideMenu={handleCloseSlideMenu} />
        </menu >
    )
}
