import { defineStore } from 'pinia'
import { todoItemType } from '@/utils/types'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: new Array<todoItemType>()
  }),
  getters: {
    todos: (state) => state.todos,
  },
  actions: {
    addTodo(todo: todoItemType, fromStart: boolean = false): number {
      if (fromStart) {
        return this.todos.unshift(todo)
      }
      return this.todos.push(todo)
    }
  },
})