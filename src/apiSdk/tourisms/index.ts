import axios from 'axios';
import queryString from 'query-string';
import { TourismInterface, TourismGetQueryInterface } from 'interfaces/tourism';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getTourisms = async (query?: TourismGetQueryInterface): Promise<PaginatedInterface<TourismInterface>> => {
  const response = await axios.get('/api/tourisms', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createTourism = async (tourism: TourismInterface) => {
  const response = await axios.post('/api/tourisms', tourism);
  return response.data;
};

export const updateTourismById = async (id: string, tourism: TourismInterface) => {
  const response = await axios.put(`/api/tourisms/${id}`, tourism);
  return response.data;
};

export const getTourismById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/tourisms/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteTourismById = async (id: string) => {
  const response = await axios.delete(`/api/tourisms/${id}`);
  return response.data;
};
