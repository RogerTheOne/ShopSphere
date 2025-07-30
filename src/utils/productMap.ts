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

/**
 * A mapping of Chinese product names, categories, and descriptions to English.
 */
export const goodsTranslationMap: Record<string, string> = {
  // 商品分类翻译
  '美食': 'Gourmet Food',
  '南北干货': 'Dried Goods',
  '调味酱菜': 'Seasonings & Pickles',
  '方便食品': 'Instant Food',
  '米面粮油': 'Grains & Oils',
  '名酒馆': 'Famous Liquor',
  '进口酒': 'Imported Wine',

  // 商品名称翻译
  '古田糯耳150克': 'Gutian Glutinous Fungus 150g',
  '莆田桂圆肉368克': 'Putian Longan Flesh 368g',
  '楼兰灰枣328克': 'Loulan Gray Jujube 328g',
  '手工八年老陈醋500毫升': '8-Year Aged Handcrafted Vinegar 500ml',
  '下饭神器酸豆角50克*10袋': 'Meal Helper Sour Cowpeas 50g × 10 Bags',
  '组合装牛油300克+清油110克*2+番茄110克*2': 'Hot Pot Oil Combo Set',
  '三分钟即享简餐，日式即食咖喱150克': '3-Minute Japanese Instant Curry 150g',
  '从江香猪油辣椒218克': 'Congjiang Lard Chili Sauce 218g',
  '地道卤香好味道，桂林鲜米粉245克*6盒': 'Authentic Guilin Rice Noodles 245g × 6 Boxes',
  '大丈夫方便面轻巧款私房牛肉味64克*6杯': 'Hero Noodle Cup – Beef Flavor 64g × 6 Cups',
  '北海道风味大虾面61克*6杯': 'Hokkaido Shrimp Noodles 61g × 6 Cups',
  '冻干藤椒豚骨面74克*12盒': 'Freeze-dried Pepper Tonkotsu Noodles 74g × 12',
  '冻干藤椒牛肉面70克*12盒': 'Freeze-dried Pepper Beef Noodles 70g × 12',
  '来自东北的“黑珍珠”，黑米470克*3袋': '"Black Pearl" Northeastern Black Rice 470g × 3',
  '加量50%不加价，贵州兴仁薏仁米600克': '50% Extra – Xingren Job’s Tears 600g',
  '什锦素食粥米500克': 'Mixed Vegetarian Congee Grains 500g',
  '德国莫泽尔传统版雷司令干白2019750ml': 'Mosel Riesling Dry White 2019 750ml',
  '泸州老窖特曲浓香型白酒': 'Luzhou Laojiao Strong Aromatic Baijiu',
  '飞天53%vol500ml贵州茅台酒（带杯）': 'Feitian Moutai 53%vol 500ml (with cup)',
  '玛歌正牌干红750毫升2017年': 'Chateau Margaux Grand Vin Red 750ml 2017',
  '梅乃宿柚子酒720毫升': 'Umenoyado Yuzu Sake 720ml',
  '苏格兰陈年单一麦芽威士忌700毫升': 'Aged Single Malt Scotch Whisky 700ml',
  '百年名庄出品，法国南部干红750毫升': 'Southern France Red Wine from a Centenary Chateau',
  '列级名庄出品，法国普罗旺斯桃红750毫升': 'Provence Rosé from Classified Chateau 750ml',
  '名庄金奖加身，西班牙珍藏干红750毫升': 'Awarded Reserve Red from Spanish Chateau 750ml',
  '经典品种交响曲，智利混酿干白750毫升': 'Chilean Blended Symphony Dry White 750ml',

  // 商品描述翻译
  '加热易糯，一煮即稠': 'Softens easily when heated, thick texture',
  '香甜滑软，弹嫩甘糯': 'Sweet and tender, chewy and glutinous',
  '建莲佳品，稍炖即糯': 'Premium lotus, soft after short boiling',
  '肉实质脆，枣香浓郁': 'Firm and crisp with rich jujube aroma',
  '地道醇香，醋酸浓郁': 'Authentic mellow aroma, rich acidity',
  '180天土窖腌制，酸爽脆嫩': '180-day cellar pickling, tangy and crisp',
  '川渝火锅魂，地道重庆味': 'Essence of Sichuan Hotpot, authentic Chongqing flavor',
  '日式风味，甘香醇厚': 'Japanese flavor, rich and sweet aroma',
  '油润爽辣，苗家手作': 'Oily and spicy, handcrafted by Miao ethnic group',
  '无人工添加防腐剂，鲜嫩爽滑': 'No preservatives, fresh and smooth',
  '非油炸，好吃不上火': 'Non-fried, tasty and gentle on stomach',
  '看得见的大只虾仁，吃得到的日式风味': 'Visible large shrimp, Japanese flavor',
  '汤浓肉鲜，椒麻过瘾': 'Rich broth, fresh meat, peppery kick',
  '椒麻爽辣，面弹肉香，地道川味': 'Peppery and spicy, springy noodles, authentic Sichuan taste',
  '米汁香稠，Q弹醇香': 'Thick rice essence, chewy and aromatic',
  '粒粒饱满，颗颗香糯': 'Full grains, fragrant and glutinous',
  '谷香米糯，营养美味': 'Grain-scented, glutinous and nutritious',
  '来自摩泽尔传奇名庄': 'From legendary Mosel chateau',
  '非遗工艺制作，历经24代传承，至今690余年': 'Traditional craft, 690+ years heritage',
  '茅台飘香，正品溯源': 'Authentic Moutai, fragrant and traceable',
  '波尔多五大名庄玛歌正牌': 'Bordeaux Grand Chateau Margaux',
  '柚香芬芳，清冽百味': 'Fragrant yuzu, refreshing and complex',
  '蒸馏大师监制': 'Supervised by distillation master',
  '法国原产，原瓶进口': 'Imported from France in original bottle',
  '普罗旺斯列级酒庄，优雅精致': 'Elegant classified chateau from Provence',
  '产区名庄，囊获大奖': 'Award-winning estate wine',
  '智利名庄，香气迷人': 'Chilean estate, charming aroma'
}

/**
 * Translate a string using the map; fallback to original text.
 */
export function translate(text: string): string {
  return goodsTranslationMap[text] || text
}
