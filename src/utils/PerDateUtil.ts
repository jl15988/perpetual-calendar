class PerDateUtil {

    /**
     * 获取日期为当月第几个星期几
     * @param date 日期
     */
    getWeekdayWhichOfMonth(date?: Date) {
        date = date || new Date();
        // 获取月份的第一天
        let firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);

        // 获取指定日期的星期几（0代表星期日，1代表星期一，...，6代表星期六）
        let targetWeekday = date.getDay();

        // 初始化计数器
        let instanceCount = 0;

        // 遍历整个月，找到每个星期几第一次出现的位置
        let currentDate = new Date(firstDayOfMonth);
        while (currentDate.getMonth() === date.getMonth()) {
            // 如果当前日期是目标星期几
            if (currentDate.getDay() === targetWeekday) {
                instanceCount++;

                // 如果当前日期就是指定的日期，则返回实例数
                if (currentDate.getDate() === date.getDate()) {
                    return instanceCount;
                }
            }

            // 转到下一天
            currentDate.setDate(currentDate.getDate() + 1);
        }

        // 如果函数运行到这里，说明日期不在目标月份中（这通常不会发生，除非输入错误）
        throw new Error("date error");
    }
}

export default new PerDateUtil()
