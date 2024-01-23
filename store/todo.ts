import { defineStore } from 'pinia'
import type { TodoItem } from '@/utils/types'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: new Array<TodoItem>()
  }),
  getters: {
    getTodos: (state) => state.todos,
  },
  actions: {
    addTodo(todo: TodoItem, fromStart: boolean = false): number {
      if (fromStart) {
        return this.todos.unshift(todo)
      }
      return this.todos.push(todo)
    }
  },
})