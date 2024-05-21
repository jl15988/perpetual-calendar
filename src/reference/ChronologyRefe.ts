interface ChronologyInfo {
    // 开始年
    year: number,
    // 年限
    len: number,
    om: number,
    // 朝代
    dynasty: string;
    // 朝代名称
    name: string;
    // 统治者
    ruler?: string;
    // 年号
    eraName: string;
}

/**
 * 纪年参照表
 */
class ChronologyRefe {
    // 纪年表
    values: ChronologyInfo[] = [
        {
            "year": -2069,
            "len": 45,
            "om": 0,
            "dynasty": "夏",
            "name": "禹",
            "ruler": "",
            "eraName": "禹"
        },
        {
            "year": -2024,
            "len": 10,
            "om": 0,
            "dynasty": "夏",
            "name": "启",
            "ruler": "",
            "eraName": "启"
        },
        {
            "year": -2014,
            "len": 25,
            "om": 0,
            "dynasty": "夏",
            "name": "太康",
            "ruler": "",
            "eraName": "太康"
        },
        {
            "year": -1986,
            "len": 14,
            "om": 0,
            "dynasty": "夏",
            "name": "仲康",
            "ruler": "",
            "eraName": "仲康"
        },
        {
            "year": -1972,
            "len": 28,
            "om": 0,
            "dynasty": "夏",
            "name": "相",
            "ruler": "",
            "eraName": "相"
        },
        {
            "year": -1944,
            "len": 2,
            "om": 0,
            "dynasty": "夏",
            "name": "后羿",
            "ruler": "",
            "eraName": "后羿"
        },
        {
            "year": -1942,
            "len": 38,
            "om": 0,
            "dynasty": "夏",
            "name": "寒浞",
            "ruler": "",
            "eraName": "寒浞"
        },
        {
            "year": -1904,
            "len": 21,
            "om": 0,
            "dynasty": "夏",
            "name": "少康",
            "ruler": "",
            "eraName": "少康"
        },
        {
            "year": -1883,
            "len": 17,
            "om": 0,
            "dynasty": "夏",
            "name": "杼",
            "ruler": "",
            "eraName": "杼"
        },
        {
            "year": -1866,
            "len": 26,
            "om": 0,
            "dynasty": "夏",
            "name": "槐",
            "ruler": "",
            "eraName": "槐"
        },
        {
            "year": -1840,
            "len": 18,
            "om": 0,
            "dynasty": "夏",
            "name": "芒",
            "ruler": "",
            "eraName": "芒"
        },
        {
            "year": -1822,
            "len": 16,
            "om": 0,
            "dynasty": "夏",
            "name": "泄",
            "ruler": "",
            "eraName": "泄"
        },
        {
            "year": -1806,
            "len": 59,
            "om": 0,
            "dynasty": "夏",
            "name": "不降",
            "ruler": "",
            "eraName": "不降"
        },
        {
            "year": -1747,
            "len": 21,
            "om": 0,
            "dynasty": "夏",
            "name": "扃",
            "ruler": "",
            "eraName": "扃"
        },
        {
            "year": -1726,
            "len": 21,
            "om": 0,
            "dynasty": "夏",
            "name": "廑",
            "ruler": "",
            "eraName": "廑"
        },
        {
            "year": -1705,
            "len": 31,
            "om": 0,
            "dynasty": "夏",
            "name": "孔甲",
            "ruler": "",
            "eraName": "孔甲"
        },
        {
            "year": -1674,
            "len": 11,
            "om": 0,
            "dynasty": "夏",
            "name": "皋",
            "ruler": "",
            "eraName": "皋"
        },
        {
            "year": -1663,
            "len": 11,
            "om": 0,
            "dynasty": "夏",
            "name": "发",
            "ruler": "",
            "eraName": "发"
        },
        {
            "year": -1652,
            "len": 53,
            "om": 0,
            "dynasty": "夏",
            "name": "桀",
            "ruler": "",
            "eraName": "桀"
        },
        {
            "year": -1599,
            "len": 11,
            "om": 0,
            "dynasty": "商",
            "name": "商太祖",
            "ruler": "汤",
            "eraName": "商汤"
        },
        {
            "year": -1588,
            "len": 1,
            "om": 0,
            "dynasty": "商",
            "name": "商代王",
            "ruler": "太乙",
            "eraName": "商代王"
        },
        {
            "year": -1587,
            "len": 2,
            "om": 0,
            "dynasty": "商",
            "name": "哀王",
            "ruler": "子胜",
            "eraName": "外丙"
        },
        {
            "year": -1585,
            "len": 4,
            "om": 0,
            "dynasty": "商",
            "name": "懿王",
            "ruler": "子庸",
            "eraName": "仲壬"
        },
        {
            "year": -1581,
            "len": 12,
            "om": 0,
            "dynasty": "商",
            "name": "太宗",
            "ruler": "子至",
            "eraName": "太甲"
        },
        {
            "year": -1569,
            "len": 29,
            "om": 0,
            "dynasty": "商",
            "name": "昭王",
            "ruler": "子绚",
            "eraName": "沃丁"
        },
        {
            "year": -1540,
            "len": 25,
            "om": 0,
            "dynasty": "商",
            "name": "宣王",
            "ruler": "子辩",
            "eraName": "太庚"
        },
        {
            "year": -1515,
            "len": 17,
            "om": 0,
            "dynasty": "商",
            "name": "敬王",
            "ruler": "子高",
            "eraName": "小甲"
        },
        {
            "year": -1498,
            "len": 13,
            "om": 0,
            "dynasty": "商",
            "name": "元王",
            "ruler": "子密",
            "eraName": "雍己"
        },
        {
            "year": -1485,
            "len": 75,
            "om": 0,
            "dynasty": "商",
            "name": "中宗",
            "ruler": "子伷",
            "eraName": "太戊"
        },
        {
            "year": -1410,
            "len": 11,
            "om": 0,
            "dynasty": "商",
            "name": "孝成王",
            "ruler": "子庄",
            "eraName": "仲丁"
        },
        {
            "year": -1399,
            "len": 15,
            "om": 0,
            "dynasty": "商",
            "name": "思王",
            "ruler": "子发",
            "eraName": "外壬"
        },
        {
            "year": -1384,
            "len": 9,
            "om": 0,
            "dynasty": "商",
            "name": "前平王",
            "ruler": "子整",
            "eraName": "河亶甲"
        },
        {
            "year": -1375,
            "len": 19,
            "om": 0,
            "dynasty": "商",
            "name": "穆王",
            "ruler": "子滕",
            "eraName": "祖乙"
        },
        {
            "year": -1356,
            "len": 16,
            "om": 0,
            "dynasty": "商",
            "name": "桓王",
            "ruler": "子旦",
            "eraName": "祖辛"
        },
        {
            "year": -1340,
            "len": 5,
            "om": 0,
            "dynasty": "商",
            "name": "僖王",
            "ruler": "子逾",
            "eraName": "沃甲"
        },
        {
            "year": -1335,
            "len": 9,
            "om": 0,
            "dynasty": "商",
            "name": "庄王",
            "ruler": "子新",
            "eraName": "祖丁"
        },
        {
            "year": -1326,
            "len": 6,
            "om": 0,
            "dynasty": "商",
            "name": "顷王",
            "ruler": "子更",
            "eraName": "南庚"
        },
        {
            "year": -1320,
            "len": 7,
            "om": 0,
            "dynasty": "商",
            "name": "悼王",
            "ruler": "子和",
            "eraName": "阳甲"
        },
        {
            "year": -1313,
            "len": 42,
            "om": 0,
            "dynasty": "商",
            "name": "世祖",
            "ruler": "子旬",
            "eraName": "盘庚"
        },
        {
            "year": -1271,
            "len": 21,
            "om": 0,
            "dynasty": "商",
            "name": "章王",
            "ruler": "子颂",
            "eraName": "小辛"
        },
        {
            "year": -1250,
            "len": 1,
            "om": 0,
            "dynasty": "商",
            "name": "惠王",
            "ruler": "子敛",
            "eraName": "小乙"
        },
        {
            "year": -1249,
            "len": 59,
            "om": 0,
            "dynasty": "商",
            "name": "高宗",
            "ruler": "子昭",
            "eraName": "武丁"
        },
        {
            "year": -1190,
            "len": 2,
            "om": 0,
            "dynasty": "商",
            "name": "后平王",
            "ruler": "子跃",
            "eraName": "祖庚"
        },
        {
            "year": -1188,
            "len": 33,
            "om": 0,
            "dynasty": "商",
            "name": "世宗",
            "ruler": "子载",
            "eraName": "祖甲"
        },
        {
            "year": -1155,
            "len": 8,
            "om": 0,
            "dynasty": "商",
            "name": "甲宗",
            "ruler": "子先",
            "eraName": "廪辛"
        },
        {
            "year": -1147,
            "len": 1,
            "om": 0,
            "dynasty": "商",
            "name": "康祖",
            "ruler": "子嚣",
            "eraName": "庚丁"
        },
        {
            "year": -1146,
            "len": 35,
            "om": 0,
            "dynasty": "商",
            "name": "武祖",
            "ruler": "子瞿",
            "eraName": "武乙"
        },
        {
            "year": -1111,
            "len": 11,
            "om": 0,
            "dynasty": "商",
            "name": "匡王",
            "ruler": "子托",
            "eraName": "文丁"
        },
        {
            "year": -1100,
            "len": 26,
            "om": 0,
            "dynasty": "商",
            "name": "德王",
            "ruler": "子羡",
            "eraName": "帝乙"
        },
        {
            "year": -1074,
            "len": 29,
            "om": 0,
            "dynasty": "商",
            "name": "纣王",
            "ruler": "子寿",
            "eraName": "帝辛"
        },
        {
            "year": -1045,
            "len": 4,
            "om": 0,
            "dynasty": "西周",
            "name": "武王",
            "ruler": "姬发",
            "eraName": "武王"
        },
        {
            "year": -1041,
            "len": 22,
            "om": 0,
            "dynasty": "西周",
            "name": "成王",
            "ruler": "姬诵",
            "eraName": "成王"
        },
        {
            "year": -1019,
            "len": 25,
            "om": 0,
            "dynasty": "西周",
            "name": "康王",
            "ruler": "姬钊",
            "eraName": "康王"
        },
        {
            "year": -994,
            "len": 19,
            "om": 0,
            "dynasty": "西周",
            "name": "昭王",
            "ruler": "姬瑕",
            "eraName": "昭王"
        },
        {
            "year": -975,
            "len": 54,
            "om": 0,
            "dynasty": "西周",
            "name": "穆王",
            "ruler": "姬满",
            "eraName": "穆王"
        },
        {
            "year": -921,
            "len": 23,
            "om": 0,
            "dynasty": "西周",
            "name": "共王",
            "ruler": "姬繄",
            "eraName": "共王"
        },
        {
            "year": -898,
            "len": 8,
            "om": 0,
            "dynasty": "西周",
            "name": "懿王",
            "ruler": "姬囏",
            "eraName": "懿王"
        },
        {
            "year": -890,
            "len": 6,
            "om": 0,
            "dynasty": "西周",
            "name": "孝王",
            "ruler": "姬辟方",
            "eraName": "孝王"
        },
        {
            "year": -884,
            "len": 8,
            "om": 0,
            "dynasty": "西周",
            "name": "夷王",
            "ruler": "姬燮",
            "eraName": "夷王"
        },
        {
            "year": -876,
            "len": 36,
            "om": 0,
            "dynasty": "西周",
            "name": "厉王",
            "ruler": "姬胡",
            "eraName": "厉王"
        },
        {
            "year": -840,
            "len": 14,
            "om": 0,
            "dynasty": "西周",
            "name": "厉王",
            "ruler": "姬胡",
            "eraName": "共和"
        },
        {
            "year": -826,
            "len": 46,
            "om": 0,
            "dynasty": "西周",
            "name": "宣王",
            "ruler": "姬静",
            "eraName": "宣王"
        },
        {
            "year": -780,
            "len": 11,
            "om": 0,
            "dynasty": "西周",
            "name": "幽王",
            "ruler": "姬宫湦",
            "eraName": "幽王"
        },
        {
            "year": -769,
            "len": 51,
            "om": 0,
            "dynasty": "东周",
            "name": "平王",
            "ruler": "姬宜臼",
            "eraName": "平王"
        },
        {
            "year": -718,
            "len": 23,
            "om": 0,
            "dynasty": "东周",
            "name": "桓王",
            "ruler": "姬林",
            "eraName": "桓王"
        },
        {
            "year": -695,
            "len": 15,
            "om": 0,
            "dynasty": "东周",
            "name": "庄王",
            "ruler": "姬佗",
            "eraName": "庄王"
        },
        {
            "year": -680,
            "len": 5,
            "om": 0,
            "dynasty": "东周",
            "name": "釐王",
            "ruler": "姬胡齐",
            "eraName": "釐王"
        },
        {
            "year": -675,
            "len": 25,
            "om": 0,
            "dynasty": "东周",
            "name": "惠王",
            "ruler": "姬阆",
            "eraName": "惠王"
        },
        {
            "year": -650,
            "len": 33,
            "om": 0,
            "dynasty": "东周",
            "name": "襄王",
            "ruler": "姬郑",
            "eraName": "襄王"
        },
        {
            "year": -617,
            "len": 6,
            "om": 0,
            "dynasty": "东周",
            "name": "顷王",
            "ruler": "姬壬臣",
            "eraName": "顷王"
        },
        {
            "year": -611,
            "len": 6,
            "om": 0,
            "dynasty": "东周",
            "name": "匡王",
            "ruler": "姬班",
            "eraName": "匡王"
        },
        {
            "year": -605,
            "len": 21,
            "om": 0,
            "dynasty": "东周",
            "name": "定王",
            "ruler": "姬瑜",
            "eraName": "定王"
        },
        {
            "year": -584,
            "len": 14,
            "om": 0,
            "dynasty": "东周",
            "name": "简王",
            "ruler": "姬夷",
            "eraName": "简王"
        },
        {
            "year": -570,
            "len": 27,
            "om": 0,
            "dynasty": "东周",
            "name": "灵王",
            "ruler": "姬泄心",
            "eraName": "灵王"
        },
        {
            "year": -543,
            "len": 24,
            "om": 0,
            "dynasty": "东周",
            "name": "景王",
            "ruler": "姬贵",
            "eraName": "景王"
        },
        {
            "year": -519,
            "len": 1,
            "om": 0,
            "dynasty": "东周",
            "name": "悼王",
            "ruler": "姬勐",
            "eraName": "悼王"
        },
        {
            "year": -518,
            "len": 44,
            "om": 0,
            "dynasty": "东周",
            "name": "敬王",
            "ruler": "姬匄",
            "eraName": "敬王"
        },
        {
            "year": -474,
            "len": 7,
            "om": 0,
            "dynasty": "东周",
            "name": "元王",
            "ruler": "姬仁",
            "eraName": "元王"
        },
        {
            "year": -467,
            "len": 27,
            "om": 0,
            "dynasty": "东周",
            "name": "贞定王",
            "ruler": "姬介",
            "eraName": "贞定王"
        },
        {
            "year": -440,
            "len": 1,
            "om": 0,
            "dynasty": "东周",
            "name": "哀王-思王",
            "ruler": "姬去疾-姬叔",
            "eraName": "哀王-思王"
        },
        {
            "year": -439,
            "len": 15,
            "om": 0,
            "dynasty": "东周",
            "name": "考王",
            "ruler": "姬嵬",
            "eraName": "考王"
        },
        {
            "year": -424,
            "len": 24,
            "om": 0,
            "dynasty": "东周",
            "name": "威烈王",
            "ruler": "姬午",
            "eraName": "威烈王"
        },
        {
            "year": -400,
            "len": 26,
            "om": 0,
            "dynasty": "东周",
            "name": "安王",
            "ruler": "姬骄",
            "eraName": "安王"
        },
        {
            "year": -374,
            "len": 7,
            "om": 0,
            "dynasty": "东周",
            "name": "烈王",
            "ruler": "姬喜",
            "eraName": "烈王"
        },
        {
            "year": -367,
            "len": 48,
            "om": 0,
            "dynasty": "东周",
            "name": "显王",
            "ruler": "姬扁",
            "eraName": "显王"
        },
        {
            "year": -319,
            "len": 6,
            "om": 0,
            "dynasty": "东周",
            "name": "慎靓王",
            "ruler": "姬定",
            "eraName": "慎靓王"
        },
        {
            "year": -313,
            "len": 8,
            "om": 0,
            "dynasty": "东周",
            "name": "赧王",
            "ruler": "姬延",
            "eraName": "赧王"
        },
        {
            "year": -305,
            "len": 56,
            "om": 0,
            "dynasty": "战国-秦",
            "name": "昭襄王",
            "ruler": "嬴则",
            "eraName": "昭襄王"
        },
        {
            "year": -249,
            "len": 1,
            "om": 0,
            "dynasty": "战国-秦",
            "name": "孝文王",
            "ruler": "嬴柱",
            "eraName": "孝文王"
        },
        {
            "year": -248,
            "len": 3,
            "om": 0,
            "dynasty": "战国-秦",
            "name": "庄襄王",
            "ruler": "嬴子楚",
            "eraName": "庄襄王"
        },
        {
            "year": -245,
            "len": 25,
            "om": 0,
            "dynasty": "秦",
            "name": "嬴政",
            "ruler": "嬴政",
            "eraName": "嬴政"
        },
        {
            "year": -220,
            "len": 12,
            "om": 0,
            "dynasty": "秦",
            "name": "始皇帝",
            "ruler": "嬴政",
            "eraName": "始皇"
        },
        {
            "year": -208,
            "len": 3,
            "om": 0,
            "dynasty": "秦",
            "name": "二世皇帝",
            "ruler": "嬴胡亥",
            "eraName": "二世"
        },
        {
            "year": -205,
            "len": 12,
            "om": 0,
            "dynasty": "西汉",
            "name": "高帝",
            "ruler": "刘邦",
            "eraName": "高帝"
        },
        {
            "year": -193,
            "len": 7,
            "om": 0,
            "dynasty": "西汉",
            "name": "惠帝",
            "ruler": "刘盈",
            "eraName": "惠帝"
        },
        {
            "year": -186,
            "len": 8,
            "om": 0,
            "dynasty": "西汉",
            "name": "高后",
            "ruler": "吕雉",
            "eraName": "高后"
        },
        {
            "year": -178,
            "len": 16,
            "om": 0,
            "dynasty": "西汉",
            "name": "文帝",
            "ruler": "刘恒",
            "eraName": "文帝"
        },
        {
            "year": -162,
            "len": 7,
            "om": 0,
            "dynasty": "西汉",
            "name": "文帝",
            "ruler": "刘恒",
            "eraName": "后元"
        },
        {
            "year": -155,
            "len": 7,
            "om": 0,
            "dynasty": "西汉",
            "name": "景帝",
            "ruler": "刘启",
            "eraName": "景帝"
        },
        {
            "year": -148,
            "len": 6,
            "om": 0,
            "dynasty": "西汉",
            "name": "景帝",
            "ruler": "刘启",
            "eraName": "中元"
        },
        {
            "year": -142,
            "len": 3,
            "om": 0,
            "dynasty": "西汉",
            "name": "景帝",
            "ruler": "刘启",
            "eraName": "后元"
        },
        {
            "year": -139,
            "len": 6,
            "om": 0,
            "dynasty": "西汉",
            "name": "武帝",
            "ruler": "刘彻",
            "eraName": "建元"
        },
        {
            "year": -133,
            "len": 6,
            "om": 0,
            "dynasty": "西汉",
            "name": "武帝",
            "ruler": "刘彻",
            "eraName": "元光"
        },
        {
            "year": -127,
            "len": 6,
            "om": 0,
            "dynasty": "西汉",
            "name": "武帝",
            "ruler": "刘彻",
            "eraName": "元朔"
        },
        {
            "year": -121,
            "len": 6,
            "om": 0,
            "dynasty": "西汉",
            "name": "武帝",
            "ruler": "刘彻",
            "eraName": "元狩"
        },
        {
            "year": -115,
            "len": 6,
            "om": 0,
            "dynasty": "西汉",
            "name": "武帝",
            "ruler": "刘彻",
            "eraName": "元鼎"
        },
        {
            "year": -109,
            "len": 6,
            "om": 0,
            "dynasty": "西汉",
            "name": "武帝",
            "ruler": "刘彻",
            "eraName": "元封"
        },
        {
            "year": -103,
            "len": 4,
            "om": 0,
            "dynasty": "西汉",
            "name": "武帝",
            "ruler": "刘彻",
            "eraName": "太初"
        },
        {
            "year": -99,
            "len": 4,
            "om": 0,
            "dynasty": "西汉",
            "name": "武帝",
            "ruler": "刘彻",
            "eraName": "天汉"
        },
        {
            "year": -95,
            "len": 4,
            "om": 0,
            "dynasty": "西汉",
            "name": "武帝",
            "ruler": "刘彻",
            "eraName": "太始"
        },
        {
            "year": -91,
            "len": 4,
            "om": 0,
            "dynasty": "西汉",
            "name": "武帝",
            "ruler": "刘彻",
            "eraName": "征和"
        },
        {
            "year": -87,
            "len": 2,
            "om": 0,
            "dynasty": "西汉",
            "name": "武帝",
            "ruler": "刘彻",
            "eraName": "后元"
        },
        {
            "year": -85,
            "len": 6,
            "om": 0,
            "dynasty": "西汉",
            "name": "昭帝",
            "ruler": "刘弗陵",
            "eraName": "始元"
        },
        {
            "year": -79,
            "len": 6,
            "om": 0,
            "dynasty": "西汉",
            "name": "昭帝",
            "ruler": "刘弗陵",
            "eraName": "元凤"
        },
        {
            "year": -73,
            "len": 1,
            "om": 0,
            "dynasty": "西汉",
            "name": "昭帝",
            "ruler": "刘弗陵",
            "eraName": "元平"
        },
        {
            "year": -72,
            "len": 4,
            "om": 0,
            "dynasty": "西汉",
            "name": "宣帝",
            "ruler": "刘询",
            "eraName": "本始"
        },
        {
            "year": -68,
            "len": 4,
            "om": 0,
            "dynasty": "西汉",
            "name": "宣帝",
            "ruler": "刘询",
            "eraName": "地节"
        },
        {
            "year": -64,
            "len": 4,
            "om": 0,
            "dynasty": "西汉",
            "name": "宣帝",
            "ruler": "刘询",
            "eraName": "元康"
        },
        {
            "year": -60,
            "len": 4,
            "om": 0,
            "dynasty": "西汉",
            "name": "宣帝",
            "ruler": "刘询",
            "eraName": "神爵"
        },
        {
            "year": -56,
            "len": 4,
            "om": 0,
            "dynasty": "西汉",
            "name": "宣帝",
            "ruler": "刘询",
            "eraName": "五凤"
        },
        {
            "year": -52,
            "len": 4,
            "om": 0,
            "dynasty": "西汉",
            "name": "宣帝",
            "ruler": "刘询",
            "eraName": "甘露"
        },
        {
            "year": -48,
            "len": 1,
            "om": 0,
            "dynasty": "西汉",
            "name": "宣帝",
            "ruler": "刘询",
            "eraName": "黄龙"
        },
        {
            "year": -47,
            "len": 5,
            "om": 0,
            "dynasty": "西汉",
            "name": "元帝",
            "ruler": "刘奭",
            "eraName": "初元"
        },
        {
            "year": -42,
            "len": 5,
            "om": 0,
            "dynasty": "西汉",
            "name": "元帝",
            "ruler": "刘奭",
            "eraName": "永光"
        },
        {
            "year": -37,
            "len": 5,
            "om": 0,
            "dynasty": "西汉",
            "name": "元帝",
            "ruler": "刘奭",
            "eraName": "建昭"
        },
        {
            "year": -32,
            "len": 1,
            "om": 0,
            "dynasty": "西汉",
            "name": "元帝",
            "ruler": "刘奭",
            "eraName": "竟宁"
        },
        {
            "year": -31,
            "len": 4,
            "om": 0,
            "dynasty": "西汉",
            "name": "成帝",
            "ruler": "刘骜",
            "eraName": "建始"
        },
        {
            "year": -27,
            "len": 4,
            "om": 0,
            "dynasty": "西汉",
            "name": "成帝",
            "ruler": "刘骜",
            "eraName": "河平"
        },
        {
            "year": -23,
            "len": 4,
            "om": 0,
            "dynasty": "西汉",
            "name": "成帝",
            "ruler": "刘骜",
            "eraName": "阳朔"
        },
        {
            "year": -19,
            "len": 4,
            "om": 0,
            "dynasty": "西汉",
            "name": "成帝",
            "ruler": "刘骜",
            "eraName": "鸿嘉"
        },
        {
            "year": -15,
            "len": 4,
            "om": 0,
            "dynasty": "西汉",
            "name": "成帝",
            "ruler": "刘骜",
            "eraName": "永始"
        },
        {
            "year": -11,
            "len": 4,
            "om": 0,
            "dynasty": "西汉",
            "name": "成帝",
            "ruler": "刘骜",
            "eraName": "元延"
        },
        {
            "year": -7,
            "len": 2,
            "om": 0,
            "dynasty": "西汉",
            "name": "成帝",
            "ruler": "刘骜",
            "eraName": "绥和"
        },
        {
            "year": -5,
            "len": 4,
            "om": 0,
            "dynasty": "西汉",
            "name": "哀帝",
            "ruler": "刘欣",
            "eraName": "建平"
        },
        {
            "year": -1,
            "len": 2,
            "om": 0,
            "dynasty": "西汉",
            "name": "哀帝",
            "ruler": "刘欣",
            "eraName": "元寿"
        },
        {
            "year": 1,
            "len": 5,
            "om": 0,
            "dynasty": "西汉",
            "name": "平帝",
            "ruler": "刘衍",
            "eraName": "元始"
        },
        {
            "year": 6,
            "len": 2,
            "om": 0,
            "dynasty": "西汉",
            "name": "孺子婴",
            "ruler": "王莽摄政",
            "eraName": "居摄"
        },
        {
            "year": 8,
            "len": 1,
            "om": 0,
            "dynasty": "西汉",
            "name": "孺子婴",
            "ruler": "王莽摄政",
            "eraName": "初始"
        },
        {
            "year": 9,
            "len": 5,
            "om": 0,
            "dynasty": "新",
            "name": "",
            "ruler": "王莽",
            "eraName": "始建国"
        },
        {
            "year": 14,
            "len": 6,
            "om": 0,
            "dynasty": "新",
            "name": "",
            "ruler": "王莽",
            "eraName": "天凤"
        },
        {
            "year": 20,
            "len": 3,
            "om": 0,
            "dynasty": "新",
            "name": "",
            "ruler": "王莽",
            "eraName": "地皇"
        },
        {
            "year": 23,
            "len": 2,
            "om": 0,
            "dynasty": "西汉",
            "name": "更始帝",
            "ruler": "刘玄",
            "eraName": "更始"
        },
        {
            "year": 25,
            "len": 31,
            "om": 0,
            "dynasty": "东汉",
            "name": "光武帝",
            "ruler": "刘秀",
            "eraName": "建武"
        },
        {
            "year": 56,
            "len": 2,
            "om": 0,
            "dynasty": "东汉",
            "name": "光武帝",
            "ruler": "刘秀",
            "eraName": "建武中元"
        },
        {
            "year": 58,
            "len": 18,
            "om": 0,
            "dynasty": "东汉",
            "name": "明帝",
            "ruler": "刘庄",
            "eraName": "永平"
        },
        {
            "year": 76,
            "len": 8,
            "om": 0,
            "dynasty": "东汉",
            "name": "章帝",
            "ruler": "刘炟",
            "eraName": "建初"
        },
        {
            "year": 84,
            "len": 3,
            "om": 0,
            "dynasty": "东汉",
            "name": "章帝",
            "ruler": "刘炟",
            "eraName": "元和"
        },
        {
            "year": 87,
            "len": 2,
            "om": 0,
            "dynasty": "东汉",
            "name": "章帝",
            "ruler": "刘炟",
            "eraName": "章和"
        },
        {
            "year": 89,
            "len": 16,
            "om": 0,
            "dynasty": "东汉",
            "name": "和帝",
            "ruler": "刘肇",
            "eraName": "永元"
        },
        {
            "year": 105,
            "len": 1,
            "om": 0,
            "dynasty": "东汉",
            "name": "和帝",
            "ruler": "刘肇",
            "eraName": "元兴"
        },
        {
            "year": 106,
            "len": 1,
            "om": 0,
            "dynasty": "东汉",
            "name": "殇帝",
            "ruler": "刘隆",
            "eraName": "延平"
        },
        {
            "year": 107,
            "len": 7,
            "om": 0,
            "dynasty": "东汉",
            "name": "安帝",
            "ruler": "刘祜",
            "eraName": "永初"
        },
        {
            "year": 114,
            "len": 6,
            "om": 0,
            "dynasty": "东汉",
            "name": "安帝",
            "ruler": "刘祜",
            "eraName": "元初"
        },
        {
            "year": 120,
            "len": 1,
            "om": 0,
            "dynasty": "东汉",
            "name": "安帝",
            "ruler": "刘祜",
            "eraName": "永宁"
        },
        {
            "year": 121,
            "len": 1,
            "om": 0,
            "dynasty": "东汉",
            "name": "安帝",
            "ruler": "刘祜",
            "eraName": "建光"
        },
        {
            "year": 122,
            "len": 4,
            "om": 0,
            "dynasty": "东汉",
            "name": "安帝",
            "ruler": "刘祜",
            "eraName": "延光"
        },
        {
            "year": 126,
            "len": 6,
            "om": 0,
            "dynasty": "东汉",
            "name": "顺帝",
            "ruler": "刘保",
            "eraName": "永建"
        },
        {
            "year": 132,
            "len": 4,
            "om": 0,
            "dynasty": "东汉",
            "name": "顺帝",
            "ruler": "刘保",
            "eraName": "阳嘉"
        },
        {
            "year": 136,
            "len": 6,
            "om": 0,
            "dynasty": "东汉",
            "name": "顺帝",
            "ruler": "刘保",
            "eraName": "永和"
        },
        {
            "year": 142,
            "len": 2,
            "om": 0,
            "dynasty": "东汉",
            "name": "顺帝",
            "ruler": "刘保",
            "eraName": "汉安"
        },
        {
            "year": 144,
            "len": 1,
            "om": 0,
            "dynasty": "东汉",
            "name": "顺帝",
            "ruler": "刘保",
            "eraName": "建康"
        },
        {
            "year": 145,
            "len": 1,
            "om": 0,
            "dynasty": "东汉",
            "name": "冲帝",
            "ruler": "刘炳",
            "eraName": "永嘉"
        },
        {
            "year": 146,
            "len": 1,
            "om": 0,
            "dynasty": "东汉",
            "name": "质帝",
            "ruler": "刘缵",
            "eraName": "本初"
        },
        {
            "year": 147,
            "len": 3,
            "om": 0,
            "dynasty": "东汉",
            "name": "桓帝",
            "ruler": "刘志",
            "eraName": "建和"
        },
        {
            "year": 150,
            "len": 1,
            "om": 0,
            "dynasty": "东汉",
            "name": "桓帝",
            "ruler": "刘志",
            "eraName": "和平"
        },
        {
            "year": 151,
            "len": 2,
            "om": 0,
            "dynasty": "东汉",
            "name": "桓帝",
            "ruler": "刘志",
            "eraName": "元嘉"
        },
        {
            "year": 153,
            "len": 2,
            "om": 0,
            "dynasty": "东汉",
            "name": "桓帝",
            "ruler": "刘志",
            "eraName": "永兴"
        },
        {
            "year": 155,
            "len": 3,
            "om": 0,
            "dynasty": "东汉",
            "name": "桓帝",
            "ruler": "刘志",
            "eraName": "永寿"
        },
        {
            "year": 158,
            "len": 9,
            "om": 0,
            "dynasty": "东汉",
            "name": "桓帝",
            "ruler": "刘志",
            "eraName": "延熹"
        },
        {
            "year": 167,
            "len": 1,
            "om": 0,
            "dynasty": "东汉",
            "name": "桓帝",
            "ruler": "刘志",
            "eraName": "永康"
        },
        {
            "year": 168,
            "len": 4,
            "om": 0,
            "dynasty": "东汉",
            "name": "灵帝",
            "ruler": "刘宏",
            "eraName": "建宁"
        },
        {
            "year": 172,
            "len": 5,
            "om": 0,
            "dynasty": "东汉",
            "name": "灵帝",
            "ruler": "刘宏",
            "eraName": "熹平"
        },
        {
            "year": 178,
            "len": 6,
            "om": 0,
            "dynasty": "东汉",
            "name": "灵帝",
            "ruler": "刘宏",
            "eraName": "光和"
        },
        {
            "year": 184,
            "len": 6,
            "om": 0,
            "dynasty": "东汉",
            "name": "灵帝",
            "ruler": "刘宏",
            "eraName": "中平"
        },
        {
            "year": 190,
            "len": 4,
            "om": 0,
            "dynasty": "东汉",
            "name": "献帝",
            "ruler": "刘协",
            "eraName": "初平"
        },
        {
            "year": 194,
            "len": 2,
            "om": 0,
            "dynasty": "东汉",
            "name": "献帝",
            "ruler": "刘协",
            "eraName": "兴平"
        },
        {
            "year": 196,
            "len": 24,
            "om": 0,
            "dynasty": "东汉",
            "name": "献帝",
            "ruler": "刘协",
            "eraName": "建安"
        },
        {
            "year": 220,
            "len": 7,
            "om": 0,
            "dynasty": "三国-魏",
            "name": "文帝",
            "ruler": "曹丕",
            "eraName": "黄初"
        },
        {
            "year": 227,
            "len": 6,
            "om": 0,
            "dynasty": "三国-魏",
            "name": "明帝",
            "ruler": "曹叡",
            "eraName": "太和"
        },
        {
            "year": 233,
            "len": 4,
            "om": 0,
            "dynasty": "三国-魏",
            "name": "明帝",
            "ruler": "曹叡",
            "eraName": "青龙"
        },
        {
            "year": 237,
            "len": 3,
            "om": 0,
            "dynasty": "三国-魏",
            "name": "明帝",
            "ruler": "曹叡",
            "eraName": "景初"
        },
        {
            "year": 240,
            "len": 9,
            "om": 0,
            "dynasty": "三国-魏",
            "name": "齐王",
            "ruler": "曹芳",
            "eraName": "正始"
        },
        {
            "year": 249,
            "len": 5,
            "om": 0,
            "dynasty": "三国-魏",
            "name": "齐王",
            "ruler": "曹芳",
            "eraName": "嘉平"
        },
        {
            "year": 254,
            "len": 2,
            "om": 0,
            "dynasty": "三国-魏",
            "name": "高贵乡公",
            "ruler": "曹髦",
            "eraName": "正元"
        },
        {
            "year": 256,
            "len": 4,
            "om": 0,
            "dynasty": "三国-魏",
            "name": "高贵乡公",
            "ruler": "曹髦",
            "eraName": "甘露"
        },
        {
            "year": 260,
            "len": 4,
            "om": 0,
            "dynasty": "三国-魏",
            "name": "元帝",
            "ruler": "曹奂",
            "eraName": "景元"
        },
        {
            "year": 264,
            "len": 1,
            "om": 0,
            "dynasty": "三国-魏",
            "name": "元帝",
            "ruler": "曹奂",
            "eraName": "咸熙"
        },
        {
            "year": 265,
            "len": 10,
            "om": 0,
            "dynasty": "西晋",
            "name": "武帝",
            "ruler": "司马炎",
            "eraName": "泰始"
        },
        {
            "year": 275,
            "len": 5,
            "om": 0,
            "dynasty": "西晋",
            "name": "武帝",
            "ruler": "司马炎",
            "eraName": "咸宁"
        },
        {
            "year": 280,
            "len": 10,
            "om": 0,
            "dynasty": "西晋",
            "name": "武帝",
            "ruler": "司马炎",
            "eraName": "太康"
        },
        {
            "year": 290,
            "len": 10,
            "om": 0,
            "dynasty": "西晋",
            "name": "武帝",
            "ruler": "司马炎",
            "eraName": "太熙"
        },
        {
            "year": 300,
            "len": 1,
            "om": 0,
            "dynasty": "西晋",
            "name": "惠帝",
            "ruler": "司马衷",
            "eraName": "永康"
        },
        {
            "year": 301,
            "len": 1,
            "om": 0,
            "dynasty": "西晋",
            "name": "惠帝",
            "ruler": "司马衷",
            "eraName": "永宁"
        },
        {
            "year": 302,
            "len": 2,
            "om": 0,
            "dynasty": "西晋",
            "name": "惠帝",
            "ruler": "司马衷",
            "eraName": "太安"
        },
        {
            "year": 304,
            "len": 2,
            "om": 0,
            "dynasty": "西晋",
            "name": "惠帝",
            "ruler": "司马衷",
            "eraName": "永安"
        },
        {
            "year": 306,
            "len": 1,
            "om": 0,
            "dynasty": "西晋",
            "name": "惠帝",
            "ruler": "司马衷",
            "eraName": "光熙"
        },
        {
            "year": 307,
            "len": 6,
            "om": 0,
            "dynasty": "西晋",
            "name": "怀帝",
            "ruler": "司马炽",
            "eraName": "永嘉"
        },
        {
            "year": 313,
            "len": 4,
            "om": 0,
            "dynasty": "西晋",
            "name": "愍帝",
            "ruler": "司马邺",
            "eraName": "建兴"
        },
        {
            "year": 317,
            "len": 1,
            "om": 0,
            "dynasty": "东晋",
            "name": "元帝",
            "ruler": "司马睿",
            "eraName": "建武"
        },
        {
            "year": 318,
            "len": 4,
            "om": 0,
            "dynasty": "东晋",
            "name": "元帝",
            "ruler": "司马睿",
            "eraName": "大兴"
        },
        {
            "year": 322,
            "len": 1,
            "om": 0,
            "dynasty": "东晋",
            "name": "元帝",
            "ruler": "司马睿",
            "eraName": "永昌"
        },
        {
            "year": 323,
            "len": 3,
            "om": 0,
            "dynasty": "东晋",
            "name": "明帝",
            "ruler": "司马绍",
            "eraName": "太宁"
        },
        {
            "year": 326,
            "len": 9,
            "om": 0,
            "dynasty": "东晋",
            "name": "成帝",
            "ruler": "司马衍",
            "eraName": "咸和"
        },
        {
            "year": 335,
            "len": 8,
            "om": 0,
            "dynasty": "东晋",
            "name": "成帝",
            "ruler": "司马衍",
            "eraName": "咸康"
        },
        {
            "year": 343,
            "len": 2,
            "om": 0,
            "dynasty": "东晋",
            "name": "康帝",
            "ruler": "司马岳",
            "eraName": "建元"
        },
        {
            "year": 345,
            "len": 12,
            "om": 0,
            "dynasty": "东晋",
            "name": "穆帝",
            "ruler": "司马聃",
            "eraName": "永和"
        },
        {
            "year": 357,
            "len": 5,
            "om": 0,
            "dynasty": "东晋",
            "name": "穆帝",
            "ruler": "司马聃",
            "eraName": "升平"
        },
        {
            "year": 362,
            "len": 1,
            "om": 0,
            "dynasty": "东晋",
            "name": "哀帝",
            "ruler": "司马丕",
            "eraName": "隆和"
        },
        {
            "year": 363,
            "len": 3,
            "om": 0,
            "dynasty": "东晋",
            "name": "哀帝",
            "ruler": "司马丕",
            "eraName": "兴宁"
        },
        {
            "year": 366,
            "len": 5,
            "om": 0,
            "dynasty": "东晋",
            "name": "海西公",
            "ruler": "司马奕",
            "eraName": "太和"
        },
        {
            "year": 371,
            "len": 2,
            "om": 0,
            "dynasty": "东晋",
            "name": "简文帝",
            "ruler": "司马昱",
            "eraName": "咸安"
        },
        {
            "year": 373,
            "len": 3,
            "om": 0,
            "dynasty": "东晋",
            "name": "孝武帝",
            "ruler": "司马曜",
            "eraName": "甯康"
        },
        {
            "year": 376,
            "len": 21,
            "om": 0,
            "dynasty": "东晋",
            "name": "孝武帝",
            "ruler": "司马曜",
            "eraName": "太元"
        },
        {
            "year": 397,
            "len": 5,
            "om": 0,
            "dynasty": "东晋",
            "name": "安帝",
            "ruler": "司马德宗",
            "eraName": "隆安"
        },
        {
            "year": 402,
            "len": 3,
            "om": 0,
            "dynasty": "东晋",
            "name": "安帝",
            "ruler": "司马德宗",
            "eraName": "元兴"
        },
        {
            "year": 405,
            "len": 14,
            "om": 0,
            "dynasty": "东晋",
            "name": "安帝",
            "ruler": "司马德宗",
            "eraName": "义熙"
        },
        {
            "year": 419,
            "len": 1,
            "om": 0,
            "dynasty": "东晋",
            "name": "恭帝",
            "ruler": "司马德文",
            "eraName": "元熙"
        },
        {
            "year": 420,
            "len": 3,
            "om": 0,
            "dynasty": "南朝/宋",
            "name": "武帝",
            "ruler": "刘裕",
            "eraName": "永初"
        },
        {
            "year": 423,
            "len": 2,
            "om": 0,
            "dynasty": "南朝/宋",
            "name": "少帝",
            "ruler": "刘义符",
            "eraName": "景平"
        },
        {
            "year": 424,
            "len": 30,
            "om": 0,
            "dynasty": "南朝/宋",
            "name": "文帝",
            "ruler": "刘義隆",
            "eraName": "元嘉"
        },
        {
            "year": 454,
            "len": 3,
            "om": 0,
            "dynasty": "南朝/宋",
            "name": "孝武",
            "ruler": "帝刘骏",
            "eraName": "孝建"
        },
        {
            "year": 457,
            "len": 8,
            "om": 0,
            "dynasty": "南朝/宋",
            "name": "孝武",
            "ruler": "帝刘骏",
            "eraName": "大明"
        },
        {
            "year": 465,
            "len": 1,
            "om": 0,
            "dynasty": "南朝/宋",
            "name": "废帝",
            "ruler": "刘子业",
            "eraName": "永光"
        },
        {
            "year": 465,
            "len": 1,
            "om": 0,
            "dynasty": "南朝/宋",
            "name": "废帝",
            "ruler": "刘子业",
            "eraName": "景和"
        },
        {
            "year": 465,
            "len": 7,
            "om": 0,
            "dynasty": "南朝/宋",
            "name": "明帝",
            "ruler": "刘彧",
            "eraName": "泰始"
        },
        {
            "year": 472,
            "len": 1,
            "om": 0,
            "dynasty": "南朝/宋",
            "name": "明帝",
            "ruler": "刘彧",
            "eraName": "泰豫"
        },
        {
            "year": 473,
            "len": 5,
            "om": 0,
            "dynasty": "南朝/宋",
            "name": "废帝",
            "ruler": "刘昱",
            "eraName": "元徽"
        },
        {
            "year": 477,
            "len": 3,
            "om": 0,
            "dynasty": "南朝/宋",
            "name": "顺帝",
            "ruler": "刘准",
            "eraName": "升明"
        },
        {
            "year": 479,
            "len": 4,
            "om": 0,
            "dynasty": "南朝/齐",
            "name": "高帝",
            "ruler": "萧道成",
            "eraName": "建元"
        },
        {
            "year": 483,
            "len": 11,
            "om": 0,
            "dynasty": "南朝/齐",
            "name": "武帝",
            "ruler": "萧赜",
            "eraName": "永明"
        },
        {
            "year": 494,
            "len": 1,
            "om": 0,
            "dynasty": "南朝/齐",
            "name": "欎林王",
            "ruler": "萧昭业",
            "eraName": "隆昌"
        },
        {
            "year": 494,
            "len": 1,
            "om": 0,
            "dynasty": "南朝/齐",
            "name": "海陵王",
            "ruler": "萧昭文",
            "eraName": "延兴"
        },
        {
            "year": 494,
            "len": 5,
            "om": 0,
            "dynasty": "南朝/齐",
            "name": "明帝",
            "ruler": "萧鸾",
            "eraName": "建武"
        },
        {
            "year": 498,
            "len": 1,
            "om": 0,
            "dynasty": "南朝/齐",
            "name": "明帝",
            "ruler": "萧鸾",
            "eraName": "永泰"
        },
        {
            "year": 499,
            "len": 3,
            "om": 0,
            "dynasty": "南朝/齐",
            "name": "东昏侯",
            "ruler": "萧宝",
            "eraName": "中兴"
        },
        {
            "year": 501,
            "len": 2,
            "om": 0,
            "dynasty": "南朝/齐",
            "name": "和帝",
            "ruler": "萧宝融",
            "eraName": "中兴"
        },
        {
            "year": 502,
            "len": 18,
            "om": 0,
            "dynasty": "南朝/梁",
            "name": "武帝",
            "ruler": "萧衍",
            "eraName": "天监"
        },
        {
            "year": 520,
            "len": 8,
            "om": 0,
            "dynasty": "南朝/梁",
            "name": "武帝",
            "ruler": "萧衍",
            "eraName": "普通"
        },
        {
            "year": 527,
            "len": 3,
            "om": 0,
            "dynasty": "南朝/梁",
            "name": "武帝",
            "ruler": "萧衍",
            "eraName": "大通"
        },
        {
            "year": 529,
            "len": 6,
            "om": 0,
            "dynasty": "南朝/梁",
            "name": "武帝",
            "ruler": "萧衍",
            "eraName": "中大通"
        },
        {
            "year": 535,
            "len": 12,
            "om": 0,
            "dynasty": "南朝/梁",
            "name": "武帝",
            "ruler": "萧衍",
            "eraName": "大同"
        },
        {
            "year": 546,
            "len": 2,
            "om": 0,
            "dynasty": "南朝/梁",
            "name": "武帝",
            "ruler": "萧衍",
            "eraName": "中大同"
        },
        {
            "year": 547,
            "len": 3,
            "om": 0,
            "dynasty": "南朝/梁",
            "name": "武帝",
            "ruler": "萧衍",
            "eraName": "太清"
        },
        {
            "year": 550,
            "len": 2,
            "om": 0,
            "dynasty": "南朝/梁",
            "name": "简文帝",
            "ruler": "萧纲",
            "eraName": "大宝"
        },
        {
            "year": 551,
            "len": 2,
            "om": 0,
            "dynasty": "南朝/梁",
            "name": "豫章王",
            "ruler": "萧栋",
            "eraName": "天正"
        },
        {
            "year": 552,
            "len": 4,
            "om": 0,
            "dynasty": "南朝/梁",
            "name": "元帝",
            "ruler": "萧绎",
            "eraName": "承圣"
        },
        {
            "year": 555,
            "len": 1,
            "om": 0,
            "dynasty": "南朝/梁",
            "name": "贞阳侯",
            "ruler": "萧渊明",
            "eraName": "天成"
        },
        {
            "year": 555,
            "len": 2,
            "om": 0,
            "dynasty": "南朝/梁",
            "name": "敬帝",
            "ruler": "萧方智",
            "eraName": "绍泰"
        },
        {
            "year": 556,
            "len": 2,
            "om": 0,
            "dynasty": "南朝/梁",
            "name": "敬帝",
            "ruler": "萧方智",
            "eraName": "太平"
        },
        {
            "year": 557,
            "len": 3,
            "om": 0,
            "dynasty": "南朝/陈",
            "name": "武帝",
            "ruler": "陈霸先",
            "eraName": "太平"
        },
        {
            "year": 560,
            "len": 7,
            "om": 0,
            "dynasty": "南朝/陈",
            "name": "文帝",
            "ruler": "陈蒨",
            "eraName": "天嘉"
        },
        {
            "year": 566,
            "len": 1,
            "om": 0,
            "dynasty": "南朝/陈",
            "name": "文帝",
            "ruler": "陈蒨",
            "eraName": "天康"
        },
        {
            "year": 567,
            "len": 2,
            "om": 0,
            "dynasty": "南朝/陈",
            "name": "废帝",
            "ruler": "陈伯宗",
            "eraName": "光大"
        },
        {
            "year": 569,
            "len": 14,
            "om": 0,
            "dynasty": "南朝/陈",
            "name": "宣帝",
            "ruler": "陈顼",
            "eraName": "太建"
        },
        {
            "year": 583,
            "len": 4,
            "om": 0,
            "dynasty": "南朝/陈",
            "name": "后主",
            "ruler": "陈叔宝",
            "eraName": "至德"
        },
        {
            "year": 587,
            "len": 3,
            "om": 0,
            "dynasty": "南朝/陈",
            "name": "后主",
            "ruler": "陈叔宝",
            "eraName": "祯明"
        },
        {
            "year": 555,
            "len": 8,
            "om": 0,
            "dynasty": "南朝/后梁",
            "name": "宣帝",
            "ruler": "萧詧",
            "eraName": "大定"
        },
        {
            "year": 562,
            "len": 24,
            "om": 0,
            "dynasty": "南朝/后梁",
            "name": "明帝",
            "ruler": "萧岿",
            "eraName": "天保"
        },
        {
            "year": 586,
            "len": 2,
            "om": 0,
            "dynasty": "南朝/后梁",
            "name": "莒公",
            "ruler": "萧琮",
            "eraName": "广运"
        },
        {
            "year": 386,
            "len": 11,
            "om": 0,
            "dynasty": "北朝/北魏",
            "name": "道武帝",
            "ruler": "拓跋圭",
            "eraName": "登国"
        },
        {
            "year": 396,
            "len": 3,
            "om": 0,
            "dynasty": "北朝/北魏",
            "name": "道武帝",
            "ruler": "拓跋圭",
            "eraName": "皇始"
        },
        {
            "year": 398,
            "len": 7,
            "om": 0,
            "dynasty": "北朝/北魏",
            "name": "道武帝",
            "ruler": "拓跋圭",
            "eraName": "天兴"
        },
        {
            "year": 404,
            "len": 6,
            "om": 0,
            "dynasty": "北朝/北魏",
            "name": "道武帝",
            "ruler": "拓跋圭",
            "eraName": "天赐"
        },
        {
            "year": 409,
            "len": 5,
            "om": 0,
            "dynasty": "北朝/北魏",
            "name": "明元帝",
            "ruler": "拓跋嗣",
            "eraName": "永兴"
        },
        {
            "year": 414,
            "len": 3,
            "om": 0,
            "dynasty": "北朝/北魏",
            "name": "明元帝",
            "ruler": "拓跋嗣",
            "eraName": "神瑞"
        },
        {
            "year": 416,
            "len": 8,
            "om": 0,
            "dynasty": "北朝/北魏",
            "name": "明元帝",
            "ruler": "拓跋嗣",
            "eraName": "泰常"
        },
        {
            "year": 424,
            "len": 5,
            "om": 0,
            "dynasty": "北朝/北魏",
            "name": "太武帝",
            "ruler": "拓跋焘",
            "eraName": "始光"
        },
        {
            "year": 428,
            "len": 4,
            "om": 0,
            "dynasty": "北朝/北魏",
            "name": "太武帝",
            "ruler": "拓跋焘",
            "eraName": "神麚"
        },
        {
            "year": 432,
            "len": 3,
            "om": 0,
            "dynasty": "北朝/北魏",
            "name": "太武帝",
            "ruler": "拓跋焘",
            "eraName": "延和"
        },
        {
            "year": 435,
            "len": 6,
            "om": 0,
            "dynasty": "北朝/北魏",
            "name": "太武帝",
            "ruler": "拓跋焘",
            "eraName": "太延"
        },
        {
            "year": 440,
            "len": 12,
            "om": 0,
            "dynasty": "北朝/北魏",
            "name": "太武帝",
            "ruler": "拓跋焘",
            "eraName": "太平真君"
        },
        {
            "year": 451,
            "len": 2,
            "om": 0,
            "dynasty": "北朝/北魏",
            "name": "太武帝",
            "ruler": "拓跋焘",
            "eraName": "正平"
        },
        {
            "year": 452,
            "len": 1,
            "om": 0,
            "dynasty": "北朝/北魏",
            "name": "南安王",
            "ruler": "拓跋余",
            "eraName": "承平"
        },
        {
            "year": 452,
            "len": 3,
            "om": 0,
            "dynasty": "北朝/北魏",
            "name": "文成帝",
            "ruler": "拓跋浚",
            "eraName": "兴安"
        },
        {
            "year": 454,
            "len": 2,
            "om": 0,
            "dynasty": "北朝/北魏",
            "name": "文成帝",
            "ruler": "拓跋浚",
            "eraName": "兴光"
        },
        {
            "year": 455,
            "len": 5,
            "om": 0,
            "dynasty": "北朝/北魏",
            "name": "文成帝",
            "ruler": "拓跋浚",
            "eraName": "太安"
        },
        {
            "year": 460,
            "len": 6,
            "om": 0,
            "dynasty": "北朝/北魏",
            "name": "文成帝",
            "ruler": "拓跋浚",
            "eraName": "和平"
        },
        {
            "year": 466,
            "len": 2,
            "om": 0,
            "dynasty": "北朝/北魏",
            "name": "献文帝",
            "ruler": "拓跋弘",
            "eraName": "天安"
        },
        {
            "year": 467,
            "len": 5,
            "om": 0,
            "dynasty": "北朝/北魏",
            "name": "献文帝",
            "ruler": "拓跋弘",
            "eraName": "皇兴"
        },
        {
            "year": 471,
            "len": 6,
            "om": 0,
            "dynasty": "北朝/北魏",
            "name": "教文帝",
            "ruler": "拓跋宏",
            "eraName": "延兴"
        },
        {
            "year": 476,
            "len": 1,
            "om": 0,
            "dynasty": "北朝/北魏",
            "name": "孝文帝",
            "ruler": "拓跋宏",
            "eraName": "承明"
        },
        {
            "year": 477,
            "len": 23,
            "om": 0,
            "dynasty": "北朝/北魏",
            "name": "孝文帝",
            "ruler": "拓跋宏",
            "eraName": "太和"
        },
        {
            "year": 500,
            "len": 4,
            "om": 0,
            "dynasty": "北朝/北魏",
            "name": "宣武帝",
            "ruler": "元恪",
            "eraName": "景明"
        },
        {
            "year": 504,
            "len": 5,
            "om": 0,
            "dynasty": "北朝/北魏",
            "name": "宣武帝",
            "ruler": "元恪",
            "eraName": "正始"
        },
        {
            "year": 508,
            "len": 5,
            "om": 0,
            "dynasty": "北朝/北魏",
            "name": "宣武帝",
            "ruler": "元恪",
            "eraName": "永平"
        },
        {
            "year": 512,
            "len": 4,
            "om": 0,
            "dynasty": "北朝/北魏",
            "name": "宣武帝",
            "ruler": "元恪",
            "eraName": "延昌"
        },
        {
            "year": 516,
            "len": 3,
            "om": 0,
            "dynasty": "北朝/北魏",
            "name": "孝明帝",
            "ruler": "元诩",
            "eraName": "熙平"
        },
        {
            "year": 518,
            "len": 3,
            "om": 0,
            "dynasty": "北朝/北魏",
            "name": "孝明帝",
            "ruler": "元诩",
            "eraName": "神龟"
        },
        {
            "year": 520,
            "len": 6,
            "om": 0,
            "dynasty": "北朝/北魏",
            "name": "孝明帝",
            "ruler": "元诩",
            "eraName": "正光"
        },
        {
            "year": 525,
            "len": 3,
            "om": 0,
            "dynasty": "北朝/北魏",
            "name": "孝明帝",
            "ruler": "元诩",
            "eraName": "孝昌"
        },
        {
            "year": 528,
            "len": 1,
            "om": 0,
            "dynasty": "北朝/北魏",
            "name": "孝明帝",
            "ruler": "元诩",
            "eraName": "武泰"
        },
        {
            "year": 528,
            "len": 1,
            "om": 0,
            "dynasty": "北朝/北魏",
            "name": "孝庄帝",
            "ruler": "元子攸",
            "eraName": "建义"
        },
        {
            "year": 528,
            "len": 3,
            "om": 0,
            "dynasty": "北朝/北魏",
            "name": "孝庄帝",
            "ruler": "元子攸",
            "eraName": "永安"
        },
        {
            "year": 530,
            "len": 2,
            "om": 0,
            "dynasty": "北朝/北魏",
            "name": "东海王",
            "ruler": "元晔",
            "eraName": "建明"
        },
        {
            "year": 531,
            "len": 2,
            "om": 0,
            "dynasty": "北朝/北魏",
            "name": "节闵帝",
            "ruler": "元恭",
            "eraName": "普泰"
        },
        {
            "year": 531,
            "len": 2,
            "om": 0,
            "dynasty": "北朝/北魏",
            "name": "安定王",
            "ruler": "元朗",
            "eraName": "中兴"
        },
        {
            "year": 532,
            "len": 1,
            "om": 0,
            "dynasty": "北朝/北魏",
            "name": "孝武帝",
            "ruler": "元修",
            "eraName": "太昌"
        },
        {
            "year": 532,
            "len": 1,
            "om": 0,
            "dynasty": "北朝/北魏",
            "name": "孝武帝",
            "ruler": "元修",
            "eraName": "永兴"
        },
        {
            "year": 532,
            "len": 3,
            "om": 0,
            "dynasty": "北朝/北魏",
            "name": "孝武帝",
            "ruler": "元修",
            "eraName": "永熙"
        },
        {
            "year": 534,
            "len": 4,
            "om": 0,
            "dynasty": "北朝/东魏",
            "name": "孝静帝",
            "ruler": "元善见",
            "eraName": "天平"
        },
        {
            "year": 538,
            "len": 2,
            "om": 0,
            "dynasty": "北朝/东魏",
            "name": "孝静帝",
            "ruler": "元善见",
            "eraName": "元象"
        },
        {
            "year": 539,
            "len": 4,
            "om": 0,
            "dynasty": "北朝/东魏",
            "name": "孝静帝",
            "ruler": "元善见",
            "eraName": "兴和"
        },
        {
            "year": 543,
            "len": 8,
            "om": 0,
            "dynasty": "北朝/东魏",
            "name": "孝静帝",
            "ruler": "元善见",
            "eraName": "武定"
        },
        {
            "year": 535,
            "len": 17,
            "om": 0,
            "dynasty": "北朝/西魏",
            "name": "文帝",
            "ruler": "元宝炬",
            "eraName": "大统"
        },
        {
            "year": 552,
            "len": 3,
            "om": 0,
            "dynasty": "北朝/西魏",
            "name": "废帝",
            "ruler": "元钦",
            "eraName": "大统"
        },
        {
            "year": 554,
            "len": 3,
            "om": 0,
            "dynasty": "北朝/西魏",
            "name": "恭帝",
            "ruler": "元廓",
            "eraName": "大统"
        },
        {
            "year": 550,
            "len": 10,
            "om": 0,
            "dynasty": "北朝/北齐",
            "name": "文宣帝",
            "ruler": "高洋",
            "eraName": "天保"
        },
        {
            "year": 560,
            "len": 1,
            "om": 0,
            "dynasty": "北朝/北齐",
            "name": "废帝",
            "ruler": "高殷",
            "eraName": "乾明"
        },
        {
            "year": 560,
            "len": 2,
            "om": 0,
            "dynasty": "北朝/北齐",
            "name": "孝昭帝",
            "ruler": "高演",
            "eraName": "皇建"
        },
        {
            "year": 561,
            "len": 2,
            "om": 0,
            "dynasty": "北朝/北齐",
            "name": "武成帝",
            "ruler": "高湛",
            "eraName": "太宁"
        },
        {
            "year": 562,
            "len": 4,
            "om": 0,
            "dynasty": "北朝/北齐",
            "name": "武成帝",
            "ruler": "高湛",
            "eraName": "河清"
        },
        {
            "year": 565,
            "len": 5,
            "om": 0,
            "dynasty": "北朝/北齐",
            "name": "温公",
            "ruler": "高纬",
            "eraName": "天统"
        },
        {
            "year": 570,
            "len": 7,
            "om": 0,
            "dynasty": "北朝/北齐",
            "name": "温公",
            "ruler": "高纬",
            "eraName": "武平"
        },
        {
            "year": 576,
            "len": 2,
            "om": 0,
            "dynasty": "北朝/北齐",
            "name": "温公",
            "ruler": "高纬",
            "eraName": "隆化"
        },
        {
            "year": 576,
            "len": 1,
            "om": 0,
            "dynasty": "北朝/北齐",
            "name": "安德王",
            "ruler": "高延宗",
            "eraName": "德昌"
        },
        {
            "year": 577,
            "len": 1,
            "om": 0,
            "dynasty": "北朝/北齐",
            "name": "幼主",
            "ruler": "高恒",
            "eraName": "承光"
        },
        {
            "year": 557,
            "len": 1,
            "om": 0,
            "dynasty": "北朝/北周",
            "name": "闵帝",
            "ruler": "宇文觉",
            "eraName": "空"
        },
        {
            "year": 557,
            "len": 2,
            "om": 0,
            "dynasty": "北朝/北周",
            "name": "明帝",
            "ruler": "宇文毓",
            "eraName": "空"
        },
        {
            "year": 559,
            "len": 2,
            "om": 0,
            "dynasty": "北朝/北周",
            "name": "明帝",
            "ruler": "宇文毓",
            "eraName": "武成"
        },
        {
            "year": 561,
            "len": 5,
            "om": 0,
            "dynasty": "北朝/北周",
            "name": "武帝",
            "ruler": "宇文邕",
            "eraName": "保定"
        },
        {
            "year": 566,
            "len": 7,
            "om": 0,
            "dynasty": "北朝/北周",
            "name": "武帝",
            "ruler": "宇文邕",
            "eraName": "天和"
        },
        {
            "year": 572,
            "len": 7,
            "om": 0,
            "dynasty": "北朝/北周",
            "name": "武帝",
            "ruler": "宇文邕",
            "eraName": "建德"
        },
        {
            "year": 578,
            "len": 1,
            "om": 0,
            "dynasty": "北朝/北周",
            "name": "武帝",
            "ruler": "宇文邕",
            "eraName": "宣政"
        },
        {
            "year": 579,
            "len": 1,
            "om": 0,
            "dynasty": "北朝/北周",
            "name": "宣帝",
            "ruler": "宇文贇",
            "eraName": "大成"
        },
        {
            "year": 579,
            "len": 2,
            "om": 0,
            "dynasty": "北朝/北周",
            "name": "静帝",
            "ruler": "宇文衍",
            "eraName": "大象"
        },
        {
            "year": 581,
            "len": 1,
            "om": 0,
            "dynasty": "北朝/北周",
            "name": "静帝",
            "ruler": "宇文衍",
            "eraName": "大定"
        },
        {
            "year": 581,
            "len": 20,
            "om": 0,
            "dynasty": "隋",
            "name": "文帝",
            "ruler": "杨坚",
            "eraName": "开皇"
        },
        {
            "year": 601,
            "len": 4,
            "om": 0,
            "dynasty": "隋",
            "name": "文帝",
            "ruler": "杨坚",
            "eraName": "仁寿"
        },
        {
            "year": 605,
            "len": 13,
            "om": 0,
            "dynasty": "隋",
            "name": "炀帝",
            "ruler": "杨广",
            "eraName": "大业"
        },
        {
            "year": 617,
            "len": 2,
            "om": 0,
            "dynasty": "隋",
            "name": "恭帝",
            "ruler": "杨侑",
            "eraName": "义宁"
        },
        {
            "year": 618,
            "len": 9,
            "om": 0,
            "dynasty": "唐",
            "name": "高祖",
            "ruler": "李渊",
            "eraName": "武德"
        },
        {
            "year": 627,
            "len": 23,
            "om": 0,
            "dynasty": "唐",
            "name": "太宗",
            "ruler": "李世民",
            "eraName": "贞观"
        },
        {
            "year": 650,
            "len": 6,
            "om": 0,
            "dynasty": "唐",
            "name": "高宗",
            "ruler": "李治",
            "eraName": "永徽"
        },
        {
            "year": 656,
            "len": 6,
            "om": 0,
            "dynasty": "唐",
            "name": "高宗",
            "ruler": "李治",
            "eraName": "显庆"
        },
        {
            "year": 661,
            "len": 3,
            "om": 0,
            "dynasty": "唐",
            "name": "高宗",
            "ruler": "李治",
            "eraName": "龙朔"
        },
        {
            "year": 664,
            "len": 2,
            "om": 0,
            "dynasty": "唐",
            "name": "高宗",
            "ruler": "李治",
            "eraName": "麟德"
        },
        {
            "year": 666,
            "len": 3,
            "om": 0,
            "dynasty": "唐",
            "name": "高宗",
            "ruler": "李治",
            "eraName": "乾封"
        },
        {
            "year": 668,
            "len": 3,
            "om": 0,
            "dynasty": "唐",
            "name": "高宗",
            "ruler": "李治",
            "eraName": "总章"
        },
        {
            "year": 670,
            "len": 5,
            "om": 0,
            "dynasty": "唐",
            "name": "高宗",
            "ruler": "李治",
            "eraName": "咸亨"
        },
        {
            "year": 674,
            "len": 3,
            "om": 0,
            "dynasty": "唐",
            "name": "高宗",
            "ruler": "李治",
            "eraName": "上元"
        },
        {
            "year": 676,
            "len": 4,
            "om": 0,
            "dynasty": "唐",
            "name": "高宗",
            "ruler": "李治",
            "eraName": "仪凤"
        },
        {
            "year": 679,
            "len": 2,
            "om": 0,
            "dynasty": "唐",
            "name": "高宗",
            "ruler": "李治",
            "eraName": "调露"
        },
        {
            "year": 680,
            "len": 2,
            "om": 0,
            "dynasty": "唐",
            "name": "高宗",
            "ruler": "李治",
            "eraName": "永隆"
        },
        {
            "year": 681,
            "len": 2,
            "om": 0,
            "dynasty": "唐",
            "name": "高宗",
            "ruler": "李治",
            "eraName": "开耀"
        },
        {
            "year": 682,
            "len": 2,
            "om": 0,
            "dynasty": "唐",
            "name": "高宗",
            "ruler": "李治",
            "eraName": "永淳"
        },
        {
            "year": 683,
            "len": 1,
            "om": 0,
            "dynasty": "唐",
            "name": "高宗",
            "ruler": "李治",
            "eraName": "弘道"
        },
        {
            "year": 684,
            "len": 1,
            "om": 0,
            "dynasty": "唐",
            "name": "中宗",
            "ruler": "李显",
            "eraName": "嗣圣"
        },
        {
            "year": 684,
            "len": 1,
            "om": 0,
            "dynasty": "唐",
            "name": "睿宗",
            "ruler": "李旦",
            "eraName": "文明"
        },
        {
            "year": 684,
            "len": 1,
            "om": 0,
            "dynasty": "武周",
            "name": "则天后",
            "ruler": "武曌",
            "eraName": "光宅"
        },
        {
            "year": 685,
            "len": 4,
            "om": 0,
            "dynasty": "武周",
            "name": "则天后",
            "ruler": "武曌",
            "eraName": "垂拱"
        },
        {
            "year": 689,
            "len": 1,
            "om": 0,
            "dynasty": "武周",
            "name": "则天后",
            "ruler": "武曌",
            "eraName": "永昌"
        },
        {
            "year": 689,
            "len": 2,
            "om": 0,
            "dynasty": "武周",
            "name": "则天后",
            "ruler": "武曌",
            "eraName": "载初"
        },
        {
            "year": 690,
            "len": 3,
            "om": 0,
            "dynasty": "武周",
            "name": "则天后",
            "ruler": "武曌",
            "eraName": "天授"
        },
        {
            "year": 692,
            "len": 1,
            "om": 0,
            "dynasty": "武周",
            "name": "则天后",
            "ruler": "武曌",
            "eraName": "如意"
        },
        {
            "year": 692,
            "len": 3,
            "om": 0,
            "dynasty": "武周",
            "name": "则天后",
            "ruler": "武曌",
            "eraName": "长寿"
        },
        {
            "year": 694,
            "len": 1,
            "om": 0,
            "dynasty": "武周",
            "name": "则天后",
            "ruler": "武曌",
            "eraName": "延载"
        },
        {
            "year": 695,
            "len": 1,
            "om": 0,
            "dynasty": "武周",
            "name": "则天后",
            "ruler": "武曌",
            "eraName": "证圣"
        },
        {
            "year": 695,
            "len": 2,
            "om": 0,
            "dynasty": "武周",
            "name": "则天后",
            "ruler": "武曌",
            "eraName": "天册万岁"
        },
        {
            "year": 696,
            "len": 1,
            "om": 0,
            "dynasty": "武周",
            "name": "则天后",
            "ruler": "武曌",
            "eraName": "万岁登封"
        },
        {
            "year": 696,
            "len": 2,
            "om": 0,
            "dynasty": "武周",
            "name": "则天后",
            "ruler": "武曌",
            "eraName": "万岁通天"
        },
        {
            "year": 697,
            "len": 1,
            "om": 0,
            "dynasty": "武周",
            "name": "则天后",
            "ruler": "武曌",
            "eraName": "神功"
        },
        {
            "year": 698,
            "len": 3,
            "om": 0,
            "dynasty": "武周",
            "name": "则天后",
            "ruler": "武曌",
            "eraName": "圣历"
        },
        {
            "year": 700,
            "len": 1,
            "om": 0,
            "dynasty": "武周",
            "name": "则天后",
            "ruler": "武曌",
            "eraName": "久视"
        },
        {
            "year": 701,
            "len": 1,
            "om": 0,
            "dynasty": "武周",
            "name": "则天后",
            "ruler": "武曌",
            "eraName": "大足"
        },
        {
            "year": 701,
            "len": 4,
            "om": 0,
            "dynasty": "武周",
            "name": "则天后",
            "ruler": "武曌",
            "eraName": "长安"
        },
        {
            "year": 705,
            "len": 1,
            "om": 0,
            "dynasty": "武周",
            "name": "则天后",
            "ruler": "李显",
            "eraName": "神龙"
        },
        {
            "year": 705,
            "len": 2,
            "om": 0,
            "dynasty": "唐",
            "name": "中宗",
            "ruler": "李显",
            "eraName": "神龙"
        },
        {
            "year": 707,
            "len": 4,
            "om": 0,
            "dynasty": "唐",
            "name": "中宗",
            "ruler": "李显",
            "eraName": "景龙"
        },
        {
            "year": 710,
            "len": 1,
            "om": 0,
            "dynasty": "唐",
            "name": "温王",
            "ruler": "李重茂",
            "eraName": "唐隆"
        },
        {
            "year": 710,
            "len": 2,
            "om": 0,
            "dynasty": "唐",
            "name": "睿宗",
            "ruler": "李旦",
            "eraName": "景云"
        },
        {
            "year": 712,
            "len": 1,
            "om": 0,
            "dynasty": "唐",
            "name": "睿宗",
            "ruler": "李旦",
            "eraName": "太极"
        },
        {
            "year": 712,
            "len": 1,
            "om": 0,
            "dynasty": "唐",
            "name": "睿宗",
            "ruler": "李旦",
            "eraName": "延和"
        },
        {
            "year": 712,
            "len": 2,
            "om": 0,
            "dynasty": "唐",
            "name": "玄宗",
            "ruler": "李隆基",
            "eraName": "先天"
        },
        {
            "year": 713,
            "len": 29,
            "om": 0,
            "dynasty": "唐",
            "name": "玄宗",
            "ruler": "李隆基",
            "eraName": "开元"
        },
        {
            "year": 742,
            "len": 15,
            "om": 0,
            "dynasty": "唐",
            "name": "玄宗",
            "ruler": "李隆基",
            "eraName": "天宝"
        },
        {
            "year": 756,
            "len": 3,
            "om": 0,
            "dynasty": "唐",
            "name": "肃宗",
            "ruler": "李亨",
            "eraName": "至德"
        },
        {
            "year": 758,
            "len": 3,
            "om": 0,
            "dynasty": "唐",
            "name": "肃宗",
            "ruler": "李亨",
            "eraName": "乾元"
        },
        {
            "year": 760,
            "len": 3,
            "om": 0,
            "dynasty": "唐",
            "name": "肃宗",
            "ruler": "李亨",
            "eraName": "上元"
        },
        {
            "year": 762,
            "len": 2,
            "om": 0,
            "dynasty": "唐",
            "name": "肃宗",
            "ruler": "李亨",
            "eraName": "宝应"
        },
        {
            "year": 763,
            "len": 2,
            "om": 0,
            "dynasty": "唐",
            "name": "代宗",
            "ruler": "李豫",
            "eraName": "广德"
        },
        {
            "year": 765,
            "len": 2,
            "om": 0,
            "dynasty": "唐",
            "name": "肃宗",
            "ruler": "李亨",
            "eraName": "永泰"
        },
        {
            "year": 766,
            "len": 14,
            "om": 0,
            "dynasty": "唐",
            "name": "肃宗",
            "ruler": "李亨",
            "eraName": "大历"
        },
        {
            "year": 780,
            "len": 4,
            "om": 0,
            "dynasty": "唐",
            "name": "德宗",
            "ruler": "李适",
            "eraName": "建中"
        },
        {
            "year": 784,
            "len": 1,
            "om": 0,
            "dynasty": "唐",
            "name": "德宗",
            "ruler": "李适",
            "eraName": "兴元"
        },
        {
            "year": 785,
            "len": 21,
            "om": 0,
            "dynasty": "唐",
            "name": "德宗",
            "ruler": "李适",
            "eraName": "贞元"
        },
        {
            "year": 805,
            "len": 1,
            "om": 0,
            "dynasty": "唐",
            "name": "顺宗",
            "ruler": "李诵",
            "eraName": "永贞"
        },
        {
            "year": 806,
            "len": 15,
            "om": 0,
            "dynasty": "唐",
            "name": "宪宗",
            "ruler": "李纯",
            "eraName": "元和"
        },
        {
            "year": 821,
            "len": 4,
            "om": 0,
            "dynasty": "唐",
            "name": "穆宗",
            "ruler": "李恒",
            "eraName": "长庆"
        },
        {
            "year": 825,
            "len": 3,
            "om": 0,
            "dynasty": "唐",
            "name": "敬宗",
            "ruler": "李湛",
            "eraName": "宝历"
        },
        {
            "year": 827,
            "len": 9,
            "om": 0,
            "dynasty": "唐",
            "name": "文宗",
            "ruler": "李昂",
            "eraName": "大和"
        },
        {
            "year": 836,
            "len": 5,
            "om": 0,
            "dynasty": "唐",
            "name": "文宗",
            "ruler": "李昂",
            "eraName": "开成"
        },
        {
            "year": 841,
            "len": 6,
            "om": 0,
            "dynasty": "唐",
            "name": "武宗",
            "ruler": "李炎",
            "eraName": "会昌"
        },
        {
            "year": 847,
            "len": 14,
            "om": 0,
            "dynasty": "唐",
            "name": "宣宗",
            "ruler": "李忱",
            "eraName": "大中"
        },
        {
            "year": 860,
            "len": 15,
            "om": 0,
            "dynasty": "唐",
            "name": "宣宗",
            "ruler": "李忱",
            "eraName": "咸通"
        },
        {
            "year": 874,
            "len": 6,
            "om": 0,
            "dynasty": "唐",
            "name": "僖宗",
            "ruler": "李儇",
            "eraName": "乾符"
        },
        {
            "year": 880,
            "len": 2,
            "om": 0,
            "dynasty": "唐",
            "name": "僖宗",
            "ruler": "李儇",
            "eraName": "广明"
        },
        {
            "year": 881,
            "len": 5,
            "om": 0,
            "dynasty": "唐",
            "name": "僖宗",
            "ruler": "李儇",
            "eraName": "中和"
        },
        {
            "year": 885,
            "len": 4,
            "om": 0,
            "dynasty": "唐",
            "name": "僖宗",
            "ruler": "李儇",
            "eraName": "光启"
        },
        {
            "year": 888,
            "len": 1,
            "om": 0,
            "dynasty": "唐",
            "name": "僖宗",
            "ruler": "李儇",
            "eraName": "文德"
        },
        {
            "year": 889,
            "len": 1,
            "om": 0,
            "dynasty": "唐",
            "name": "昭宗",
            "ruler": "李晔",
            "eraName": "龙纪"
        },
        {
            "year": 890,
            "len": 2,
            "om": 0,
            "dynasty": "唐",
            "name": "昭宗",
            "ruler": "李晔",
            "eraName": "大顺"
        },
        {
            "year": 892,
            "len": 2,
            "om": 0,
            "dynasty": "唐",
            "name": "昭宗",
            "ruler": "李晔",
            "eraName": "景福"
        },
        {
            "year": 894,
            "len": 5,
            "om": 0,
            "dynasty": "唐",
            "name": "昭宗",
            "ruler": "李晔",
            "eraName": "乾宁"
        },
        {
            "year": 898,
            "len": 4,
            "om": 0,
            "dynasty": "唐",
            "name": "昭宗",
            "ruler": "李晔",
            "eraName": "光化"
        },
        {
            "year": 901,
            "len": 4,
            "om": 0,
            "dynasty": "唐",
            "name": "昭宗",
            "ruler": "李晔",
            "eraName": "天复"
        },
        {
            "year": 904,
            "len": 1,
            "om": 0,
            "dynasty": "唐",
            "name": "昭宗",
            "ruler": "李晔",
            "eraName": "天佑"
        },
        {
            "year": 905,
            "len": 3,
            "om": 1,
            "dynasty": "唐",
            "name": "昭宣帝",
            "ruler": "李祝",
            "eraName": "天佑"
        },
        {
            "year": 907,
            "len": 5,
            "om": 0,
            "dynasty": "五代/梁",
            "name": "太祖",
            "ruler": "朱温",
            "eraName": "开平"
        },
        {
            "year": 911,
            "len": 2,
            "om": 0,
            "dynasty": "五代/梁",
            "name": "太祖",
            "ruler": "朱温",
            "eraName": "乾化"
        },
        {
            "year": 913,
            "len": 1,
            "om": 0,
            "dynasty": "五代/梁",
            "name": "庶人",
            "ruler": "朱友圭",
            "eraName": "凤历"
        },
        {
            "year": 913,
            "len": 3,
            "om": 2,
            "dynasty": "五代/梁",
            "name": "末帝",
            "ruler": "朱友贞",
            "eraName": "乾化"
        },
        {
            "year": 915,
            "len": 7,
            "om": 0,
            "dynasty": "五代/梁",
            "name": "末帝",
            "ruler": "朱友贞",
            "eraName": "贞明"
        },
        {
            "year": 921,
            "len": 3,
            "om": 0,
            "dynasty": "五代/梁",
            "name": "末帝",
            "ruler": "朱友贞",
            "eraName": "龙德"
        },
        {
            "year": 923,
            "len": 4,
            "om": 0,
            "dynasty": "五代/唐",
            "name": "庄宗",
            "ruler": "李存勗",
            "eraName": "同光"
        },
        {
            "year": 926,
            "len": 5,
            "om": 0,
            "dynasty": "五代/唐",
            "name": "明宗",
            "ruler": "李嗣源",
            "eraName": "天成"
        },
        {
            "year": 930,
            "len": 4,
            "om": 0,
            "dynasty": "五代/唐",
            "name": "明宗",
            "ruler": "李嗣源",
            "eraName": "长兴"
        },
        {
            "year": 934,
            "len": 1,
            "om": 0,
            "dynasty": "五代/唐",
            "name": "闵帝",
            "ruler": "李从厚",
            "eraName": "应顺"
        },
        {
            "year": 934,
            "len": 3,
            "om": 0,
            "dynasty": "五代/唐",
            "name": "潞王",
            "ruler": "李从珂",
            "eraName": "清泰"
        },
        {
            "year": 936,
            "len": 6,
            "om": 0,
            "dynasty": "五代/晋",
            "name": "高祖",
            "ruler": "石敬瑭",
            "eraName": "天福"
        },
        {
            "year": 942,
            "len": 2,
            "om": 6,
            "dynasty": "五代/晋",
            "name": "出帝",
            "ruler": "石重贵",
            "eraName": "天福"
        },
        {
            "year": 944,
            "len": 3,
            "om": 0,
            "dynasty": "五代/晋",
            "name": "出帝",
            "ruler": "石重贵",
            "eraName": "开运"
        },
        {
            "year": 947,
            "len": 12,
            "om": 0,
            "dynasty": "五代/汉",
            "name": "高祖",
            "ruler": "刘知远",
            "eraName": "天福"
        },
        {
            "year": 948,
            "len": 1,
            "om": 0,
            "dynasty": "五代/汉",
            "name": "隐帝",
            "ruler": "刘承祐",
            "eraName": "乾祐"
        },
        {
            "year": 948,
            "len": 3,
            "om": 0,
            "dynasty": "五代/汉",
            "name": "隐帝",
            "ruler": "刘承祐",
            "eraName": "乾祐"
        },
        {
            "year": 951,
            "len": 3,
            "om": 0,
            "dynasty": "五代/周",
            "name": "太祖",
            "ruler": "郭威",
            "eraName": "广顺"
        },
        {
            "year": 954,
            "len": 1,
            "om": 0,
            "dynasty": "五代/周",
            "name": "太祖",
            "ruler": "郭威",
            "eraName": "显德"
        },
        {
            "year": 954,
            "len": 6,
            "om": 0,
            "dynasty": "五代/周",
            "name": "世宗",
            "ruler": "柴荣",
            "eraName": "显德"
        },
        {
            "year": 959,
            "len": 2,
            "om": 5,
            "dynasty": "五代/周",
            "name": "恭帝",
            "ruler": "郭宗训",
            "eraName": "显德"
        },
        {
            "year": 960,
            "len": 4,
            "om": 0,
            "dynasty": "北宋",
            "name": "太祖",
            "ruler": "赵匡胤",
            "eraName": "建隆"
        },
        {
            "year": 963,
            "len": 6,
            "om": 0,
            "dynasty": "北宋",
            "name": "太祖",
            "ruler": "赵匡胤",
            "eraName": "乾德"
        },
        {
            "year": 968,
            "len": 9,
            "om": 0,
            "dynasty": "北宋",
            "name": "太祖",
            "ruler": "赵匡胤",
            "eraName": "开宝"
        },
        {
            "year": 976,
            "len": 9,
            "om": 0,
            "dynasty": "北宋",
            "name": "太宗",
            "ruler": "赵炅",
            "eraName": "太平兴国"
        },
        {
            "year": 984,
            "len": 4,
            "om": 0,
            "dynasty": "北宋",
            "name": "太宗",
            "ruler": "赵炅",
            "eraName": "雍熙"
        },
        {
            "year": 988,
            "len": 2,
            "om": 0,
            "dynasty": "北宋",
            "name": "太宗",
            "ruler": "赵炅",
            "eraName": "端拱"
        },
        {
            "year": 990,
            "len": 5,
            "om": 0,
            "dynasty": "北宋",
            "name": "太宗",
            "ruler": "赵炅",
            "eraName": "淳化"
        },
        {
            "year": 995,
            "len": 3,
            "om": 0,
            "dynasty": "北宋",
            "name": "太宗",
            "ruler": "赵炅",
            "eraName": "至道"
        },
        {
            "year": 998,
            "len": 6,
            "om": 0,
            "dynasty": "北宋",
            "name": "真宗",
            "ruler": "赵恒",
            "eraName": "咸平"
        },
        {
            "year": 1004,
            "len": 4,
            "om": 0,
            "dynasty": "北宋",
            "name": "真宗",
            "ruler": "赵恒",
            "eraName": "景德"
        },
        {
            "year": 1008,
            "len": 9,
            "om": 0,
            "dynasty": "北宋",
            "name": "真宗",
            "ruler": "赵恒",
            "eraName": "大中祥符"
        },
        {
            "year": 1017,
            "len": 5,
            "om": 0,
            "dynasty": "北宋",
            "name": "真宗",
            "ruler": "赵恒",
            "eraName": "天禧"
        },
        {
            "year": 1022,
            "len": 1,
            "om": 0,
            "dynasty": "北宋",
            "name": "真宗",
            "ruler": "赵恒",
            "eraName": "乾兴"
        },
        {
            "year": 1023,
            "len": 10,
            "om": 0,
            "dynasty": "北宋",
            "name": "仁宗",
            "ruler": "赵祯",
            "eraName": "天圣"
        },
        {
            "year": 1032,
            "len": 2,
            "om": 0,
            "dynasty": "北宋",
            "name": "仁宗",
            "ruler": "赵祯",
            "eraName": "明道"
        },
        {
            "year": 1034,
            "len": 5,
            "om": 0,
            "dynasty": "北宋",
            "name": "仁宗",
            "ruler": "赵祯",
            "eraName": "景祐"
        },
        {
            "year": 1038,
            "len": 3,
            "om": 0,
            "dynasty": "北宋",
            "name": "仁宗",
            "ruler": "赵祯",
            "eraName": "宝元"
        },
        {
            "year": 1040,
            "len": 2,
            "om": 0,
            "dynasty": "北宋",
            "name": "仁宗",
            "ruler": "赵祯",
            "eraName": "康定"
        },
        {
            "year": 1041,
            "len": 8,
            "om": 0,
            "dynasty": "北宋",
            "name": "仁宗",
            "ruler": "赵祯",
            "eraName": "庆历"
        },
        {
            "year": 1049,
            "len": 6,
            "om": 0,
            "dynasty": "北宋",
            "name": "仁宗",
            "ruler": "赵祯",
            "eraName": "皇祐"
        },
        {
            "year": 1054,
            "len": 3,
            "om": 0,
            "dynasty": "北宋",
            "name": "仁宗",
            "ruler": "赵祯",
            "eraName": "至和"
        },
        {
            "year": 1056,
            "len": 8,
            "om": 0,
            "dynasty": "北宋",
            "name": "仁宗",
            "ruler": "赵祯",
            "eraName": "嘉祐"
        },
        {
            "year": 1064,
            "len": 4,
            "om": 0,
            "dynasty": "北宋",
            "name": "英宗",
            "ruler": "赵曙",
            "eraName": "治平"
        },
        {
            "year": 1068,
            "len": 10,
            "om": 0,
            "dynasty": "北宋",
            "name": "神宗",
            "ruler": "赵顼",
            "eraName": "熙宁"
        },
        {
            "year": 1078,
            "len": 8,
            "om": 0,
            "dynasty": "北宋",
            "name": "神宗",
            "ruler": "赵顼",
            "eraName": "元丰"
        },
        {
            "year": 1086,
            "len": 9,
            "om": 0,
            "dynasty": "北宋",
            "name": "哲宗",
            "ruler": "赵煦",
            "eraName": "元祐"
        },
        {
            "year": 1094,
            "len": 5,
            "om": 0,
            "dynasty": "北宋",
            "name": "哲宗",
            "ruler": "赵煦",
            "eraName": "绍圣"
        },
        {
            "year": 1098,
            "len": 3,
            "om": 0,
            "dynasty": "北宋",
            "name": "哲宗",
            "ruler": "赵煦",
            "eraName": "元符"
        },
        {
            "year": 1101,
            "len": 1,
            "om": 0,
            "dynasty": "北宋",
            "name": "徽宗",
            "ruler": "赵佶",
            "eraName": "建中靖国"
        },
        {
            "year": 1102,
            "len": 5,
            "om": 0,
            "dynasty": "北宋",
            "name": "徽宗",
            "ruler": "赵佶",
            "eraName": "崇宁"
        },
        {
            "year": 1107,
            "len": 4,
            "om": 0,
            "dynasty": "北宋",
            "name": "徽宗",
            "ruler": "赵佶",
            "eraName": "大观"
        },
        {
            "year": 1111,
            "len": 8,
            "om": 0,
            "dynasty": "北宋",
            "name": "徽宗",
            "ruler": "赵佶",
            "eraName": "政和"
        },
        {
            "year": 1118,
            "len": 2,
            "om": 0,
            "dynasty": "北宋",
            "name": "徽宗",
            "ruler": "赵佶",
            "eraName": "重和"
        },
        {
            "year": 1119,
            "len": 7,
            "om": 0,
            "dynasty": "北宋",
            "name": "徽宗",
            "ruler": "赵佶",
            "eraName": "宣和"
        },
        {
            "year": 1126,
            "len": 2,
            "om": 0,
            "dynasty": "北宋",
            "name": "钦宗",
            "ruler": "赵桓",
            "eraName": "靖康"
        },
        {
            "year": 1127,
            "len": 4,
            "om": 0,
            "dynasty": "南宋",
            "name": "高宗",
            "ruler": "赵构",
            "eraName": "建炎"
        },
        {
            "year": 1131,
            "len": 32,
            "om": 0,
            "dynasty": "南宋",
            "name": "高宗",
            "ruler": "赵构",
            "eraName": "绍兴"
        },
        {
            "year": 1163,
            "len": 2,
            "om": 0,
            "dynasty": "南宋",
            "name": "孝宗",
            "ruler": "赵慎",
            "eraName": "隆兴"
        },
        {
            "year": 1165,
            "len": 9,
            "om": 0,
            "dynasty": "南宋",
            "name": "孝宗",
            "ruler": "赵慎",
            "eraName": "乾道"
        },
        {
            "year": 1174,
            "len": 16,
            "om": 0,
            "dynasty": "南宋",
            "name": "孝宗",
            "ruler": "赵慎",
            "eraName": "淳熙"
        },
        {
            "year": 1190,
            "len": 5,
            "om": 0,
            "dynasty": "南宋",
            "name": "光宗",
            "ruler": "赵暴",
            "eraName": "绍熙"
        },
        {
            "year": 1195,
            "len": 6,
            "om": 0,
            "dynasty": "南宋",
            "name": "宁宗",
            "ruler": "赵扩",
            "eraName": "庆元"
        },
        {
            "year": 1201,
            "len": 4,
            "om": 0,
            "dynasty": "南宋",
            "name": "宁宗",
            "ruler": "赵扩",
            "eraName": "嘉泰"
        },
        {
            "year": 1205,
            "len": 3,
            "om": 0,
            "dynasty": "南宋",
            "name": "宁宗",
            "ruler": "赵扩",
            "eraName": "开禧"
        },
        {
            "year": 1208,
            "len": 17,
            "om": 0,
            "dynasty": "南宋",
            "name": "宁宗",
            "ruler": "赵扩",
            "eraName": "嘉定"
        },
        {
            "year": 1225,
            "len": 3,
            "om": 0,
            "dynasty": "南宋",
            "name": "理宗",
            "ruler": "赵昀",
            "eraName": "宝庆"
        },
        {
            "year": 1228,
            "len": 6,
            "om": 0,
            "dynasty": "南宋",
            "name": "理宗",
            "ruler": "赵昀",
            "eraName": "绍定"
        },
        {
            "year": 1234,
            "len": 3,
            "om": 0,
            "dynasty": "南宋",
            "name": "理宗",
            "ruler": "赵昀",
            "eraName": "端平"
        },
        {
            "year": 1237,
            "len": 4,
            "om": 0,
            "dynasty": "南宋",
            "name": "理宗",
            "ruler": "赵昀",
            "eraName": "嘉熙"
        },
        {
            "year": 1241,
            "len": 12,
            "om": 0,
            "dynasty": "南宋",
            "name": "理宗",
            "ruler": "赵昀",
            "eraName": "淳祐"
        },
        {
            "year": 1253,
            "len": 6,
            "om": 0,
            "dynasty": "南宋",
            "name": "理宗",
            "ruler": "赵昀",
            "eraName": "寶祐"
        },
        {
            "year": 1259,
            "len": 1,
            "om": 0,
            "dynasty": "南宋",
            "name": "理宗",
            "ruler": "赵昀",
            "eraName": "开庆"
        },
        {
            "year": 1260,
            "len": 5,
            "om": 0,
            "dynasty": "南宋",
            "name": "理宗",
            "ruler": "赵昀",
            "eraName": "景定"
        },
        {
            "year": 1265,
            "len": 10,
            "om": 0,
            "dynasty": "南宋",
            "name": "度宗",
            "ruler": "赵禥",
            "eraName": "咸淳"
        },
        {
            "year": 1275,
            "len": 2,
            "om": 0,
            "dynasty": "南宋",
            "name": "恭宗",
            "ruler": "赵(上“日”下“丝”)",
            "eraName": "德祐 "
        },
        {
            "year": 1276,
            "len": 3,
            "om": 0,
            "dynasty": "南宋",
            "name": "端宗",
            "ruler": "赵(上“日”下“正”)",
            "eraName": "景炎"
        },
        {
            "year": 1278,
            "len": 2,
            "om": 0,
            "dynasty": "南宋",
            "name": "帝昺",
            "ruler": "赵昺",
            "eraName": "祥兴"
        },
        {
            "year": 1271,
            "len": 24,
            "om": 7,
            "dynasty": "元",
            "name": "世祖",
            "ruler": "孛儿只斤·忽必烈",
            "eraName": "至元"
        },
        {
            "year": 1295,
            "len": 3,
            "om": 0,
            "dynasty": "元",
            "name": "成宗",
            "ruler": "孛儿只斤·铁穆耳",
            "eraName": "元贞"
        },
        {
            "year": 1297,
            "len": 11,
            "om": 0,
            "dynasty": "元",
            "name": "成宗",
            "ruler": "孛儿只斤·铁穆耳",
            "eraName": "大德"
        },
        {
            "year": 1308,
            "len": 4,
            "om": 0,
            "dynasty": "元",
            "name": "武宗",
            "ruler": "孛儿只斤·海山",
            "eraName": "至大"
        },
        {
            "year": 1312,
            "len": 2,
            "om": 0,
            "dynasty": "元",
            "name": "仁宗",
            "ruler": "孛儿只斤·爱育黎拔力八达",
            "eraName": "皇庆"
        },
        {
            "year": 1314,
            "len": 7,
            "om": 0,
            "dynasty": "元",
            "name": "仁宗",
            "ruler": "孛儿只斤·愛育黎拔力八達",
            "eraName": "延祐"
        },
        {
            "year": 1321,
            "len": 3,
            "om": 0,
            "dynasty": "元",
            "name": "英宗",
            "ruler": "孛儿只斤·宗硕德八剌",
            "eraName": "至治"
        },
        {
            "year": 1324,
            "len": 5,
            "om": 0,
            "dynasty": "元",
            "name": "泰定帝",
            "ruler": "孛儿只斤·也孙铁木耳",
            "eraName": "泰定"
        },
        {
            "year": 1328,
            "len": 1,
            "om": 0,
            "dynasty": "元",
            "name": "泰定帝",
            "ruler": "孛儿只斤·也孙铁木耳",
            "eraName": "至和"
        },
        {
            "year": 1328,
            "len": 1,
            "om": 0,
            "dynasty": "元",
            "name": "幼主",
            "ruler": "孛儿只斤·阿速吉八",
            "eraName": "天顺"
        },
        {
            "year": 1328,
            "len": 3,
            "om": 0,
            "dynasty": "元",
            "name": "文宗",
            "ruler": "孛儿只斤·图贴睦尔",
            "eraName": "天历"
        },
        {
            "year": 1330,
            "len": 3,
            "om": 0,
            "dynasty": "元",
            "name": "文宗",
            "ruler": "孛儿只斤·图贴睦尔",
            "eraName": "至顺"
        },
        {
            "year": 1333,
            "len": 3,
            "om": 0,
            "dynasty": "元",
            "name": "惠宗",
            "ruler": "孛儿只斤·妥镤贴睦尔",
            "eraName": "元统"
        },
        {
            "year": 1335,
            "len": 6,
            "om": 0,
            "dynasty": "元",
            "name": "惠宗",
            "ruler": "孛儿只斤·妥镤贴睦尔",
            "eraName": "至元"
        },
        {
            "year": 1341,
            "len": 28,
            "om": 0,
            "dynasty": "元",
            "name": "惠宗",
            "ruler": "孛儿只斤·妥镤贴睦尔",
            "eraName": "至正"
        },
        {
            "year": 1368,
            "len": 31,
            "om": 0,
            "dynasty": "明",
            "name": "太祖",
            "ruler": "朱元璋",
            "eraName": "洪武"
        },
        {
            "year": 1399,
            "len": 4,
            "om": 0,
            "dynasty": "明",
            "name": "惠帝",
            "ruler": "朱允溫",
            "eraName": "建文"
        },
        {
            "year": 1403,
            "len": 22,
            "om": 0,
            "dynasty": "明",
            "name": "成祖",
            "ruler": "朱棣",
            "eraName": "永乐"
        },
        {
            "year": 1425,
            "len": 1,
            "om": 0,
            "dynasty": "明",
            "name": "仁宗",
            "ruler": "朱高炽",
            "eraName": "洪熙"
        },
        {
            "year": 1426,
            "len": 10,
            "om": 0,
            "dynasty": "明",
            "name": "宣宗",
            "ruler": "朱瞻基",
            "eraName": "宣德"
        },
        {
            "year": 1436,
            "len": 14,
            "om": 0,
            "dynasty": "明",
            "name": "英宗",
            "ruler": "朱祁镇",
            "eraName": "正统"
        },
        {
            "year": 1450,
            "len": 7,
            "om": 0,
            "dynasty": "明",
            "name": "代宗",
            "ruler": "朱祁钰",
            "eraName": "景泰"
        },
        {
            "year": 1457,
            "len": 8,
            "om": 0,
            "dynasty": "明",
            "name": "英宗",
            "ruler": "朱祁镇",
            "eraName": "天顺"
        },
        {
            "year": 1465,
            "len": 23,
            "om": 0,
            "dynasty": "明",
            "name": "宪宗",
            "ruler": "朱见深",
            "eraName": "成化"
        },
        {
            "year": 1488,
            "len": 18,
            "om": 0,
            "dynasty": "明",
            "name": "孝宗",
            "ruler": "朱祐樘",
            "eraName": "弘治"
        },
        {
            "year": 1506,
            "len": 16,
            "om": 0,
            "dynasty": "明",
            "name": "武宗",
            "ruler": "朱厚照",
            "eraName": "正德"
        },
        {
            "year": 1522,
            "len": 45,
            "om": 0,
            "dynasty": "明",
            "name": "世宗",
            "ruler": "朱厚熜",
            "eraName": "嘉靖"
        },
        {
            "year": 1567,
            "len": 6,
            "om": 0,
            "dynasty": "明",
            "name": "穆宗",
            "ruler": "朱载贺",
            "eraName": "隆庆"
        },
        {
            "year": 1573,
            "len": 48,
            "om": 0,
            "dynasty": "明",
            "name": "神宗",
            "ruler": "朱翊钧",
            "eraName": "万历"
        },
        {
            "year": 1620,
            "len": 1,
            "om": 0,
            "dynasty": "明",
            "name": "光宗",
            "ruler": "朱常洛",
            "eraName": "泰昌"
        },
        {
            "year": 1621,
            "len": 7,
            "om": 0,
            "dynasty": "明",
            "name": "熹宗",
            "ruler": "朱同校",
            "eraName": "天启"
        },
        {
            "year": 1628,
            "len": 17,
            "om": 0,
            "dynasty": "明",
            "name": "毅宗",
            "ruler": "朱由检",
            "eraName": "崇祯"
        },
        {
            "year": 1644,
            "len": 18,
            "om": 0,
            "dynasty": "清",
            "name": "世祖",
            "ruler": "爱新觉罗福临",
            "eraName": "顺治"
        },
        {
            "year": 1662,
            "len": 61,
            "om": 0,
            "dynasty": "清",
            "name": "圣祖",
            "ruler": "爱新觉罗玄烨",
            "eraName": "康熙"
        },
        {
            "year": 1723,
            "len": 13,
            "om": 0,
            "dynasty": "清",
            "name": "世宗",
            "ruler": "爱新觉罗胤禛",
            "eraName": "雍正"
        },
        {
            "year": 1736,
            "len": 60,
            "om": 0,
            "dynasty": "清",
            "name": "高宗",
            "ruler": "爱新觉罗弘历",
            "eraName": "乾隆"
        },
        {
            "year": 1796,
            "len": 25,
            "om": 0,
            "dynasty": "清",
            "name": "仁宗",
            "ruler": "爱新觉罗颙琰",
            "eraName": "嘉庆"
        },
        {
            "year": 1821,
            "len": 30,
            "om": 0,
            "dynasty": "清",
            "name": "宣宗",
            "ruler": "爱新觉罗旻宁",
            "eraName": "道光"
        },
        {
            "year": 1851,
            "len": 11,
            "om": 0,
            "dynasty": "清",
            "name": "文宗",
            "ruler": "爱新觉罗奕詝",
            "eraName": "咸丰"
        },
        {
            "year": 1862,
            "len": 13,
            "om": 0,
            "dynasty": "清",
            "name": "穆宗",
            "ruler": "爱新觉罗载淳",
            "eraName": "同治"
        },
        {
            "year": 1875,
            "len": 34,
            "om": 0,
            "dynasty": "清",
            "name": "德宗",
            "ruler": "爱新觉罗载湉",
            "eraName": "光绪"
        },
        {
            "year": 1909,
            "len": 3,
            "om": 0,
            "dynasty": "清",
            "name": "无朝",
            "ruler": "爱新觉罗溥仪",
            "eraName": "宣统"
        },
        {
            "year": 1912,
            "len": 37,
            "om": 0,
            "dynasty": "近、现代",
            "name": "中华民国",
            "ruler": "",
            "eraName": "民国"
        },
        {
            "year": 1949,
            "len": 9999,
            "om": 1948,
            "dynasty": "当代",
            "name": "中国",
            "ruler": "",
            "eraName": "公历纪元"
        }
    ]

    /**
     * 获取纪年信息
     * @param year 年份
     */
    getValue(year: number): ChronologyInfo {
        const values = this.values;
        const lastYear = values[values.length - 1];
        if (year >= lastYear.year) {
            return lastYear;
        }
        for (let info of values) {
            if (year >= Number(info.year) && year < (info.year + info.len)) {
                return info;
            }
        }
        return lastYear;
    }
}

export default new ChronologyRefe()
