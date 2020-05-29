import axios, { AxiosResponse } from 'axios';
import { history } from '../..';
import { IActivity } from '../interfaces/IActivity';
import { toast } from 'react-toastify';
import { IUser, IUserFormValues } from '../interfaces/IUser';

axios.defaults.baseURL = 'http://localhost:5000/api';

//when errors come back we intercept them and do something with them
axios.interceptors.response.use(undefined, error => {
    const { status, data, config } = error.response;
    if(error.message === 'Network Error' && !error.response){
        toast.error('Network error - make sure API is running')
    }
    if (status === 404) {
        history.push('/notfound'); 
    }
    if (
        status === 400 &&
        config.method === 'get' &&
        data.errors.hasOwnProperty('id')
    ) {
        history.push('/notfound');
    } if (status === 500){
        toast.error('Something went wrong - try again later. Administrators: this is a  500 server error.')
    }
    throw error;
});

const responseBody = (response: AxiosResponse) => response.data;

const sleep = (ms: number) => (response: AxiosResponse) => {
    return new Promise<AxiosResponse>(resolve =>
        setTimeout(() => resolve(response), ms)
    );
};

const sleepTime = 1000;

const requests = {
    get: (url: string) =>
        axios
            .get(url)
            .then(sleep(sleepTime))
            .then(responseBody),
    post: (url: string, body: {}) =>
        axios
            .post(url, body)
            .then(sleep(sleepTime))
            .then(responseBody),
    put: (url: string, body: {}) =>
        axios
            .put(url, body)
            .then(sleep(sleepTime))
            .then(responseBody),
    delete: (url: string) =>
        axios
            .delete(url)
            .then(sleep(sleepTime))
            .then(responseBody)
};

export const Activities = {
    list: (): Promise<IActivity[]> => requests.get('/activities'),
    details: (id: string) => requests.get(`/activities/${id}`),
    create: (activity: IActivity) => requests.post(`/activities`, activity),
    update: (activity: IActivity) =>
        requests.put(`/activities/${activity.id}`, activity),
    delete: (id: string) => requests.delete(`/activities/${id}`)
};

export const User = {
    current: (): Promise<IUser> => requests.get('/user'),
    login: (user: IUserFormValues): Promise<IUser> => requests.post('/user/login', user),
    register: (user: IUserFormValues): Promise<IUser> => requests.post('/user/register', user)

}

