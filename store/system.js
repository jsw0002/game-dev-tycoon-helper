export const state = () => ({
  listOfSystems: [],
});

export const mutations = {
  setList(state, list) {
    state.listOfSystems = list;
  },
};
