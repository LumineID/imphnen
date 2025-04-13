import { defineComponent, PropType } from "vue";
import Card from "./Card";

export default defineComponent({
    props: {
        author: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        },
        rating: {
            type: Number as PropType<0 | 1 | 2 | 3 | 4 | 5>,
            required: true
        }
    },
    setup(props) {
        return () => (
            <Card rounded>
                <div class="flex justify-center my-1 text-white">
                    <b-icon-quote class="text-4xl" />
                </div>
                <div class="text-xl text-white text-center font-semibold">
                    {props.author}
                </div>
                <div class="text-center text-sm text-gray-400 my-3">
                    <i>"{props.message}"</i>
                </div>
                <div class="flex gap-3 my-1 justify-center">
                    {Array(props.rating).fill(0).map((_, index) => (
                        <b-icon-star-fill key={index} class="text-yellow-400" />
                    ))}
                    {Array(5 - props.rating).fill(0).map((_, index) => (
                        <b-icon-star key={index} />
                    ))}
                </div>
            </Card>
        )
    }
})