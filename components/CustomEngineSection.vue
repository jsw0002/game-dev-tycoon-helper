<template>
  <div
    v-if="$store.state.options.customEngine"
    class="row justify-content-center main-table">
    <div class="col">
      <h3>Custom Engine</h3>

      <ul
        v-for="(tip, index) in customEngine.general.tips"
        :key="`${index}-g`"
        class="list-group">
        <li class="list-group-item">{{ tip }}</li>
      </ul>

      <div class="row">
        <div class="col-4">
          <custom-engine-group :component="graphicsSection"></custom-engine-group>
        </div>
        <div class="col-4">
          <custom-engine-group :component="storiesQuestsSection"></custom-engine-group>
        </div>
        <div class="col-4">
          <custom-engine-group :component="engineSection"></custom-engine-group>
        </div>
      </div>

      <div class="row">
        <div class="col-4">
          <custom-engine-group :component="gameplaySection"></custom-engine-group>
        </div>
        <div class="col-4">
          <custom-engine-group :component="dialogueSection"></custom-engine-group>
        </div>
        <div class="col-4">
          <custom-engine-group :component="levelDesignSection"></custom-engine-group>
        </div>
      </div>

      <div class="row">
        <div class="col-4">
          <custom-engine-group :component="aiSection"></custom-engine-group>
        </div>
        <div class="col-4">
          <custom-engine-group :component="worldDesignSection"></custom-engine-group>
        </div>
        <div class="col-4">
          <custom-engine-group :component="soundSection"></custom-engine-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import customEngine from '../assets/data/customEngine.json';
import CustomEngineGroup from '~/components/CustomEngineGroup';

export default {
  components: {
    CustomEngineGroup,
  },
  created() {
    this.customEngine = customEngine;
  },
  computed: {
    graphicsSection() {
      return this.customEngine.general.components.graphics;
    },
    storiesQuestsSection() {
      return this.customEngine.general.components.storiesQuests;
    },
    engineSection() {
      return this.customEngine.general.components.engine;
    },
    gameplaySection() {
      return this.customEngine.general.components.gameplay;
    },
    dialogueSection() {
      return this.customEngine.general.components.dialogue;
    },
    levelDesignSection() {
      return this.customEngine.general.components.levelDesign;
    },
    aiSection() {
      return this.customEngine.general.components.ai;
    },
    worldDesignSection() {
      return this.customEngine.general.components.worldDesign;
    },
    soundSection() {
      return this.customEngine.general.components.sound;
    }
  }
}
</script>

<style>

</style>
