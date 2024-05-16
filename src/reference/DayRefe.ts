/**
 * 日参照表
 */
class DayRefe {
    // 日名
    names = ['初一', '初二', '初三', '初四', '初五', '初六', '初七', '初八', '初九', '初十', '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九', '二十', '廿一', '廿二', '廿三', '廿四', '廿五', '廿六', '廿七', '廿八', '廿九', '三十', '卅一']

    /**
     * 获取日名
     * @param index 下标
     */
    getChineseName(index: number): string {
        if (index < 0 || index > this.names.length - 1) {
            return "";
        }
        return this.names[index];
    }

    /**
     * 通过日获取日名
     * @param day 日
     */
    getChineseNameByDay(day: number): string {
        return this.getChineseName(day - 1);
    }

    /**
     * 通过 Date 获取日名
     * @param date 日期
     */
    getChineseNameByDate(date: Date): string {
        return this.getChineseNameByDay(date.getDate());
    }
}

export default new DayRefe()
