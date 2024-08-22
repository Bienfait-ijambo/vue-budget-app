<template>
  <apexchart height="155" type="donut" :options="options" :series="series"></apexchart>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ApexDonut',
  props: {
    data: { type: Array, required: true }
  },
  data() {
    return {
      options: {
        title: {
          text: '',
          align: 'left'
        },
        chart: {
          id: 'apex-donut'
        },

        states: {
          hover: {
            filter: 'none'
          }
        },
        theme: {
          palette: 'palette2'
        },

        labels: ['Income', 'Expenses'],
        colors: [],
        markers: {
          size: 5,
          hover: {
            sizeOffset: 6
          }
        }
        //   xaxis: {
        //     categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        //   },
      },
      series: this.$props.data
    }
  }
})
</script>
