// stores/user.ts

import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginAPI } from '@/apis/user'
import { useCartStore } from './cartStore'

const userInfo = ref<{
  id: string
  account: string
  mobile: string
  avatar: string
  birthday: string
  cityCode: string
  gender: string
  nickname: string
  profession: string
  provinceCode: string
  token: string
} | null>(null)

export interface LoginParams {
  account: string
  password: string
}

export interface UserInfo {
  id: string
  account: string
  mobile: string
  avatar: string
  birthday: string
  cityCode: string
  gender: string
  nickname: string
  profession: string
  provinceCode: string
  token: string
}



export const useUserStore = defineStore('user', () => {
  // 1. 定义管理用户数据的 state
  const userInfo = ref<UserInfo | null>(null)
  const cartStore = useCartStore()

  // 2. 定义获取接口数据的 action 函数
  const getUserInfo = async (params: LoginParams): Promise<void> => {
    const res = await loginAPI(params)
    userInfo.value = res.result
  }

  const clearUserInfo = () =>{
    userInfo.value = null
    cartStore.clearCart()

  }

  return {
    userInfo,
    getUserInfo,
    clearUserInfo
  }
},{
  persist:true
})
