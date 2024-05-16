/**
 * 月相参照表
 */
class LunarPhaseRefe {
    // 月相名
    names = ["朔", "上弦", "望", "下弦"];

    getValue(index: number): string {
        if (index < 0 || index > this.names.length - 1) {
            return "";
        }
        return this.names[index];
    }
}
