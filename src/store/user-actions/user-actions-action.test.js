import {ActionUserActType, addComment, addFavoriteMovie, loadFavoriteMovies} from "./user-actions-action";

describe(`Action creators for user actions work correctly`, ()=> {
  it(`Action creator load user's favorites movies returns correct action`, () => {
    const movies = [
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
      type: ActionUserActType.LOAD_FAVORITE_MOVIES,
      payload: [
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
    expect(loadFavoriteMovies(movies)).toEqual(expectedAction);
  });
  it(`Action creator user add favorite movies returns correct action`, () => {
    const movie = {
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
    };
    const expectedAction = {
      type: ActionUserActType.ADD_FAVORITE_MOVIE,
      payload: {
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
      }
    };
    expect(addFavoriteMovie(movie)).toEqual(expectedAction);
  });
  it(`Action creator user add comment returns correct action`, () => {
    const comment = {
      rating: 8,
      comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`
    };
    const expectedAction = {
      type: ActionUserActType.ADD_FAVORITE_MOVIE,
      payload: {
        rating: 8,
        comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`
      }
    };
    expect(addComment(comment)).toEqual(expectedAction);
  });
});
