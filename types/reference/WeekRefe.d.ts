/**
 * 星期参照表
 */
declare class WeekRefe {
    values: string[];
    enValues: string[];
    enAbValues: string[];
    /**
     * 获取星期名称
     * @param week 星期
     */
    getWeekName(week: number): string;
    /**
     * 获取星期英文名称
     * @param week 星期
     */
    getWeekEnName(week: number): string;
    /**
     * 获取星期英文缩写
     * @param week 星期
     */
    getWeekEnAbName(week: number): string;
}
declare const _default: WeekRefe;
export default _default;
