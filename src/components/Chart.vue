<template>
  <div class="columns is-multiline animated bars-wrap">
    <div
      v-for="item in chartData"
      :key="item.technology"
      class="column is-full bar flex"
    >
      <div class="bar fill" :style="getWidth(item.value)">
        <div class="tag flex">{{ item.technology }}</div>
      </div>
      <span>{{ item.value }}%</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chart',
  data() {
    return {
      chartData: [
        { technology: 'CSS', value: 90 },
        { technology: 'HTML', value: 90 },
        { technology: 'JavaScript', value: 80 },
        { technology: 'Vue', value: 80 },
        { technology: 'React', value: 70 },
        { technology: 'Java', value: 70 },
        { technology: 'Python', value: 70 },
        { technology: 'Bootstrap', value: 70 },
        { technology: 'Angular', value: 60 },
        { technology: 'Node.js', value: 60 },
        { technology: 'Sketch', value: 60 },
      ],
    }
  },
  methods: {
    getWidth(value) {
      return 'width: ' + value + '%'
    },
  },
}
</script>

<style lang="sass" scoped>
.flex
  align-items: center
  display: flex
  flex-direction: column
  justify-content: center
.bars-wrap
  margin: 50px auto 0 auto
  max-width: 90%
  width: calc(100% - 15px)
  justify-content: center
  align-items: center
.bar
  align-items: flex-end
  background-color: #eee
  color: #666
  font-size: 11pt
  height: 28px
  margin: 0 0 12px 0
  position: relative
  padding: 0
  .tag
    left: 0
    position: absolute
    top: 0
    background-color: darken(#00d1b2, 10)
    border-top-right-radius: 0
    border-bottom-right-radius: 0
    color: #fff
    height: 100%
    width: 100px
    font-size: 1rem
    font-family: 'Raleway Bold', sans-serif !important
    font-weight: 600
  .fill
    background-color: #00d1b2
    left: 0
    position: absolute
    top: 0
    opacity: 1
    padding: 0
  span
    font-size: 1rem
    padding: 0 8px 0 0
    z-index: 1
    font-style: italic


@media screen and (min-width: 768px)
  .bars-wrap
    margin: 0 0 0 0
</style>
