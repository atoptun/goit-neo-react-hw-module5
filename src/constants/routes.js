export const ROUTES = {
  HOME: '/',
  MOVIES: '/movies',
  MOVIE_DETAILS: '/movies/:movieId',
  CREDITS: 'credits',
  REVIEWS: 'reviews',
};

export const getMoviePath = id => `/movies/${id}`;
export const getMovieCreditsPath = id => `/movies/${id}/credits`;
export const getMovieReviewsPath = id => `/movies/${id}/reviews`;
