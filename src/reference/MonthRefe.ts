/**
 * 月参照表
 */
class MonthRefe {
    // 月名
    names = ['十一', '十二', '正', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
    // 月英文
    enNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    getName(index: number): string {
        if (index < 0 || index > this.names.length - 1) {
            return "";
        }
        return this.names[index];
    }
}

export default new MonthRefe()
