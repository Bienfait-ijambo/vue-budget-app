import { showError, successMsg } from '@/helper/toastnotification'
import { makeHttpReq } from '@/http/makeHttpReq'
import { ref } from 'vue'

type ResponseType = { message:string }

export function useBlockOrUnblockUser() {
  const loading = ref(false)

  async function blockOrUnblockUser(userId:number) {
    try {
      loading.value = true
      const data = await makeHttpReq<{userId:number}, ResponseType>
      ('change_user/accounts', 'POST',{userId:userId})
      loading.value = false
      successMsg(data.message)
    } catch (error) {
      showError((error as Error).message)
      loading.value = false
    }
  }

  return { blockOrUnblockUser,  loading }
}
