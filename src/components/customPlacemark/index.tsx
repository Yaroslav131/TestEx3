import { YMaps, Map, Placemark, Circle } from '@pbe/react-yandex-maps';

import './styles.css'

interface IProps {
    iconImageHref: string
    markCoords: [number, number]
}

const CustomPlacemark = (props: IProps) => {
    const placemarkOptions = {
        iconLayout: 'default#image',
        iconImageHref: props.iconImageHref,
        iconImageSize: [32, 32], // размеры изображения в пикселях
        iconImageOffset: [-16, -16], // смещение изображения относительно точки на карте
    };
    return (
        <Placemark
            geometry={props.markCoords}
            options={
                placemarkOptions
            }
        />
    );
};

export default CustomPlacemark;