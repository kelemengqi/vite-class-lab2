<template>
  <h1 class="text-2xl text-blue-600 text-center mb-4">Events For Good</h1>
  <div class="flex flex-col items-center">
    <div v-for="event in events" :key="event.id" class="event-container mb-4">
      <EventCard :event="event" />
      <EventInfo :category="event.category" :organizer="event.organizer" />
    </div>

    <div class="flex space-x-4">
      <RouterLink
        id="page-prev"
        :to="{ name: 'event-list-view', query: { page: page - 1, pageSize: props.pageSize } }"
        rel="prev"
        v-if="page != 1"
        class="text-blue-500"
      >
        &#60; Prev Page
      </RouterLink>

      <RouterLink
        id="page-next"
        :to="{ name: 'event-list-view', query: { page: page + 1, pageSize: props.pageSize } }"
        rel="next"
        v-if="hasNextPage"
        class="text-blue-500"
      >
        Next Page &#62;
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import EventCard from '@/components/EventCard.vue'
import EventInfo from '@/components/EventInfo.vue'
import type { Event } from '@/types'
import { ref, onMounted, computed, watchEffect } from 'vue'
import EventService from '@/services/EventService'

const events = ref<Event[]>([])
const totalEvents = ref(0)

const props = defineProps({
  page: {
    type: Number,
    required: true,
  },
  pageSize: {
    type: Number,
    required: true,
  },
})

const page = computed(() => props.page)

const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvents.value / props.pageSize)
  return page.value < totalPages
})

onMounted(() => {
  watchEffect(() => {
    EventService.getEvents(props.pageSize, page.value)
      .then((response) => {
        events.value = response.data
        totalEvents.value = parseInt(response.headers['x-total-count'] || '0')
      })
      .catch((error) => {
        console.error('There was an error!', error)
      })
  })
})
</script>

<style scoped>
.event-container {
  @apply mb-5 border-2 border-green-500 rounded-lg bg-blue-100 shadow-md transition-transform duration-300;
}

.event-container:hover {
  @apply transform scale-105;
}
</style>
