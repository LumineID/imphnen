import { defineComponent, PropType, VNode } from "vue";
import Card from "./Card";

export default defineComponent({
    props: {
        icon: {
            type: Object as PropType<VNode>,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    },
    setup(props) {
        return () => (
            <Card
                iconLeft={props.icon}
                rounded
            >
                <div class="text-xl text-gray-300 font-bold mb-3 mt-5 text-center">
                    {props.title}
                </div>
                <div class="text-gray-400 text-sm text-center">
                    {props.description}
                </div>
            </Card>
        )
    }
})