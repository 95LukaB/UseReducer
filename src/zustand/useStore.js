import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useCounterStore = create((set)=>({
    counter: 0,
    inc: () => set((state)=> ({counter: state.counter + 1})),
    dec: () => set((state)=> ({counter: state.counter - 1})),
    reset: () => set(()=> ({counter: 0}))
}))

export const useTodosStore = create(
    persist(
        (set)=>({
            todos: [],
            addTodo: (text)=> set((state)=> ({todos: [...state.todos, {id: Date.now(), text}]})),
            deleteTodo: (id)=> set((state)=> ({todos: state.todos.filter(todo=> todo.id !== id)}))

        }),
        {name: 'TODOS'}
    )
)

