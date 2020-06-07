<template>
  <div class="my-app">
    <D3BarChart :config="chart_config" :datum="chart_data"></D3BarChart>
  </div>
</template>

<script>
import { D3BarChart } from 'vue-d3-charts'

export default {
  components: {
    D3BarChart,
  },
  data() {
    return {
      chart_config: {
        key: 'category',
        values: ['vue'],
        axis: {
          yTitle: false,
          xTitle: false,
          yFormat: '.0f',
          xFormat: '.0f',
          yTicks: 10,
          xTicks: 10,
        },
        color: {
          key: false,
          keys: false,
          scheme: false,
          current: '#1f77b4',
          default: '#AAA',
          axis: '#000',
        },
        currentKey: false,
        labelRotation: 0,
        margin: {
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        },
        orientation: 'horizontal',
        tooltip: { label: false },
        transition: {
          duration: 600,
          ease: 'easeLinear',
        },
      },
      chart_data: [
        { tech: 'CSS', value: 28, category: 'ipsum' },
        { tech: 'JavaScript', value: 35, category: 'dolor' },
        { tech: 'Vue', value: 60, category: 'sit' },
        { tech: 'React', value: 65, category: 'amet' },
        { tech: 'Java', value: 65, category: 'amet' },
        { tech: 'Python', value: 65, category: 'amet' },
        { tech: 'Angular', value: 65, category: 'amet' },
        { tech: 'Bootstrap', value: 65, category: 'amet' },
        { tech: 'Node.js', value: 65, category: 'amet' },
      ],
    }
  },
  // ...
}
</script>

<style lang="scss" scoped></style>
