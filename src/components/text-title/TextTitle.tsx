import { TWSize } from "@/types";
import { defineComponent, PropType } from "vue";

export default defineComponent({
    props: {
        text: {
            type: String,
            required: true
        },
        size: {
            type: String as PropType<TWSize>,
            default: "md"
        }
    },
    setup(props) {
        return () => (
            <div class={[
                "text-blue-400 font-bold text-center",
                { "text-base": props.size === "sm" },
                { "text-xl"  : props.size === "md" },
                { "text-3xl" : props.size === "lg" },
            ]}>
                {`<${props.text.split(" ").map(v => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase()).join("")} />`}
            </div>
        )
    }
})