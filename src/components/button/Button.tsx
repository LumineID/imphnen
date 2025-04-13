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
                    ({
                        blue: "text-blue-400 border border-blue-400",
                        green: "text-green-400 border border-green-400",
                        red: "text-red-400 border border-red-400",
                        yellow: "text-yellow-400 border border-yellow-400",
                        teal: "text-teal-400 border border-teal-400",
                        cyan: "text-cyan-400 border border-cyan-400",
                        gray: "text-gray-400 border border-gray-400",
                        pink: "text-pink-400 border border-pink-400",
                    })[props.color]
                )
            } else {
                classes.push(
                    ({
                        blue: "bg-blue-400 text-white",
                        green: "bg-green-400 text-white",
                        red: "bg-red-400 text-white",
                        yellow: "bg-yellow-400 text-white",
                        teal: "bg-teal-400 text-white",
                        cyan: "bg-cyan-400 text-white",
                        gray: "bg-gray-800 text-white",
                        pink: "bg-pink-400 text-white",
                    })[props.color]
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