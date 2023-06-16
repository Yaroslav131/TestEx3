import { useState } from 'react';

import logo from "../../assets/imgs/logo.svg"
import save from "../../assets/imgs/save.svg"
import search from "../../assets/imgs/search.svg"
import singOut from "../../assets/imgs/singOut.svg"
import SlideMenu from '../slideMenu';

import './styles.css'

export default function MenuBar() {
    const [isOpenSlideMenu, SetISCloseSlideMenu] = useState(false)
    const [slideMenuСontent, SetSlideMenuСontent] = useState(<div></div>)

    function onCloseSlideMenuClick() {
        SetISCloseSlideMenu(false)
    }

    function onSlideMenuOpen(event: any) {
        SetISCloseSlideMenu((true))

        let buttonName = (event?.target as HTMLButtonElement).name

        if (buttonName == "searchButton") {
            SetSlideMenuСontent(<></>)
        }
        else (buttonName == "saveButton")
        {
            SetSlideMenuСontent(<></>)
        }
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
                            onClick={onSlideMenuOpen}
                            className="menu-button search-button">
                            <div className="img-container">
                                <img src={search} className="menu-img" alt="" />
                            </div>
                        </button>
                    </div>
                    <div className="container">
                        <button
                            name='saveButton'
                            onClick={onSlideMenuOpen}
                            className="menu-button saved-button">
                            <div className="img-container">
                                <img src={save} className="menu-img" alt="" />
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
                onCloseMenuClick={onCloseSlideMenuClick} />
        </menu>
    )
}
