/**
 * 生肖参照表
 */
declare class ChineseZodiacRefe {
    values: string[];
    /**
     * 根据农历年获取生肖
     * @param chineseYear 农历年
     */
    getZodiac(chineseYear: number): string;
}
declare const _default: ChineseZodiacRefe;
export default _default;
