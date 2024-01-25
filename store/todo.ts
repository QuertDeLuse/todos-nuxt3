import { defineStore } from 'pinia'
import type { TodoItem } from '@/utils/types'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: new Array<TodoItem>(),
    theMostBigIndex: 0,
  }),
  getters: {
    getTodos: (state) => state.todos,
    getTheMostBigIndex: (state) => state.theMostBigIndex,
  },
  actions: {
    setTheMostBigIndex(id: number) {
      this.theMostBigIndex = id
    },
    setAllItems(todos: Array<TodoItem>) {
      this.todos = todos
    },
    addTodo(todo: TodoItem, fromStart: boolean = false): number {
      if (fromStart) {
        return this.todos.unshift(todo)
      }
      return this.todos.push(todo)
    },
    deleteItem(deleteId: number): boolean {
      const deleteItem = this.todos.find(item => item.id === deleteId)
      if (!deleteItem) return false

      this.todos = this.todos.filter(item => item.id !== deleteId)

      return true
    }
  },
})