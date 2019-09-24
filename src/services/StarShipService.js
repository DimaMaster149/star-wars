import http from '@/api';
import { STAR_WARS } from '@/api/routes';

export const fetchStarships = () => {
  return http.get(STAR_WARS.STARSHIPS);
};

export const fetchStarhip = (id) => {
  return http.get(STAR_WARS.STARSHIP(id));
};