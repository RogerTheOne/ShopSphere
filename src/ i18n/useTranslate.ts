import { useI18n } from 'vue-i18n'

export function useTranslate() {
  const { locale } = useI18n()

  const zhToEnMap: Record<string, string> = {
    '首页': 'Home',
    '抓绒保暖，毛毛虫儿童运动鞋26-30': 'Fleece Warm Caterpillar Shoes for Kids 26-30',
    '宝贝上脚活力出街': 'Caterpillar Sports Shoes for Kids',
    '12月好物放送，App领券购买直降120元': 'December Deals, Save ¥120 with App Coupon',
    '无忧退货': 'Hassle-Free Returns',
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
    '合格品': 'Qualified'
    // 你需要把页面上看到的文本全都加入
  }

  const translate = (text: string) => {
    if (locale.value === 'en') {
      return zhToEnMap[text] || text
    }
    return text
  }

  console.log('当前语言：', locale.value)


  return { translate }
}
