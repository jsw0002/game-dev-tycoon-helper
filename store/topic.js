export const state = () => ({
  listOfTopics: [],
});

export const mutations = {
  setList(state, list) {
    state.listOfTopics = list;
  },
};
