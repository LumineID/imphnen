import { VNode } from "vue"
import directory from "./dir"
import help from "./help"

const commands: Record<string, (args: string[]) => VNode> = {
    "dir": directory,
    "help": help
}

export default commands