import { createContext } from 'react';

import LocationsService from './LocationsService';

export const services = {
    Locations: new LocationsService(),
}

const ServiceContext = createContext(services);

export default ServiceContext;