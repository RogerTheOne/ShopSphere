<script setup lang="ts">
import { useScroll } from '@vueuse/core'
import { useCategoryStore } from '@/stores/category'
import { onMounted } from 'vue'

const { y } = useScroll(window)
const categoryStore = useCategoryStore()

onMounted(() => {
  categoryStore.fetchCategory()
})
</script>


<template>
  <div class="app-header-sticky" :class="{ show: y > 78 }">
    <div class="container">
      <RouterLink class="logo" to="/" />
      <!-- 动态导航 -->
      <ul class="app-header-nav">
        <li v-for="item in categoryStore.categoryList" :key="item.id">
          <RouterLink :to="`/category/${item.id}`">{{ item.name }}</RouterLink>
        </li>
      </ul>
      <!-- 右侧区域 -->
      <div class="right">
        <RouterLink to="/">Brands</RouterLink>
        <RouterLink to="/">Topics</RouterLink>
      </div>
    </div>
  </div>
</template>



<style scoped lang='scss'>
.app-header-sticky {
  width: 100%;
  height: 80px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
  transform: translateY(-100%);
  opacity: 0;

  &.show {
    transition: all 0.3s linear;
    transform: none;
    opacity: 1;
  }

  .container {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 200px;
    height: 80px;
    background: url("@/assets/images/logo.png") no-repeat right 2px;
    background-size: 160px auto;
  }

  .right {
    display: flex;
    text-align: center;
    padding-left: 40px;
    border-left: 2px solid $xtxColor;

    a {
      margin-right: 40px;
      font-size: 16px;
      line-height: 1;

      &:hover {
        color: $xtxColor;
      }
    }
  }
}

.app-header-nav {
  display: flex;
  padding-left: 40px;
  position: relative;
  z-index: 998;

  li {
    margin-right: 40px;
    text-align: center;
    white-space: nowrap; // ✅ 防止英文换行

    a {
      font-size: 16px;
      line-height: 32px;
      display: inline-block;

      &:hover {
        color: $xtxColor;
        border-bottom: 1px solid $xtxColor;
      }
    }

    .active {
      color: $xtxColor;
      border-bottom: 1px solid $xtxColor;
    }
  }
}

</style>