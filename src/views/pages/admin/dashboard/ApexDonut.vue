
<template>
    <apexchart type="donut" width="380" :options="chartOptions" :series="series"></apexchart>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
        el: '#app',
        // components: {
        //   apexchart: apexchart,
        // },
        data(){
          
         return{
          series: [44, 55],
          chartOptions: {
            chart: {
              width: 380,
              type: 'donut',
              dropShadow: {
                enabled: true,
                color: '#111',
                top: -1,
                left: 3,
                blur: 3,
                opacity: 0.2
              }
            },
            stroke: {
              width: 0,
            },
            plotOptions: {
              pie: {
                donut: {
                  labels: {
                    show: true,
                    total: {
                      showAlways: true,
                      show: true
                    }
                  }
                }
              }
            },
            labels: ["Expenses", "Incomes"],
            dataLabels: {
              dropShadow: {
                blur: 3,
                opacity: 0.8
              }
            },
            fill: {
            type: 'pattern',
              opacity: 1,
              pattern: {
                enabled: true,
                style: ['verticalLines', 'squares', 'horizontalLines', 'circles','slantedLines'],
              },
            },
            states: {
              hover: {
                filter: 'none'
              }
            },
            theme: {
              palette: 'palette1'
            },
            title: {
              text: "Incomes vs Expenses"
            },
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]
          },
         }
          
          
        },
        
      });
  </script>
  