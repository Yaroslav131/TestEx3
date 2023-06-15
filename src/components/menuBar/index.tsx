import logo from "../../assets/imgs/logo.svg"
import save from "../../assetsimgs//save.svg"
import search from "../../assets/imgs/search.svg"
import singOut from "../../assets/imgs/singOut.svg"

import './styles.css'

export default function MenuBar() {
    return (
        <menu className="aside-menu">
            <div className='top-button-container'>
                <div className="container">
                    <img src={logo} className="logo-img" alt="" />
                </div>
                <div className="container">
                    <button className="menu-button search-button">
                        <div className="img-container">
                            <img src={search} className="menu-img" alt="" />
                        </div>
                    </button>
                </div>
                <div className="container">
                    <button className="menu-button saved-button">
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
        </menu>
    )
}