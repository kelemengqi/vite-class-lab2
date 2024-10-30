/*
 * @Author: kelemengqi 1565916105@qq.com
 * @Date: 2024-10-24 23:37:05
 * @LastEditors: kelemengqi 1565916105@qq.com
 * @LastEditTime: 2024-10-30 17:11:20
 * @FilePath: /vite-class-lab2/myhomework/src/router/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: kelemengqi 1565916105@qq.com
 * @Date: 2024-10-24 23:37:05
 * @LastEditors: kelemengqi 1565916105@qq.com
 * @LastEditTime: 2024-10-25 18:51:03
 * @FilePath: /vite-class-lab2/myhomework/src/router/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '@/views/EventListView.vue'
import AboutView from '@/views/AboutView.vue'
import StudentListView from '@/views/StudentListView.vue'
import EventDetailView from '@/views/event/DetailView.vue'
import EventRegisterView from '@/views/event/RegisterView.vue'
import EventEditView from '@/views/event/EditView.vue'
import EventLayoutView from '@/views/event/LayoutView.vue'
import  NotFoundView from '@/views/NotFoundView.vue'
import  NetworkErrorView from '@/views/NetworkErrorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list-view',
      component: EventListView,
      props: (route) => ({ page: parseInt(route.query.page?.toString() || '1') })
    },
    
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
            path: '/404/:resource',
            name: '404-resource-view',
            component: NotFoundView,
           props: true
          },
    {
            path: '/:catchAll(.*)',
            name: 'not-found',
            component: NotFoundView
           },
           {
                 path: '/network-error',
                 name: 'network-error-view',
                  component: NetworkErrorView
                },
    {
      path: '/event/:id',
      name: 'event-layout-view',
            component: EventLayoutView,
            props: true,
            children: [
                     {
                        path: '',
                        name: 'event-detail-view',
                        component: EventDetailView,
                        props: true
                      },
                     {
                        path: 'register',
                        name: 'event-register-view',
                        component: EventRegisterView,
                        props: true
                      },
                      {
                        path: 'edit',
                        name: 'event-edit-view',
                        component: EventEditView,
                       props: true
                     }
                   ]
                   },
          
    {
      path: '/students',
      name: 'student-list-view',
      component: StudentListView
    },
    
  ],
})

export default router
