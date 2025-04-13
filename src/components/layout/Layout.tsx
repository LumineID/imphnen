import { defineComponent, ref, watch } from "vue";
import Footer from "../footer/Footer";

export default defineComponent({
    emits: {
        close: () => true
    },
    props: {
        title: {
            type: String,
            required: true
        }
    },
    setup(props, { emit, slots }) {
        const isFullscreen = ref<boolean>(true)
        const el = ref<HTMLElement | null>(null)

        watch(isFullscreen, () => {
            if (isFullscreen.value) {
                el.value?.removeAttribute("style")
            } else{
                el.value?.setAttribute("style", `height: ${ screen.height - 310}px !important;`)
            }
        }, { immediate: true })

        return () => (
            <div ref={(refs) => el.value = (refs as HTMLElement)} class={[
                "absolute h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black z-20",
                { "w-[90%] rounded-md"         : isFullscreen.value == false },
                { "w-full h-full rounded-none" : isFullscreen.value == true },
            ]}>
                <div class={[
                    "bg-gradient-to-r from-blue-400 to-gray-600 w-full p-4 text-gray-300 font-mono shadow-xl border-l border-r border-t border-gray-500",
                    { "rounded-t-none": isFullscreen.value == true },
                    { "rounded-t-md"  : isFullscreen.value == false }
                ]}>
                    <div class="flex justify-between">
                        <h2 class="font-bold text-gray-300">
                            {props.title}
                        </h2>
                        <div class="flex gap-4 cursor-pointer items-center">
                            <div onClick={() => isFullscreen.value = !isFullscreen.value}>
                                <b-icon-fullscreen class="text-lg" />
                            </div>
                            <div onClick={() => emit("close")}>
                                <b-icon-x class="text-2xl" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-gray-300 px-3 md:px-10 py-5 font-mono overflow-x-hidden overflow-y-scroll w-full h-full no-scrollbar pb-28 border-gray-500 border rounded-b-md z-20">
                    {slots.default?.()}

                    <Footer />
                </div>
            </div>
        )
    }
})  