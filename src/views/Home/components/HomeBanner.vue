<script setup>
const bannerList = [
  { id: 1, imgUrl: new URL('@/assets/images/banner-1.jpg', import.meta.url).href },
  { id: 2, imgUrl: new URL('@/assets/images/banner_food.jpg', import.meta.url).href },
  { id: 3, imgUrl: new URL('@/assets/images/banner_home.jpg', import.meta.url).href },
  { id: 4, imgUrl: new URL('@/assets/images/banner_sport.jpg', import.meta.url).href },
  { id: 5, imgUrl: new URL('@/assets/images/banner_cloth2.jpg', import.meta.url).href },





]

</script>


<template>
  <div class="home-banner">
    <el-carousel height="700px" arrow="always">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="item.imgUrl" alt="banner" />
      </el-carousel-item>
    </el-carousel>
  </div>
</template>



<style scoped lang='scss'>
.home-banner {
  width: 1240px;
  height: 700px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 700px;
  }
}
</style>