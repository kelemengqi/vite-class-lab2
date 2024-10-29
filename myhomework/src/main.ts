/*
 * @Author: kelemengqi 1565916105@qq.com
 * @Date: 2024-10-24 08:13:21
 * @LastEditors: kelemengqi 1565916105@qq.com
 * @LastEditTime: 2024-10-29 20:17:17
 * @FilePath: /lap2/classlab2/vite-project/src/main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
//import './assets/styles.css'
import './assets/main.css'


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

