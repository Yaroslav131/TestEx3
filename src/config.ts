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

interface ISeachOption {
    tag: string
    optionIcon: string,
    description: string
}

export const attractionsOptions: ISeachOption[] = [
    { optionIcon: natureIcon, tag: `"leisure"="park"`, description: "Природа, парки" },
    { optionIcon: variantIcon, tag: `"amenity"="place_of_worship"`, description: "Религия" },
    { optionIcon: sportIcon, tag: "sport", description: "Спортивные центры" },
    { optionIcon: restaurantIcon, tag: "amenity=restaurant", description: "Рестораны" },
    { optionIcon: marketIcon, tag: "shop=supermarket", description: "Магазины" },
    { optionIcon: industryIcon, tag: "industrial", description: "Промышленность" },
    { optionIcon: hostalIcon, tag: "tourism=hotel", description: "Отель" },
    { optionIcon: historyIcon, tag: "historic=monument", description: "История" },
    { optionIcon: gasStationIcon, tag: "amenity=fuel", description: "Заправка" },
    { optionIcon: entertainmentIcon, tag: "leisure", description: "Развлечения" },
    { optionIcon: cultureIcon, tag: "amenity=arts_centre", description: "Культура" },
    { optionIcon: coffeeIcon, tag: "amenity=cafe", description: "Кофе" },
    { optionIcon: carIcon, tag: "amenity=car_rental", description: "Каршеринг" },
    { optionIcon: bicycleIcon, tag: 'amenity=bicycle_rental', description: 'Прокат велосипедов' },
    { optionIcon: bankIcon, tag: "amenity=bank", description: "Банки" },
    { optionIcon: architectureIcon, tag: "historic=architectural", description: "Архитектура" },
    { optionIcon: eighteenPlusIcon, tag: "stripclub", description: "18+" },
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

