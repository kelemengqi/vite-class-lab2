<!--
 * @Author: kelemengqi 1565916105@qq.com
 * @Date: 2024-10-30 14:13:01
 * @LastEditors: kelemengqi 1565916105@qq.com
 * @LastEditTime: 2024-10-30 17:08:22
 * @FilePath: /vite-class-lab2/myhomework/src/views/event/LayoutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { type Event } from '@/type';
import EventService from '@/services/EventService';
import { useRouter } from 'vue-router'
 
const event = ref<Event | null>(null);
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});
const router = useRouter()
onMounted(() => {
  EventService.getEvent(parseInt(props.id))
    .then((response) => {
      event.value = response.data;
    })
    .catch((error) => {
     if (error.respose && error.response.status === 404) {
        router.push({
          name: '404-resource-view',
          params: { resource: 'event' }
        })
      } else {
        router.push({ name: 'network-error-view' })     } 
     })
    });

</script>

<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <nav>
      <RouterLink :to="{ name: 'event-detail-view' }">Details</RouterLink>
      |
      <RouterLink :to="{ name: 'event-register-view' }">Register</RouterLink>
      |
      <RouterLink :to="{ name: 'event-edit-view' }">Edit</RouterLink>
     </nav>
  
    <RouterView :event="event" />
  </div>
</template>
