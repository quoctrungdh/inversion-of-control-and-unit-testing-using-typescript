import Track from '../models/Track';

export default interface IMusicRepository {
  get(): Track[];
  getById(id: number): Track;
  add(track: Track): number;
  edit(id: Number, track: Track);
  delete(id: number): Track;
}
