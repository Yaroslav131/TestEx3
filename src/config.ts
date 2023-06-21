import natureIcon from "./assets/imgs/attractionsIcons/natureIcon.svg";
import variantIcon from "./assets/imgs/attractionsIcons/variantIcon.svg";
import sportIcon from "./assets/imgs/attractionsIcons/SportIcon.svg";
import restaurantIcon from "./assets/imgs/attractionsIcons/restaurantIcon.svg";
import marketIcon from "./assets/imgs/attractionsIcons/marketIcon.svg";
import industryIcon from "./assets/imgs/attractionsIcons/industryIcon.svg";
import hostalIcon from "./assets/imgs/attractionsIcons/hostalIcon.svg";
import historyIcon from "./assets/imgs/attractionsIcons/historyIcon.svg";
import gasStationIcon from "./assets/imgs/attractionsIcons/gasStationIcon.svg";
import entertainmentIcon from "./assets/imgs/attractionsIcons/entertainmentIcon.svg";
import cultureIcon from "./assets/imgs/attractionsIcons/cultureIcon.svg";
import coffeeIcon from "./assets/imgs/attractionsIcons/coffeeIcon.svg";
import carIcon from "./assets/imgs/attractionsIcons/carIcon.svg";
import bicycleIcon from "./assets/imgs/attractionsIcons/bicycleIcon.svg";
import bankIcon from "./assets/imgs/attractionsIcons/bankIcon.svg";
import architectureIcon from "./assets/imgs/attractionsIcons/architectureIcon.svg";
import eighteenPlusIcon from "./assets/imgs/attractionsIcons/18+Icon.svg";
import other from "./assets/imgs/attractionsIcons/otherIcon.svg";

interface ISeachOption {
    tag: string
    description: string
}

export const seachOptions: ISeachOption[] = [
    { tag: '"leisure"="park"', description: "Природа, парки" },
    { tag: '"amenity"="place_of_worship"', description: "Религия" },
    { tag: "sport", description: "Спортивные центры" },
    { tag: "amenity=restaurant", description: "Рестораны" },
    { tag: "shop=supermarket", description: "Магазины" },
    { tag: "industrial", description: "Промышленность" },
    { tag: "tourism=hotel", description: "Отель" },
    { tag: "historic=monument", description: "История" },
    { tag: "amenity=fuel", description: "Заправка" },
    { tag: "leisure", description: "Развлечения" },
    { tag: "amenity=arts_centre", description: "Культура" },
    { tag: "amenity=cafe", description: "Кофе" },
    { tag: "amenity=car_rental", description: "Каршеринг" },
    { tag: 'amenity=bicycle_rental', description: 'Прокат велосипедов' },
    { tag: "amenity=bank", description: "Банки" },
    { tag: "historic=architectural", description: "Архитектура" },
    { tag: "stripclub", description: "18+" },
];
interface IGeoIcon {
    tag: string
    optionIcon: string,
}

export const geoIcons: IGeoIcon[] = [
    { optionIcon: natureIcon, tag: '"leisure"="park"' },
    { optionIcon: variantIcon, tag: '"amenity"="place_of_worship"' },
    { optionIcon: sportIcon, tag: "sport" },
    { optionIcon: restaurantIcon, tag: "amenity=restaurant" },
    { optionIcon: marketIcon, tag: "shop=supermarket" },
    { optionIcon: industryIcon, tag: "industrial" },
    { optionIcon: hostalIcon, tag: "tourism=hotel" },
    { optionIcon: historyIcon, tag: "historic=monument" },
    { optionIcon: gasStationIcon, tag: "amenity=fuel" },
    { optionIcon: entertainmentIcon, tag: "leisure" },
    { optionIcon: cultureIcon, tag: "amenity=arts_centre" },
    { optionIcon: coffeeIcon, tag: "amenity=cafe" },
    { optionIcon: carIcon, tag: "amenity=car_rental" },
    { optionIcon: bicycleIcon, tag: 'amenity=bicycle_rental' },
    { optionIcon: bankIcon, tag: "amenity=bank" },
    { optionIcon: architectureIcon, tag: "historic=architectural" },
    { optionIcon: eighteenPlusIcon, tag: "stripclub" },
    { optionIcon: other, tag: "search" },
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
    'stripclub'
]

export const userSearchTag="search"