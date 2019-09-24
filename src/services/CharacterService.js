import http from '@/api';
import {
  STAR_WARS
} from '@/api/routes';

export const fetchCharacters = () => {
  return http.get(STAR_WARS.CHARACTER);
};