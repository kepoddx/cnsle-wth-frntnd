import { VuexModule, Module, MutationAction, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'

export interface ICategory {
    [index: number]: String
}

@Module({ dynamic: true, store, name: 'categories' })
class Categories extends VuexModule {
    public categories = ['sustainability', 'nature', 'animal welfare', 'housing', 'education', 'food', 'community']

    get catLength() {
        return this.categories.length
    }
}

export const CategoriesModule = getModule(Categories) 