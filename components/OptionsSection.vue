<template>
  <div class="row">
    <div
      class="col-12 btn-group btn-group-toggle justify-content-center"
      data-toggle="buttons">

      <label
        :class="{ active: multiGenre }"
        class="btn btn-option">
        <input
          id="multiGenre"
          v-model="multiGenre"
          type="checkbox"
          @change="$store.commit('options/setMultiGenre', multiGenre)"
        />
        Two Genres
      </label>

      <label
        :class="{ active: multipleSystems }"
        class="btn btn-option">
        <input
          id="multipleSystems"
          v-model="multipleSystems"
          type="checkbox"
          @change="$store.commit('options/setMultipleSystems', multipleSystems)"
        />
        Multiple Systems
      </label>

      <label
        :class="{ active: generalTips }"
        class="btn btn-option">
        <input
          id="generalTips"
          v-model="generalTips"
          type="checkbox"
          @change="$store.commit('options/setGeneralTips', generalTips)"
        />
        General Tips
      </label>

      <label
        :class="{ active: stageOneTips }"
        class="btn btn-option">
        <input
          id="stageOneTips"
          v-model="stageOneTips"
          type="checkbox"
          @change="$store.commit('options/setStageOneTips', stageOneTips)"
        />
        Stage 1 Tips
      </label>

      <label
        :class="{ active: stageTwoTips }"
        class="btn btn-option">
        <input
          id="stageTwoTips"
          v-model="stageTwoTips"
          type="checkbox"
          @change="$store.commit('options/setStageTwoTips', stageTwoTips)"
        />
        Stage 2 Tips
      </label>

      <label
        :class="{ active: stageThreeTips }"
        class="btn btn-option">
        <input
          id="stageThreeTips"
          v-model="stageThreeTips"
          type="checkbox"
          @change="$store.commit('options/setStageThreeTips', stageThreeTips)"
        />
        Stage 3 Tips
      </label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      multiGenre: false,
      multipleSystems: false,
      generalTips: false,
      stageOneTips: false,
      stageTwoTips: false,
      stageThreeTips: false,
    };
  },
}
</script>

<style>

</style>
