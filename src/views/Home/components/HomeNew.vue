<script setup lang="ts">
import HomePanel from './HomePanel.vue'
import { findNewAPI } from '@/apis/home'
import { ref, onMounted } from 'vue'

// 映射表（中文 → 英文）
const productMap: Record<string, { name: string; desc: string }> = {
  '钻石陶瓷涂层多用锅18cm 小奶锅': { 
    name: 'Diamond Ceramic Coated Multi-Purpose Pot 18cm', 
    desc: 'Safe and durable, easy to clean' 
  },
  '伊海诗冬日出行多功能防风保暖围脖': { 
    name: 'Inano Electric Tooth Polisher & Interdental Cleaner', 
    desc: 'Protect your teeth with multiple modes' 
  },
  '亮碟多效合一洗涤块495g': {
    name: 'Finish Powerball All-in-One Dishwasher Tabs 495g',
    desc: 'Special for dishwashers, powerful stain removal'
  },
  '日本冰块冰球制冰模具': {
    name: 'Japanese Ice Ball Maker',
    desc: 'Easy ice release with a single press'
  }

}

const newList = ref<any[]>([])

const getNewList = async () => {
  const res = await findNewAPI()
  newList.value = res.result.map((item: any) => ({
    ...item,
    name: productMap[item.name]?.name || item.name,
    desc: productMap[item.name]?.desc || item.desc
  }))
}

onMounted(() => getNewList())
</script>

<template>
  <HomePanel title="Fresh Finds">
    <ul class="goods-list">
      <li v-for="item in newList" :key="item.id">
        <RouterLink :to="`/detail/${item.id}`">
          <img :src="item.picture" alt="" />
          <p class="name">{{ item.name }}</p>
          <p class="price">&yen;{{ item.price }}</p>
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