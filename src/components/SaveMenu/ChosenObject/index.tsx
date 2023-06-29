import { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';

import activeSaveIcon from '../../../assets/images/activeSave.svg';
import palceholderImg from '../../../assets/images/imagePlaceholder.png';
import play from '../../../assets/images/play.svg';
import { useAppDispatch } from '../../../store/hooks';
import { closeChosenObj } from '../../../store/slices/isChosenObjPickedSlice';
import IGeoObject from '../../../types/IGeoObject';
import { getObjectById } from '../../../api/overpassApi';
import { useAppSelector } from '../../../store/hooks';

import './styles.css';
import ChosenObjectSkeleton from "./Skeleton";
import { RouteButton } from './RouteButton';

interface IProps {
  savedObjectsId: number[]
  handleSaveObject: (id: number) => void
  handleDeleteObject: (id: number) => void
}

const ChosenObject = ({ savedObjectsId, handleDeleteObject, handleSaveObject }: IProps) => {
  const isChosenObjPicked = useAppSelector(
    (state) => state.isChosenObjPicked.value
  );

  const [isSaveObject, setIsSaveObject] = useState(false)
  const [user, setUser] = useState<firebase.User | null>(null);
  const [chosenObject, setChosenObject] = useState<IGeoObject | null>(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    if (savedObjectsId.includes(chosenObject?.id!)) {
      setIsSaveObject(true);
    } else {
      setIsSaveObject(false);
    }
  }, [chosenObject, savedObjectsId]);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  function handleDeleteClick() {
    handleDeleteObject(chosenObject?.id!)
    setIsSaveObject(false)
  }

  function handleSaveClick() {
    handleSaveObject(chosenObject?.id!)
    setIsSaveObject(true)
  }

  const dispatch = useAppDispatch();
  const handleBackClick = () => {
    dispatch(closeChosenObj());
  };

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(async () => {
      async function handleChooseObject() {
        if (isChosenObjPicked[0]) {
          const geoObjects = await getObjectById([isChosenObjPicked[1]!]);
          setChosenObject(geoObjects[0]);
        }
      }

      handleChooseObject();

      setIsLoading(false);
    }, 0);

    return () => clearTimeout(timer);
  }, [isChosenObjPicked]);

  return (
    <>
      {isLoading ? (
        <ChosenObjectSkeleton />
      ) : (
        <>
          <div className="chose-object-title" id={!user ? "disable-item" : ""}>
            <button onClick={handleBackClick} className="back-save-button">
              <img className="back-button-img" src={play} alt="назад" />
            </button>
            <h2 className="option-title">Избранное</h2>
          </div>
          <div className="chosen-object-container">
            <div className="chosen-object-img-container">
              <img className='chosen-object-img' src={palceholderImg} alt="Chosen Object" />
            </div>
            <div>
              <div className="title-container">
                <h2 className="object-title">
                  {chosenObject?.name ? chosenObject.name : "Без названия"}
                </h2>
              </div>

              <div className="chosen-description-container">
                <p className="description">
                  {`Описание: ${chosenObject?.description ? chosenObject.description : "не указано"
                    }`}
                </p>
                <p className="description">
                  {`Телефон: ${chosenObject?.phone ? chosenObject.phone : "не указан"}`}
                </p>
                <p className="description">
                  {`Адрес: ${chosenObject?.adress ? chosenObject.adress : "не указан"}`}
                </p>

                <p className="description">
                  <span>Сайт: {chosenObject?.website ? <a href={chosenObject.website}></a> : "не указан"} </span>
                </p>
              </div>
            </div>
            <div className="chosen-buttons-container">

              <button id={!user ? "disable-item" : ""}
                onClick={isSaveObject ? handleDeleteClick : handleSaveClick}
                className={isSaveObject ? "chosen-save-button save" :
                  "chosen-save-button not-save"}>
                <img className="save-button-img" src={activeSaveIcon} alt="Save Icon" />
                <span className={isSaveObject ? "save-span" : "none-save-span"}>Сохранено</span>
              </button>

              <RouteButton chosenObject={chosenObject} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ChosenObject;
