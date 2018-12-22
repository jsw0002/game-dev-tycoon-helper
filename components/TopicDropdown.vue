<template>
  <div class="row justify-content-center fixed-height">
    <div class="col-2">
      <select
        v-model="selectedTopic"
        class="form-control-sm">
        <option
          hidden
          value="">Select a topic</option>
        <option
          v-for="(topic, index) in $store.state.topic.listOfTopics"
          :key="index"
          :value="topic">{{ topic.name }}</option>
      </select>
    </div>
    <div class="col-1"></div>
    <div class="col-1 no-pad">
      <p :class="topicGenreAction.css">
        {{ topicGenreAction.value }}
      </p>
    </div>
    <div class="col-1 no-pad">
      <p :class="topicGenreAdventure.css">
        {{ topicGenreAdventure.value }}
      </p>
    </div>
    <div class="col-1 no-pad">
      <p :class="topicGenreRpg.css">
        {{ topicGenreRpg.value }}
      </p>
    </div>
    <div class="col-1 no-pad">
      <p :class="topicGenreSimulation.css">
        {{ topicGenreSimulation.value }}
      </p>
    </div>
    <div class="col-1 no-pad">
      <p :class="topicGenreStrategy.css">
        {{ topicGenreStrategy.value }}
      </p>
    </div>
    <div class="col-1 no-pad">
      <p :class="topicGenreCasual.css">
        {{ topicGenreCasual.value }}
      </p>
    </div>
    <div class="col-1 no-pad">
      <p :class="topicAudiencesY.css">
        {{ topicAudiencesY.value }}
      </p>
    </div>
    <div class="col-1 no-pad">
      <p :class="topicAudiencesE.css">
        {{ topicAudiencesE.value }}
      </p>
    </div>
    <div class="col-1 no-pad">
      <p :class="topicAudiencesM.css">
        {{ topicAudiencesM.value }}
      </p>
    </div>
  </div>
</template>

<script>
import topicChart from '../assets/data/topicChart.json';

export default {
  data() {
    return {
      selectedTopic: '',
    };
  },
  computed: {
    topicGenreAction() {
      return (this.selectedTopic) ? this.selectedTopic.genre.action : '';
    },topicGenreAdventure() {
      return (this.selectedTopic) ? this.selectedTopic.genre.adventure : '';
    },topicGenreRpg() {
      return (this.selectedTopic) ? this.selectedTopic.genre.rpg : '';
    },topicGenreSimulation() {
      return (this.selectedTopic) ? this.selectedTopic.genre.simulation : '';
    },topicGenreStrategy() {
      return (this.selectedTopic) ? this.selectedTopic.genre.strategy : '';
    },topicGenreCasual() {
      return (this.selectedTopic) ? this.selectedTopic.genre.casual : '';
    },topicAudiencesY() {
      return (this.selectedTopic) ? this.selectedTopic.audiences.y : '';
    },topicAudiencesE() {
      return (this.selectedTopic) ? this.selectedTopic.audiences.e : '';
    },topicAudiencesM() {
      return (this.selectedTopic) ? this.selectedTopic.audiences.m : '';
    }
  },
  created() {
    this.$store.commit('topic/setList', topicChart);
  }
}
</script>

<style>

</style>
