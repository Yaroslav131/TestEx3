import activeSave from "../../assets/imgs/activeSave.svg"
import way from "../../assets/imgs/way.svg"

import './styles.css'

function ChosenObject() {
    return (
        <div className="chosen-object-contater">
            <div className='chosen-object-img-container'>
                <img src={""} alt="" />
            </div>
            <div>
                <div className='title-container'>
                    <h2 className='object-title'>Палац культуры</h2>
                </div>

                <div className='description-container'>
                    <p className='description'>7.	Добавьте возможность отображения маршрута.</p>
                </div>
            </div>
            <div className='chosen-buttons-container'>
                <button className='save-button'>
                    <img className="save-button-img" src={activeSave} alt="" />
                    <span className="save-span">Сохранено</span>
                </button>

                <button className='way-button'>
                    <img className='way-button-img' src={way} alt="" />
                    <span className="way-span">Маршрут</span>
                </button>
            </div>
        </div>);
}

export default ChosenObject;