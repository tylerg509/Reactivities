import { observable, computed, action, runInAction } from 'mobx';
import { IUser, IUserFormValues } from '../interfaces/IUser';
import { User } from '../api/agent';
import { RootStore } from './rootStore';
import { history } from '../..';

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
            runInAction(() => { 
                this.user = user;
            })
            this.rootStore.commonStore.setToken(user.token)
            history.push('/activities')
        } catch (error) {
            throw error;
        }
    }

    @action logout = () => {
        this.rootStore.commonStore.setToken(null);
        this.user = null;
        history.push('/')
    }
    
}