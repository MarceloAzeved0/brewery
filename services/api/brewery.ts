
import api from './index';

export const apiGetBreweries = async (filter = false) => {
  const url = `/breweries${filter || ''}`;

  try {
    const { data } = await api.get(url);
    return data;

  } catch (err) {
    console.error(err);
  }
};