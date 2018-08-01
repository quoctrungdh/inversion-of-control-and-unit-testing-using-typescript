import IMusicRepository from '../repository/IMusicRepository';
import Track from '../models/Track';

class MusicCatalogService {
  private repository: IMusicRepository;

  constructor(repository: IMusicRepository) {
    this.repository = repository;
  }


  get(): Track[] {
    return this.repository.get();
  }

  getById(id: number): Track {
    return this.repository.getById(id);
  }

  add(track: Track): number {
    return this.repository.add(track);
  }

  edit(id: number, track: Track): Track {
    return this.repository.edit(id, track)
  }

  delete(id: number): Track {
    return this.repository.delete(id)
  }

}

export default MusicCatalogService;
