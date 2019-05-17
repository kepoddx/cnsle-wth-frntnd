import { VuexModule, Module, MutationAction, Mutation, Action, getModule } from 'vuex-module-decorators'
import store from '@/store'
import SitesService from '@/services/SitesService';
import { Notifications } from './notification';

export interface ISite {
  site: { [key: string]: any } | null;
  success: boolean;
  message?: any;
  type?: any;
  [key: string]: any
}

@Module({ dynamic: true, store, name: 'sites' })
class Sites extends VuexModule {
  sites: ISite[] = [];
  site: ISite | null = null;
  sitesTotal: number = 0;

  @MutationAction({ mutate: ['site'] })
  async createSite(siteSubmit: any): Promise<any> {
    const site = await SitesService.postSite(siteSubmit)
    if (site.success) {
      const notification = {
        type: 'success',
        message: "The site has been created"
      }
      const nt = getModule(Notifications, store)
      nt.add(notification)
      return site
    } else {
      const nt = getModule(Notifications, store)
      nt.add(site)
      return site
    }
  }

  @Mutation
  SET_SITES_TOTAL(total: number) {
    this.sitesTotal = total
  }
  @Mutation
  SET_SITES(sites: ISite[]) {
    this.sites = sites;
  }
  @Mutation
  SET_SITE(site: ISite) {
    this.site = site
  }

  @Action({ rawError: true })
  async fetchSites(payload: any) {
    try {
      const { data, headers: { 'x-total-count': totalCount } } = await SitesService.getSites(payload)
      const response = { sites: data, sitesTotal: parseInt(totalCount) }
      this.context.commit('SET_SITES', data)
      this.context.commit('SET_SITES_TOTAL', parseInt(totalCount))
      return response
    } catch (error) {
      const notification = {
        type: 'error',
        message: "There was a problem in fetching Sites: " + error.message
      }
      const nt = getModule(Notifications, store)
      nt.add(notification)
    }
  }

  @Action({ rawError: true })
  async fetchSite(siteId: string) {
    try {
      const siteLocal = this.siteById(siteId)
      if (siteLocal) {
        this.context.commit('SET_SITE', siteLocal)
        console.log("Returning Local data")
        return { site: siteLocal, success: true }
      } else {
        const site = await SitesService.getSite(siteId)
        this.context.commit('SET_SITE', site.data)
        console.log("Returning api call data")
        return ({ site: site.data, success: true })
      }
    } catch (error) {
      const notification = {
        type: 'error',
        message: "There was a problem in fetching a Site: " + error.message
      }
      const nt = getModule(Notifications, store)
      nt.add(notification)
      return ({ site: null, success: false })
    }
  }

  get siteById() {
    return (id: string) => this.sites.find(site => site.id === id)
  }

}

export const SitesModule = getModule(Sites)