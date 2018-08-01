import "reflect-metadata";
import { injectable } from 'inversify';

import IMusicRepository from './IMusicRepository';
import Track from '../models/Track';

@injectable()
class VinylCatalog implements IMusicRepository {
  private vinylList: Track[] = new Array(
    new Track(2, '2', '2', 2),
    new Track(3, '3', '3', 3),
    new Track(4, '4', '4', 4),
    new Track(5, '5', '5', 5),
  )

  get(): Track[] {
    return this.vinylList;
  }

  getById(id: number) : Track {
    return this.vinylList.find(track => track.Id === id)
  }

  add(track: Track): number {
    return this.vinylList.push(track);
  }

  edit(id: number, track: Track): Track {
    const trackIndex = this.vinylList.findIndex(track => track.Id === id);

    const { Artist, Title, Duration } = track;

    this.vinylList[trackIndex].Artist = Artist;
    this.vinylList[trackIndex].Title = Title;
    this.vinylList[trackIndex].Duration = Duration;

    return this.vinylList[trackIndex];
  }

  delete(id: number) {
    const trackIndex = this.vinylList.findIndex(track => track.Id === id);

    if (trackIndex < -1) return null;

    return this.vinylList.splice(trackIndex, -1)[0]
  }
}

export default VinylCatalog;