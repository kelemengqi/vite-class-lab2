<!--
 * @Author: kelemengqi 1565916105@qq.com
 * @Date: 2024-10-30
 * @LastEditors: kelemengqi 1565916105@qq.com
 * @LastEditTime: 2024-10-30 16:07:24
 * @FilePath: /vite-class-lab2/myhomework/src/views/event/RegisterView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { toRefs } from 'vue';
import { type Event } from '@/type';
import { useRouter } from 'vue-router'

const props = defineProps<{
  event: Event
}>();
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { event } = toRefs(props);
const router = useRouter()
const register = () => {
  // If the registration API call successful
  // Push back to the event details view
  router.push({ name: 'event-detail-view' })
}
</script>

<template>
  <p>Register event here</p>
  <button @click="register">Register</button>
</template>
