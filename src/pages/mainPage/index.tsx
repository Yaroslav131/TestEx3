import MapComponent from '../../components/map'
import MenuBar from '../../components/menuBar'

import './styles.css'

function MainPage() {
    return (
        <div  className='main-page'>
            <MenuBar></MenuBar>
            <MapComponent />
        </div>
    )
}

export default MainPage
