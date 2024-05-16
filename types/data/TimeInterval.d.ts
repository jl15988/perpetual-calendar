/**
 * 时段
 */
declare class TimeInterval {
    interval: ["凌晨", "早上", "上午", "中午", "下午", "傍晚", "晚上", "深夜"];
    /**
     * 根据小时获取时段名
     * @param hour 小时
     */
    getName(hour: number): "" | "凌晨" | "早上" | "上午" | "中午" | "下午" | "傍晚" | "晚上" | "深夜";
}
declare const _default: TimeInterval;
export default _default;
