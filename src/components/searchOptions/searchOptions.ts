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

interface ISeachOption {
  theme: string
  optionIcon: string,
  description: string
}

const attractions: ISeachOption[] = [
  { optionIcon: natureIcon, theme: `"leisure"="park"`, description: "Природа, парки" },
  { optionIcon: variantIcon, theme: `"amenity"="place_of_worship"`, description: "Религия" },
  { optionIcon: sportIcon, theme: "sport", description: "Спортивные центры" },
  { optionIcon: restaurantIcon, theme: "amenity=restaurant", description: "Рестораны" },
  { optionIcon: marketIcon, theme: "shop=supermarket", description: "Магазины" },
  { optionIcon: industryIcon, theme: "industrial", description: "Промышленность" },
  { optionIcon: hostalIcon, theme: "tourism=hotel", description: "Отель" },
  { optionIcon: historyIcon, theme: "historic=monument", description: "История" },
  { optionIcon: gasStationIcon, theme: "amenity=fuel", description: "Заправка" },
  { optionIcon: entertainmentIcon, theme: "leisure", description: "Развлечения" },
  { optionIcon: cultureIcon, theme: "amenity=arts_centre", description: "Культура" },
  { optionIcon: coffeeIcon, theme: "amenity=cafe", description: "Кофе" },
  { optionIcon: carIcon, theme: "amenity=car_rental", description: "Каршеринг" },
  { optionIcon: bicycleIcon, theme: 'amenity=bicycle_rental', description: 'Прокат велосипедов' },
  { optionIcon: bankIcon, theme: "amenity=bank", description: "Банки" },
  { optionIcon: architectureIcon, theme: "historic=architectural", description: "Архитектура" },
  { optionIcon: eighteenPlusIcon, theme: "stripclub", description: "18+" },
];


export default attractions;

