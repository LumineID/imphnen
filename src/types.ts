export type TWColor = "blue" | "red" | "yellow" | "teal" | "cyan" | "green" | "gray" | "pink"
export type TWSize = "sm" | "md" | "lg"
export type TWCardColor = "blue" | "red" | "green" | "yellow" | "pink"

export interface CMDEnterEvent {
    command: string
    args: string[],
    setDisabled: () => void
}

export interface DateTimes {
    day: number
    month: number
    year: number
    hour: number
    minute: number
    second: number
}
