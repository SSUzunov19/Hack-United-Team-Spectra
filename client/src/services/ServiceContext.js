import { createContext } from 'react';

import LocationsService from './LocationsService';
import ChallengesService from './ChallengesService';

export const services = {
    Locations: new LocationsService(),
    Challenges: new ChallengesService(),
}

const ServiceContext = createContext(services);

export default ServiceContext;