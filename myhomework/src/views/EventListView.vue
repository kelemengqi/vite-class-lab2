<!--
 * @Author: kelemengqi 1565916105@qq.com
 * @Date: 2024-10-24 23:37:05
 * @LastEditors: kelemengqi 1565916105@qq.com
 * @LastEditTime: 2024-10-29 22:37:36
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
    <div class="pagination">
      <RouterLink
        id="page-prev"
        :to="{ name: 'event-list-view', query: { page: page - 1, pageSize: props.pageSize } }"
        rel="prev"
        v-if="page != 1"
        >&#60; Prev Page</RouterLink
      >
      <RouterLink
        id="page-next"
        :to="{ name: 'event-list-view', query: { page: page + 1, pageSize: props.pageSize } }"
        rel="next"
        v-if="hasNextPage"
        >Next Page &#62;</RouterLink
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import EventCard from '@/components/EventCard.vue'
import EventInfo from '@/components/EventInfo.vue'
import type { Event } from '@/type'
import { ref, onMounted, computed, watchEffect } from 'vue'
import EventService from '@/services/EventService'

const events = ref<Event[]>([])
const totalEvents = ref(0)

const props = defineProps({
  page: {
    type: Number,
    required: true
  },
  pageSize: {
    type: Number,
    required: true
  }
})

const page = computed(() => props.page)

const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvents.value / props.pageSize); // 使用 props.pageSize
  return page.value < totalPages;
});

onMounted(() => {
  watchEffect(() => {
    events.value = []
    EventService.getEvents(props.pageSize, page.value) // 使用 props.pageSize
      .then((response) => {
        events.value = response.data
        totalEvents.value = parseInt(response.headers['x-total-count'] || '0'); // 确保总事件数被正确解析
      })
      .catch((error) => {
        console.error('There was an error!', error)
      })
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

.pagination {
  display: flex;
  width: 290px;
}
.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev {
  text-align: left;
}

#page-next {
 text-align: right;
}
</style>
