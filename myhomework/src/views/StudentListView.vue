<!--
 * @Author: kelemengqi 1565916105@qq.com
 * @Date: 2024-10-26 15:59:26
 * @LastEditors: kelemengqi 1565916105@qq.com
 * @LastEditTime: 2024-10-26 15:59:35
 * @FilePath: /vite-class-lab2/myhomework/src/views/StudentListView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <h1>Students List</h1>
  
    <div class="students">
      <div v-for="student in students" :key="student.id" class="student-card">
        <h2>{{ student.name }} {{ student.surname }}</h2>
        <p>GPA: {{ student.gpa }}</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import StudentService from '@/services/StudentService';
  import type { Student } from '@/type';
  
  const students = ref<Student[]>([]);
  
  onMounted(() => {
    StudentService.getStudents()
      .then((response) => {
        students.value = response.data;
      })
      .catch((error) => {
        console.error('Error loading students:', error);
      });
  });
  </script>
  
  <style scoped>
  .students {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .student-card {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 12px;
    width: 300px;
    text-align: center;
  }
  </style>
  