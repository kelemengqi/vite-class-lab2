<!--
 * @Author: kelemengqi 1565916105@qq.com
 * @Date: 2024-10-28 14:11:15
 * @LastEditors: kelemengqi 1565916105@qq.com
 * @LastEditTime: 2024-11-01 11:32:34
 * @FilePath: /vite-class-lab2/myhomework/src/views/EventDetailView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 * @Author: kelemengqi 1565916105@qq.com
 * @Date: 2024-10-28 14:11:15
 * @LastEditors: kelemengqi 1565916105@qq.com
 * @LastEditTime: 2024-10-30 14:26:02
 * @FilePath: /vite-class-lab2/myhomework/src/components/EventDetailView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { ref, onMounted, defineProps } from 'vue';
import { useMessageStore } from '@/stores/message';
import { type Event } from '@/types';
import EventService from '@/services/EventService';

const props = defineProps({
  id: {
    type: String,
    required: true
  }
});

const event = ref<Event | null>(null);
const store = useMessageStore();

onMounted(() => {
  EventService.getEvent(parseInt(props.id))
    .then((response) => {
      event.value = response.data;
    })
    .catch((error) => {
      console.error('There was an error!', error);
    });
});
</script>

<template>
  <div>
    <div v-if="event">
      <h1>{{ event.title }}</h1>
      <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
      <p>{{ event.description }}</p>
    </div>
    <div id="flashMessage" v-if="store.message">
      <h4>{{ store.message }}</h4>
    </div>
    <h1>Deploy with Vercel</h1>
  </div >
</template>

<style scoped>
#flashMessage {
  animation: yellofade 3s ease-in-out;
}

@keyframes yellofade {
  from {
    background-color: yellow;
  }
  to {
    background-color: transparent;
  }
}
</style>
