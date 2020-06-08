<template>
  <div style="display:block;">
    <div class="card" :style="{ backgroundImage: `url(${imageUrl})` }"></div>
    <div class="text">some text</div>
  </div>
</template>

<script>
export default {
  name: 'PostCard',
  props: {
    title: String,
    subtitle: String,
    language: String,
    imageUrl: String,
    githubUrl: String,
    demoUrl: String,
  },
  data() {
    return {}
  },
}
</script>

<style lang="sass">
.card
  display: inline-block
  height: 300px
  max-width: 100%
  transition: opacity 0.5s
  width: 300px
  box-shadow: none !important
  background-position: center !important
  background-size: cover !important
  background-repeat: no-repeat !important
</style>
