/**
 * 数字参照表
 */
class NumberRefe {
    cnNames = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];

    getCnName(number: number): string {
        if (number < 0 || number > this.cnNames.length - 1) {
            return "";
        }
        return this.cnNames[number];
    }
}
