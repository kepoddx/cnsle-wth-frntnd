import * as path from 'path';

import FacebookAdsManager from './facebook.adsManager';
import FacebookConfig from './facebook.config';


export default class FacebookLib {
    private ads: FacebookAdsManager;
    private config: FacebookConfig;

    constructor() {
        this.ads = new FacebookAdsManager();
        this.config = new FacebookConfig();
    }

}