/*
 * @Author: kelemengqi 1565916105@qq.com
 * @Date: 2024-11-01 10:42:51
 * @LastEditors: kelemengqi 1565916105@qq.com
 * @LastEditTime: 2024-11-01 10:43:26
 * @FilePath: /vite-class-lab2/myhomework/src/stores/message.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// stores/message.ts
import type { MessageState } from '@/types';
import { defineStore } from 'pinia';

export const useMessageStore = defineStore('message', {
  state: (): MessageState => ({
    message: '',
  }),
  actions: {
        updateMessage(message: string): void {
          this.message = message
        },
        resetMessage(): void {
          this.message = ''
        }
      }
});
