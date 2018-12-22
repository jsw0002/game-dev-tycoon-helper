<template>
  <div class="row main-table">
    <div
      v-if="$store.state.options.generalTips"
      class="col">
      <h3>General Tips</h3>
      <ul
        v-for="(tip, index) in tips.general"
        :key="`${index}-g`"
        class="list-group">
        <li class="list-group-item">{{ tip }}</li>
      </ul>
      <h3>Custom Engine</h3>
      <ul
        v-for="(tip, index) in tips.customEngine"
        :key="`${index}-ce`"
        class="list-group">
        <li class="list-group-item">{{ tip }}</li>
      </ul>
    </div>
    <div
      v-if="$store.state.options.stageOneTips"
      class="col">
      <h3>Stage 1 Tips</h3>
      <ul
        v-for="(tip, index) in tips.stageOne"
        :key="`${index}-1`"
        class="list-group">
        <li class="list-group-item">{{ tip }}</li>
      </ul>
    </div>
    <div
      v-if="$store.state.options.stageTwoTips"
      class="col">
      <h3>Stage 2 Tips</h3>
      <ul
        v-for="(tip, index) in tips.stageTwo"
        :key="`${index}-2`"
        class="list-group">
        <li class="list-group-item">{{ tip }}</li>
      </ul>
    </div>
    <div
      v-if="$store.state.options.stageThreeTips"
      class="col">
      <h3>Stage 3 Tips</h3>
      <ul
        v-for="(tip, index) in tips.stageThree"
        :key="`${index}-3`"
        class="list-group">
        <li class="list-group-item">{{ tip }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import tips from '../assets/data/tips.json';

export default {
  created() {
    this.tips = tips;
  },
};
</script>

<style>

</style>
