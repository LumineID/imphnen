import { TWColor } from "@/types";
import { computed, defineComponent, PropType } from "vue";

export default defineComponent({
    props: {
        color: {
            type: String as PropType<TWColor>,
            default: "blue"
        },
        text: {
            type: String
        },
        actionLink: {
            type: String
        }
    },
    setup(props) {
        const classes = computed(() => {
            const color = ({
                blue: "bg-blue-400/30 text-blue-400 border-[1px] border-blue-400",
                cyan: "bg-cyan-400/30 text-cyan-400 border-[1px] border-cyan-400",
                yellow: "bg-yellow-400/30 text-yellow-400 border-[1px] border-yellow-400",
                green: "bg-green-400/30 text-green-400 border-[1px] border-green-400",
                teal: "bg-teal-400/30 text-teal-400 border-[1px] border-teal-400",
                red: "bg-red-400/30 text-red-400 border-[1px] border-red-400",
                gray: "bg-gray-400/30 text-gray-400 border-[1px] border-gray-400",
                pink: "bg-gray-400/30 text-gray-400 border-[1px] border-gray-400",
            })[props.color]

            return [
                color,
                "px-2 py-1 truncate rounded-2xl text-sm font-bold text-center",
                { "active:scale-95 hover:scale-105 cursor-pointer inline-block": props.actionLink }
            ]
        })

        return () => (
            <>
                {props.actionLink ? (
                    <a class={classes.value} href={props.actionLink} target="_blank">
                        {props.text}
                    </a>
                ) : (
                    <div class={classes.value}>
                        {props.text}
                    </div>
                )}
            </>
        )
    }
})