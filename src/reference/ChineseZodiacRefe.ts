/**
 * 生肖参照表
 */
class ChineseZodiacRefe {
    // 生肖
    values = ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"];

    /**
     * 根据农历年获取生肖
     * @param chineseYear 农历年
     */
    getZodiac(chineseYear: number): string {
        const yIndex = chineseYear - 1984 + 12000;
        return this.values[yIndex % 12];
    }
}

export default new ChineseZodiacRefe();
