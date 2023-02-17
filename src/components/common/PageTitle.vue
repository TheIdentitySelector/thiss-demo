<template>
  <h1 class="mb-8">{{ title }}</h1>
</template>

<script>
export default {
  name: 'PageTitle',
  computed: {
    title() {
      const routePath = this.$route.name
      return routePath
    }
  }
}
</script>
