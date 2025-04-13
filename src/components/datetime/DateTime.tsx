import { DateTimes } from "@/types";
import { defineComponent, onMounted, onUnmounted, ref } from "vue";

export default defineComponent({
    setup(props, { slots }) {
        const date = ref<DateTimes>({
            day: 0,
            month: 0,
            year: 0,
            hour: 0,
            minute: 0,
            second: 0
        })

        let interval: NodeJS.Timeout | null = null;

        onMounted(() => {
            interval = setInterval(() => {
                const d = new Date()
                date.value = {
                    day: d.getDate(),
                    month: d.getMonth() + 1,
                    year: d.getFullYear(),
                    hour: d.getHours(),
                    minute: d.getMinutes(),
                    second: d.getSeconds()
                }
            }, 1000)
        })

        onUnmounted(() => {
            if (interval) {
                clearInterval(interval)
            }
        })

        return () => slots.default?.(date.value)
    }
})