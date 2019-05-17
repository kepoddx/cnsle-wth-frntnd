import axios, { AxiosResponse } from 'axios'
import { from, Observable } from 'rxjs'
import { ISite } from '../store/modules/sites';

const apiClient = axios.create({
    baseURL: `http://localhost:3000`,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getSites({ perPage, page }: { perPage: any, page: any }): Promise<AxiosResponse> {
        return apiClient.get('/sites?_limit=' + perPage + '&_page=' + page)
            .catch(error => Promise.reject(error))
    },
    getSite(siteId: string) {
        return apiClient.get('/sites?id=' + siteId)
    },
    postSite(site: any): Promise<ISite> {
        return apiClient.post('/sites', site)
            .then((res: AxiosResponse) => ({ site: res.data, success: true }))
    },
    getSites$(): Observable<any> {
        return from(apiClient.get('/sites'))
    },
    getSite$(siteName: string): Observable<any> {
        return from(apiClient.get('/sites/' + siteName))
    }
}