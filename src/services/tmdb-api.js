import axios from 'axios';

const ACCESS_TOKEN = import.meta.env.VITE_TMDB_API_ACCESS_TOKEN;
const client = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Accept: 'application/json',
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
});

export const fetchTrendingMovies = async () => {
  try {
    // https://developer.themoviedb.org/reference/trending-movies
    const response = await client.get(`/trending/movie/day?language=en-US'`, {
      params: {
        // page,
        // per_page: perPage,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching trending movie:', error);
    throw error;
  }
};

export const fetchSearchMovies = async params => {
  try {
    // console.info(params);
    // https://developer.themoviedb.org/reference/search-movie
    const response = await client.get(`/search/movie`, {
      params: {
        query: params.query,
        include_adult: params.include_adult || null,
        language: params.language || null,
        primary_release_year: params.primary_release_year || null,
      },
    });
    // console.info(response);
    return response.data;
  } catch (error) {
    console.error('Error fetching search movies:', error);
    throw error;
  }
};

export const fetchMovieDetails = async movieId => {
  try {
    // https://developer.themoviedb.org/reference/movie-details
    const response = await client.get(`/movie/${movieId}`, {
      params: {
        language: 'en-US',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};

export const fetchMovieCredits = async movieId => {
  try {
    // https://developer.themoviedb.org/reference/movie-credits
    const response = await client.get(`/movie/${movieId}/credits`, {
      params: {
        language: 'en-US',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movie credits:', error);
    throw error;
  }
};

export const fetchMovieReviews = async movieId => {
  try {
    // https://developer.themoviedb.org/reference/movie-reviews
    const response = await client.get(`/movie/${movieId}/reviews`, {
      params: {
        language: 'en-US',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movie reviews:', error);
    throw error;
  }
};
