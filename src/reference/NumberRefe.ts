/**
 * 数字参照表
 */
class NumberRefe {
    // 中文数字
    cnNames = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
    /* 中文数字单位
    万：代表的是10的4次方。
    亿：代表的是10的8次方。
    兆：代表的是10的12次方。
    京：代表的是10的16次方。
    垓：代表的是10的20次方。
    秭：代表的是10的24次方。
    穰：代表的是10的28次方。
    沟：代表的是10的32次方。
    涧：代表的是10的36次方。
    正：代表的是10的40次方。
    载：代表的是10的44次方。
    极：代表的是10的48次方。
    恒河沙：代表的是10的52次方。
    阿僧祇：代表的是10的56次方。
    那由他：代表的是10的60次方。
    不可思议：代表的是10的64次方。
    无量：代表的是10的68次方。
    大数：代表的是10的72次方。
     */
    cnUnits = ['', '十', '百', '千', '万', '亿', '兆', '京', '垓', '秭', '穰', '沟', '涧', '正', '载', '极', '恒河沙', '阿僧祇', '那由他', '不可思议', '无量', '大数'];
    // 中文大写数字
    cnUpNames = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖', '拾', '佰', '仟', '萬', '亿'];
    // 罗马数字 Map
    romanMap = {1: 'I', 5: 'V', 10: 'X', 50: 'L', 100: 'C', 1000: 'M'};
    // 罗马对照表
    romanCrt = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    // 罗马数
    romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    // /**
    //  * 通过数字获取中文数字
    //  * @param number 数字
    //  */
    // getChineseName(number: number): string {
    //     const chineseNumerals = this.cnNames.slice(0, this.cnNames.length - 1);
    //     console.log(chineseNumerals)
    //     const chineseUnits = this.cnUnits.slice(0, 5);
    //     chineseUnits.push('十', '百', '千', '亿');
    //
    //     function convertUnit(numStr, unitIndex) {
    //         if (numStr === '0000') return '';
    //
    //         let result = '';
    //         let zeroFlag = true; // 用于标记是否连续出现零
    //
    //         for (let i = 0; i < 4; i++) {
    //             const digit = parseInt(numStr[3 - i]);
    //             const unit = chineseUnits[i + unitIndex];
    //
    //             if (digit === 0) {
    //                 if (!zeroFlag) {
    //                     result = chineseNumerals[0] + result;
    //                 }
    //                 zeroFlag = true;
    //             } else {
    //                 zeroFlag = false;
    //                 result = chineseNumerals[digit] + unit + result;
    //             }
    //         }
    //
    //         return result;
    //     }
    //
    //     if (number === 0) {
    //         return chineseNumerals[0];
    //     }
    //
    //     let strNum = String(number);
    //     let len = strNum.length;
    //     let chineseStr = '';
    //     let unitIndex = 0;
    //
    //     while (len > 0) {
    //         const unitLen = Math.min(4, len); // 每组最多4位（个、十、百、千）
    //         const unitStr = strNum.slice(-unitLen);
    //         strNum = strNum.slice(0, -unitLen);
    //         len -= unitLen;
    //
    //         const unitResult = convertUnit(unitStr, unitIndex);
    //         if (unitResult) {
    //             chineseStr = unitResult + (chineseStr ? chineseUnits[unitIndex + 4] + chineseStr : '');
    //         }
    //
    //         unitIndex += 1;
    //         if (unitIndex >= 4) {
    //             unitIndex = 0; // 万、亿等之后重新开始计数单位
    //         }
    //     }
    //
    //     return chineseStr;
    // }
    //
    // numberToChinese(num) {
    //     if (num === 0) {
    //         return '零';
    //     }
    //
    //     const chineseNumerals = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
    //     const chineseUnits = ['', '十', '百', '千', '万', '十', '百', '千', '亿'];
    //     const chineseBigUnits = ['', '十', '百', '千']; // 用于亿以上的大单位
    //
    //     let strNum = String(num);
    //     let parts = []; // 存储每四位数字的中文表示
    //     let zeroCount = 0; // 连续零的计数
    //
    //     // 将数字每四位分为一组，并反转，方便从低位到高位处理
    //     for (let i = 0; i < strNum.length; i += 4) {
    //         let part = strNum.slice(i, i + 4).split('').reverse().join('');
    //         let chinesePart = '';
    //         let lastWasZero = false;
    //
    //         // 处理每四位数字
    //         for (let j = 0; j < part.length; j++) {
    //             let digit = parseInt(part[j]);
    //             let unitIndex = j;
    //             let unit = '';
    //
    //             if (digit === 0) {
    //                 zeroCount++;
    //                 if (!lastWasZero) {
    //                     chinesePart = chineseNumerals[digit] + chinesePart;
    //                     lastWasZero = true;
    //                 }
    //             } else {
    //                 zeroCount = 0; // 非零数字重置连续零计数
    //                 unit = j < 4 ? chineseUnits[unitIndex] : chineseBigUnits[unitIndex - 4] + '亿';
    //                 chinesePart = chineseNumerals[digit] + unit + chinesePart;
    //                 lastWasZero = false;
    //
    //                 // 去除单位前的零（除了大单位前的零）
    //                 if (unit === '万' || unit === '亿' && chinesePart.slice(-2) === chineseNumerals[0] + unit.slice(0, -1)) {
    //                     chinesePart = chinesePart.slice(0, -2) + unit.slice(-1);
    //                 }
    //             }
    //         }
    //
    //         // 去除末尾的零（除了大单位前的零）
    //         if (chinesePart.slice(-1) === chineseNumerals[0] && !/亿|万$/.test(chinesePart)) {
    //             chinesePart = chinesePart.slice(0, -1);
    //         }
    //
    //         // 如果整个部分都是零，并且不是第一个部分（即不是最高位），则忽略它
    //         if (chinesePart === chineseNumerals[0] && parts.length > 0) {
    //             continue;
    //         }
    //
    //         // 如果不是第一个部分，则添加单位（万、亿）
    //         if (parts.length > 0) {
    //             chinesePart += parts.length === 1 ? '万' : '亿';
    //         }
    //
    //         parts.unshift(chinesePart); // 添加到数组的前面
    //     }
    //
    //     return parts.join('');
    // }

    /**
     * 根据数字获取罗马数字
     * @param number 数字
     */
    getRoman(number: number) {
        let romanNum = '';
        for (let i = 0; i < this.romanCrt.length; i++) {
            while (number >= this.romanCrt[i]) {
                romanNum += this.romans[i];
                number -= this.romanCrt[i];
            }
        }
        return romanNum;
    }
}

export default new NumberRefe()
