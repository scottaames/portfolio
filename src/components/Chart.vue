<template>
  <div
    v-scroll-show="{
      active: 'animated',
      offset: this.offsetAmount,
    }"
    class="columns is-multiline bars-wrap slide-in-right"
  >
    <div
      v-for="item in chartData"
      :key="item.technology"
      class="column is-full bar is-flex"
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

<style lang="sass">
section#about .bars-wrap:not(.animated) .fill
  width: 0 !important

section#about .bar:nth-child(1) .fill
  transition: 1.1s 0.2s width ease-in-out

section#about .bar:nth-child(2) .fill
  transition: 1.2s 0.2s width ease-in-out

section#about .bar:nth-child(3) .fill
  transition: 1.3s 0.2s width ease-in-out

section#about .bar:nth-child(4) .fill
  transition: 1.4s 0.2s width ease-in-out

section#about .bar:nth-child(5) .fill
  transition: 1.5s 0.2s width ease-in-out

section#about .bar:nth-child(6) .fill
  transition: 1.6s 0.2s width ease-in-out

section#about .bar:nth-child(7) .fill
  transition: 1.7s 0.2s width ease-in-out

section#about .bar:nth-child(8) .fill
  transition: 1.8s 0.2s width ease-in-out

section#about .bar:nth-child(9) .fill
  transition: 1.9s 0.2s width ease-in-out

section#about .bar:nth-child(10) .fill
  transition: 2s 0.2s width ease-in-out

section#about .bar:nth-child(11) .fill
  transition: 2.1s 0.2s width ease-in-out

$bar-color: #14b2ba
.bars-wrap
  margin: 50px auto 0 auto
  max-width: 90%
  width: calc(100% - 15px)

.bar
  align-items: center !important
  justify-content: flex-end
  background-color: #eee
  color: #666
  font-size: 11pt
  height: 28px
  margin: 0 0 13px 0
  position: relative
  padding: 0 !important
  .tag
    left: 0
    position: absolute
    top: 0
    background-color: darken($bar-color, 10)
    border-top-right-radius: 0
    border-bottom-right-radius: 0
    color: #fff
    height: 100%
    width: 100px
    font-size: 0.85rem
    font-family: 'Raleway Bold', sans-serif !important
    font-weight: 600
  .fill
    left: 0
    position: absolute
    top: 0
    background-color: $bar-color
    opacity: 1
    padding: 0
  span
    font-size: 0.85rem
    padding: 0 8px 0 0
    z-index: 1
    font-style: italic
.bar span
  display: initial

@media screen and (min-width: 768px)
  .bars-wrap
    margin: 0 0 0 0

@media screen and (min-width: 960px)
  .bar
    max-width: 90%
</style>
