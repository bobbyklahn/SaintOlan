export interface StyleData {
  id: number;
  name: string;
  chineseName: string;
  description: string;
  features: string[];
  colors: string[];
  coreElements: string;
  vibe: string;
  images: {
    moodboard: string;
    mockup: string;
    labels: string[]; // Changed to array to support multiple labels
  };
}

export const stylesData: StyleData[] = [
  {
    id: 1,
    name: "Holy Cross",
    chineseName: "圣十字",
    description: "神圣优雅，双色分区设计",
    features: [
      "风格：神圣优雅，双色分区设计",
      "色彩：深海蓝（上） + 奶油米色（下） + 金色点缀",
      "核心元素：优雅的金色十字架符号",
      "布局：上下分区（70%深蓝主视觉区 + 30%浅色信息区）"
    ],
    colors: ["深海蓝", "奶油米色", "金色"],
    coreElements: "优雅的金色十字架符号",
    vibe: "神圣优雅、经典传统",
    images: {
      moodboard: "/style1/style1moodboard.jpeg",
      mockup: "/style1/style1_mockup.png",
      labels: ["/style1/style1label.png"]
    }
  },
  {
    id: 2,
    name: "Vintage Nautical Badge",
    chineseName: "复古航海徽章派",
    description: "经典航海传统，Old World酒庄美学",
    features: [
      "风格：经典航海传统，Old World酒庄美学",
      "色彩：深海蓝 + 金色徽章 + 奶油色字体",
      "核心元素：航海徽章符号（锚、船舵、罗盘、盾形纹章）",
      "气质：传统、经典、具有历史感和传承感"
    ],
    colors: ["深海蓝", "金色", "奶油色"],
    coreElements: "航海徽章符号（锚、船舵、罗盘、盾形纹章）",
    vibe: "传统、经典、历史感",
    images: {
      moodboard: "/style2/style2moodboard.png",
      mockup: "/style2/style2mockup.png",
      labels: ["/style2/style2label1.png", "/style2/style2label2.png"]
    }
  },
  {
    id: 3,
    name: "Luxury White Series",
    chineseName: "奢华白底系列",
    description: "现代奢华，干净明快，高级感",
    features: [
      "风格：现代奢华，干净明快，高级感",
      "色彩：纯白/奶油白（主色） + 海蓝色图形 + 金色装饰",
      "核心元素：优雅的蓝色线条图形 + 精致金色边框与装饰",
      "气质：轻盈优雅、现代时尚，类似高端香槟或精品烈酒标签"
    ],
    colors: ["纯白/奶油白", "海蓝色", "金色"],
    coreElements: "优雅的蓝色线条图形 + 精致金色边框",
    vibe: "轻盈优雅、现代时尚",
    images: {
      moodboard: "/style3/style3moodboard.png",
      mockup: "/style3/style3mockup.png",
      labels: ["/style3/style3label1.png", "/style3/style3label2.png"]
    }
  },
  {
    id: 4,
    name: "Crusader Warrior",
    chineseName: "十字军战士系列",
    description: "英勇历史感，骑士精神，神圣战士",
    features: [
      "核心理念：视觉核心：十字军盾牌、剑、或战士剪影",
      "风格：英勇、历史感、骑士精神、神圣战士",
      "保持：双色分区设计（深蓝上 + 奶油下）",
      "调整：将简单十字架替换为更具战士气质的十字军元素"
    ],
    colors: ["深蓝", "奶油色", "金色"],
    coreElements: "十字军盾牌、剑、战士剪影",
    vibe: "英勇、骑士精神、历史感",
    images: {
      moodboard: "/style4/style3moodboard.png",
      mockup: "/style4/style4mockup.png",
      labels: ["/style4/style4label1.png", "/style4/style4label2.png"]
    }
  },
  {
    id: 5,
    name: "Watercolor Ocean Treasure",
    chineseName: "水彩奢华海洋宝藏系列",
    description: "水彩艺术与金色线条的完美结合",
    features: [
      "金色线条动物像珍贵文物和宝藏地图上的生物",
      "奢华感：复杂的金色花丝装饰、照明手稿质感",
      "艺术性：水彩与精密线条的对比，柔美与精致结合",
      "澳洲特色：本土海洋生物（鲸鱼、海豚、金枪鱼）",
      "层次丰富：水彩晕染提供深度，金色线条提供焦点"
    ],
    colors: ["水彩蓝", "金色", "奶油色"],
    coreElements: "水彩海洋生物 + 金色精密线条",
    vibe: "艺术性、奢华、自然之美",
    images: {
      moodboard: "/style5/style5moodboard.png",
      mockup: "/style5/style5mockup.png",
      labels: ["/style5/style5label1.png", "/style5/style5label2.png"]
    }
  }
];
