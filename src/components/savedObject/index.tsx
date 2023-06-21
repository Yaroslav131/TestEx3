import play from "../../assets/imgs/play.svg"
import activeSave from "../../assets/imgs/activeSave.svg"
import { useAppDispatch } from "../../store/hooks";
import { pickChosenObj } from "../../store/slices/isChosenObjPickedSlice";

import './style.css'

function SavedObject() {
    const dispatch = useAppDispatch();

    const handleOpenObjectClick = () => {
        dispatch(pickChosenObj())
    };

    return (
        <div className="saved-object-contater">
            <div className='img-title-container'>
                <div className='object-img-container'>
                    <img src={""} alt="" />
                </div>
                <div className='title-container'>
                    <h2 className='object-title'>Палац культуры</h2>
                </div>
            </div>
            <div className='description-container'>
                <p className='description'>7.	Добавьте возможность отображения маршрута.</p>
            </div>
            <div className='buttons-container'>
                <button className='delete-button'>
                    <img className="delete-button-img" src={activeSave} alt="" />
                </button>

                <button onClick={handleOpenObjectClick} className='to-object-button'>
                    <img className='to-object-button-img' src={play} alt="" />
                </button>
            </div>
        </div>
    );
}

export default SavedObject;