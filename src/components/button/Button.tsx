import { TWSize, TWColor } from "@/types";
import { computed, defineComponent, PropType } from "vue";

export default defineComponent({
    emits: {
        click: (e: MouseEvent) => true
    },
    props: {
        text: {
            type: String
        },
        color: {
            type: String as PropType<TWColor>,
            default: "gray"
        },
        rounded: {
            type: Boolean,
            default: false
        },
        outline: {
            type: Boolean,
            default: false
        },
        size: {
            type: String as PropType<TWSize>,
            default: "md"
        },
        actionLink: {
            type: String
        }
    },
    setup(props, { slots, emit }) {
        const classes = computed(() => {
            const classes = [
                "cursor-pointer hover:scale-105 active:scale-95",
                { "rounded-lg" : props.rounded === false },
                { "rounded-3xl": props.rounded === true },
                { "py-3 px-10" : props.size === "lg" },
                { "py-2 px-4"  : props.size === "md" },
                { "py-1 px-2"  : props.size === "sm" },
            ]

            if (props.outline) {
                classes.push(
                    `text-${props.color}-400 border border-${props.color}-400`
                )
            } else {
                classes.push(
                    `bg-${props.color}-400 text-white`
                )
            }

            return classes
        })
        return () => (
            <>
                {props.actionLink ? (
                    <a
                        class={classes.value}
                        href={props.actionLink}
                        target="_blank"
                        onClick={(e) => emit("click", e)}
                    >
                        {slots.default?.() || props.text}
                    </a>
                ) : (
                    <button class={classes.value} onClick={(e) => emit("click", e)}>
                        {slots.default?.() || props.text}
                    </button>
                )}
            </>
        )
    }
})