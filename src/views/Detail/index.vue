<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useTranslate } from '@/ i18n/useTranslate'
import { getDetail } from '@/apis/detail'

import DetailHot from './components/DetailHot.vue'
import ImageView from '@/components/imageView/index.vue'
import Sku from '@/components/XtxSku/index.vue'
import { ElMessage } from 'element-plus'

import { useCartStore } from '@/stores/cartStore'
const cartStore = useCartStore()



const goods = ref({})
const route = useRoute()
const { t } = useI18n()
const { translate } = useTranslate()
const { locale } = useI18n()

const getGoods = async () => {
  const res = await getDetail(route.params.id)
  console.log('res:', res)
  goods.value = res.result
}

onMounted(() => getGoods())

const skuObj =ref({})
const skuChange = (sku) => {
  console.log('选中的sku：', sku)
  skuObj.value = sku
}

const count = ref(1)
const countChange = (count) =>{
  console.log(count)
}

const addToCart = () => {
  console.log(skuObj.skuId)
  if (skuObj.value.skuId){
    cartStore.addCart({
      id: goods.value.id,
      name: goods.value.name,
      picture: goods.value.mainPictures[0],
      price: goods.value.price,
      count: count.value,
      skuId: skuObj.value.skuId,
      attrsText: skuObj.value.specsText,
      selected: true
      
    })
  }else{
    ElMessage.warning('Please make selection first')
  }
}



const translateSafe = (text) => {
  const zhToEnMap = {
    '抓绒保暖，毛毛虫儿童运动鞋26-30': 'Fleece Warm Caterpillar Shoes for Kids 26-30',
    '宝贝上脚活力出街': 'Caterpillar Sports Shoes for Kids',
    '12月好物放送，App领券购买直降120元': 'December Deals, Save ¥120 with App Coupon',
    '无忧退货': 'Free Returns',
    '快速退款': 'Fast Refunds',
    '免费包邮': 'Free Shipping',
    '了解详情': 'Learn More',
    '销量人气': 'Sales Volume',
    '商品评价': 'Product Reviews',
    '收藏人气': 'Favorites',
    '品牌信息': 'Brand Info',
    '商品详情': 'Product Details',
    '加入购物车': 'Add to Cart',
    '适用年龄': 'Suitable Age',
    '适用场景': 'Suitable Scene',
    '适用季节': 'Seasons',
    '质量等级': 'Quality Level',
    '合格品': 'Qualified',
    '颜色': 'Color',
    '尺码': 'Size',
    '春、冬、秋': 'Spring, Winter, Autumn',
    '6-9岁、3-6岁': '6–9 years, 3–6 years',
    '不限场景': 'Any scene'
  }

  if (typeof text === 'string') {
    const cleaned = text.trim()
    return locale.value.startsWith('en') ? zhToEnMap[cleaned] || cleaned : cleaned
  }

  return ''
}
</script>

<template>
  <div class="xtx-goods-page">
    <div class="container" v-if="goods.details">
      <!-- 面包屑导航 -->
      <div class="bread-container">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">{{ t('home') }}</el-breadcrumb-item>
          
          <el-breadcrumb-item>
            {{ translateSafe(goods.name) }}
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>

      <!-- 商品信息 -->
      <div class="info-container">
        <div>
          <div class="goods-info">
            <!-- 左图 -->
            <div class="media">
              <ImageView :image-list="goods.mainPictures" />
              <ul class="goods-sales">
                <li>
                  <p>{{ t('sales') }}</p>
                  <p>{{ goods.salesCount }}</p>
                  <p><i class="iconfont icon-task-filling"></i>{{ t('sales') }}</p>
                </li>
                <li>
                  <p>{{ t('comments') }}</p>
                  <p>{{ goods.commentCount }}</p>
                  <p><i class="iconfont icon-comment-filling"></i>{{ t('comments') }}</p>
                </li>
                <li>
                  <p>{{ t('favorite') }}</p>
                  <p>{{ goods.collectCount }}</p>
                  <p><i class="iconfont icon-favorite-filling"></i>{{ t('favorite') }}</p>
                </li>
                <li>
                  <p>{{ t('brand') }}</p>
                  <p>{{ goods.brand.nameEn || translate(goods.brand.name) }}</p>
                  <p><i class="iconfont icon-dynamic-filling"></i>{{ t('brand') }}</p>
                </li>
              </ul>
            </div>

            <!-- 右侧规格 -->
            <div class="spec">
              <p class="g-name">{{ translateSafe(goods.name) }}</p>
              <p class="g-desc">{{ translateSafe(goods.desc) }}</p>
              <p class="g-price">
                <span>{{ goods.oldPrice }}</span>
                <span>{{ goods.price }}</span>
              </p>

              <!-- 服务 -->
              <div class="g-service">
                <dl>
                  <dt>{{ t('promo') }}</dt>
                  <dd>{{ translateSafe('12月好物放送，App领券购买直降120元') }}</dd>
                </dl>
                <dl>
                  <dt>{{ t('service') }}</dt>
                  <dd>
                    <span>{{ translateSafe('无忧退货') }}</span>
                    <span>{{ translateSafe('快速退款') }}</span>
                    <span>{{ translateSafe('免费包邮') }}</span>
                    <a href="javascript:;">{{ t('learnMore') }}</a>
                  </dd>
                </dl>
              </div>

              <!-- SKU -->
              <Sku :goods="goods" @change="skuChange"/>
              <el-input-number v-model="count" @change = "countChange" />

              <!-- 按钮 -->
              <div>
                <el-button size="large" class="btn" @click="addToCart">
                  {{ t('addToCart') }}
                </el-button>
              </div>
            </div>
          </div>

          <!-- 底部详情 -->
          <div class="goods-footer">
            <div class="goods-article">
              <div class="goods-tabs">
                <nav>
                  <a>{{ t('detail') }}</a>
                </nav>
                <div class="goods-detail">
                  <!-- 属性 -->
                  <ul class="attrs">
                    <li v-for="item in goods.details.properties" :key="item.name">
                      <span class="dt">{{ translateSafe(item.name) }}</span>
                      <span class="dd">{{ translateSafe(item.value) }}</span>
                    </li>
                  </ul>
                  <!-- 图片 -->
                  <img v-for="img in goods.details.pictures" :src="img" :key="img" alt="" />
                </div>
              </div>
            </div>

            <!-- 右侧热榜推荐 -->
            <div class="goods-aside">
              <DetailHot :hot-type="1" />
              <DetailHot :hot-type="2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped lang='scss'>
.xtx-goods-page {
  .goods-info {
    min-height: 600px;
    background: #fff;
    display: flex;

    .media {
      width: 580px;
      height: 600px;
      padding: 30px 50px;
    }

    .spec {
      flex: 1;
      padding: 30px 30px 30px 0;
    }
  }

  .goods-footer {
    display: flex;
    margin-top: 20px;

    .goods-article {
      width: 940px;
      margin-right: 20px;
    }

    .goods-aside {
      width: 280px;
      min-height: 1000px;
    }
  }

  .goods-tabs {
    min-height: 600px;
    background: #fff;
  }

  .goods-warn {
    min-height: 600px;
    background: #fff;
    margin-top: 20px;
  }

  .number-box {
    display: flex;
    align-items: center;

    .label {
      width: 60px;
      color: #999;
      padding-left: 10px;
    }
  }

  .g-name {
    font-size: 22px;
  }

  .g-desc {
    color: #999;
    margin-top: 10px;
  }

  .g-price {
    margin-top: 10px;

    span {
      &::before {
        content: "¥";
        font-size: 14px;
      }

      &:first-child {
        color: $priceColor;
        margin-right: 10px;
        font-size: 22px;
      }

      &:last-child {
        color: #999;
        text-decoration: line-through;
        font-size: 16px;
      }
    }
  }

  .g-service {
    background: #f5f5f5;
    width: 500px;
    padding: 20px 10px 0 10px;
    margin-top: 10px;

    dl {
      padding-bottom: 20px;
      display: flex;
      align-items: center;

      dt {
        width: 50px;
        color: #999;
      }

      dd {
        color: #666;

        &:last-child {
          span {
            margin-right: 10px;

            &::before {
              content: "•";
              color: $xtxColor;
              margin-right: 2px;
            }
          }

          a {
            color: $xtxColor;
          }
        }
      }
    }
  }

  .goods-sales {
    display: flex;
    width: 400px;
    align-items: center;
    text-align: center;
    height: 140px;

    li {
      flex: 1;
      position: relative;

      ~li::after {
        position: absolute;
        top: 10px;
        left: 0;
        height: 60px;
        border-left: 1px solid #e4e4e4;
        content: "";
      }

      p {
        &:first-child {
          color: #999;
        }

        &:nth-child(2) {
          color: $priceColor;
          margin-top: 10px;
        }

        &:last-child {
          color: #666;
          margin-top: 10px;

          i {
            color: $xtxColor;
            font-size: 14px;
            margin-right: 2px;
          }

          &:hover {
            color: $xtxColor;
            cursor: pointer;
          }
        }
      }
    }
  }
}

.goods-tabs {
  min-height: 600px;
  background: #fff;

  nav {
    height: 70px;
    line-height: 70px;
    display: flex;
    border-bottom: 1px solid #f5f5f5;

    a {
      padding: 0 40px;
      font-size: 18px;
      position: relative;

      >span {
        color: $priceColor;
        font-size: 16px;
        margin-left: 10px;
      }
    }
  }
}

.goods-detail {
  padding: 40px;

  .attrs {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 30px;

    li {
      display: flex;
      margin-bottom: 10px;
      width: 50%;

      .dt {
        width: 100px;
        color: #999;
      }

      .dd {
        flex: 1;
        color: #666;
      }
    }
  }

  >img {
    width: 100%;
  }
}

.btn {
  margin-top: 20px;

}

.bread-container {
  padding: 25px 0;
}
</style>