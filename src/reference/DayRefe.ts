/**
 * 日参照表
 */
class DayRefe {
    names = ['初一', '初二', '初三', '初四', '初五', '初六', '初七', '初八', '初九', '初十', '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九', '二十', '廿一', '廿二', '廿三', '廿四', '廿五', '廿六', '廿七', '廿八', '廿九', '三十', '卅一']

    getName(index: number): string {
        if (index < 0 || index > this.names.length - 1) {
            return "";
        }
        return this.names[index];
    }
}

export default new DayRefe()
