<script setup lang="ts">
import { defineProps } from 'vue'
import { type Event } from '@/types'

defineProps<{
  event: Event
}>()
</script>

<template>
  <RouterLink class="event-link" :to="{ name: 'event-detail-view', params: { id: event.id } }">
    <div class="border border-gray-600 p-5 w-60 mb-5 hover:scale-105 hover:shadow-sp transition-transform duration-300 cursor-pointer">
      <h2 class="font-semibold text-lg">{{ event.title }}</h2>
      <span class="text-sm">@{{ event.time }} on {{ event.date }}</span>
    </div>
  </RouterLink>
</template>

<style scoped>
.event-link {
  @apply text-gray-700 no-underline;
}
</style>
