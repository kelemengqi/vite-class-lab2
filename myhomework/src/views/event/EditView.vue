<!--
 * @Author: kelemengqi 1565916105@qq.com
 * @Date: 2024-10-30
 * @LastEditors: kelemengqi 1565916105@qq.com
 * @LastEditTime: 2024-11-01 11:32:17
 * @FilePath: /vite-class-lab2/myhomework/src/views/event/EditView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { toRefs } from 'vue';
import { useRouter } from 'vue-router';
import { useMessageStore } from '@/stores/message';
import { type Event } from '@/types';

const props = defineProps<{
  event: Event
}>();

const { event } = toRefs(props);
const router = useRouter();
const store = useMessageStore();

const editEvent = () => {
  // 这里可以添加更新事件的逻辑
  // 假设更新成功，更新闪烁消息
  store.updateMessage('Data has been updated');
  setTimeout(() => {
    store.resetMessage();
  }, 3000);
  
  // 跳转到事件详情页面
  router.push({ name: 'event-detail-view', params: { id: event.value.id } });
};
</script>

<template>
  <p>Edit event here</p>
  <button @click="editEvent">Edit</button>
</template>
