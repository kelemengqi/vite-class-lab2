<!--
 * @Author: kelemengqi 1565916105@qq.com
 * @Date: 2024-10-24 23:37:05
 * @LastEditors: kelemengqi 1565916105@qq.com
 * @LastEditTime: 2024-10-28 14:19:16
 * @FilePath: /vite-class-lab2/myhomework/src/views/EventListView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <h1>Events For Good</h1>

  <div class="events">
    <div v-for="event in events" :key="event.id" class="event-container">
      <EventCard :event="event" />
      <EventInfo :category="event.category" :organizer="event.organizer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import EventCard from '@/components/EventCard.vue'
import EventInfo from '@/components/EventInfo.vue'
import type { Event } from '@/type'
import { ref, onMounted } from 'vue'
import EventService from '@/services/EventService'

const events = ref<Event[]>([])

onMounted(() => {
  EventService.getEvents()
    .then((response) => {
      events.value = response.data
    })
    .catch((error) => {
      console.error('There was an error!', error)
    })
})
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f8ff; /* Light background for contrast */
  padding: 20px;
}

.event-container {
  margin-bottom: 20px;
  width: 300px;
  border: 2px solid #4caf50; /* Bright green border */
  border-radius: 8px;
  background-color: #e1f5fe; /* Light blue background */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.event-container:hover {
  transform: scale(1.05); /* Scale up on hover */
}

h1 {
  color: #2196f3; /* Bright blue for the main heading */
  text-align: center;
  margin-bottom: 20px;
}

.event-card {
  padding: 15px;
  color: #333; /* Dark text for readability */
}

.event-link {
  text-decoration: none;
  color: #4caf50; /* Bright green for links */
}

.event-link:hover {
  color: #2e7d32; /* Darker green on hover */
}

</style>
