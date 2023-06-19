import IGeoObject from "../interfaces/IGeoObject"

export  function getGeoObjects(geoObjects: IGeoObject[]): IGeoObject[] {
    return geoObjects.map((x: any) => {
        return {
            id: x.id,
            lat: x.lat,
            lon: x.lon,
            name: x.tags.name,
            amenity: x.tags.amenity,
            tourism: x.tags.tourism,
            website: x.tags.website,
            phone: x.tags.phone,
            adress: x.tags.address,
            description: x.tags.description
        }
    })
};


export const fetchOverpassApiDataByLocal = async (theme: string, radius: number, latitude: number, longitude: number) => {
    try {
        const query = `[out:json];
        (
          node[${theme}](around:${radius},${latitude},${longitude});
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
        } else {
            console.error('Error fetching sightseeing data');
        }
    } catch (error) {
        console.error('Error fetching sightseeing data:', error);
    }
};

export const fetchOverpassApiDataByNameAdress = async (name: string) => {
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
        } else {
            console.error('Error fetching sightseeing data');
        }
    } catch (error) {
        console.error('Error fetching sightseeing data:', error);
    }
};