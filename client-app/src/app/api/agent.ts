import axios, { AxiosResponse } from 'axios';
import { iActivity } from '../interfaces/iActivity';
 axios.defaults.baseURL = 'http://localhost:5000/api'

 const responseBody = (response: AxiosResponse) => response.data;

 const requests = {
    get: (url: string)    => axios.get(url).then(responseBody),
    post: (url: string, body: {}) => axios.get(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody)
 }

 const Activities = {
     list: (): Promise<iActivity[]> => requests.get('/activities'),
     details: (id: string) => requests.get(`/activities/${id}`),
     create: (activity: iActivity) => requests.post(`activities`, activity),
     update: (activity: iActivity) => requests.put(`/activities/${activity.id}`, activity),
     delete: (id: string) => requests.delete(`/activities/${id}`)
 }

 export default {
     Activities
 }