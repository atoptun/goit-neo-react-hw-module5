import axios from 'axios';

const API_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;
const client = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${API_KEY}`,
    'Accept-Version': 'v1',
  },
});

export const fetchImages = async ({
  searchParams: { query, color, orientation, order_by },
  page = 1,
  perPage = 10,
}) => {
  try {
    const response = await client.get(`/search/photos`, {
      params: {
        query: query,
        color: color || undefined,
        orientation: orientation || undefined,
        order_by: order_by || undefined,
        page,
        per_page: perPage,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
};

/**
 * Error messages
If an error occurs, whether on the server or client side, the error message(s) will be returned in an errors array. For example:

422 Unprocessable Entity
{
  "errors": ["Username is missing", "Password cannot be blank"]
}
 */
