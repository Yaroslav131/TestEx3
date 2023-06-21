import { useAppDispatch } from "../../store/hooks";
import { closeChosenObj } from "../../store/slices/isChosenObjPickedSlice";

import './styles.css'

interface Iprops {
    isOpen: boolean,
    content: JSX.Element | null
    handleCloseMenu: () => void
}

function SlideMenu({ isOpen, content, handleCloseMenu }: Iprops) {
    const dispatch = useAppDispatch()

    function handleCloseSlideMenu() {
        dispatch(closeChosenObj())

        handleCloseMenu()
    }

    return (
        <div className={isOpen ? "side-menu" : "close-side-menu"}>
            <div className="main-container">
                {content}
            </div>
            <div className="uvula-container">
                <button onClick={handleCloseSlideMenu} className="uvula" />
            </div>
        </div>
    );
}

export default SlideMenu;