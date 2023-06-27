import { useState, useEffect } from 'react';

import SavedObject from '../SavedObject';
import play from '../../assets/imgs/play.svg';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { closeChosenObj } from '../../store/slices/isChosenObjPickedSlice';
import ChosenObject from '../ChosenObject';
import IGeoObject from '../../types/IGeoObject';
import { getObjectById } from '../../api/overpassApi';
import { addUserSavedId, getCurrentUserSavedId, removeUserSavedId } from '../../api/firebaseApi';

import './styles.css';

const SaveMenu = () => {
  const dispatch = useAppDispatch();
  const [savedObjectsId, setSavedObjectsId] = useState<number[]>([]);
  const [chosenObject, setChosenObject] = useState<IGeoObject | null>(null);
  const isChosenObjPicked = useAppSelector(
    (state) => state.isChosenObjPicked.value
  );
  const [savedObjects, setSavedObjects] = useState<JSX.Element[]>([]);
  const [savedMenuContent, setSavedMenuContent] = useState<JSX.Element>(<></>);

  const handleBackClick = () => {
    dispatch(closeChosenObj());
  };

  useEffect(() => {
    async function handleSetSevedObjects() {
      const geoObjects = await getObjectById(savedObjectsId)

      const savedObjects = geoObjects.map((x, index) =>
        <SavedObject handleDeleteObject={handleDeleteObjectId} savedObject={x} key={index} />)
      setSavedObjects(savedObjects)
    }

    handleSetSevedObjects()
  }, [savedObjectsId]);

  useEffect(() => {
    async function fetchDate() {
      const savedId = await getCurrentUserSavedId()

      setSavedObjectsId(savedId)
    }

    fetchDate()
  }, []);


  useEffect(() => {
    async function handleChooseObject() {
      if (isChosenObjPicked[0]) {
        const geoObjects = await getObjectById([isChosenObjPicked[1]!])

        setChosenObject(geoObjects[0])
      }
    }

    handleChooseObject()
  }, [isChosenObjPicked]);

  function handleDeleteObjectId(id: number) {
    setSavedObjectsId(prevSavedObjectsId => {
      const newSavedObjectsId = prevSavedObjectsId.filter(x => x !== id);
      return newSavedObjectsId;
    });

    removeUserSavedId(id)
  }

  function handleSaveObjectId(id: number) {
    setSavedObjectsId(prevSavedObjectsId => {
      const newSavedObjectsId = [...prevSavedObjectsId, id];
      return newSavedObjectsId;
    });

    addUserSavedId(id)
  }

  return (
    <div className="save-menu">
      {isChosenObjPicked[0] ? (
        <>
          <div className="chose-object-title">
            <button onClick={handleBackClick} className="back-save-button">
              <img className="back-button-img" src={play} alt="назад" />
            </button>
            <h2 className="option-title">Избранное</h2>
          </div>
          <ChosenObject
            handleSaveObject={handleSaveObjectId}
            handleDeleteObject={handleDeleteObjectId}
            isSave={savedObjectsId.includes(chosenObject?.id!)}
            chosenObject={chosenObject} />
        </>
      ) : (
        <>
          <h2 className="option-title">Избранное:</h2>
          <div className="saved-contant">{savedObjects}</div>
        </>
      )}
    </div>
  );
}

export default SaveMenu;
