import { ItineraryDay } from './types';

export const ITINERARY_DATA: ItineraryDay[] = [
  {
    day: 0,
    title: "住宿、交通與換匯",
    activities: [
      {
        id: "info-1",
        time: "團體",
        title: "行程總覽",
        location: "馬來西亞",
        mapQuery: "Malaysia",
        icon: "sight",
        description: "人數：6大・3老・4小。日期：2025/1/19-1/26。部分景點3歲不需門票；60歲半價。"
      },
      {
        id: "info-car",
        time: "交通",
        title: "包車資訊 (Day 2,3,5,7)",
        location: "全程",
        mapQuery: "Kuala Lumpur",
        icon: "transport",
        description: "時段：09:00–19:00 (10小時)。費用：RM 4700 (超時 RM80/hr)。"
      },
      {
        id: "hotel-kl",
        time: "住宿",
        title: "吉隆坡：Berjaya Times Square Hotel",
        location: "成功時代廣場酒店",
        mapQuery: "Berjaya Times Square Hotel, Kuala Lumpur",
        icon: "hotel",
        description: "Entrance 2 可直達大廳與電梯。連通百貨與室內兒童樂園(5F/7F)。鄰近 BTS Bukit Bintang 輕軌站。附近有 SCG 自助洗衣店 (24H)。"
      },
      {
        id: "hotel-pen1",
        time: "住宿",
        title: "檳城 (1/23-25)：Codrington House",
        location: "Codrington House",
        mapQuery: "Codrington House - Boutique Apartments, Penang",
        icon: "hotel",
        description: "公寓式飯店 (Boutique Apartments)。"
      },
      {
        id: "hotel-pen2",
        time: "住宿",
        title: "檳城 (1/25-26)：Burmahtel Hotel",
        location: "貝瑪泰飯店",
        mapQuery: "Burmahtel Hotel, Penang",
        icon: "hotel",
        description: "回程前一晚住宿。"
      },
      {
        id: "money",
        time: "換匯",
        title: "吉隆坡換匯重點",
        location: "武吉免登周邊",
        mapQuery: "Max Money Sungei Wang Plaza",
        icon: "money",
        description: "1. Max Money (Sungei Wang 2)：距飯店500m，至22:00 (匯率佳)。\n2. Suka Money Changer (亞羅街)：距800m，10:30-19:30 (匯率佳評價高)。\n3. E-Globex (時代廣場 5F)：10:00-18:00 (匯率佳)。\n4. Suria Muhabat (時代廣場 1F)：匯率較差。"
      }
    ]
  },
  {
    day: 1,
    title: "1/19 抵達吉隆坡",
    date: "2025/1/19",
    activities: [
      {
        id: "d1-flight",
        time: "13:35",
        title: "高雄起飛",
        location: "高雄國際機場",
        mapQuery: "Kaohsiung International Airport",
        icon: "flight",
        description: "航班前往吉隆坡 (KUL)，18:00 抵達 (飛行 4h25m)。"
      },
      {
        id: "d1-dinner",
        time: "18:30",
        title: "機場素食晚餐",
        location: "KLIA2",
        mapQuery: "Vegtalk Vegetarian, KLIA2",
        icon: "food",
        description: "Vegtalk (KLIA2 Level 2) 或 華陽茶室 (蛋塔/冰火菠蘿包/咖啡)。"
      },
      {
        id: "d1-trans",
        time: "19:30",
        title: "前往飯店",
        location: "吉隆坡市區",
        mapQuery: "Berjaya Times Square Hotel",
        icon: "transport",
        description: "機場接送至成功時代廣場飯店 (約1小時)。"
      },
      {
        id: "d1-night",
        time: "21:00",
        title: "夜遊與採買",
        location: "武吉免登",
        mapQuery: "Jalan Alor Food Street",
        icon: "shopping",
        description: "1. 亞羅街夜市 (800m，至凌晨)。\n2. 金河廣場 (550m，至22:00 撿便宜)。\n3. 柏威年廣場 (1km，至22:00)。推薦素漢堡：RIGHTSIDE FAST FOOD @ PAVILION KL。"
      }
    ]
  },
  {
    day: 2,
    title: "1/20 黑風洞與雲頂 (包車)",
    date: "2025/1/20",
    activities: [
      {
        id: "d2-batu",
        time: "09:00",
        title: "黑風洞 Batu Caves",
        location: "黑風洞",
        mapQuery: "Batu Caves",
        icon: "nature",
        description: "飯店前往約30分。印度教聖地，彩虹階梯。"
      },
      {
        id: "d2-outlet",
        time: "10:30",
        title: "Awana Outlet 購物",
        location: "Genting Highlands Premium Outlets",
        mapQuery: "Genting Highlands Premium Outlets",
        icon: "shopping",
        description: "前往雲頂纜車站約1小時。建議先逛街再上山，此商城折扣高。"
      },
      {
        id: "d2-cable",
        time: "12:30",
        title: "雲頂纜車 & 清水岩寺",
        location: "Awana SkyWay",
        mapQuery: "Awana SkyWay",
        icon: "transport",
        description: "通道C。Awana → 清水岩寺 → SkyAvenue。\n單程 RM11 | 來回 RM19 | 90cm以下免費。"
      },
      {
        id: "d2-lunch",
        time: "13:30",
        title: "午餐",
        location: "雲頂高原",
        mapQuery: "SkyAvenue Genting",
        icon: "food",
        description: "清水岩寺素食館 或 SkyAvenue Vegtalk。"
      },
      {
        id: "d2-genting",
        time: "14:30",
        title: "雲頂 SkyAvenue",
        location: "SkyAvenue",
        mapQuery: "SkyAvenue Genting",
        icon: "entertainment",
        description: "賭場、樂園、商場。結束後原路下山。"
      },
      {
        id: "d2-dinner",
        time: "18:00",
        title: "晚餐：心靈之素",
        location: "Pure Heart Vegetarian",
        mapQuery: "Pure Heart Vegetarian",
        icon: "food",
        description: "位於黑風洞附近。"
      },
      {
        id: "d2-back",
        time: "19:30",
        title: "返回飯店",
        location: "吉隆坡",
        mapQuery: "Berjaya Times Square Hotel",
        icon: "transport",
        description: "車程約30分鐘。也可選擇前往雙峰塔 & KLCC 公園看生命之河燈光秀 (19:00-22:00)。"
      }
    ]
  },
  {
    day: 3,
    title: "1/21 馬六甲古城 (包車)",
    date: "2025/1/21",
    activities: [
      {
        id: "d3-mosque",
        time: "09:00",
        title: "粉紅清真寺",
        location: "Putrajaya",
        mapQuery: "Putra Mosque",
        icon: "sight",
        description: "飯店前往約35分。接著前往馬六甲(約2小時)。"
      },
      {
        id: "d3-malacca",
        time: "12:00",
        title: "馬六甲重點 (步行)",
        location: "馬六甲市區",
        mapQuery: "Dutch Square (Red Square) Melaka",
        icon: "sight",
        description: "紅屋區、鐘樓、基督堂、聖保羅山、三叔公煎蕊、寶山亭、娘惹博物館、旋轉塔(票價約台幣203元)、雞場街自由逛。"
      },
      {
        id: "d3-cruise",
        time: "13:30",
        title: "馬六甲河遊船",
        location: "Melaka River Cruise",
        mapQuery: "Melaka River Cruise Boarding Port",
        icon: "nature",
        description: "遊船時間約45分鐘。"
      },
      {
        id: "d3-lunch",
        time: "12:30",
        title: "午餐建議",
        location: "馬六甲",
        mapQuery: "Man Yuan Fang Vegetarian Restaurant",
        icon: "food",
        description: "1. 滿緣坊素食 (首選，12:00-22:00)。\n2. 水仙素食圓 (7:30-13:30)。"
      },
      {
        id: "d3-leave",
        time: "16:00",
        title: "離開馬六甲",
        location: "返回吉隆坡",
        mapQuery: "Kuala Lumpur",
        icon: "transport",
        description: "16:00-16:30 出發返回。"
      },
      {
        id: "d3-dinner",
        time: "18:30",
        title: "晚餐：海南頭",
        location: "Hailam Vege Kopitiam",
        mapQuery: "Hailam Vege Kopitiam",
        icon: "food",
        description: "8:30-20:30。海南頭必吃。餐後自行返回飯店(13分鐘)，或去雙峰塔看燈光秀。"
      }
    ]
  },
  {
    day: 4,
    title: "1/22 吉隆坡市區 (自由行)",
    date: "2025/1/22",
    activities: [
      {
        id: "d4-morning",
        time: "09:00",
        title: "城市歷史漫步",
        location: "獨立廣場",
        mapQuery: "Merdeka Square",
        icon: "sight",
        description: "獨立廣場 → 中央藝術坊 → 茨廠街 → 鬼仔巷 (車程13-15分鐘)。"
      },
      {
        id: "d4-lunch",
        time: "12:00",
        title: "午餐：The Hungry Tapir",
        location: "鬼仔巷附近",
        mapQuery: "The Hungry Tapir",
        icon: "food",
        description: "12:00-22:00。高評價必吃，近鬼仔巷。"
      },
      {
        id: "d4-afternoon",
        time: "14:00",
        title: "下午/晚上 地標巡禮",
        location: "吉隆坡市區",
        mapQuery: "Petronas Twin Towers",
        icon: "sight",
        description: "吉隆坡塔 (KL Tower)、雙峰塔 & KLCC 公園、生命之河燈光秀 (19:00-22:00)。"
      },
      {
        id: "d4-dinner",
        time: "18:00",
        title: "晚餐建議 (擇一)",
        location: "武吉免登",
        mapQuery: "Pavilion Kuala Lumpur",
        icon: "food",
        description: "1. 天苑素食 (高評價必吃 10:00-19:00)。\n2. 意素軒吃到飽 (11:00-14:30, 17:30-20:30)。\n3. RIGHTSIDE FAST FOOD (Pavilion KL 10:00-21:45)。\n4. Minf Houze Vegan Café (柏威年後面，距飯店600m)。"
      }
    ]
  },
  {
    day: 5,
    title: "1/23 怡保 → 檳城 (包車)",
    date: "2025/1/23",
    activities: [
      {
        id: "d5-move",
        time: "09:00",
        title: "前往怡保",
        location: "怡保",
        mapQuery: "Ipoh",
        icon: "transport",
        description: "成功時代廣場 → 怡保 (2.5小時)。"
      },
      {
        id: "d5-ipoh",
        time: "11:30",
        title: "怡保步行",
        location: "二奶巷",
        mapQuery: "Concubine Lane, Ipoh",
        icon: "sight",
        description: "二奶巷、壁畫街、火車站、鐘樓、孔靈廣場。3點前離開古城區前往霹靂洞。"
      },
      {
        id: "d5-lunch",
        time: "12:30",
        title: "午餐建議 (擇一)",
        location: "怡保市區",
        mapQuery: "Vegan Delights Cafe Ipoh",
        icon: "food",
        description: "1. Vegan Delights Cafe (中西式 11:00–14:45, 17:30–20:30)。\n2. YC Vege Life Cafe (緣成素食坊，華夫餅/烤麵包 8:00~19:00)。"
      },
      {
        id: "d5-cave",
        time: "15:00",
        title: "霹靂洞",
        location: "Perak Cave Temple",
        mapQuery: "Perak Cave Temple",
        icon: "nature",
        description: "需在 16:00 前離開。"
      },
      {
        id: "d5-penang",
        time: "16:00",
        title: "前往檳城",
        location: "檳城",
        mapQuery: "Penang",
        icon: "transport",
        description: "車程約 2 小時。入住 Codrington House。"
      },
      {
        id: "d5-dinner",
        time: "19:00",
        title: "晚餐：品味舒食",
        location: "Idealite",
        mapQuery: "Idealite Penang",
        icon: "food",
        description: "9:00-21:00。位於飯店旁。"
      }
    ]
  },
  {
    day: 6,
    title: "1/24 檳城自由行",
    date: "2025/1/24",
    activities: [
      {
        id: "d6-market",
        time: "06:00",
        title: "在地早市",
        location: "Pulau Tikus Wet Market",
        mapQuery: "Pulau Tikus Wet Market",
        icon: "shopping",
        description: "距離飯店 190m。"
      },
      {
        id: "d6-breakfast",
        time: "08:00",
        title: "早餐",
        location: "Six Spring Vegetarian",
        mapQuery: "Six Spring Vegetarian Cafe",
        icon: "food",
        description: "1.4公里，5分鐘車程 (營業至20:00)。"
      },
      {
        id: "d6-temple",
        time: "10:00",
        title: "佛寺與市集",
        location: "泰佛寺",
        mapQuery: "Wat Chayamangkalaram",
        icon: "sight",
        description: "泰佛寺 & 緬甸佛寺 (600m)。Hin Bus Depot 市集 (週末10:00)。"
      },
      {
        id: "d6-lunch",
        time: "12:00",
        title: "午餐：Pinxin",
        location: "Pinxin Vegan Cuisine",
        mapQuery: "Pinxin Vegan Cuisine",
        icon: "food",
        description: "11:00-20:00。評價破千必吃，步行6分鐘。"
      },
      {
        id: "d6-afternoon",
        time: "14:00",
        title: "喬治市古蹟區",
        location: "姓氏橋",
        mapQuery: "Chew Jetty",
        icon: "sight",
        description: "姓氏橋、舊城區 (1.5km 搭車)。"
      },
      {
        id: "d6-view",
        time: "17:00",
        title: "The Top 天空步道",
        location: "光大廣場",
        mapQuery: "The Top Penang",
        icon: "entertainment",
        description: "68層彩虹天空步道、觀景台、天空之橋。(KLOOK票價台幣429; 老小402)。"
      },
      {
        id: "d6-dinner",
        time: "19:00",
        title: "晚餐宵夜選擇",
        location: "檳城市區",
        mapQuery: "Lily's Vegetarian Kitchen",
        icon: "food",
        description: "1. Lily's Vegetarian (近光大, 8:00-19:45)。\n2. 禪心素食合菜。\n3. Plant A Seed Vegan (日式拉麵/壽司)。\n4. Neko Vegan House (壽司/炸餃)。\n5. Brown Poodle Cafe (西餐好吃, 車程15分)。\n6. SUSU Vegan Mylk Bar (素漢堡)。\n7. Vegan Falafel Penang (至凌晨2點)。"
      }
    ]
  },
  {
    day: 7,
    title: "1/25 檳城升旗山 (包車)",
    date: "2025/1/25",
    activities: [
      {
        id: "d7-move",
        time: "09:00",
        title: "退房與移動",
        location: "Burmahtel Hotel",
        mapQuery: "Burmahtel Hotel",
        icon: "hotel",
        description: "早餐可叫外送或去 Six Spring。退房並先運送行李至 Burmahtel Hotel。"
      },
      {
        id: "d7-hill",
        time: "10:00",
        title: "升旗山 The Habitat",
        location: "Penang Hill",
        mapQuery: "The Habitat Penang Hill",
        icon: "nature",
        description: "搭乘纜車上山，體驗熱帶雨林天空步道 (猴子橋)。\n門票：3歲免費，成人MR60，老小RM40 (KLOOK)。"
      },
      {
        id: "d7-sight",
        time: "13:30",
        title: "極樂寺 / 清真寺",
        location: "Kek Lok Si Temple",
        mapQuery: "Kek Lok Si Temple",
        icon: "sight",
        description: "檳城清真寺 / 極樂寺 或 再遊舊城區。"
      },
      {
        id: "d7-checkin",
        time: "16:00",
        title: "入住",
        location: "Burmahtel Hotel",
        mapQuery: "Burmahtel Hotel",
        icon: "hotel",
        description: "入住休息。午晚宵夜可參考 Day 6 的選擇。"
      }
    ]
  },
  {
    day: 8,
    title: "1/26 溫暖回家",
    date: "2025/1/26",
    activities: [
      {
        id: "d8-airport",
        time: "03:00",
        title: "前往機場",
        location: "檳城國際機場",
        mapQuery: "Penang International Airport",
        icon: "transport",
        description: "凌晨專車送機。飯店 → 機場。"
      },
      {
        id: "d8-flight",
        time: "06:00",
        title: "起飛",
        location: "PEN -> KUL -> KHH",
        mapQuery: "Penang International Airport",
        icon: "flight",
        description: "檳城(06:00) -> 吉隆坡(07:00) -> 高雄(12:35)。"
      }
    ]
  }
];
