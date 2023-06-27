import { useState, useEffect } from "react"

import { auth } from '../../firebase';
import activeSaveIcon from '../../assets/imgs/activeSave.svg';
import wayIcon from '../../assets/imgs/way.svg';
import palceholderImg from '../../assets/imgs/imagePlaceholder.png';
import IGeoObject from '../../types/IGeoObject';
import firebase from 'firebase/compat/app';

import './styles.css';

interface IProps {
  chosenObject: IGeoObject | null
  isSave: boolean
  handleSaveObject: (id: number) => void
  handleDeleteObject: (id: number) => void
}

const ChosenObject = ({ chosenObject, isSave, handleDeleteObject, handleSaveObject }: IProps) => {
  const [isSaveObject, setIsSaveObject] = useState(isSave)
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    setIsSaveObject(isSave);
  }, [isSave]);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);


  useEffect(() => {
    setIsSaveObject(isSave);
  }, [isSave]);

  function handleDeleteClick() {
    handleDeleteObject(chosenObject?.id!)
    setIsSaveObject(false)
  }

  function handleSaveClick() {
    handleSaveObject(chosenObject?.id!)
    setIsSaveObject(true)
  }

  return (
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

        <div className="description-container">
          <p className="description">
            {`Описание: ${chosenObject?.description ? chosenObject.description : " не указано"}`}
          </p>
          <p className="description">
            {`Телефон: ${chosenObject?.phone ? chosenObject.phone : " не указан"}`}
          </p>
          <p className="description">
            {`Адрес: ${chosenObject?.adress ? chosenObject.adress : " не указан"}`}
          </p>

          <p className="description">
            <span>Сайт: {chosenObject?.website ? <a href={chosenObject.website}></a> : "не указан"} </span>
          </p>
        </div>
      </div>
      <div className="chosen-buttons-container">

        <button id={!user ? "disable-save-button" : ""}
          onClick={isSaveObject ? handleDeleteClick : handleSaveClick}
          className={isSaveObject ? "chosen-save-button save" :
            " chosen-save-button not-save "}>
          <img className="save-button-img" src={activeSaveIcon} alt="Save Icon" />
          <span className={isSaveObject ? "save-span" : "none-save-span"}>Сохранено</span>
        </button>

        <button className="way-button">
          <img className="way-button-img" src={wayIcon} alt="Way Icon" />
          <span className="way-span">Маршрут</span>
        </button>
      </div>
    </div >
  );
};

export default ChosenObject;
