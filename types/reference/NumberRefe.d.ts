/**
 * 数字参照表
 */
declare class NumberRefe {
    cnNames: string[];
    cnUnits: string[];
    cnUpNames: string[];
    romanMap: {
        1: string;
        5: string;
        10: string;
        50: string;
        100: string;
        1000: string;
    };
    romanCrt: number[];
    romans: string[];
    /**
     * 通过数字获取中文数字
     * @param number 数字
     */
    getChineseName(number: number): string;
    numberToChinese(num: any): string;
    /**
     * 根据数字获取罗马数字
     * @param number 数字
     */
    getRoman(number: number): string;
}
declare const _default: NumberRefe;
export default _default;
