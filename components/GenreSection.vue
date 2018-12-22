<template>
  <section>
    <genre-headers></genre-headers>
    <genre-secondary-headers></genre-secondary-headers>
    <genre-dropdown></genre-dropdown>
    <genre-helpers></genre-helpers>
  </section>
</template>

<script>
import GenreHeaders from '~/components/GenreHeaders';
import GenreSecondaryHeaders from '~/components/GenreSecondaryHeaders';
import GenreDropdown from '~/components/GenreDropdown';
import GenreHelpers from '~/components/GenreHelpers';

export default {
  components: {
    GenreHeaders,
    GenreSecondaryHeaders,
    GenreDropdown,
    GenreHelpers,
  },
};
</script>

<style>

</style>
