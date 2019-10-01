export const starships = (state) => {
  return state.starships;
};

export const starshipById = (state) => (id) => {
  const starship = state.starships.find(starshipObj => starshipObj.url.split('starships/')[1].split('/')[0] === id);
  return starship;
};