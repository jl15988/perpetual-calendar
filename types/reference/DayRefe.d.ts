/**
 * 日参照表
 */
declare class DayRefe {
    names: string[];
    /**
     * 获取日名
     * @param index 下标
     */
    getChineseName(index: number): string;
    /**
     * 通过日获取日名
     * @param day 日
     */
    getChineseNameByDay(day: number): string;
    /**
     * 通过 Date 获取日名
     * @param date 日期
     */
    getChineseNameByDate(date: Date): string;
}
declare const _default: DayRefe;
export default _default;
