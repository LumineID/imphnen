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
        const classes = computed(() => [
            "px-2 py-1 truncate rounded-2xl text-sm font-bold text-center border bg-opacity-30",
            `text-${props.color}-400 bg-${props.color}-400 border-${props.color}-400`,
            { "active:scale-95 hover:scale-105 cursor-pointer inline-block": props.actionLink }
        ])

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