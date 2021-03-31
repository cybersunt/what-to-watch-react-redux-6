import {ActionMovieType, loadComments, loadCurrentMovie, loadPromoMovie} from "./movie-data-action";

describe(`Action creators for movie data work correctly`, ()=> {
  it(`Action creator promo movie returns correct action`, () => {
    const movie = {
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
      previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
    };
    const expectedAction = {
      type: ActionMovieType.LOAD_PROMO_MOVIE,
      payload: {
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
        previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
      }
    };
    expect(loadPromoMovie(movie)).toEqual(expectedAction);
  });
  it(`Action creator current movie returns correct action`, () => {
    const movie = {
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
      previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
    };
    const expectedAction = {
      type: ActionMovieType.LOAD_CURRENT_MOVIE,
      payload: {
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
        previewVideoLink: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
      }
    };
    expect(loadCurrentMovie(movie)).toEqual(expectedAction);
  });
  it(`Action creator reviews returns correct action`, () => {
    const reviews = [
      {
        id: 1,
        user: {
          id: 12,
          name: `Isaac`
        },
        rating: 7.3,
        comment: `Poised to be an instant classic, almost everything about this film is phenomenal - the acting, the cinematography, the discography, etc.`,
        date: `2021-02-15T08:32:12.668Z`
      },
      {
        id: 2,
        user: {
          id: 13,
          name: `Zak`
        },
        rating: 6.8,
        comment: `Poised to be an instant classic, almost everything about this film is phenomenal - the acting, the cinematography, the discography, etc.`,
        date: `2021-02-16T08:32:12.668Z`
      },
      {
        id: 3,
        user: {
          id: 18,
          name: `Sophie`
        },
        rating: 7.3,
        comment: `The editing is a mess, and the transitions of the plot or characters are rather strange. There is no narrative focus and the storytelling is unbalanced. I cannot really understand why such a bad movie received an overwhelming approval from the critics. `,
        date: `2021-02-17T08:32:12.668Z`
      }
    ];
    const expectedAction = {
      type: ActionMovieType.LOAD_COMMENTS,
      payload: [
        {
          id: 1,
          user: {
            id: 12,
            name: `Isaac`
          },
          rating: 7.3,
          comment: `Poised to be an instant classic, almost everything about this film is phenomenal - the acting, the cinematography, the discography, etc.`,
          date: `2021-02-15T08:32:12.668Z`
        },
        {
          id: 2,
          user: {
            id: 13,
            name: `Zak`
          },
          rating: 6.8,
          comment: `Poised to be an instant classic, almost everything about this film is phenomenal - the acting, the cinematography, the discography, etc.`,
          date: `2021-02-16T08:32:12.668Z`
        },
        {
          id: 3,
          user: {
            id: 18,
            name: `Sophie`
          },
          rating: 7.3,
          comment: `The editing is a mess, and the transitions of the plot or characters are rather strange. There is no narrative focus and the storytelling is unbalanced. I cannot really understand why such a bad movie received an overwhelming approval from the critics. `,
          date: `2021-02-17T08:32:12.668Z`
        }
      ]
    };
    expect(loadComments(reviews)).toEqual(expectedAction);
  });
});
