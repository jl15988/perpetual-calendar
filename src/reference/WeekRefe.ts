/**
 * 星期参照表
 */
class WeekRefe {
    // 星期
    values = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    // 星期英文
    enValues = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // 星期英文缩写
    enAbValues = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    /**
     * 获取星期名称
     * @param week 星期
     */
    getWeekName(week: number): string {
        return this.values[week];
    }

    /**
     * 获取星期英文名称
     * @param week 星期
     */
    getWeekEnName(week: number): string {
        return this.enValues[week];
    }

    /**
     * 获取星期英文缩写
     * @param week 星期
     */
    getWeekEnAbName(week: number): string {
        return this.enAbValues[week];
    }

}

export default new WeekRefe();
