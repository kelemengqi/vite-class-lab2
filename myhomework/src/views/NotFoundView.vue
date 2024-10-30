<!--
 * @Author: kelemengqi 1565916105@qq.com
 * @Date: 2024-10-30 16:24:51
 * @LastEditors: kelemengqi 1565916105@qq.com
 * @LastEditTime: 2024-10-30 16:25:10
 * @FilePath: /vite-class-lab2/myhomework/src/views/NotFoundView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'
const props = withDefaults(
  defineProps<{
    resource: string
  }>(),
  {
    resource: 'page'
  }
)
</script>
<template>
     <h1>Oops!</h1>
     <h3>The {{ props.resource }} you're looking for is not here.</h3>
      <router-link :to="{ name: 'event-list-view' }">Back to the home page</router-link>
    </template>