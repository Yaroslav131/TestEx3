import { createContext } from "react";
import images from "./images";
interface ISeachOption {
  tag: string;
  description: string;
}

export const seachOptions: ISeachOption[] = [
  { tag: '"leisure"="park"', description: 'Природа, парки' },
  { tag: '"amenity"="place_of_worship"', description: 'Религия' },
  { tag: 'sport', description: 'Спортивные центры' },
  { tag: 'amenity=restaurant', description: 'Рестораны' },
  { tag: 'shop=supermarket', description: 'Магазины' },
  { tag: 'industrial', description: 'Промышленность' },
  { tag: 'tourism=hotel', description: 'Отель' },
  { tag: 'historic=monument', description: 'История' },
  { tag: 'amenity=fuel', description: 'Заправка' },
  { tag: 'leisure', description: 'Развлечения' },
  { tag: 'amenity=arts_centre', description: 'Культура' },
  { tag: 'amenity=cafe', description: 'Кофе' },
  { tag: 'amenity=car_rental', description: 'Каршеринг' },
  { tag: 'amenity=bicycle_rental', description: 'Прокат велосипедов' },
  { tag: 'amenity=bank', description: 'Банки' },
  { tag: 'historic=architectural', description: 'Архитектура' },
  { tag: 'stripclub', description: '18+' },
];
interface IGeoIcon {
  tag: string;
  optionIcon: string;
}

export const geoIcons: IGeoIcon[] = [
  { optionIcon: images.natureIcon, tag: '"leisure"="park"' },
  { optionIcon: images.variantIcon, tag: '"amenity"="place_of_worship"' },
  { optionIcon: images.sportIcon, tag: 'sport' },
  { optionIcon: images.restaurantIcon, tag: 'amenity=restaurant' },
  { optionIcon: images.marketIcon, tag: 'shop=supermarket' },
  { optionIcon: images.industryIcon, tag: 'industrial' },
  { optionIcon: images.hostalIcon, tag: 'tourism=hotel' },
  { optionIcon: images.historyIcon, tag: 'historic=monument' },
  { optionIcon: images.gasStationIcon, tag: 'amenity=fuel' },
  { optionIcon: images.entertainmentIcon, tag: 'leisure' },
  { optionIcon: images.cultureIcon, tag: 'amenity=arts_centre' },
  { optionIcon: images.coffeeIcon, tag: 'amenity=cafe' },
  { optionIcon: images.carIcon, tag: 'amenity=car_rental' },
  { optionIcon: images.bicycleIcon, tag: 'amenity=bicycle_rental' },
  { optionIcon: images.bankIcon, tag: 'amenity=bank' },
  { optionIcon: images.architectureIcon, tag: 'historic=architectural' },
  { optionIcon: images.eighteenPlusIcon, tag: 'stripclub' },
  { optionIcon: images.otherIcon, tag: 'search' },
];

export const attractionsTags = [
  '"leisure"="park"',
  '"amenity"="place_of_worship"',
  'sport',
  'amenity=restaurant',
  'shop=supermarket',
  'industrial',
  'tourism=hotel',
  'historic=monument',
  'amenity=fuel',
  'leisure',
  'amenity=arts_centre',
  'amenity=cafe',
  'amenity=car_rental',
  'amenity=bicycle_rental',
  'amenity=bank',
  'historic=architectural',
  'stripclub',
];

export const userSearchTag = 'search';

export const userPlacemarkOptions = {
  iconLayout: 'default#image',
  iconImageHref: images.userMark,
  iconImageSize: [32, 32],
  iconImageOffset: [-16, -16],
};

export const routePlacemarkOptions = {
  iconLayout: 'default#image',
  iconImageHref: images.mapPin,
  iconImageSize: [32, 32],
  iconImageOffset: [-16, -16],
};


export const mapDefaulteCoords = [55.44, 37.36];

export const defaulteRadius = 1000;

export const timeoutDuration = 5000;

interface Context {
  mapRef: React.MutableRefObject<ymaps.Map | undefined> | null,
  routeRef: React.MutableRefObject<ymaps.multiRouter.MultiRoute | undefined> | null,
}

export const MapContext = createContext<Context>(
  {
    mapRef: null,
    routeRef: null
  }
)

export const enum UserAppeals {
  NOUSER = "Пользователя не существует.",
  AbortedRequest = 'Время ожидания запроса истекло. Возможно вы указали слишком большой диапазон поиска. Попробуйте снова.',
  NOOBJECT = "Не удалось найти объект. Попробуйте снова.",
  TryAgain=`Упс, что то пошло не так. Попробуйте снова)`,
  FirstAuth="Сперва вам надо авторизироваться",
  NoGPS=`Нам не удалось получить ваше местоположение. Возможно у ваc отключена геолакация.`
}