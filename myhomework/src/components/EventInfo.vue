<!--
 * @Author: kelemengqi 1565916105@qq.com
 * @Date: 2024-10-25 19:12:02
 * @LastEditors: kelemengqi 1565916105@qq.com
 * @LastEditTime: 2024-10-25 19:12:49
 * @FilePath: /vite-class-lab2/myhomework/src/components/EventInfo.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="text-right text-lg">
      <p>{{ category }}</p>
      <p>{{ organizer }}</p>
    </div>
</template>

<script setup lang="ts">
defineProps<{
  category: string,
  organizer: string
}>()
</script>

<style scoped>
/* 这里不再需要自定义样式 */
</style>
