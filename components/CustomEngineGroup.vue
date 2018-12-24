<template>
  <div>
    <h5 class="extra-padding">{{ component.name }}</h5>
    <ul
      v-for="(tip, index) in component.tips"
      :key="`${index}-ai`"
        class="list-group">
        <li class="list-group-item">{{ tip }}</li>
    </ul>
    <ul
       v-if="component.groups.length > 0"
      v-for="(group, index) in component.groups"
      :key="`${index}-aig`"
      class="list-group">
      <li class="list-group-item">
        <span class="bold">{{ group.name }}</span>
        <ul
          v-for="(feature, index) in group.features"
          :key="`${index}-aigf`"
          class="list-group">
          <li class="list-group-item">{{ feature }}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: [
    'component',
  ]
}
</script>

<style>

</style>
