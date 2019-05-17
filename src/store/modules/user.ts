import { VuexModule, Module, getModule } from 'vuex-module-decorators'
import store from '@/store'

export interface IUser {
    name: string;
    id: string;
    (): string;
}

@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule {
    public name = 'Kieht';
    public id = '123';

    get fullName() {
        return this.name + this.id
    }
}

export const UserModule = getModule(User)