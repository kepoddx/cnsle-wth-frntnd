import {
  VuexModule,
  Module,
  MutationAction,
  Mutation,
  Action,
  getModule
} from 'vuex-module-decorators';
import store from '@/store'


export interface INotification {
  id: number;
  [index: string]: any;
}

@Module({ dynamic: true, store, name: 'notifications' })
export class Notifications extends VuexModule {
  notifications: INotification[] = [];
  nextId = 1

  @Mutation
  PUSH(notification: any) {
    this.notifications.push({
      ...notification,
      id: this.nextId++
    })
  }
  @Mutation
  DELETE(id: number) {
    this.notifications = this.notifications.filter(notification => notification.id !== id)
  }

  @Action({ commit: 'PUSH' })
  add(notification: any) {
    return notification
  }

  @Action({ commit: 'DELETE' })
  remove(id: number) {
    return id;
  }
}

export const NotificationsModule = getModule(Notifications)