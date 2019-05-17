export interface IUser {
    [key: string]: any
}

export const user = {
    state: {
        id: 'abc124',
        name: 'keith'
    },
    getters: {
        getAll: (state: any) => `${state.user.id} ${state.user.name}`
    }
}


