<!--
 * @Author: kelemengqi 1565916105@qq.com
 * @Date: 2024-10-28 14:11:15
 * @LastEditors: kelemengqi 1565916105@qq.com
 * @LastEditTime: 2024-10-29 10:10:18
 * @FilePath: /vite-class-lab2/myhomework/src/components/EventDetailView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { ref, onMounted,defineProps } from 'vue'
import  { type Event} from '@/type'
import EventService from '@/services/EventService'
const event = ref<Event|null>(null)
  const props = defineProps({
 id: {
    type: String,
    required: true
  }
})
onMounted(() => {
  // fetch event (by id) and set local event data
  EventService.getEvent(parseInt(props.id))
    .then((response) => {
      event.value = response.data
    })
    .catch((error) => {
        console.error('There was an error!', error)
})
})
</script>
<template>
  <div v-if="event">
   <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
   <p>{{ event.description }}</p>
  </div>
</template>