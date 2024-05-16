/**
 * 节气参照表
 */
class SolarTermsRefe {
    values = ['冬至', '小寒', '大寒', '立春', '雨水', '惊蛰', '春分', '清明', '谷雨', '立夏', '小满', '芒种', '夏至', '小暑', '大暑', '立秋', '处暑', '白露', '秋分', '寒露', '霜降', '立冬', '小雪', '大雪']

    getValue(index: number) {
        if (index < 0 || index > this.values.length - 1) {
            return "";
        }
        return this.values[index];
    }
}

export default new SolarTermsRefe();
