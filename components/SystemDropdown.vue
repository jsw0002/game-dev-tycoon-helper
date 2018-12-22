<template>
  <div class="row justify-content-center fixed-height">
    <div class="col-2">
      <select
        v-model="selectedSystem"
        class="form-control-sm">
        <option
          hidden
          value="">Select a system</option>
        <option
          v-for="(system, index) in $store.state.system.listOfSystems"
          :key="index"
          :value="system">{{ system.name }}</option>
      </select>
    </div>
    <div class="col-1"></div>
    <div class="col-1 no-pad">
      <p :class="systemGenreAction.css">
        {{ systemGenreAction.value }}
      </p>
    </div>
    <div class="col-1 no-pad">
      <p :class="systemGenreAdventure.css">
        {{ systemGenreAdventure.value }}
      </p>
    </div>
    <div class="col-1 no-pad">
      <p :class="systemGenreRpg.css">
        {{ systemGenreRpg.value }}
      </p>
    </div>
    <div class="col-1 no-pad">
      <p :class="systemGenreSimulation.css">
        {{ systemGenreSimulation.value }}
      </p>
    </div>
    <div class="col-1 no-pad">
      <p :class="systemGenreStrategy.css">
        {{ systemGenreStrategy.value }}
      </p>
    </div>
    <div class="col-1 no-pad">
      <p :class="systemGenreCasual.css">
        {{ systemGenreCasual.value }}
      </p>
    </div>
    <div class="col-1 no-pad">
      <p :class="systemAudiencesY.css">
        {{ systemAudiencesY.value }}
      </p>
    </div>
    <div class="col-1 no-pad">
      <p :class="systemAudiencesE.css">
        {{ systemAudiencesE.value }}
      </p>
    </div>
    <div class="col-1 no-pad">
      <p :class="systemAudiencesM.css">
        {{ systemAudiencesM.value }}
      </p>
    </div>
  </div>
</template>

<script>
import systemChart from '../assets/data/systemChart.json';

export default {
  data() {
    return {
      selectedSystem: '',
    };
  },
  computed: {
    systemGenreAction() {
      return (this.selectedSystem) ? this.selectedSystem.genre.action : '';
    },
    systemGenreAdventure() {
      return (this.selectedSystem) ? this.selectedSystem.genre.adventure : '';
    },
    systemGenreRpg() {
      return (this.selectedSystem) ? this.selectedSystem.genre.rpg : '';
    },
    systemGenreSimulation() {
      return (this.selectedSystem) ? this.selectedSystem.genre.simulation : '';
    },
    systemGenreStrategy() {
      return (this.selectedSystem) ? this.selectedSystem.genre.strategy : '';
    },
    systemGenreCasual() {
      return (this.selectedSystem) ? this.selectedSystem.genre.casual : '';
    },
    systemAudiencesY() {
      return (this.selectedSystem) ? this.selectedSystem.audiences.y : '';
    },
    systemAudiencesE() {
      return (this.selectedSystem) ? this.selectedSystem.audiences.e : '';
    },
    systemAudiencesM() {
      return (this.selectedSystem) ? this.selectedSystem.audiences.m : '';
    }
  },
  created() {
    this.$store.commit('system/setList', systemChart);
  }
};
</script>

<style>

</style>
