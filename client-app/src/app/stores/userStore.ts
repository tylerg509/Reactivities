import { observable, computed, action } from 'mobx';
import { IUser, IUserFormValues } from '../interfaces/IUser';
import { User } from '../api/agent';
import { RootStore } from './rootStore';

export default class UserStore {
    rootStore: RootStore;
    constructor(rootStore: RootStore) {
        this.rootStore = rootStore;
    }
    
    @observable user: IUser | null = null;

    @computed get isLoggedIn() {return !!this.user}

    @action login = async (values: IUserFormValues) => {
        try {
            const user = await User.login(values);
            this.user = user;
        } catch (error) {
            console.log(error)
        }
    }
    
}