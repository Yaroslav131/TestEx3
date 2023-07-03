import IActiveButtons from '../../../types/IActiveButtons';
import SaveMenu from '../../SaveMenu';
import SearchMenu from '../../SearchMenu';

import './styles.css';

interface Iprops {
    activeButtons: IActiveButtons
    isOpen: boolean;
}

const SlideMenu = ({ isOpen, activeButtons }: Iprops) => {

    const { saveButton, searchButton } = activeButtons.activeButtons
    return (
        <div className={isOpen ? 'side-menu' : 'close-side-menu'}>
            <div className="main-container">
                {searchButton ? <SearchMenu /> : <></>}
                {saveButton ? <SaveMenu /> : <></>}
            </div>

        </div>
    );
}

export default SlideMenu;
