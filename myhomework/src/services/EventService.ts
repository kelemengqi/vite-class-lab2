/*
 * @Author: kelemengqi 1565916105@qq.com
 * @Date: 2024-10-25 23:44:47
 * @LastEditors: kelemengqi 1565916105@qq.com
 * @LastEditTime: 2024-10-29 20:24:57
 * @FilePath: /vite-class-lab2/myhomework/src/services/EventService.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: kelemengqi 1565916105@qq.com
 * @Date: 2024-10-25 23:44:47
 * @LastEditors: kelemengqi 1565916105@qq.com
 * @LastEditTime: 2024-10-28 14:24:37
 * @FilePath: /vite-class-lab2/myhomework/services/EventService.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/kelemengqi/event-data', // 替换为你的 URL
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents(perPage: number, page: number) {
    return apiClient.get(`/events?_limit=${perPage}&_page=${page}`);
  },
  getEvent(id: number) {
    return apiClient.get('/events/' + id);
  }
}
