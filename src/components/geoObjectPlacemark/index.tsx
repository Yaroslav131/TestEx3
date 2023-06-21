import React from 'react';
import { Placemark } from '@pbe/react-yandex-maps';

import { useAppDispatch } from "../../store/hooks";
import { pickChosenObj } from "../../store/slices/isChosenObjPickedSlice";

import './styles.css';

interface IProps {
    objectId: number
    iconImageHref: string;
    markCoords: [number, number];
}

const GeoObjectPlacemark: React.FC<IProps> = (props) => {
    const dispatch = useAppDispatch();

    const handlePlacemarkClick = () => {
        dispatch(pickChosenObj())
    };

    const placemarkOptions = {
        iconLayout: 'default#image',
        iconImageHref: props.iconImageHref,
        iconImageSize: [32, 32],
        iconImageOffset: [-16, -16],
    };

    return (
        <div id={`${props.objectId}`}>
            <Placemark
                geometry={props.markCoords}
                options={placemarkOptions}
                onClick={handlePlacemarkClick}
            />
        </div>
    );
};

export default GeoObjectPlacemark;