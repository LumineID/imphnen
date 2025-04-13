import { defineComponent, VNode, PropType } from "vue";

export default defineComponent({
    props: {
        rounded: {
            type: Boolean,
            default: false
        },
        iconLeft: {
            type: Object as PropType<VNode>
        },
        iconRight: {
            type: Object as PropType<VNode>
        }
    },
    setup(props, { slots }) {
        return () => (
            <div class={[
                "w-full bg-gray-800 border-gray-500 border-2 p-4 break-words relative",
                { "rounded-3xl"    : props.rounded == true },
                { "rounded-md"     : props.rounded == false },
                { "rounded-tl-none": slots.iconLeft },
                { "rounded-tr-none": slots.iconRight }
            ]}>
                {props.iconLeft && (
                    <div class="rounded-full p-3 absolute z-10 -left-3 -top-12 bg-gray-800 border-2 border-gray-500">
                        <div class="flex justify-center items-center text-blue-400 text-5xl">
                            {props.iconLeft}
                        </div>
                    </div>
                )}
                {props.iconRight && (
                    <div class="rounded-full p-3 absolute z-10 -right-3 -top-12 bg-gray-800 border-2 border-gray-500">
                        <div class="flex justify-center items-center text-blue-400 text-5xl">
                            {props.iconRight}
                        </div>
                    </div>
                )}
                {slots.default?.()}
            </div>
        )
    }
})