/**
 * 时段参照表
 */
declare class TimeIntervalRefe {
    values: string[];
    crt: number[][];
    /**
     * 根据小时获取时段名
     * @param hour 小时
     */
    getTimeInterval(hour: number): string;
    /**
     * 根据 Date 获取时间段名
     * @param date 日期
     */
    getTimeIntervalOfDate(date: Date): string;
}
declare const _default: TimeIntervalRefe;
export default _default;
