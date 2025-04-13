import { VNode } from "vue"

const DIR: Record<string, Array<{name: string, type: "file" | "dir", date: Date}>> = {
    ".": [{
        name: "imphnen.exe",
        type: "file",
        date: new Date(Date.now())
    }]
}

export default function (args: string[]): VNode {
    let arg = (args.join(" ") || ".")

    if (!arg.trim()) {
        arg = "."
    }

    const dirs = DIR[arg] || null

    if (dirs === null) {
        return (<p class="text-red-600">dir : Cannot find path '{arg}' because it does not exist.</p>)
    }

    return (
        <>
            {dirs.map((dir, index) => (
                <div key={index} class="flex gap-5 text-gray-300">
                    <div>{dir.date.getDay()}/{dir.date.getMonth()}/{dir.date.getFullYear()}</div>
                    <div>{dir.date.getHours()}:{dir.date.getMinutes()}:{dir.date.getSeconds()}</div>
                    <div>{`<${dir.type.toUpperCase()}>`}</div>
                    <div>{dir.name}</div>
                </div>
            ))}
        </>
    )
}