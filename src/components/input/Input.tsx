import { defineComponent, onBeforeMount, ref } from "vue";

export default defineComponent({
    inheritAttrs: false,
    emits: {
        "update:modelValue": (value: string) => true,
        "input": (e: Event) => true
    },
    props: {
        label: {
            type: String
        },
        placeholder: {
            type: String
        }
    },
    setup(props, { slots, emit, attrs }) {
        const id = ("input-" + (Math.random() + 1).toString(36).substring(7))
        const value = ref<string>("")

        const event = {
            onInput(e: Event) {
                emit("update:modelValue", value.value)
                emit("input", e)
            }
        }

        onBeforeMount(() => {
            value.value = String(attrs.modelValue || "")
        })

        return () => (
           <div {...attrs}>
                {(props.label || slots.label) && (
                    <label for={id} class="block mb-2 text-base font-medium text-white cursor-pointer">
                        {slots.label?.() || props.label}
                    </label>
                )}
                <input
                    class="bg-gray-700 border-2 outline-none border-gray-600 block focus:ring-blue-400 focus:border-blue-400 w-full bg-transparent p-2 rounded-xl text-gray-300"
                    id={id}
                    v-model={value.value}
                    onInput={event.onInput}
                    placeholder={props.placeholder}
                />
           </div>
        )
    }
})