<template>
  <div class="row justify-content-end fixed-height">
    <div
      v-if="$store.state.options.multiGenre"
      class="col-2">
      <select
        v-model="selectedGenre"
        class="form-control-sm">
        <option
          hidden
          value="">Select genres</option>
        <option
          v-for="(genre, index) in $store.state.multiGenre.listOfMultiGenres"
          :key="index"
          :value="genre">{{ genre.name }}</option>
      </select>
    </div>
    <div
      v-else
      class="col-2">
      <select
        v-model="selectedGenre"
        class="form-control-sm">
        <option
          hidden
          value="">Select a genre</option>
        <option
          v-for="(genre, index) in $store.state.singleGenre.listOfSingleGenres"
          :key="index"
          :value="genre">{{ genre.name }}</option>
      </select>
    </div>
    <div class="col-1 center">
      <p>{{ genreTD }}</p>
    </div>
    <div class="col-1 center no-pad">
      <p :class="genreStageOneEngine.css">
        {{ genreStageOneEngine.value }}
      </p>
    </div>
    <div class="col-1 center no-pad">
      <p :class="genreStageOneGameplay.css">
        {{ genreStageOneGameplay.value }}
      </p>
    </div>
    <div class="col-1 center no-pad">
      <p :class="genreStageOneStoryQuests.css">
        {{ genreStageOneStoryQuests.value }}
      </p>
    </div>
    <div class="col-1 center no-pad">
      <p :class="genreStageTwoDialogues.css">
        {{ genreStageTwoDialogues.value }}
      </p>
    </div>
    <div class="col-1 center no-pad">
      <p :class="genreStageTwoLevelDesign.css">
        {{ genreStageTwoLevelDesign.value }}
      </p>
    </div>
    <div class="col-1 center no-pad">
      <p :class="genreStageTwoAi.css">
        {{ genreStageTwoAi.value }}
      </p>
    </div>
    <div class="col-1 center no-pad">
      <p :class="genreStageThreeWorldDesign.css">
        {{ genreStageThreeWorldDesign.value }}
      </p>
    </div>
    <div class="col-1 center no-pad">
      <p :class="genreStageThreeGraphics.css">
        {{ genreStageThreeGraphics.value }}
      </p>
    </div>
    <div class="col-1 center no-pad">
      <p :class="genreStageThreeSound.css">
        {{ genreStageThreeSound.value }}
      </p>
    </div>
  </div>
</template>

<script>
import singleGenreChart from '../assets/data/singleGenreChart.json';
import multiGenreChart from '../assets/data/multiGenreChart.json';

export default {
  data() {
    return {
      selectedGenre: '',
    };
  },
  computed: {
    genreTD() {
      return (this.selectedGenre) ? this.selectedGenre.td : '';
    },
    genreStageOneEngine() {
      return (this.selectedGenre) ? this.selectedGenre.stageOne.engine : '';
    },
    genreStageOneGameplay() {
      return (this.selectedGenre) ? this.selectedGenre.stageOne.gameplay : '';
    },
    genreStageOneStoryQuests() {
      return (this.selectedGenre) ? this.selectedGenre.stageOne.storyQuests : '';
    },
    genreStageTwoDialogues() {
      return (this.selectedGenre) ? this.selectedGenre.stageTwo.dialogues : '';
    },
    genreStageTwoLevelDesign() {
      return (this.selectedGenre) ? this.selectedGenre.stageTwo.levelDesign : '';
    },
    genreStageTwoAi() {
      return (this.selectedGenre) ? this.selectedGenre.stageTwo.ai : '';
    },
    genreStageThreeWorldDesign() {
      return (this.selectedGenre) ? this.selectedGenre.stageThree.worldDesign : '';
    },
    genreStageThreeGraphics() {
      return (this.selectedGenre) ? this.selectedGenre.stageThree.graphics : '';
    },
    genreStageThreeSound() {
      return (this.selectedGenre) ? this.selectedGenre.stageThree.sound : '';
    }
  },
  created() {
    this.$store.commit('singleGenre/setList', singleGenreChart);
    this.$store.commit('multiGenre/setList', multiGenreChart);
  }
}
</script>

<style>

</style>
