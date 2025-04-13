import { TWCardColor } from "@/types";
import { defineComponent, PropType, computed, VNode } from "vue";

export default defineComponent({
    emits: {
        click: (e: Event) => true
    },
    props: {
        color: {
            type: String as PropType<TWCardColor>,
            default: "blue"
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        btnText: {
            type: String,
            required: true
        },
        icon: {
            type: Object as PropType<VNode>,
            required: true
        }
    },
    setup(props, { emit }) {
        const color   = computed(() => `text-${props.color}-400`)
        const bg      = computed(() => `bg-${props.color}-400`)
        const hoverBg = computed(() => `hover:bg-${props.color}-600`)

        return () => (
            <div class="w-full rounded-xl">
                <div class={["p-2 w-full rounded-t-xl border-2 border-gray-500", bg.value]} />
                <div class="bg-gray-800 p-4 break-words rounded-b-md border-b-2 border-l-2 border-r-2 border-gray-500">
                    <div class={["flex justify-start text-5xl my-5", color.value]}>
                        {props.icon}
                    </div>
                    <div class="text-xl text-white font-bold">
                        {props.title}
                    </div>
                    <div class="text-base text-gray-300 my-5">
                        {props.description}
                    </div>
                    <div
                        class={["text-base font-bold cursor-pointer", color.value, hoverBg.value]}
                        onClick={(e: Event) => emit("click", e)}
                    >
                        {props.btnText}
                    </div>
                </div>
            </div>
        )
    }
})