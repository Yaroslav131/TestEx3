import play from '../../assets/imgs/play.svg';
import activeSave from '../../assets/imgs/activeSave.svg';
import { useAppDispatch } from '../../store/hooks';
import { pickChosenObj } from '../../store/slices/isChosenObjPickedSlice';
import palceholderImg from '../../assets/imgs/imagePlaceholder.png';

import './style.css';
import IGeoObject from '../../types/IGeoObject';

interface IProps {
  savedObject: IGeoObject | null
  handleDeleteObject: (id: number) => void
}

const SavedObject = ({ savedObject,handleDeleteObject }: IProps) => {
  const dispatch = useAppDispatch();

  const handleOpenObjectClick = () => {
    dispatch(pickChosenObj(savedObject?.id!));
  };

  const handleDeleteClick = () => {
    handleDeleteObject(savedObject?.id!)
  };

  return (
    <div className="saved-object-contater">
      <div className="img-title-container">
        <div className="object-img-container">
          <img className='object-img' src={palceholderImg} alt="" />
        </div>
        <div className="title-container">
          <h2 className="object-title">
            {savedObject?.name ? savedObject.name : "Без названия"}
          </h2>
        </div>
      </div>
      <div className="description-container">
        <p className="description">
          {`Описание: ${savedObject?.description ? savedObject.description : " не указано"}`}
        </p>
      </div>
      <div className="buttons-container">
        <button onClick={handleDeleteClick} className="delete-button">
          <img className="delete-button-img" src={activeSave} alt="" />
        </button>

        <button onClick={handleOpenObjectClick} className="to-object-button">
          <img className="to-object-button-img" src={play} alt="" />
        </button>
      </div>
    </div>
  );
}

export default SavedObject;
