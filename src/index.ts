import SERVICE_IDENTIFIER from './constants/Identifiers';
import container from './infrastructure/Installer';
import IMusicRepository from './repository/IMusicRepository';
import MusicCatalogService from './services/MusicCatalogService';

// Import stylesheets
import './style.css';

const musicRepo = container.get<IMusicRepository>(SERVICE_IDENTIFIER.IMusicRepository)
const musicService = new MusicCatalogService(musicRepo)
console.log(musicService.get(), musicRepo)