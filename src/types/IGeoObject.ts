export default interface IGeoObject {
  iconImgHref: string;
  id: number;
  lat: number;
  lon: number;
  name: string;
  tag: string | null;
  tourism: string | null;
  website: string | null;
  phone: string | null;
  adress: string | null;
  description: string | null;
}
