import { useAppDispatch } from '../../../store/hooks';
import { closeChosenObj } from '../../../store/slices/isChosenObjPickedSlice';
import backIcon from '../../../assets/images/play.svg';

import './styles.css';

interface Iprops {
    isOpen: boolean;
    content: JSX.Element | null;
    handleCloseMenu: () => void;
}

const SlideMenu = ({ isOpen, content, handleCloseMenu }: Iprops) => {
    const dispatch = useAppDispatch();

    function handleCloseSlideMenu() {
        dispatch(closeChosenObj());

        handleCloseMenu();
    }

    return (
        <div className={isOpen ? 'side-menu' : 'close-side-menu'}>
            <div className="main-container">{content && content}</div>
            <div className="uvula-container">
                <button onClick={handleCloseSlideMenu} className="uvula">
                    <img src={backIcon} className="uvula-img" alt="Close" />
                </button>
            </div>
        </div>
    );
}

export default SlideMenu;
