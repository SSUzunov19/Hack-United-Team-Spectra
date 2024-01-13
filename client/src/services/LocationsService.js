export default class LocationsService
{
    route = 'https://hack-united-server.fly.dev/locations/';
    get = async (id) => {
        const res = this.fetch(`${this._baseUrl}${this.route}${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        return data;
    }

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
}