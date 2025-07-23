import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getCategoryAPI } from '@/apis/layout'

const categoryMap: Record<string, string> = {
  '首页': 'Home',
  '居家': 'Housing',
  '美食': 'Food',
  '服饰': 'Clothing',
  '母婴': 'Baby',
  '个护': 'Personal',
  '严选': 'Selected',
  '数码': 'Digital',
  '运动': 'Sports',
  '杂项': 'Others'
}

interface CategoryItem {
  id: string
  name: string
}

export const useCategoryStore = defineStore('category', () => {
  const categoryList = ref<CategoryItem[]>([])

  const fetchCategory = async () => {
    if (categoryList.value.length === 0) {
      const res = await getCategoryAPI()
      categoryList.value = res.result.map((item: any) => ({
        id: item.id,
        name: categoryMap[item.name] || item.name
      }))
    }
  }

  return { categoryList, fetchCategory }
})
