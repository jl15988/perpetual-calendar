/**
 * 节日参照表
 */
import PerDateUtil from "../utils/PerDateUtil";

export interface FestivalInfo {
    start?: number,
    holiday?: boolean,
    important: boolean,
    day?: number,
    name: string
}

class FestivalRefe {
    // 按日规定的节日表
    formDay: {
        [month: string]: FestivalInfo[]
    } = {
        "1": [
            {
                "start": null,
                "holiday": true,
                "important": false,
                "day": 1,
                "name": "元旦"
            }
        ],
        "2": [
            {
                "start": null,
                "holiday": false,
                "important": true,
                "day": 2,
                "name": "世界湿地日"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 10,
                "name": "国际气象节"
            },
            {
                "start": null,
                "holiday": false,
                "important": true,
                "day": 14,
                "name": "情人节"
            }
        ],
        "3": [
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 1,
                "name": "国际海豹日"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 3,
                "name": "全国爱耳日"
            },
            {
                "start": 1963,
                "holiday": false,
                "important": false,
                "day": 5,
                "name": "学雷锋纪念日"
            },
            {
                "start": null,
                "holiday": false,
                "important": true,
                "day": 8,
                "name": "妇女节"
            },
            {
                "start": null,
                "holiday": false,
                "important": true,
                "day": 12,
                "name": "植树节"
            },
            {
                "start": 1925,
                "holiday": false,
                "important": false,
                "day": 12,
                "name": "孙中山逝世纪念日"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 14,
                "name": "国际警察日"
            },
            {
                "start": 1983,
                "holiday": false,
                "important": true,
                "day": 15,
                "name": "消费者权益日"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 17,
                "name": "中国国医节"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 17,
                "name": "国际航海日"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 21,
                "name": "世界森林日"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 21,
                "name": "消除种族歧视国际日"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 21,
                "name": "世界儿歌日"
            },
            {
                "start": null,
                "holiday": false,
                "important": true,
                "day": 22,
                "name": "世界水日"
            },
            {
                "start": null,
                "holiday": false,
                "important": true,
                "day": 23,
                "name": "世界气象日"
            },
            {
                "start": 1982,
                "holiday": false,
                "important": false,
                "day": 24,
                "name": "世界防治结核病日"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 25,
                "name": "全国中小学生安全教育日"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 30,
                "name": "巴勒斯坦国土日"
            }
        ],
        "4": [
            {
                "start": 1564,
                "holiday": false,
                "important": true,
                "day": 1,
                "name": "愚人节"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 1,
                "name": "全国爱国卫生运动月(四月)"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 1,
                "name": "税收宣传月(四月)"
            },
            {
                "start": null,
                "holiday": false,
                "important": true,
                "day": 7,
                "name": "世界卫生日"
            },
            {
                "start": null,
                "holiday": false,
                "important": true,
                "day": 22,
                "name": "世界地球日"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 23,
                "name": "世界图书和版权日"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 24,
                "name": "亚非新闻工作者日"
            }
        ],
        "5": [
            {
                "start": 1889,
                "holiday": true,
                "important": false,
                "day": 1,
                "name": "劳动节"
            },
            {
                "start": null,
                "holiday": false,
                "important": true,
                "day": 4,
                "name": "青年节"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 5,
                "name": "碘缺乏病防治日"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 8,
                "name": "世界红十字日"
            },
            {
                "start": null,
                "holiday": false,
                "important": true,
                "day": 12,
                "name": "国际护士节"
            },
            {
                "start": null,
                "holiday": false,
                "important": true,
                "day": 15,
                "name": "国际家庭日"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 17,
                "name": "国际电信日"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 18,
                "name": "国际博物馆日"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 20,
                "name": "全国学生营养日"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 23,
                "name": "国际牛奶日"
            },
            {
                "start": null,
                "holiday": false,
                "important": true,
                "day": 31,
                "name": "世界无烟日"
            }
        ],
        "6": [
            {
                "start": 1925,
                "holiday": false,
                "important": true,
                "day": 1,
                "name": "国际儿童节"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 5,
                "name": "世界环境保护日"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 6,
                "name": "全国爱眼日"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 17,
                "name": "防治荒漠化和干旱日"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 23,
                "name": "国际奥林匹克日"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 25,
                "name": "全国土地日"
            },
            {
                "start": null,
                "holiday": false,
                "important": true,
                "day": 26,
                "name": "国际禁毒日"
            }
        ],
        "7": [
            {
                "start": 1997,
                "holiday": false,
                "important": true,
                "day": 1,
                "name": "香港回归纪念日"
            },
            {
                "start": 1921,
                "holiday": false,
                "important": true,
                "day": 1,
                "name": "中共诞辰"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 1,
                "name": "世界建筑日"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 2,
                "name": "国际体育记者日"
            },
            {
                "start": 1937,
                "holiday": false,
                "important": true,
                "day": 7,
                "name": "抗日战争纪念日"
            },
            {
                "start": null,
                "holiday": false,
                "important": true,
                "day": 11,
                "name": "世界人口日"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 30,
                "name": "非洲妇女日"
            }
        ],
        "8": [
            {
                "start": 1927,
                "holiday": false,
                "important": true,
                "day": 1,
                "name": "建军节"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 8,
                "name": "中国男子节(爸爸节)"
            }
        ],
        "9": [
            {
                "start": 1945,
                "holiday": false,
                "important": true,
                "day": 3,
                "name": "抗日战争胜利纪念"
            },
            {
                "start": 1966,
                "holiday": false,
                "important": false,
                "day": 8,
                "name": "国际扫盲日"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 8,
                "name": "国际新闻工作者日"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 9,
                "name": "毛泽东逝世纪念"
            },
            {
                "start": null,
                "holiday": false,
                "important": true,
                "day": 10,
                "name": "中国教师节"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 14,
                "name": "世界清洁地球日"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 16,
                "name": "国际臭氧层保护日"
            },
            {
                "start": null,
                "holiday": false,
                "important": true,
                "day": 18,
                "name": "九·一八事变纪念日"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 20,
                "name": "国际爱牙日"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 27,
                "name": "世界旅游日"
            },
            {
                "start": null,
                "holiday": false,
                "important": true,
                "day": 28,
                "name": "孔子诞辰"
            }
        ],
        "10": [
            {
                "start": 1949,
                "holiday": true,
                "important": false,
                "day": 1,
                "name": "国庆节"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 1,
                "name": "世界音乐日"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 1,
                "name": "国际老人节"
            },
            {
                "start": 1949,
                "holiday": true,
                "important": false,
                "day": 2,
                "name": "国庆节假日"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 2,
                "name": "国际和平与民主自由斗争日"
            },
            {
                "start": 1949,
                "holiday": true,
                "important": false,
                "day": 3,
                "name": "国庆节假日"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 4,
                "name": "世界动物日"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 6,
                "name": "老人节"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 8,
                "name": "全国高血压日"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 8,
                "name": "世界视觉日"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 9,
                "name": "世界邮政日"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 9,
                "name": "万国邮联日"
            },
            {
                "start": null,
                "holiday": false,
                "important": true,
                "day": 10,
                "name": "辛亥革命纪念日"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 10,
                "name": "世界精神卫生日"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 13,
                "name": "世界保健日"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 13,
                "name": "国际教师节"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 14,
                "name": "世界标准日"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 15,
                "name": "国际盲人节(白手杖节)"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 16,
                "name": "世界粮食日"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 17,
                "name": "世界消除贫困日"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 22,
                "name": "世界传统医药日"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 24,
                "name": "联合国日"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 31,
                "name": "世界勤俭日"
            }
        ],
        "11": [
            {
                "start": 1917,
                "holiday": false,
                "important": false,
                "day": 7,
                "name": "十月社会主义革命纪念日"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 8,
                "name": "中国记者日"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 9,
                "name": "全国消防安全宣传教育日"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 10,
                "name": "世界青年节"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 11,
                "name": "国际科学与和平周(本日所属的一周)"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 12,
                "name": "孙中山诞辰纪念日"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 14,
                "name": "世界糖尿病日"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 17,
                "name": "国际大学生节"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 17,
                "name": "世界学生节"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 20,
                "name": "彝族年"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 21,
                "name": "彝族年"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 21,
                "name": "世界问候日"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 21,
                "name": "世界电视日"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 22,
                "name": "彝族年"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 29,
                "name": "国际声援巴勒斯坦人民国际日"
            }
        ],
        "12": [
            {
                "start": 1988,
                "holiday": false,
                "important": true,
                "day": 1,
                "name": "世界艾滋病日"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 3,
                "name": "世界残疾人日"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 5,
                "name": "国际经济和社会发展志愿人员日"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 8,
                "name": "国际儿童电视日"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 9,
                "name": "世界足球日"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 10,
                "name": "世界人权日"
            },
            {
                "start": null,
                "holiday": false,
                "important": true,
                "day": 12,
                "name": "西安事变纪念日"
            },
            {
                "start": null,
                "holiday": false,
                "important": true,
                "day": 13,
                "name": "南京大屠杀(1937年)纪念日"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 20,
                "name": "澳门回归纪念"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 21,
                "name": "国际篮球日"
            },
            {
                "start": null,
                "holiday": false,
                "important": true,
                "day": 24,
                "name": "平安夜"
            },
            {
                "start": null,
                "holiday": false,
                "important": true,
                "day": 25,
                "name": "圣诞节"
            },
            {
                "start": null,
                "holiday": false,
                "important": false,
                "day": 26,
                "name": "毛泽东诞辰纪念"
            }
        ]
    }

    // 按周规定的节日表
    formWeek: {
        [month: string]: (FestivalInfo & {
            week: number,
            order: number
        })[]
    } = {
        "1": [
            {
                week: 0,
                order: -1,
                important: true,
                name: "世界麻风日"
            }
        ],
        "5": [
            {
                week: 0,
                order: 2,
                important: false,
                name: "国际母亲节"
            },
            {
                week: 0,
                order: 3,
                important: true,
                name: "全国助残日"
            }
        ],
        "6": [
            {
                week: 0,
                order: 3,
                important: false,
                name: "父亲节"
            }
        ],
        "7": [
            {
                week: 0,
                order: 3,
                important: false,
                name: "被奴役国家周"
            }
        ],
        "9": [
            {
                week: 2,
                order: 3,
                important: true,
                name: "国际和平日"
            },
            {
                week: 0,
                order: 4,
                important: false,
                name: "国际聋人节"
            },
            {
                week: 0,
                order: 5,
                important: true,
                name: "世界海事日"
            }
        ],
        "10": [
            {
                week: 1,
                order: 1,
                important: false,
                name: "国际住房日"
            },
            {
                week: 3,
                order: 1,
                important: true,
                name: "国际减轻自然灾害日(减灾日)"
            }
        ],
        "11": [
            {
                week: 4,
                order: 4,
                important: true,
                name: "感恩节"
            }
        ]
    }

    /**
     * 通过年月日获取节日
     * @param year 年
     * @param month 月
     * @param day 日
     */
    getFestival(year: number, month: number, day: number): FestivalInfo[] {
        return this.getFestivalByDate(new Date(year, month - 1, day));
    }

    /**
     * 通过日期获取节日
     * @param date 日期
     */
    getFestivalByDate(date: Date): FestivalInfo[] {
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const week = date.getDay();
        const res: FestivalInfo[] = [];
        const formDayInfos = this.formDay[String(month)];
        if (formDayInfos) {
            for (let formDayInfo of formDayInfos) {
                if (day === formDayInfo.day) {
                    res.push(formDayInfo);
                }
            }
        }
        const formWeekInfos = this.formWeek[String(month)];
        if (formWeekInfos) {
            const weekdayWhichOfMonth = PerDateUtil.getWeekdayWhichOfMonth(date);
            for (let weekInfo of formWeekInfos) {
                if (weekdayWhichOfMonth === weekInfo.order && week === weekInfo.week) {
                    res.push({
                        important: weekInfo.important,
                        name: weekInfo.name
                    })
                }
            }
        }
        return res;
    }
}

export default new FestivalRefe()
