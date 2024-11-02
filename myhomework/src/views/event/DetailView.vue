<!--
 * @Author: kelemengqi 1565916105@qq.com
 * @Date: 2024-10-28 14:11:15
 * @LastEditors: kelemengqi 1565916105@qq.com
 * @LastEditTime: 2024-10-30 14:35:26
 * @FilePath: /vite-class-lab2/myhomework/src/components/EventDetailView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">

import { toRefs, defineProps } from 'vue'
import  { type Event} from '@/types'


const props = defineProps<{
  event: Event
  id:string
}>()
const { event } = toRefs(props)
</script>
<template>
   <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
  <p>{{ event.description }}</p>
</template>