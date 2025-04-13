import { computed, defineComponent, h, PropType, VNode } from "vue";
import Button from "../button/Button";
import { TWCardColor } from "@/types";

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
    setup(props, { emit}) {
        const bg = computed(() => `bg-${props.color}-400`)

        return () => (
            <div class="w-full rounded-lg">
                <div class={["flex justify-center items-center h-32 rounded-t-lg border-2 border-gray-500", bg.value]}>
                    {h(props.icon, { class: "text-7xl text-white" })}
                </div>
                <div class="bg-gray-800 p-4 break-words rounded-b-lg border-b-2 border-l-2 border-r-2 border-gray-500">
                    <div class="text-xl text-white font-bold">
                        {props.title}
                    </div>
                    <div class="text-base text-gray-300 my-5">
                        {props.description}
                    </div>
                    <Button
                        onClick={(e: Event) => emit("click", e)}
                        rounded
                        text={props.btnText}
                        color={props.color}
                    />
                </div>
            </div>
        )
    }
})