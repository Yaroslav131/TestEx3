import { useState, useEffect } from "react";

import SavedObject from "../savedObject";
import play from "../../assets/imgs/play.svg"
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { closeChosenObj } from "../../store/slices/isChosenObjPickedSlice";
import ChosenObject from "../chosenObject";

import "./styles.css"

function SaveMenu() {
    const [sevedObjectsId, SetSevedObjectsId] = useState<number[]>()
    const [sevedObjects, SetSevedObjects] = useState<JSX.Element[]>([<SavedObject />])
    const isChosenObjPicked = useAppSelector((state) => state.isChosenObjPicked.value);

    const dispatch = useAppDispatch();

    const handleBackClick = () => {
        dispatch(closeChosenObj())
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                // запрос к бд за id
                // запос к оверпас по id
                //создание плиточек
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData()
    }, [sevedObjectsId])

    return (
        <div className="save-menu">
            {isChosenObjPicked ?
                <>
                    <div className="chose-object-title">
                        <button onClick={handleBackClick} className="back-save-button">
                            <img className='back-button-img' src={play} alt="" />
                        </button>
                        <h2 className="option-title">Избранное</h2>
                    </div>
                    {<ChosenObject />}
                </>
                :
                <>
                    <h2 className="option-title">Избранное:</h2>
                    <div className="saved-contant">
                        {sevedObjects}
                    </div>
                </>
            }
        </div>
    );
}

export default SaveMenu;