export default class LocationsService
{
    route = 'https://hack-united-server.fly.dev/challenge/';

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

    getChallengeByLocationId = async (locationId) => {
        const res = await fetch(`${this.route}location/${locationId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        return data;
    }
}