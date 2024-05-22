export interface FestivalInfo {
    start?: number;
    holiday?: boolean;
    important: boolean;
    day?: number;
    name: string;
}
declare class FestivalRefe {
    formDay: {
        [month: string]: FestivalInfo[];
    };
    formWeek: {
        [month: string]: (FestivalInfo & {
            week: number;
            order: number;
        })[];
    };
    /**
     * 通过年月日获取节日
     * @param year 年
     * @param month 月
     * @param day 日
     */
    getFestival(year: number, month: number, day: number): FestivalInfo[];
    /**
     * 通过日期获取节日
     * @param date 日期
     */
    getFestivalByDate(date: Date): FestivalInfo[];
}
declare const _default: FestivalRefe;
export default _default;
