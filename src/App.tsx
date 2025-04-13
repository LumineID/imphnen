import { defineComponent, h, nextTick, onBeforeMount, ref, Teleport, VNode } from "vue";
import { CMDEnterEvent } from "./types";
import Input from "./components/cmd/Input";
import commands from "./commands/commands";
import CommandNotFound from "./components/cmd/CommandNotFound";
import Imphnen from "./components/imphnen/Imphnen";
import Layout from "./components/cmd/Layout";

export default defineComponent({
    setup() {
        const elements = ref<Array<{ command: string | null, node: VNode }>>([])

        function onEnter(event: CMDEnterEvent) {
            setTimeout(() => {
                event.setDisabled()
                switch (event.command) {
                    case "cls":
                        clear()
                        nextTick(inputElement)
                        break
                    case "./imphnen.exe":
                        addElement("imphnen", h(Imphnen, { onClose: closeUI }))
                        break
                    default:
                        addElement(event.command, (commands[event.command]?.(event.args) || h(CommandNotFound, { command: event.command })))
                        nextTick(inputElement)
                        break
                }
            }, 1000)
        }

        function addElement(command: string | null, node: VNode) {
            elements.value.push(
                {
                    command,
                    node: h("div", { class: "pr-1 ps-1" }, node)
                }

            )
        }

        function closeUI() {
            elements.value = elements.value.filter(element => element.command !== "imphnen")
            nextTick(inputElement)
        }

        function inputElement() {
            addElement(null, <Input locationPath="D:\Imphnen" onEnter={onEnter} />)
        }

        function clear() {
            elements.value = []
        }

        onBeforeMount(() => {
            addElement(null, <p class="mb-5">Type "help" to show help message</p>)
            addElement(null, <Input locationPath="D:\Imphnen" onEnter={onEnter} autoTyping={{text: "./imphnen.exe", delay: 0}} />)
        })

        return () => (
            <Layout>
                {elements.value.map((element, index) => (
                    <Teleport to="body" disabled={element.command !== "imphnen"}>
                        {h(element.node, { key: `${index}-${element.command}` })}
                    </Teleport>
                ))}
            </Layout>

        )
    }
})