export const state = () => ({
  listOfMultiGenres: [],
});

export const mutations = {
  setList(state, list) {
    state.listOfMultiGenres = list;
  },
};
