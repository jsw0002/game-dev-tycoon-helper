<template>
  <div class="container">
    <page-header></page-header>

    <options-section></options-section>

    <topic-section></topic-section>

    <system-section></system-section>

    <div v-if="$store.state.options.multipleSystems">
      <system-section></system-section>
      <system-section></system-section>
    </div>

    <genre-section></genre-section>

    <custom-engine-section></custom-engine-section>

    <tips-section></tips-section>
  </div>
</template>

<script>
import PageHeader from '~/components/PageHeader';
import OptionsSection from '~/components/OptionsSection';
import TopicSection from '~/components/TopicSection';
import SystemSection from '~/components/SystemSection';
import GenreSection from '~/components/GenreSection';
import CustomEngineSection from '~/components/CustomEngineSection';
import TipsSection from '~/components/TipsSection';

export default {
  components: {
    PageHeader,
    OptionsSection,
    TopicSection,
    SystemSection,
    GenreSection,
    CustomEngineSection,
    TipsSection,
  },
};
</script>

<style>

</style>
