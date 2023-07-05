import React from 'react';
import { Placemark } from '@pbe/react-yandex-maps';

import { useAppDispatch } from '@store/hooks';
import { pickChosenObj } from '@store/slices/isChosenObjPickedSlice';

interface GeoMarkerProps {
  objectId: number;
  imageIconHref: string;
  markCoords: [number, number];
}

const GeoMarker: React.FC<GeoMarkerProps> = ({
  objectId,
  imageIconHref,
  markCoords,
}) => {

  const dispatch = useAppDispatch();

  const handlePlacemarkClick = () => {
    dispatch(pickChosenObj(objectId));
  };

  const placemarkOptions = {
    iconLayout: 'default#image',
    iconImageHref: imageIconHref,
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

export default GeoMarker;
