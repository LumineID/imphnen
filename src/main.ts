import { createApp } from "vue"
import App from "./App.tsx"
import "./styles/app.scss"
import { BootstrapIconsPlugin } from "bootstrap-icons-vue"

createApp(App)
    .use(BootstrapIconsPlugin)
    .mount("#app")
