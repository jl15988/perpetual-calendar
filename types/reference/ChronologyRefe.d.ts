interface ChronologyInfo {
    year: number;
    len: number;
    om: number;
    dynasty: string;
    name: string;
    ruler?: string;
    eraName: string;
}
/**
 * 纪年参照表
 */
declare class ChronologyRefe {
    values: ChronologyInfo[];
    /**
     * 获取纪年信息
     * @param year 年份
     */
    getValue(year: number): ChronologyInfo;
}
declare const _default: ChronologyRefe;
export default _default;
