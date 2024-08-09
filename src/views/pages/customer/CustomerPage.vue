<script lang="ts" setup>
import { onMounted } from 'vue';
import { useGetCheckUserAccountData } from './actions/getCustomer';
import CustomerTable from './components/CustomerTable.vue';

const {serverData ,loading,getCheckUserAccountData}=useGetCheckUserAccountData()

onMounted(async()=>{

    getCheckUserAccountData()

})
</script>
<template>
   <div class="container">
    <div class="row">
        <h3>Customers</h3>
     
        <div class="col-md-12">
            <div v-if="loading">Loading....</div>
            <div v-else>
                <CustomerTable :checkUserAccountData="serverData?.data"/>
            </div>
            
        </div>
    </div>
   </div>
</template>