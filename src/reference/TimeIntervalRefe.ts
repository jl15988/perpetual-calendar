/**
 * 时段参照表
 */
class TimeIntervalRefe {
    // 时段
    values = ["凌晨", "早上", "上午", "中午", "下午", "傍晚", "晚上", "深夜"];
    // 时段对照表，左闭右开，并且（最后一个为或）
    crt = [[1, 5], [5, 8], [8, 11], [11, 13], [13, 17], [17, 19], [19, 23], [23, 1]];

    /**
     * 根据小时获取时段名
     * @param hour 小时
     */
    getTimeInterval(hour: number): string {
        if (!hour || hour > 24 || hour < 0) {
            return null;
        }
        this.crt.forEach((crt, index) => {
            if (index !== crt.length - 1) {
                if (hour >= crt[0] && hour < crt[1]) {
                    return this.values[index];
                }
            } else {
                if (hour >= crt[0] || hour < crt[1]) {
                    return this.values[index];
                }
            }
        });
        return null;
    }

    /**
     * 根据 Date 获取时间段名
     * @param date 日期
     */
    getTimeIntervalOfDate(date: Date): string {
        return this.getTimeInterval(date.getHours());
    }

}

export default new TimeIntervalRefe()
