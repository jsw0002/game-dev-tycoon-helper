export const state = () => ({
  listOfSingleGenres: [],
});

export const mutations = {
  setList(state, list) {
    state.listOfSingleGenres = list;
  },
};
