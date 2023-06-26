import React from 'react';
import { Placemark } from '@pbe/react-yandex-maps';

import { useAppDispatch } from '../../store/hooks';
import { pickChosenObj } from '../../store/slices/isChosenObjPickedSlice';

import './styles.css';

interface GeoObjectPlacemarkProps {
  objectId: number;
  iconImageHref: string;
  markCoords: [number, number];
}

const GeoObjectPlacemark: React.FC<GeoObjectPlacemarkProps> = ({
  objectId,
  iconImageHref,
  markCoords,
}) => {

  const dispatch = useAppDispatch();

  const handlePlacemarkClick = () => {
    dispatch(pickChosenObj(objectId));
  };

  const placemarkOptions = {
    iconLayout: 'default#image',
    iconImageHref: iconImageHref,
    iconImageSize: [32, 32],
    iconImageOffset: [-16, -16],
  };

  return (
    <div>
      <Placemark
        geometry={markCoords}
        options={placemarkOptions}
        onClick={handlePlacemarkClick}
      />
    </div>
  );
};

export default GeoObjectPlacemark;
