<!--
 * @Author: kelemengqi 1565916105@qq.com
 * @Date: 2024-10-30
 * @LastEditors: kelemengqi 1565916105@qq.com
 * @LastEditTime: 2024-11-01 10:48:08
 * @FilePath: /vite-class-lab2/myhomework/src/views/event/RegisterView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { toRefs } from 'vue';
import { type Event } from '@/types';
import { useRouter } from 'vue-router'
import { useMessageStore } from '@/stores/message'
const props = defineProps<{
  event: Event
}>();
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { event } = toRefs(props)
const router = useRouter()
const store = useMessageStore()
const register = () => {
  store.updateMessage('You are successuflly registered for ' + props.event.title)
 setTimeout(() => {
    store.resetMessage()
  }, 3000)
  router.push({ name: 'event-detail-view', params: { id: props.event.id } })
 }
</script>

<template>
  <p>Register event here</p>
  <button @click="register">Register</button>
</template>
