<script setup lang="ts">
import { onMounted } from 'vue'
import { useCategoryStore } from '@/stores/category'

const categoryStore = useCategoryStore()

onMounted(() => {
  categoryStore.fetchCategory()
})
</script>

<template>
  <header class="app-header">
    <div class="container">
      <h1 class="logo">
        <RouterLink to="/">ShopSphere</RouterLink>
      </h1>
      
      <ul class="app-header-nav">
        <li v-for="item in categoryStore.categoryList" :key="item.id">
          <RouterLink active-class="active" :to="`/category/${item.id}`">
            {{ item.name }}
          </RouterLink>
        </li>
      </ul>

      <div class="search">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="Search">
      </div>
    </div>
  </header>
</template>



<style scoped lang='scss'>
.app-header {
  background: #fff;

  .container {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 200px;

    a {
      display: block;
      height: 132px;
      width: 100%;
      text-indent: -9999px;
      background: url('@/assets/images/logo.png') no-repeat center 18px / contain;
    }
  }

  .app-header-nav {
    display: flex;
    padding-left: 40px;
    position: relative;
    z-index: 998;
    width: auto; /* ✅ 让它根据内容自适应 */
    margin-right: 40px; /* ✅ 给 search 预留间距 */
  
    li {
      margin-right: 40px;
      width: auto; // ✅ 删除固定宽度
      text-align: center;
      white-space: nowrap; // ✅ 防止英文换行
  
      a {
        font-size: 16px;
        line-height: 32px;
        height: 32px;
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

  .search {
    width: 200px; /* ✅ 给足空间 */
    height: 32px;
    position: relative;
    border-bottom: 1px solid #e7e7e7;
    display: flex; /* ✅ 改用 flex 对齐图标和输入框 */
    align-items: center;

    .icon-search {
      font-size: 18px;
      margin-left: 5px;
      margin-right: 5px; /* ✅ 给 input 留空间 */
    }

    input {
      flex: 1; /* ✅ 自动填充剩余空间 */
      border: none;
      outline: none;
      font-size: 14px;
      color: #666;
    }
  }

  .cart {
    width: 50px;

    .curr {
      height: 32px;
      line-height: 32px;
      text-align: center;
      position: relative;
      display: block;

      .icon-cart {
        font-size: 22px;
      }

      em {
        font-style: normal;
        position: absolute;
        right: 0;
        top: 0;
        padding: 1px 6px;
        line-height: 1;
        background: $helpColor;
        color: #fff;
        font-size: 12px;
        border-radius: 10px;
        font-family: Arial;
      }
    }
  }
}
</style>