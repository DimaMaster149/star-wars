import * as StarShipService from '@/services/StarShipService';

export const fetchStarships = ({ commit }) => {
  return StarShipService.fetchStarships().then((res) => {
    const starships = res.data.results;
    commit('setStarships', starships);
  })
};