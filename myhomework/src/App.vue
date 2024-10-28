<!--
 * @Author: kelemengqi 1565916105@qq.com
 * @Date: 2024-10-24 08:13:21
 * @LastEditors: kelemengqi 1565916105@qq.com
 * @LastEditTime: 2024-10-28 15:06:35
 * @FilePath: /lap2/classlab2/vite-project/src/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
 <div id="layout">
   <header>
      <div class="wrapper">
        <nav>
          <RouterLink to="/">Event</RouterLink> |
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/students">student</RouterLink>
         
        </nav>
      </div>
    </header>
    
    <RouterView />
  </div>
</template>

<style >
#layout{
 
nav a.router-link-exact-active {
 color: #42b983;
 }
 h2{
  font-size: 20px;
 }



}
</style>
