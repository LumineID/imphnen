import { defineComponent, ref, watch } from "vue";

export default defineComponent({
    setup(props, { slots }) {
        const isFullscreen = ref<boolean>(true)
        const el = ref<HTMLElement | null>(null)

        watch(isFullscreen, () => {
            if (isFullscreen.value) {
                el.value?.removeAttribute("style")
            } else{
                el.value?.setAttribute("style", `height: ${screen.height - 310}px !important;`)
            }
        }, { immediate: true })

        return () => (
            <div
                ref={(refs) => el.value = (refs as HTMLElement)}
                class={[
                    "absolute h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black z-20 font-mono",
                    { "w-[90%] rounded-md"         : isFullscreen.value == false },
                    { "w-full h-full rounded-none" : isFullscreen.value == true },
                ]}

            >
                <div class={[
                    "bg-gray-700 w-full p-6 relative border-t border-l border-r border-gray-500",
                    { "rounded-t-none": isFullscreen.value == true },
                    { "rounded-t-md"  : isFullscreen.value == false }
                ]}>
                    <div class="absolute z-10 md:w-56 w-40 h-9 p-2 bg-black text-gray-300 font-semibold text-center rounded-t-md top-[1.95rem] left-5 truncate text-base border-t border-l border-r border-gray-500">
                        IMPHNEN
                    </div>
                    <div class="flex justify-end items-center">
                        <div onClick={() => isFullscreen.value = !isFullscreen.value} class="text-gray-300 text-lg">
                            {isFullscreen.value ? (
                                <b-icon-fullscreen-exit />
                            ) : (
                                <b-icon-fullscreen />
                            )}
                        </div>
                    </div>
                </div>
                <div class="bg-black h-full w-full overflow-x-hidden overflow-y-scroll no-scrollbar text-white border border-gray-500 rounded-b-md p-2 text-sm text-start">
                    <div class="p-1">
                        <p>Imphnen [Version 1.0.0425.1]</p>
                        <p>(c) Imphnen - Ingin Menjadi Programmer Handal Namun Enggan Ngoding. All rights reserved.</p>
                    </div>
                    <div class="mt-5">
                        {slots.default?.()}
                    </div>
                </div>
            </div>

        )
    }
})