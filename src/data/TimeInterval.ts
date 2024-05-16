/**
 * 时段
 */
class TimeInterval {
    interval: ["凌晨", "早上", "上午", "中午", "下午", "傍晚", "晚上", "深夜"];

    /**
     * 根据小时获取时段名
     * @param hour 小时
     */
    getName(hour: number) {
        if (hour >= 1 && hour < 5) {
            return "凌晨";
        } else if (hour >= 5 && hour < 8) {
            return "早上";
        } else if (hour >= 8 && hour < 11) {
            return "上午";
        } else if (hour >= 11 && hour < 13) {
            return "中午";
        } else if (hour >= 13 && hour < 17) {
            return "下午";
        } else if (hour >= 17 && hour < 19) {
            return "傍晚";
        } else if (hour >= 19 && hour < 23) {
            return "晚上";
        } else if (hour >= 23 || hour < 1) {
            return "深夜";
        }
        return "";
    }
}

export default new TimeInterval();
