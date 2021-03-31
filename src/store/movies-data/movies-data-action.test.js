import {ActionDataType, loadMovies} from "./movies-data-action";

describe(`Action creators for movies data work correctly`, ()=> {
  it(`Action creator movies data returns correct action`, () => {
    const movies = [
      {
        name: `Macbeth`,
        posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
        previewImage: `img/macbeth.jpg`,
        backgroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
        backgroundColor: `#F1E9CE`,
        description: `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`,
        rating: 3.3,
        scoresCount: 48798,
        director: `Justin Kurzel`,
        starring: [`Michael Fassbender`, `Marion Cotillard`, `Jack Madigan`],
        runTime: 113,
        genre: `Drama`,
        released: 2015,
        id: 8,
        isFavorite: false,
        videoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
        previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
      },
      {
        name: `War of the Worlds`,
        posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
        previewImage: `img/war-of-the-worlds.jpg`,
        backgroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
        backgroundColor: `#9B7E61`,
        description: `As Earth is invaded by alien tripod fighting machines, one family fights for survival.`,
        rating: 9.3,
        scoresCount: 386834,
        director: `Steven Spielberg`,
        starring: [`Tom Cruise`, `Dakota Fanning`, `Tim Robbins`],
        runTime: 116,
        genre: `Adventure`,
        released: 2005,
        id: 9,
        isFavorite: false,
        videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
        previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
      },
      {
        name: `Pulp Fiction`,
        posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
        previewImage: `img/pulp-fiction.jpg`,
        backgroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
        backgroundColor: `#795433`,
        description: `The lives of two mob hitmen, a boxer, a gangster & his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.`,
        rating: 1.5,
        scoresCount: 1635992,
        director: `Quentin Tarantino`,
        starring: [`John Travolta`, `Uma Thurman`, `Samuel L. Jackson`],
        runTime: 153,
        genre: `Crime`,
        released: 1994,
        id: 10,
        isFavorite: false,
        videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
        previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`}
    ];
    const expectedAction = {
      type: ActionDataType.LOAD_MOVIES,
      payload: [
        {
          name: `Macbeth`,
          posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
          previewImage: `img/macbeth.jpg`,
          backgroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
          backgroundColor: `#F1E9CE`,
          description: `Macbeth, the Thane of Glamis, receives a prophecy from a trio of witches that one day he will become King of Scotland. Consumed by ambition and spurred to action by his wife, Macbeth murders his king and takes the throne for himself.`,
          rating: 3.3,
          scoresCount: 48798,
          director: `Justin Kurzel`,
          starring: [`Michael Fassbender`, `Marion Cotillard`, `Jack Madigan`],
          runTime: 113,
          genre: `Drama`,
          released: 2015,
          id: 8,
          isFavorite: false,
          videoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
          previewVideoLink: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`
        },
        {
          name: `War of the Worlds`,
          posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
          previewImage: `img/war-of-the-worlds.jpg`,
          backgroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
          backgroundColor: `#9B7E61`,
          description: `As Earth is invaded by alien tripod fighting machines, one family fights for survival.`,
          rating: 9.3,
          scoresCount: 386834,
          director: `Steven Spielberg`,
          starring: [`Tom Cruise`, `Dakota Fanning`, `Tim Robbins`],
          runTime: 116,
          genre: `Adventure`,
          released: 2005,
          id: 9,
          isFavorite: false,
          videoLink: `http://media.xiph.org/mango/tears_of_steel_1080p.webm`,
          previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
        },
        {
          name: `Pulp Fiction`,
          posterImage: `img/the-grand-budapest-hotel-poster.jpg`,
          previewImage: `img/pulp-fiction.jpg`,
          backgroundImage: `img/bg-the-grand-budapest-hotel.jpg`,
          backgroundColor: `#795433`,
          description: `The lives of two mob hitmen, a boxer, a gangster & his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.`,
          rating: 1.5,
          scoresCount: 1635992,
          director: `Quentin Tarantino`,
          starring: [`John Travolta`, `Uma Thurman`, `Samuel L. Jackson`],
          runTime: 153,
          genre: `Crime`,
          released: 1994,
          id: 10,
          isFavorite: false,
          videoLink: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
          previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`}
      ]
    };
    expect(loadMovies(movies)).toEqual(expectedAction);
  });
});
