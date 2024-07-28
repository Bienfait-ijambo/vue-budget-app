import { getUserData } from '@/helper/auth'
import { APP } from './App'

type HttpVerbType = 'GET' | 'POST' | 'PUT' | 'DELETE'

export function httpTimeOut(message: string, timeout = 6000) {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      reject(new Error(message))
    }, timeout)
  })
}

export function makeHttpReq<TInput, TResponse>(
  endpoint: string,
  verb: HttpVerbType,
  input?: TInput
) {
  return new Promise<TResponse>(async (resolve, reject) => {
    try {
      const userData = getUserData()
      const res = await Promise.race([
        fetch(`${APP.apiBaseURL}/${endpoint}`, {
          method: verb,
          headers: {
            'content-type': 'application/json',
            Authorization: 'Bearer ' + userData?.token?.accessToken
          },
          body: JSON.stringify(input)
        }),
        httpTimeOut('Server Error')
      ])

      const data: TResponse = await (res as Response).json()

      if (!(res as Response).ok) {
        reject(data)
      }
      resolve(data)
    } catch (error) {
      reject(error)
    }
  })
}

export function makeHttpReq2<TInput, TResponse>(
  endpoint: string,
  verb: HttpVerbType,
  input?: TInput
) {
  return new Promise<TResponse>(async (resolve, reject) => {
    try {
      const res = await Promise.race([
        fetch(`${APP.baseURL}/${endpoint}`, {
          method: verb,
          headers: {
            'content-type': 'application/json',
            Authorization: 'Bearer '
          },
          body: JSON.stringify(input)
        }),
        httpTimeOut('Server Error')
      ])

      const data: TResponse = await (res as Response).json()

      if (!(res as Response).ok) {
        reject(data)
      }
      resolve(data)
    } catch (error) {
      reject(error)
    }
  })
}
