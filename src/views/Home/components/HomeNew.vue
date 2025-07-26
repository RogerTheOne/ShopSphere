<script setup lang="ts">
import HomePanel from './HomePanel.vue'


import img1 from '@/assets/images/fresh1.jpg'
import img2 from '@/assets/images/fresh2.jpg'
import img3 from '@/assets/images/fresh3.jpg'
import img4 from '@/assets/images/fresh4.jpg'

// 映射表（中文 → 英文）
const newList = [
  {
    id: 1,
    picture: img1,
    name: 'Vintage Computer 70s',
    price: '$149.00'
  },
  {
    id: 2,
    picture: img2,
    name: 'Nike Runner 2025',
    price: '$219.00'
  },
  {
    id: 3,
    picture: img3,
    name: 'PlayStation Controller',
    price: '$69.90'
  },
  {
    id: 4,
    picture: img4,
    name: 'IPhone',
    price: '$1199.00'
  }
]


</script>

<template>
  <HomePanel title="Fresh Finds">
    <ul class="goods-list">
      <li v-for="item in newList" :key="item.id">
        <RouterLink :to="`/detail/${item.id}`">
          <img :src="item.picture" alt="" />
          <p class="name">{{ item.name }}</p>
          <p class="price">{{ item.price }}</p>
        </RouterLink>
      </li>
    </ul>
  </HomePanel>
</template>



<style scoped lang='scss'>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;

  li {
    width: 306px;
    height: 406px;

    background: #f0f9f4;
    transition: all .5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .price {
      color: $priceColor;
    }
  }
}
</style>