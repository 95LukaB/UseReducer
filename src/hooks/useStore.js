import { create } from "zustand"

export const useCounterStore = create((set)=> ({
    counter: 0,
    inc: () => set ((state)=> ({counter: state.counter + 1})),
    dec: () => set ((state)=> ({counter: state.counter - 1})),
    reset: () => set(()=> ({counter: 0}))
}))
// test commit to trigger contributions

export const useTodosStore = create((set)=> ({
    todos: [],
    addTodo: (text)=> set((state)=> ({todos: [...state.todos, {id: Date.now(), text}]}))
}))