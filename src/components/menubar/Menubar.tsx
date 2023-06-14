import './menubar.css'
import logo from "../../assets/icons/logo.svg"
import save from "../../assets/save.svg"
import search from "../../assets/search.svg"
import singOut from "../../assets/singOut.svg"


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
                    <img src={singOut} className="user-img" alt="" />
                </button></div>
        </menu>
    )
}