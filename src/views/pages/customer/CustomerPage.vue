<script lang="ts" setup>
import { onMounted } from 'vue'
import { useGetCheckUserAccountData, type ICheckUserAccount } from './actions/getCustomer'
import CustomerTable from './components/CustomerTable.vue'
import { confirmDelation } from '@/helper/sweetAlert'
import { useBlockOrUnblockUser } from './actions/blockOrUnblockUser'

const { serverData, loading, getCheckUserAccountData } = useGetCheckUserAccountData()

const { blockOrUnblockUser } = useBlockOrUnblockUser()

async function _blockOrUnblockUser(user: ICheckUserAccount) {
  confirmDelation('do you want to block or unblock user ?')
    .then(async () => {
      await blockOrUnblockUser(user?.user_id)
      getCheckUserAccountData()
    })
    .catch((error) => console.log(error))
}

onMounted(async () => {
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
          <CustomerTable
            @blockOrUnblockUser="_blockOrUnblockUser"
            :checkUserAccountData="serverData?.data"
          />
        </div>
      </div>
    </div>
  </div>
</template>
