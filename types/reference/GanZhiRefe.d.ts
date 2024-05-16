/**
 * 天干地支参照表
 */
declare class GanZhiRefe {
    gan: string[];
    zhi: string[];
    /**
     * 根据农历年获取天干
     * @param chineseYear 农历年
     */
    getGan(chineseYear: number): string;
    /**
     * 根据农历年获取地支
     * @param chineseYear 农历年
     */
    getZhi(chineseYear: number): string;
    /**
     * 根据农历年获取天干地支
     * @param chineseYear 农历年
     */
    getGanZhi(chineseYear: number): string;
}
declare const _default: GanZhiRefe;
export default _default;
