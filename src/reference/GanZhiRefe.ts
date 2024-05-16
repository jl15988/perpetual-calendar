/**
 * 天干地支参照表
 */
class GanZhiRefe {
    // 天干
    gan = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"]
    // 地支
    zhi = ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"]

    /**
     * 根据农历年获取天干
     * @param chineseYear 农历年
     */
    getGan(chineseYear: number): string {
        const yIndex = chineseYear - 1984 + 12000;
        return this.gan[yIndex % 10];
    }

    /**
     * 根据农历年获取地支
     * @param chineseYear 农历年
     */
    getZhi(chineseYear: number): string {
        const yIndex = chineseYear - 1984 + 12000;
        return this.zhi[yIndex % 12];
    }

    /**
     * 根据农历年获取天干地支
     * @param chineseYear 农历年
     */
    getGanZhi(chineseYear: number): string {
        return this.getGan(chineseYear).concat(this.getZhi(chineseYear));
    }
}

export default new GanZhiRefe()
