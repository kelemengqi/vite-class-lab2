<!--
 * @Author: kelemengqi 1565916105@qq.com
 * @Date: 2024-10-24 08:13:21
 * @LastEditors: kelemengqi 1565916105@qq.com
 * @LastEditTime: 2024-10-24 10:09:00
 * @FilePath: /lap2/classlab2/vite-project/src/views/HomeView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 * @Author: kelemengqi 1565916105@qq.com
 * @Date: 2024-10-24 08:13:21
 * @LastEditors: kelemengqi 1565916105@qq.com
 * @LastEditTime: 2024-10-24 09:51:25
 * @FilePath: /lap2/classlab2/vite-project/src/views/HomeView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import EventCard from '@/components/EventCard.vue'

import type { Event } from '@/type'
import { ref } from 'vue'
const events = ref<Event[]>([
  {
    id: 5928101,
    category: 'animal welfare',
   title: 'Cat Adoption Day',
    description: 'Find your new feline friend at this event.',
   location: 'Meow Town',
    date: 'January 28, 2022',
    time: '12:00',
   petsAllowed: true,
    organizer: 'Kat Laydee'
  },
  {
    id: 4582797,
    category: 'food',
    title: 'Community Gardening',
    description: 'Join us as we tend to the community edible plants.',
    location: 'Flora City',
    date: 'March 14, 2022',
    time: '10:00',
    petsAllowed: true,
    organizer: 'Fern Pollin'
  },
  {
    id: 8419988,
    category: 'sustainability',
   title: 'Beach Cleanup',
   description: 'Help pick up trash along the shore.',
   location: 'Playa Del Carmen',
    date: 'July 22, 2022',
    time: '11:00',
    petsAllowed: false,
    organizer: 'Carey Wales'
  }
])


</script>

<template>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
   </div>
  
</template>

+<style scoped>
.events {
  display: flex;
 flex-direction: column;
 align-items: center;
}
</style>
