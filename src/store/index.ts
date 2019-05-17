import Vue from 'vue'
import Vuex from 'vuex'
import { IUser } from './modules/user'
import { ICategory } from './modules/categories';
import { ITodo } from './modules/todos';
import { NotificationsModule, Notifications, INotification } from './modules/notification';

Vue.use(Vuex)

export interface IRootState {
    categories: ICategory;
    user: IUser;
    todos: ITodo;
    notifications: INotification
}

// Declare empty store first, dynamically register all modules later.
export default new Vuex.Store<IRootState>({})