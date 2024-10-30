<!--
 * @Author: kelemengqi 1565916105@qq.com
 * @Date: 2024-10-24 23:37:05
 * @LastEditors: kelemengqi 1565916105@qq.com
 * @LastEditTime: 2024-10-30 17:35:23
 * @FilePath: /vite-class-lab2/myhomework/src/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const pageSize = ref(2) // 默认每页大小为2

const updatePageSize = () => {
  router.push({ name: 'event-list-view', query: { page: 1, pageSize: pageSize.value } })
}
</script>

<template>
  <div id="layout">
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Event</RouterLink> |
          <RouterLink to="/about">About</RouterLink> |
          <RouterLink to="/students">Student</RouterLink>
        </nav>
      </div>
    </header>

    <main>
      <select id="pageSize" v-model="pageSize" @change="updatePageSize">
        <option :value="1">1</option>
        <option :value="2">2</option>
        <option :value="4">4</option>
        <option :value="8">8</option>
      </select>

      <RouterView :page-size="pageSize" />
    </main>
  </div>
</template>

<style>
#layout {
  nav a.router-link-exact-active {
    color: #42b983;
  }
  h2 {
    font-size: 20px;
  }
}
</style>
