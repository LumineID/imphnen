import { CMDEnterEvent } from "@/types";
import { computed, defineComponent, nextTick, onBeforeMount, onMounted, onUnmounted, ref, watch, PropType } from "vue";

export default defineComponent({
    emits: {
        enter: (event: CMDEnterEvent) => true
    },
    props: {
        locationPath: {
            type: String,
            required: true
        },
        autoTyping: {
            type: Object as PropType<{ text: string, delay: number }>,
        }
    },
    setup(props, { emit, expose }) {
        const value = ref<string>("")
        const inputRef = ref<HTMLTextAreaElement | null>(null)
        const isEntered = ref<boolean>(false)

        let typingInterval: NodeJS.Timeout | null = null

        onBeforeMount(() => {
            value.value = locationFormat.value
        })

        onMounted(() => {
            nextTick(() => {
                if (inputRef.value) {
                    inputRef.value.focus()
                    inputRef.value.value = locationFormat.value
                }
                if (props.autoTyping) {
                    runAutoTyping(props.autoTyping.text, props.autoTyping.delay, () => {
                        emit("enter", getEnterParams())
                    })
                }
            })
        })

        onUnmounted(() => {
            if (typingInterval) {
                clearInterval(typingInterval)
            }
        })

        const locationFormat = computed<string>(() => {
            return `${props.locationPath}> `
        })

        function regExpEscape(literalString: string) {
            return literalString.replace(/[-[\]{}()*+!<=:?.\/\\^$|#\s,]/g, '\\$&');
        }

        function onInput(e: Event) {
            const target = e.target as HTMLTextAreaElement
            if ((e as InputEvent).inputType !== "insertFromPaste") {
                if (new RegExp(`^${regExpEscape(locationFormat.value)}`).test(target.value)) {
                    value.value = target.value
                } else {
                    target.value = value.value
                }
            } 
        }

        function onPaste(e: ClipboardEvent) {
            setTimeout(() => {
                const target = e.target as HTMLTextAreaElement
                if (!new RegExp(`^${regExpEscape(locationFormat.value)}`).test(target.value)) {
                    value.value = locationFormat.value + target.value
                } else {
                    value.value = target.value
                }
            }, 10)
        }

        function onKeyDown(e: KeyboardEvent) {
            if (e.key === "Enter" && !isEntered.value) {
                emit("enter", getEnterParams())
                isEntered.value = true
            }
        }

        function getEnterParams(): CMDEnterEvent {
            const prompt = value.value.replace(locationFormat.value, "").trim()
            const command = prompt.split(" ")[0]
            const args = prompt.split(" ").slice(1)

            return { command, args, setDisabled }
        }

        function setDisabled() {
            nextTick(() => {
                if (inputRef.value) {
                    inputRef.value.setAttribute("readonly", "1")
                }
            })
        }

        function write(text: string) {
            nextTick(() => {
                value.value+= text
            })
        }

        function runAutoTyping(text: string, delay: number, cb: () => void) {
            let index = 0
            typingInterval = setInterval(() => {
                if (index < text.length) {
                    write(text[index])
                    index++
                } else {
                    clearInterval(typingInterval as NodeJS.Timeout)
                    setTimeout(cb, 1000)
                }
            }, delay)
        }

        watch(value, () => {
            if (inputRef.value) {
                inputRef.value.value = value.value
                inputRef.value.style.height = "auto"
                inputRef.value.style.height = `${inputRef.value.scrollHeight}px`
            }
        }, { immediate: true })

        expose({
            write,
            setDisabled,
            runAutoTyping
        })

        return () => (
            <textarea
                class="w-full bg-transparent outline-none border-0 resize-none overflow-hidden h-5 max-h-96"
                onInput={onInput}
                onPaste={onPaste}
                onKeydown={onKeyDown}
                ref={(refs) => inputRef.value = (refs as HTMLTextAreaElement)}
            />
        )
    }
})