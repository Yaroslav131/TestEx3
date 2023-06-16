interface IGeoObject {
    id: number,
    lat: number,
    lon: number,
    name: string,
    amenity: string | null,
    tourism: string | null,
    website: string | null,
    phone: string | null,
    address: string | null,
    description: string | null,
}

export default function getGeoObjects(theme: string, objet: string, radius: number, latitude: number, longitude: number): IGeoObject[] {
    let geoObjectsArr: IGeoObject[] = [];

    fetchOverpassApiData(theme, objet, radius, latitude, longitude).then(result => {
        geoObjectsArr = result.map((x: any) => { x.id, x.lat, x.lon, x.tags.name, x.tags.amenity, x.tags.tourism, x.tags.website, x.tags.phone, x.tags.address, x.tags.description })
    });

    return geoObjectsArr
}

const fetchOverpassApiData = async (theme: string, objet: string, radius: number, latitude: number, longitude: number) => {
    try {
        const response = await fetch(
            `https://overpass-api.de/api/interpreter?data=[out:json];node[${theme}=${objet}](around:${radius},${latitude},${longitude});out;`
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