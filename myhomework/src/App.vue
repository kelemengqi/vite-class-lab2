<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { ref } from 'vue'
import { useMessageStore } from '@/stores/message'
import { storeToRefs } from 'pinia'

const store = useMessageStore()
const { message } = storeToRefs(store)
const router = useRouter()
const pageSize = ref(2) // 默认每页大小为233

const updatePageSize = () => {
  router.push({ name: 'event-list-view', query: { page: 1, pageSize: pageSize.value } })
}
</script>

<template>
  <SpeedInsights />
  <div class="text-center font-sans text-gray-700 antialias">
    <header>
      <div id="flashMessage" class="animate-fade" v-if="message">
        <h4>{{ message }}</h4>
      </div>
      <nav class="py-6">
        <RouterLink class="font-bold text-gray-700 hover:text-green-500" :to="{ name: 'event-list-view' }">Event</RouterLink> |
        <RouterLink class="font-bold text-gray-700 hover:text-green-500" :to="{ name: 'about' }">About</RouterLink> |
        <RouterLink class="font-bold text-gray-700 hover:text-green-500" to="/students">Student</RouterLink>
      </nav>
    </header>

    <main>
      <select id="pageSize" v-model="pageSize" @change="updatePageSize" class="mb-4 p-2 border rounded">
        <option :value="1">1</option>
        <option :value="2">2</option>
        <option :value="4">4</option>
        <option :value="8">8</option>
      </select>

      <RouterView :page-size="pageSize" />
    </main>
  </div>
</template>

<style scoped>
#flashMessage {
  @apply animate-fade; /* 确保使用 Tailwind 的动画类 */
}
</style>
