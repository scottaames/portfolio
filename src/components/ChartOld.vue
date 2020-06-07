<template>
  <div class="column is-6">
    <D3BarChart
      v-if="true"
      class="animated"
      :height="600"
      :config="chart_config"
      :datum="chart_data"
    ></D3BarChart>
  </div>
</template>

<script>
import { D3BarChart } from 'vue-d3-charts'

export default {
  name: 'Chart',
  components: {
    D3BarChart,
  },
  data() {
    return {
      chart_config: {
        key: 'tech',
        values: ['value'],
        axis: {
          yTitle: false,
          xTitle: 'tech',
          yFormat: '.0f',
          xFormat: '.0f',
          yTicks: 0,
          xTicks: 9,
        },
        color: {
          current: '#00d1b2',
        },
        currentKey: false,
        labelRotation: 45,
        margin: {
          top: 5,
          right: 5,
          bottom: 5,
          left: 5,
        },
        orientation: 'horizontal',
        tooltip: { label: 'tech' },
        transition: {
          duration: 2000,
          ease: 'easePolyOut',
        },
      },
      chart_data: [
        { tech: 'CSS', value: 28 },
        { tech: 'JavaScript', value: 35 },
        { tech: 'Vue', value: 60 },
        { tech: 'React', value: 65 },
        { tech: 'Java', value: 65 },
        { tech: 'Python', value: 65 },
        { tech: 'Angular', value: 65 },
        { tech: 'Bootstrap', value: 65 },
        { tech: 'Node.js', value: 65 },
      ],
    }
  },
}
</script>

<style lang="scss">
.domain {
  opacity: 0;
}
.tick {
  line {
    opacity: 0;
  }
  text {
    fill: purple;
    color: black;
    font-size: 12px;
    white-space: normal;
    opacity: 1;
  }
}
.chart {
  &--barchart {
    font-size: 12px;
  }
  &__bar--barchart {
    height: 1.5rem;
    border-radius: 50%;
  }
  &__label--barchart {
    color: black;
    opacity: 1;
  }
  &__axis-x {
    fill: black;
    text-anchor: initial;
    stroke: #a4a4a4;
  }
}
</style>
