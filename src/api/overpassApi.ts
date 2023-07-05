import { toast } from 'react-toastify';

import IGeoObject from '@customTypes/IGeoObject';
import { UserAppeals, geoIcons, timeoutDuration } from '@/config';

export async function getGeoObjectByName(
  name: string,
  tag: string
): Promise<IGeoObject[]> {
  const geoObjects: IGeoObject[] = [];

  const geoObjectsData = await fetchOverpassApiDataByNameAddress(name);

  if (geoObjectsData) {
    const mappedGeoObjects = parseToGeoObjects(geoObjectsData, tag);
    geoObjects.push(...mappedGeoObjects);
  }

  toast.success(`Найдено ${geoObjects.length} объектов.`);

  return geoObjects;
}

export async function getGeoObjectById(
  ids: number[]
): Promise<IGeoObject[]> {
  const geoObjects: IGeoObject[] = [];

  for (const id of ids) {
    const geoObjectsData = await fetchOverpassApiDataById(id);
    if (geoObjectsData) {
      const mappedGeoObjects = parseToGeoObjects(geoObjectsData, "");
      geoObjects.push(...mappedGeoObjects);
    }
  }

  return geoObjects;
}

export async function getGeoObjectByTags(
  tags: string[],
  userCoords: [number, number],
  searchRadius: number
): Promise<IGeoObject[]> {
  const geoObjects: IGeoObject[] = [];

  const [latitude, longitude] = userCoords;

  for (const tag of tags) {
    try {
      const geoObjectsData = await fetchOverpassApiDataByLocation(
        tag,
        searchRadius,
        latitude,
        longitude
      );
      if (geoObjectsData) {
        const mappedGeoObjects = parseToGeoObjects(geoObjectsData, tag);
        geoObjects.push(...mappedGeoObjects);
      }

    }
    catch (error: unknown) {
      if ((error as Error).name === 'AbortError') {
        toast.error(UserAppeals.AbortedRequest);
        return geoObjects;
      } else {
        toast.error(UserAppeals.NOOBJECT);
      }
    }

  }

  toast.success(`Найдено ${geoObjects.length} объектов.`);
  return geoObjects;
}

function parseToGeoObjects(geoObjects: IGeoObject[], tag: string): IGeoObject[] {
  return geoObjects.map((x: any) => {
    const img = geoIcons.find((x) => x.tag == tag)?.optionIcon || '';

    return {
      iconImgHref: img,
      id: x.id,
      lat: x.lat,
      lon: x.lon,
      name: x.tags.name,
      tag,
      tourism: x.tags.tourism,
      website: x.tags.website,
      phone: x.tags.phone,
      adress: x.tags.address,
      description: x.tags.description,
    };
  });
}

const fetchOverpassApiDataByLocation = async (
  tag: string,
  radius: number,
  latitude: number,
  longitude: number
): Promise<any[] | undefined> => {
  const controller = new AbortController();
  const query = `[out:json];
    (
      node[${tag}](around:${radius},${latitude},${longitude});
    );
    out center;`;

  const timeoutId = setTimeout(() => {
    controller.abort();
  }, timeoutDuration);
  const response = await fetch(
    `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`,
    { signal: controller.signal }
  );

  clearTimeout(timeoutId);

  if (response.ok) {
    const data = await response.json();
    return data.elements as any[];
  }
  return undefined;
};


const fetchOverpassApiDataByNameAddress = async (name: string) => {
  try {
    const query = `[out:json];
    (
        node["name"="${name}"];
    );
    out center;`;

    const response = await fetch(
      `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(
        query
      )}`
    );

    if (response.ok) {
      const data = await response.json();

      return data.elements;
    }

  }
  catch (error) {
    toast.error(UserAppeals.NOOBJECT);
  }
};

const fetchOverpassApiDataById = async (id: number) => {
  try {
    const query = `[out:json];
    (
        node(id:${id});
    );
    out;`;

    const response = await fetch(
      `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(
        query
      )}`
    );

    if (response.ok) {
      const data = await response.json();
      return data.elements;
    }

  } catch (error) {
    toast.error(UserAppeals.NOOBJECT);
  }
};
