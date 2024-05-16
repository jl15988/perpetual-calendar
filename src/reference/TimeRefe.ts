/**
 * 时间参照表
 */
class TimeRefe {
    zhiTimeCrt = [[23, 1], [1, 3], [3, 5], [5, 7], [7, 9], [9, 11], [11, 13], [13, 15], [15, 17], [17, 19], [19, 21], [21, 23]];

    getTimeZhi(hour: number) {
        if (!hour || hour > 24 || hour < 0) {
            return null;
        }
        this.zhiTimeCrt.forEach((crt, index) => {
            if (index !== 0) {
                if (hour >= crt[0] && hour < crt[1]) {
                    return this.zhiTimeCrt[index];
                }
            } else {
                if (hour >= crt[0] || hour < crt[1]) {
                    return this.zhiTimeCrt[index];
                }
            }
        });
        return null;
    }
}
