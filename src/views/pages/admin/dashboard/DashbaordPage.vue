<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import ApexDonut from './components/ApexDonut.vue';
import { makeHttpReq } from '@/http/makeHttpReq';
import { showError } from '@/helper/toastnotification';


type ResponseType = Array<number> 
  
    const loading = ref(false)
    const serverData = ref<ResponseType>([] as ResponseType)
  
    async function getChartData() {
      try {
       
        loading.value = true
        const data = await makeHttpReq<undefined, ResponseType>('chartdata', 'GET')
        serverData.value = data
        loading.value = false
      } catch (error) {
        showError((error as Error).message)
        loading.value = false
      }
    }


    onMounted(async()=>{
      await getChartData()
    })
</script>

<template>
  <div class="container">
    <h1>Dashboard</h1>

    <div class="row">
      <div class="col-md-4">
        <div v-if="serverData.length>0">
          <ApexDonut :data="serverData"/>
        </div>
        
      </div>
    </div>

  </div>
</template>