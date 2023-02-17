<template>
  <v-checkbox
      class="mt-0 float-right"
      v-model="checkbox"
      :ripple="false"
      label="Show Affected Elements"
      @change="update"
      color="white"
  ></v-checkbox>
</template>

<script>
export default {
  name: 'AffectedElementsToggle',
  components: {},
  data: () => ({
    checkbox: false
  }),
  methods: {
    update(value) {
      this.$emit('update', value)
    }
  }
}
</script>

<style>
  .v-input--selection-controls .v-input__slot > .v-label, .v-input--selection-controls .v-radio > .v-label {
    font-size: 20px !important;
    color: white;
  }
</style>
