/** @type {import('tailwindcss').Config} */

const usedClass = ["bg", "text", "border", "bg-outliine"]
const usedClassColor = [
  "red",
  "green",
  "blue",
  "yellow",
  "purple",
  "pink",
  "cyan",
  "teal"
]

export default {
  content: ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue", "*.html"],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist:(usedClass.map(
    cls =>
      usedClassColor.map(
        color => `${cls}-${color}-400`
      )
  )).flat()
}

