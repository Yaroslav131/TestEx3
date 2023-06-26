import MapComponent from '../../components/Map';
import MenuBar from '../../components/MenuBar';

import './styles.css';

const MainPage = () => {
  return (
    <div className="main-page">
      <MenuBar />
      <MapComponent />
    </div>
  );
}

export default MainPage;
