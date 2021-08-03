
import api from './index';

export const apiGetBreweries = async (filter:String, page: Number) => {
  const url = `/breweries?page=${page}${filter? `&by_type=${filter}`: ''}`;

  try {
    const { data } = await api.get(url);
    return data;

  } catch (err) {
    console.error(err);
  }
};