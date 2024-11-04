<template>
  <h1 class="text-2xl text-blue-600 text-center mb-4">Students List</h1>

  <div class="flex flex-col items-center">
    <div v-for="student in students" :key="student.id" class="student-card mb-4">
      <h2 class="font-semibold text-lg">{{ student.name }} {{ student.surname }}</h2>
      <p class="text-sm">GPA: {{ student.gpa }}</p>
    </div>

    <div class="pagination flex space-x-4">
      <RouterLink
        id="page-prev"
        :to="{ name: 'student-list-view', query: { page: page - 1 } }"
        rel="prev"
        v-if="page > 1"
        class="text-blue-500 hover:underline"
      >
        &#60; Prev Page
      </RouterLink>

      <RouterLink
        id="page-next"
        :to="{ name: 'student-list-view', query: { page: page + 1 } }"
        rel="next"
        v-if="hasNextPage"
        class="text-blue-500 hover:underline"
      >
        Next Page &#62;
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import StudentService from '@/services/StudentService'
import type { Student } from '@/types'

const students = ref<Student[]>([])
const page = ref(1) // 定义 page 响应式变量

// 计算总学生数量和是否有下一页
const totalStudents = ref(0) // 可以根据实际情况获取总学生数量
const pageSize = 10 // 每页显示的学生数量

const hasNextPage = computed(() => {
  return totalStudents.value > page.value * pageSize
})

onMounted(() => {
  StudentService.getStudents()
    .then((response) => {
      students.value = response.data
      totalStudents.value = response.headers['x-total-count'] || 0 // 获取总学生数量
    })
    .catch((error) => {
      console.error('Error loading students:', error)
    })
})
</script>

<style scoped>
.student-card {
  @apply border border-gray-300 rounded-lg p-4 mb-3 w-72 text-center shadow-md transition-transform duration-200;
}

.student-card:hover {
  @apply transform scale-105;
}
</style>
