import natureIcon from "../../assets/imgs/attractionsIcons/natureIcon.svg";
import variantIcon from "../../assets/imgs/attractionsIcons/variantIcon.svg";
import sportIcon from "../../assets/imgs/attractionsIcons/SportIcon.svg";
import restaurantIcon from "../../assets/imgs/attractionsIcons/restaurantIcon.svg";
import marketIcon from "../../assets/imgs/attractionsIcons/marketIcon.svg";
import industryIcon from "../../assets/imgs/attractionsIcons/industryIcon.svg";
import hostalIcon from "../../assets/imgs/attractionsIcons/hostalIcon.svg";
import historyIcon from "../../assets/imgs/attractionsIcons/historyIcon.svg";
import gasStationIcon from "../../assets/imgs/attractionsIcons/gasStationIcon.svg";
import entertainmentIcon from "../../assets/imgs/attractionsIcons/entertainmentIcon.svg";
import cultureIcon from "../../assets/imgs/attractionsIcons/cultureIcon.svg";
import coffeeIcon from "../../assets/imgs/attractionsIcons/coffeeIcon.svg";
import carIcon from "../../assets/imgs/attractionsIcons/carIcon.svg";
import bicycleIcon from "../../assets/imgs/attractionsIcons/bicycleIcon.svg";
import bankIcon from "../../assets/imgs/attractionsIcons/bankIcon.svg";
import architectureIcon from "../../assets/imgs/attractionsIcons/architectureIcon.svg";
import eighteenPlusIcon from "../../assets/imgs/attractionsIcons/18+Icon.svg";
import otherIcon from "../../assets/imgs/attractionsIcons/otherIcon.svg";


interface ISeachOption {
    optionIcon: string,
    value: string,
    description: string
}

const attractions :ISeachOption[]= [
    { optionIcon: natureIcon, value: "nature", description: "Природа, парки" },
    { optionIcon: variantIcon, value: "religion", description: "Религия" },
    { optionIcon: sportIcon, value: "sport", description: "Спортивные центры" },
    { optionIcon: restaurantIcon, value: "restaurant", description: "Рестораны" },
    { optionIcon: marketIcon, value: "market", description: "Магазины" },
    { optionIcon: industryIcon, value: "industry", description: "Промышленность" },
    { optionIcon: hostalIcon, value: "hotel", description: "Отель" },
    { optionIcon: historyIcon, value: "history", description: "История" },
    { optionIcon: gasStationIcon, value: "gasStation", description: "Заправка" },
    { optionIcon: entertainmentIcon, value: "entertainment", description: "Развлечения" },
    { optionIcon: cultureIcon, value: "culture", description: "Культура" },
    { optionIcon: coffeeIcon, value: "coffee", description: "Кофе" },
    { optionIcon: carIcon, value: "car", description: "Каршеринг" },
    { optionIcon: bicycleIcon, value: "bicycle", description: "Прокат велосипедов" },
    { optionIcon: bankIcon, value: "bank", description: "Банки" },
    { optionIcon: architectureIcon, value: "architecture", description: "Архитектура" },
    { optionIcon: eighteenPlusIcon, value: "18+", description: "18+" },
    { optionIcon: otherIcon, value: "other", description: "Другое" }
  ];

// вынести пути в .env
// не работает require 

export default attractions;

