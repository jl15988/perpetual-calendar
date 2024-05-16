import GanZhiRefe from "./GanZhiRefe";

/**
 * 时间参照表
 */
class TimeRefe {
    // 地支纪时对照表，左闭右开，并且（第一个为或）
    zhiTimeCrt = [[23, 1], [1, 3], [3, 5], [5, 7], [7, 9], [9, 11], [11, 13], [13, 15], [15, 17], [17, 19], [19, 21], [21, 23]];
    // 时段
    interval = ["凌晨", "早上", "上午", "中午", "下午", "傍晚", "晚上", "深夜"];
    // 时段对照表，左闭右开，并且（最后一个为或）
    intervalCrt = [[1, 5], [5, 8], [8, 11], [11, 13], [13, 17], [17, 19], [19, 23], [23, 1]];

    /**
     * 获取时间地支
     * @param hour 小时
     */
    getTimeZhi(hour: number): string {
        if (!hour || hour > 24 || hour < 0) {
            return null;
        }
        this.zhiTimeCrt.forEach((crt, index) => {
            if (index !== 0) {
                if (hour >= crt[0] && hour < crt[1]) {
                    return GanZhiRefe.zhi[index];
                }
            } else {
                if (hour >= crt[0] || hour < crt[1]) {
                    return GanZhiRefe.zhi[index];
                }
            }
        });
        return null;
    }

    /**
     * 通过 Date 获取时间地支
     * @param date 日期
     */
    getTimeZhiOfDate(date: Date): string {
        return this.getTimeZhi(date.getHours());
    }

    /**
     * 根据小时获取时段名
     * @param hour 小时
     */
    getTimeInterval(hour: number): string {
        if (!hour || hour > 24 || hour < 0) {
            return null;
        }
        this.intervalCrt.forEach((crt, index) => {
            if (index !== crt.length - 1) {
                if (hour >= crt[0] && hour < crt[1]) {
                    return this.interval[index];
                }
            } else {
                if (hour >= crt[0] || hour < crt[1]) {
                    return this.interval[index];
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
