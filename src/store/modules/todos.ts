import { VuexModule, Module, MutationAction, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'

export interface ITodo {
    id: number;
    text: string;
    done: boolean;
}

@Module({ dynamic: true, store, name: 'todos' })
class Todos extends VuexModule {
    public todos = [
        { id: 1, text: '...', done: true },
        { id: 2, text: '...', done: false },
        { id: 3, text: 'This is my todo description', done: true },
        { id: 4, text: '...', done: false },
        { id: 5, text: '...', done: false },
    ]

    get doneTodos() {
        return this.todos.filter(todo => todo.done)
    }

    get activeTodosCount() {
        return this.todos.length - this.doneTodos.length
    }

    get todoById() {
        return (id: number) => this.todos.find(todo => todo.id === id)
    }
}

export const TodosModule = getModule(Todos) 