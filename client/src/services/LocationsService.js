export default class LocationsService
{
    route = 'https://hack-united-server.fly.dev/locations/';

    // Works
    get = async (id) => {
        const res = await fetch(`${this.route}${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        return data;
    }

    // Works
    getAll = async () => {
        const res = await fetch(this.route);
        const data = await res.json();
        return data;
    }

    post = async (body) => {
        const res = await fetch(this.route, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        });
        const data = await res.json();
        return data;
    }

    put = async (body) => {
        const res = await fetch(this.route, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        });
        const data = await res.json();
        return data;
    }

    delete = async (id) => {
        const res = await fetch(`${this.route}${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        return data;
    }

    // Works
    getAllStartPins = async () => {
        const data = await this.getAll();
        const res = data.map(x => ({
            key: x.id,
            coordinate: {
                latitude: x.latitudeStart,
                longitude: x.longitudeStart,
            },
        }));
        return res;
    }

    getRoute = async (markerData) => {
        const routeResponse = await fetch("https://routes.googleapis.com/directions/v2:computeRoutes",{
            method: 'POST',
            body: JSON.stringify({
                origin: {
                    location: {
                        latLng: {
                            latitude: markerData.latitudeStart,
                            longitude: markerData.longitudeStart,
                        }
                    }
                },
                destination: {
                    location: {
                        latLng: {
                            latitude: markerData.latitudeEnd,
                            longitude: markerData.longitudeEnd,
                        }
                    }
                },
                travelMode: "WALK",
                units: "METRIC",
                polylineEncoding: "GEO_JSON_LINESTRING",
            }),
            headers: {
                'Content-Type': 'application/json',
                'X-Goog-Api-Key': process.env.GOOGLE_MAPS_API_KEY,
                'X-Goog-FieldMask': 'routes.duration,routes.distanceMeters,routes.polyline'
            }
        });

        const routeData = await routeResponse.json();
        const returnData = {
            coordinates: routeData.routes[0].polyline.geoJsonLinestring.coordinates.map(x => ({
                latitude: x[1],
                longitude: x[0],
            })),
            strokeColor: "#00FF00",
            strokeWidth: 6,
        }
        return returnData
    }

    getFullRoute = async (id) => {
        const markerData = await this.get(id);
        const routeData = await this.getRoute(markerData);
        const returnData = {
            polyline: routeData,
            markerStart: {
                key: markerData.id,
                coordinate: {
                    latitude: markerData.latitudeStart,
                    longitude: markerData.longitudeStart,
                },
                pinColor: "#00FF00",
            },
            markerEnd: {
                key: "2!"+markerData.id,
                coordinate: {
                    latitude: markerData.latitudeEnd,
                    longitude: markerData.longitudeEnd,
                },
                pinColor: "#FF0000",
            },
        }
        return returnData;
    };
}