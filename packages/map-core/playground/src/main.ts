// third-parties
// style
import "./assets/style.css"

import { createApp } from "vue"

// customs
import Playground from "./index.vue"

// 定义特性标志
// @ts-ignore
window.__VUE_PROD_DEVTOOLS__ = false
// @ts-ignore
window.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false

const app = createApp(Playground)

app.mount("#app")
