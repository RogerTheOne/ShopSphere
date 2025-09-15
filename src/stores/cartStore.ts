
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

// 1. 定义购物车商品类型
export interface CartItem {
  id: number
  skuId: number
  name?: string
  price?: number
  count: number
  picture?: string
  selected:boolean
  [key: string]: any  
}

export const useCartStore = defineStore('cart', () => {
  // 2. 定义 state
  const cartList = ref<CartItem[]>([])

  // 3. 定义 action
  const addCart = (goods: CartItem) => {
    console.log('添加', goods)
    const item = cartList.value.find((item) => goods.skuId === item.skuId)
    if (item) {
      item.count++
    } else {
      // 如果没有 count 字段默认设为 1
      cartList.value.push({
        ...goods,
        count: goods.count || 1
      })
    }
  }

  const singleCheck = (skuId: number, selected: boolean) => {
  // 通过skuId找到要修改的那一项 然后把它的selected修改为传过来的selected
  const item = cartList.value.find((item) => item.skuId === skuId)
  item.selected = selected
}

  const delCart = async (skuId: number) => {
     
      const idx = cartList.value.findIndex((item) => skuId === item.skuId)
      cartList.value.splice(idx, 1)
  }

  const allCount = computed(() => cartList.value.reduce((a, c) => a+ c.count, 0))
  const allPrice = computed(() => cartList.value.reduce((a, c) => a+ c.count * c.price, 0))
  return {
    cartList,
    addCart,
    allCount,
    allPrice,
    delCart,
    singleCheck
  }
}, {
  persist: true  // pinia-plugin-persistedstate 插件持久化
})
