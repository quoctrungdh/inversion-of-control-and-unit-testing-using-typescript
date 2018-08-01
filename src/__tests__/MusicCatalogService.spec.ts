import Track from '../models/Track';
import IMusicRepository from '../repository/IMusicRepository';
import MusicCatalogService from '../services/MusicCatalogService';

describe('MusicCatalogService tests', () => {
  let s: MusicCatalogService;
  let mockRepo: Track[] = new Array(
    new Track(1, '1', '1', 1),
    new Track(2, '2', '2', 2),
  )

  it('should return Tracks value', () => {
    // arrange
    const Mock = jest.fn<IMusicRepository>(() => ({
      get: jest.fn().mockReturnValue(mockRepo)
    }))
    const mock = new Mock();
    s = new MusicCatalogService(mock)

    // act
    const res = s.get();

    // assert
    expect(mock.get).toHaveBeenCalled();
    expect(res.length).toBe(2)
  })


  it('should return Track by id', () => {
    const Mock = jest.fn<IMusicRepository>(() => ({
      getById: jest.fn().mockReturnValue(mockRepo[0])
    }))
    const mock = new Mock();
    s = new MusicCatalogService(mock);

    const res = s.getById(1)

    expect(mock.getById).toHaveBeenCalled();
    expect(res.Id).toBe(1);
    expect(res.Title).toBe('1');
  })


  it('should add Track', () => {
    const Mock = jest.fn<IMusicRepository>(() => ({
      add: jest.fn().mockImplementation(
        (track: Track) => {
          return mockRepo.push(track)
        }
      )
    }))
    const mock = new Mock()
    s = new MusicCatalogService(mock);

    const res = s.add(new Track(3, '3', '3', 3))

    expect(mock.add).toHaveBeenCalled();
    expect(mockRepo.length).toBe(3)
  })

  it('should edot Track', () => {
    const Mock = jest.fn<IMusicRepository>(() => ({
      edit: jest.fn().mockImplementation(
        (id: number, track: Track) => {
          return track
        }
      )
    }))
    const mock = new Mock()
    s = new MusicCatalogService(mock)

    const res = s.edit(1, new Track(1, 'new 1', 'new 1', 1))

    expect(mock.edit).toHaveBeenCalled();
    expect(res.Title).toBe('new 1')
  })

  it('should delete Track', () => {
    const Mock = jest.fn<IMusicRepository>(() => ({
      delete: jest.fn().mockImplementation(
        (id: number) => {
          const targetIndex = mockRepo.findIndex(track => track.Id === id)

          return mockRepo.splice(targetIndex, 1)[0]
        }
      )
    }))
    const mock = new Mock();
    s = new MusicCatalogService(mock)

    const res = s.delete(1)

    expect(mock.delete).toHaveBeenCalled();
    expect(mockRepo.length).toBe(2)
  })
})