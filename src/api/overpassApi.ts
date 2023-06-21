import IGeoObject from "../interfaces/IGeoObject";
import { geoIcons } from "../config"

export async function getObjectByName(name: string): Promise<IGeoObject[]> {
    const geoObjects: IGeoObject[] = [];
    const userSearch="search"

    const geoObjectsData = await fetchOverpassApiDataByNameAddress(name);
    if (geoObjectsData) {
        const mappedGeoObjects = getGeoObjects(geoObjectsData,userSearch);
        geoObjects.push(...mappedGeoObjects);
    }

    console.log(geoObjects);
    return geoObjects;
}

export async function getObjectByTags(tags: string[], userCoords: [number, number], searchRadius: number): Promise<IGeoObject[]> {
    const geoObjects: IGeoObject[] = [];

    const [latitude, longitude] = userCoords;

    console.log(searchRadius);

    for (const tag of tags) {
        const geoObjectsData = await fetchOverpassApiDataByLocation(tag, searchRadius, latitude, longitude);
        if (geoObjectsData) {
            const mappedGeoObjects = getGeoObjects(geoObjectsData, tag);
            geoObjects.push(...mappedGeoObjects);
        }
    }

    console.log(geoObjects);

    return geoObjects;
}

function getGeoObjects(geoObjects: IGeoObject[], tag: string): IGeoObject[] {
    return geoObjects.map((x: any) => {

        let img = geoIcons.find(x => x.tag == tag)?.optionIcon || ""

        return {
            iconImgHref: img,
            id: x.id,
            lat: x.lat,
            lon: x.lon,
            name: x.tags.name,
            tag: tag,
            tourism: x.tags.tourism,
            website: x.tags.website,
            phone: x.tags.phone,
            adress: x.tags.address,
            description: x.tags.description
        }
    })
};

const fetchOverpassApiDataByLocation = async (tag: string, radius: number, latitude: number, longitude: number) => {
    try {
        const query = `[out:json];
    (
      node[${tag}](around:${radius},${latitude},${longitude});
    );
    out center;`;

        const response = await fetch(
            `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`
        );

        if (response.ok) {
            const data = await response.json();
            return data.elements;
        } else {
            console.error('Error fetching sightseeing data');
        }
    } catch (error) {
        console.error('Error fetching sightseeing data:', error);
    }
};

const fetchOverpassApiDataByNameAddress = async (name: string) => {
    try {
        const query = `[out:json];
    (
        node["name"="${name}"];
    );
    out center;`;

        const response = await fetch(
            `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`
        );

        if (response.ok) {
            const data = await response.json();
            return data.elements;
        } else {
            console.error('Error fetching sightseeing data');
        }
    } catch (error) {
        console.error('Error fetching sightseeing data:', error);
    }
};