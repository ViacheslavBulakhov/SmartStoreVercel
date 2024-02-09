const BASE_URL = 'https://smartstoredev.onrender.com/api';

export const ALL_GOODS = `${BASE_URL}/goods`;

export const searchByCountry = name => `${BASE_URL}/name/${name}`;

export const filterByCode = codes =>
  `${BASE_URL}/alpha?codes=${codes.join(',')}`;
