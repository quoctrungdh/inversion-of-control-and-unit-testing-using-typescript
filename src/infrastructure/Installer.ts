import "reflect-metadata";
import { Container } from 'inversify';

import SERVICE_IDENTIFIER from '../constants/Identifiers';
import IMusicRepository from '../repository/IMusicRepository';
import VinylCatalog from '../repository/VinylCatalog';

const container = new Container();
container.bind<IMusicRepository>(SERVICE_IDENTIFIER.IMusicRepository).to(VinylCatalog)

export default container;