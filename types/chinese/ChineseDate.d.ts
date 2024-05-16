import { DayAllInfo, DynastyInfo, FestivalInfo, MonthInfo, SolarTermsInfo, YearInfo } from "./ChineseDateUtil";
declare class ChineseDate {
    year: number;
    month: number;
    day: number;
    dayAllInfo: DayAllInfo;
    constructor();
    constructor(date: Date);
    constructor(year: number);
    constructor(year: number, month: number);
    constructor(year: number, month: number, day: number);
    /**
     * 通过农历年构建，默认一月初一
     * @param chineseYear 农历年
     */
    static fromLunar(chineseYear: number): any;
    /**
     * 通过农历年月构建，默认初一
     * @param chineseYear 农历年
     * @param chineseMonth 农历月
     */
    static fromLunar(chineseYear: number, chineseMonth: number): any;
    /**
     * 通过农历年月日构建
     * @param chineseYear 农历年
     * @param chineseMonth 农历月
     * @param chineseDay 农历日
     */
    static fromLunar(chineseYear: number, chineseMonth: number, chineseDay: number): any;
    /**
     * 通过公历日期构建
     * @param date 公历年
     */
    static fromSolar(date: Date): any;
    /**
     * 通过公历年构建，默认1月1日
     * @param year 公历年
     */
    static fromSolar(year: number): any;
    /**
     * 通过公历年月构建，默认1日
     * @param year 公历年
     * @param month 公历月
     */
    static fromSolar(year: number, month: number): any;
    /**
     * 通过公历年月日构建
     * @param year 公历年
     * @param month 公历月
     * @param day 公历日
     */
    static fromSolar(year: number, month: number, day: number): any;
    _check(): void;
    /**
     * 获取日的所有信息
     */
    getAllInfo(): DayAllInfo;
    /**
     * 获取公历月所有日的农历信息
     */
    getMonthDays(): DayAllInfo[];
    /**
     * 获取月信息
     */
    getMonth(): MonthInfo;
    /**
     * 获取年信息
     */
    getYear(): YearInfo;
    /**
     * 获取农历节日
     * 其中 super 为重要节日，如：“春节”
     * common 为普通节日，如：“重阳节”
     * other 为其他节日
     */
    getFestival(): FestivalInfo;
    /**
     * 获取生肖
     */
    getChineseZodiac(): string;
    /**
     * 获取天干
     */
    getGan(): string;
    /**
     * 获取地支
     */
    getZhi(): string;
    /**
     * 获取干支纪年
     */
    getCyclical(): string;
    /**
     * 获取黄帝纪年
     */
    getHuangdiYear(): number;
    /**
     * 获取朝代
     */
    getDynasty(): DynastyInfo;
    /**
     * 获取节气
     */
    getSolarTerms(): SolarTermsInfo;
    /**
     * 获取干支纪日
     */
    getCyclicalYMD(): string;
    toString(): string;
}
export default ChineseDate;
