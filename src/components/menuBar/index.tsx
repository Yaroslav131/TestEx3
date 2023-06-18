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
    const [isOpenSlideMenu, SetIsCloseSlideMenu] = useState(false)
    const [slideMenuСontent, SetSlideMenuСontent] = useState<JSX.Element | null>(null)
    const [isSearchButtonActive, SetIsSearchButtonActive] = useState(false)
    const [isSaveButtonActive, SetIsSaveButtonActive] = useState(false)

    function handleCloseSlideMenu() {
        SetIsCloseSlideMenu(false)
        SetIsSaveButtonActive(false)
        SetIsSearchButtonActive(false)
    }

    function handleSlideMenuOpen(event: React.MouseEvent<HTMLButtonElement>) {
        const buttonName = event.currentTarget.name;

        if (buttonName === "searchButton") {
            SetIsSearchButtonActive(true)
            SetIsSaveButtonActive(false)
            SetSlideMenuСontent(<SearchMenu />);
        } else if (buttonName === "saveButton") {
            SetIsSaveButtonActive(true)
            SetIsSearchButtonActive(false)
            SetSlideMenuСontent(<></>);
        }

        SetIsCloseSlideMenu(true);
    }


    return (
        <menu className="nav-menu">
            <div className='static-menu'>
                <div className='top-button-container'>
                    <div className="container">
                        <img src={logo} className="logo-img" alt="App logo" />
                    </div>
                    <div className="container">
                        <button
                            name='searchButton'
                            onClick={handleSlideMenuOpen}
                            className={isSearchButtonActive ?
                                "active-menu-button" :
                                "menu-button search-button"}>
                            <div className="img-container">
                                <img src={isSearchButtonActive ? activeSearch: search}
                                    className="menu-img" alt="" />
                            </div>
                        </button>
                    </div>
                    <div className="container">
                        <button
                            name='saveButton'
                            onClick={handleSlideMenuOpen}
                            className={isSaveButtonActive ?
                                "active-menu-button" :
                                "menu-button saved-button"}>
                            <div className="img-container">
                                <img src={isSaveButtonActive ? activeSave: save}

                                className="menu-img"
                                    alt="" />
                            </div>
                        </button>
                    </div>
                </div>
                <div className="container user-container">
                    <button className="menu-button sing-button">
                        <div className="img-container">
                            <img src={singOut} className="user-img" alt="" />
                        </div>
                    </button>
                </div>
            </div>
            <SlideMenu
                isOpen={isOpenSlideMenu}
                content={slideMenuСontent}
                handleCloseSlideMenu={handleCloseSlideMenu} />
        </menu >
    )
}
