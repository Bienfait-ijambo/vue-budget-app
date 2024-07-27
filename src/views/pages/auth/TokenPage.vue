<script lang="ts" setup>
import { getUserData, setUserData } from '@/helper/auth'
import { showError } from '@/helper/toastnotification'
import {  makeHttpReq2 } from '@/http/makeHttpReq'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const codeVerifier = route.query?.code_verifier as string
const userId = route.query?.userId as string
const userEmail = route.query?.email as string

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

async function getAccessTokenAndRefreshToken() {
  const userData = getUserData()

  try {
    const input: OauthTokenInputType = {
      grant_type: 'authorization_code',
      client_id: '9c968b9c-f756-478a-8034-582dbf65fb6e',
      redirect_uri: 'http://localhost:5173/callback',
      code_verifier: codeVerifier,
      code: userData?.authorizationCode as string
    }
    const data = await makeHttpReq2<OauthTokenInputType, OauthTokenResponseType>(
      'oauth/token',
      'POST',
      input
    )


    setUserData({
       user:{
        email:userEmail,
        userId:userId
       },
      token: {
        accessToken: data?.access_token,
        refreshToken: data?.refresh_token
      }
    })

    window.location.href="/dashboard"

    
  } catch (error) {
    showError((error as Error).message)
  }
}

// $response = Http::asForm()->post('http://passport-app.test/oauth/token', [
//         'grant_type' => 'authorization_code',
//         'client_id' => 'client-id',
//         'redirect_uri' => 'http://third-party-app.com/callback',
//         'code_verifier' => $codeVerifier,
//         'code' => $request->code,
//     ]);
onMounted(async () => {
  await getAccessTokenAndRefreshToken()
})
</script>

<template>
  <h1>callback</h1>
</template>
