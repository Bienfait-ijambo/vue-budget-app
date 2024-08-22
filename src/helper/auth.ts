export type userAccountStatusType = 'Active' | 'Inactive'

export type LoginResponseType = {
  user?: {
    name?: string
    email: string
    userId: string
    role: string
  }
  authorizationCode?: string
  state?: string
  codeVerifier?: string
  token?: {
    accessToken: string
    refreshToken: string
  }
  userAccount?: {
    leftDays: string
    account_status: userAccountStatusType
  }
}

export enum UserRole {
  ADMIN = 'ADMIN',
  CUSTOMER = 'CUSTOMER'
}

export function setUserData(data: LoginResponseType) {
  localStorage.setItem('userData', JSON.stringify(data))
}

export function getUserData(): LoginResponseType | undefined {
  try {
    const userData: string | null = localStorage.getItem('userData')

    if (typeof userData !== 'object') {
      const loginData: LoginResponseType = JSON.parse(userData)
      return loginData
    }
  } catch (error) {
    console.log((error as Error).message)
  }
}
