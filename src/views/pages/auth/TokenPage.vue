<script lang="ts" setup>
import { getUserData, setUserData, UserRole, type userAccountStatusType } from '@/helper/auth'
import { showError } from '@/helper/toastnotification'
import { makeHttpReq, makeHttpReq2 } from '@/http/makeHttpReq'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const codeVerifier = route.query?.code_verifier as string

type OauthTokenInputType = {
  grant_type: 'authorization_code'
  client_id: string
  redirect_uri: string
  code_verifier: string
  code: string
}
type OauthTokenResponseType = {
  token_type: string
  expires_in: number
  refresh_token: string
  access_token: string
}


type userResponseType = {
  id: string
  name: string
  email: string
  role: UserRole
}



async function getAccessTokenAndRefreshToken() {
  const userData = getUserData()

  try {
    const input: OauthTokenInputType = {
      grant_type: 'authorization_code',
      client_id: '9ca9a351-601f-41da-90d8-d2c86f80dc6c',
      redirect_uri: 'http://localhost:5173/callback',
      code_verifier: codeVerifier,
      code: userData?.authorizationCode as string
    }
    const [token,{user,userAccount}] = await Promise.all([
    makeHttpReq2<OauthTokenInputType, OauthTokenResponseType>(
      'oauth/token',
      'POST',
      input
    ),
    makeHttpReq<OauthTokenInputType, {user:userResponseType,userAccount:{
      leftDays:string,
      account_status:userAccountStatusType
    }}>(
    'user_data',
      'POST',
      input
    )
    ])
  
    setUserData({
      user: {
        name:user?.name,
        email: user?.email,
        userId: user?.id,
        role:user?.role
      },

      userAccount:{
        leftDays:userAccount?.leftDays,
        account_status:userAccount?.account_status
      },
   
      token: {
        accessToken: token?.access_token,
        refreshToken: token?.refresh_token
      }
    })

    window.location.href = '/dashboard'
  } catch (error) {
    showError((error as Error).message)
  }
}


onMounted(async () => {
  await getAccessTokenAndRefreshToken()
})
</script>

<template>
  <h1>processing... please wait...</h1>
</template>
