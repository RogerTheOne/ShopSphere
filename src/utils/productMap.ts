// src/utils/productMap.ts

// 分类映射（categoryMap）：中文分类 -> 英文分类 + 英文促销信息
export const categoryMap: Record<string, { name: string; saleInfo?: string }> = {
  '居家': { name: 'Home', saleInfo: '20% off for 3 items' },
  '美食': { name: 'Food', saleInfo: 'Big Discounts on Bundles' },
  '服饰': { name: 'Fashion', saleInfo: 'Season Sale - Up to 30% Off' },
  '母婴': { name: 'Mother & Baby', saleInfo: 'Exclusive Baby Essentials' }
}

// 商品映射（goodsMap）：中文商品 -> 英文名称 + 英文描述
export const goodsMap: Record<string, { name: string; desc: string }> = {
  // 居家
  '钻石陶瓷涂层多用锅18cm 小奶锅': {
    name: 'Diamond Ceramic Coated Multi-Purpose Pot 18cm',
    desc: 'Safe and durable, easy to clean'
  },
  '给衣柜减减肥，真空防潮压缩袋': {
    name: 'Vacuum Compression Bags for Closet',
    desc: 'Manual compression, saves space'
  },
  '爆款明星好物，抽屉式透明储物柜': {
    name: 'Clear Drawer Storage Cabinet',
    desc: 'Easy access, stackable design'
  },
  '朱炳仁·铜彩色生肖铜雕摆件': {
    name: 'Bronze Zodiac Sculpture by Zhu Bingren',
    desc: 'Auspicious mascot with artistic design'
  },
  '朱炳仁铜·猫型吉祥物装饰工艺摆件': {
    name: 'Bronze Cat Lucky Ornament by Zhu Bingren',
    desc: 'Brings good fortune and prosperity'
  },
  '衣柜省空间神器，棉麻涤·收纳挂袋': {
    name: 'Hanging Closet Organizer',
    desc: 'Durable cotton-linen blend, strong support'
  },
  '暖腰暖腹暖胃，蕲艾暖宫腰带': {
    name: 'Warm Belt for Abdomen and Waist',
    desc: 'Relieves menstrual pain with gentle heat'
  },

  // 美食
  '古田糯耳150克': {
    name: 'Gutian Glutinous Fungus 150g',
    desc: 'Softens easily, thickens soups quickly'
  },
  '免浸泡，12种谷物一次同享，五谷米400克': {
    name: '12-Grain Mix Rice 400g',
    desc: 'No soaking needed, cooks evenly'
  },
  '竹荪25克': {
    name: 'Bamboo Fungus 25g',
    desc: 'Delicate flavor, ideal for soups'
  },
  '手工八年老陈醋500毫升': {
    name: '8-Year Aged Vinegar 500ml',
    desc: 'Rich, authentic flavor with deep aroma'
  },
  '来自东北的“黑珍珠”，黑米470克*3袋': {
    name: 'Premium Black Rice 470g x 3 Bags',
    desc: 'Rich aroma, chewy texture'
  },
  '莆田桂圆肉368克': {
    name: 'Putian Dried Longan 368g',
    desc: 'Sweet, chewy, and aromatic'
  },
  '加量50%不加价，贵州兴仁薏仁米600克': {
    name: 'Guizhou Coix Seed 600g',
    desc: 'Full grains, naturally fragrant'
  },
  '德国莫泽尔传统版雷司令干白2019750ml': {
    name: 'Mosel Riesling Dry White Wine 750ml',
    desc: 'Classic German wine with rich aroma'
  },

  // 服饰
  '自我态度男式多功能多层格局休闲胸包': {
    name: 'Men’s Multi-Pocket Crossbody Bag',
    desc: 'Trendy design with multiple compartments'
  },
  '轻松出行复古经典老花时尚女式钥匙包': {
    name: 'Vintage Women’s Key Pouch',
    desc: 'Classic design for easy travel'
  },
  '别致优雅男式新潮头层牛皮钥匙包': {
    name: 'Men’s Genuine Leather Key Case',
    desc: 'Convenient rotating hooks'
  },
  '英伦长柄自动晴雨伞': {
    name: 'British Style Automatic Umbrella',
    desc: 'Elegant design, perfect for rain'
  },
  '男式零感无压加厚保暖羽绒服': {
    name: 'Men’s Ultra-Light Down Jacket',
    desc: 'Lightweight and warm for winter'
  },
  '「一件三穿好过冬」男中长款鹅绒防水外套': {
    name: '3-in-1 Waterproof Goose Down Coat',
    desc: 'Adaptable for all weather'
  },
  '轻商旅小黑盒耐磨防刮纯PC拉杆箱（20/24）': {
    name: 'Durable PC Trolley Suitcase (20/24 inch)',
    desc: 'Perfect for business and travel'
  },
  '靓丽色彩，超软一脚蹬运动休闲女鞋': {
    name: 'Slip-On Sport Casual Shoes for Women',
    desc: 'Comfortable and stylish for outings'
  },

  // 母婴
  '趣味小恐龙绣花，男童灯芯绒衬衫': {
    name: 'Corduroy Shirt with Dinosaur Embroidery',
    desc: 'Fun embroidery, premium comfort'
  },
  '舒适软弹，糖果色儿童网孔透气运动鞋25-30': {
    name: 'Kids Mesh Breathable Sneakers',
    desc: 'Candy colors, soft and breathable'
  },
  '防踢鞋头，儿童学步健康机能鞋21-30': {
    name: 'Toddler Walking Shoes',
    desc: 'Protective toe, ergonomic design'
  },
  '新疆棉宝宝时尚涂鸦短袖连体衣59-90cm': {
    name: 'Baby Short-Sleeve Romper with Graffiti',
    desc: 'Soft Xinjiang cotton, breathable'
  },
  '新疆棉，儿童色织条纹短袖连体衣59-90cm': {
    name: 'Kids Striped Short-Sleeve Romper',
    desc: '100% cotton, breathable comfort'
  },
  '儿童亚麻夏凉宽松萝卜裤防蚊裤66-130cm': {
    name: 'Kids Summer Linen Pants',
    desc: 'Loose fit, cool and breathable'
  },
  '纯棉舒适女童印花荷叶袖小衫90-140cm': {
    name: 'Girls Printed Top with Ruffle Sleeves',
    desc: 'Soft cotton, stylish design'
  },
  'ins风小碎花泡泡袖衬110-160cm': {
    name: 'Girls Puff Sleeve Floral Blouse',
    desc: 'Trendy ins-style with floral print'
  }
}
