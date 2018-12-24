export const state = () => ({
  multiGenre: false,
  multipleSystems: false,
  customEngine: false,
  generalTips: false,
  stageOneTips: false,
  stageTwoTips: false,
  stageThreeTips: false,
});

export const mutations = {
  setMultiGenre(state, option) {
    state.multiGenre = option;
  },
  setMultipleSystems(state, option) {
    state.multipleSystems = option;
  },
  setCustomEngine(state, option) {
    state.customEngine = option;
  },
  setGeneralTips(state, option) {
    state.generalTips = option;
  },
  setStageOneTips(state, option) {
    state.stageOneTips = option;
  },
  setStageTwoTips(state, option) {
    state.stageTwoTips = option;
  },
  setStageThreeTips(state, option) {
    state.stageThreeTips = option;
  }
};
