import './styles.css'

interface Iprops {
    isOpen: boolean,
    content: JSX.Element | null
    handleCloseSlideMenu: () => void
}

function SlideMenu({ isOpen, content, handleCloseSlideMenu }: Iprops) {
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