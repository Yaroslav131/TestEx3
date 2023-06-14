import MapComponent from '../map/Map'
import MenuBar from '../menubar/Menubar'
import './mainPage.css'

function MainPage() {
    return (
        <div  className='main-page'>
            <MenuBar></MenuBar>
            <MapComponent />
        </div>
    )
}

export default MainPage
