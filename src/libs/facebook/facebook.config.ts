import * as path from 'path'
import { of, Observable } from 'rxjs'
import { FbConfig, AdAccount } from './facebook.types';

/**=======================================================================
 * Change var names 
 =======================================================================*/
const configFileName = 'facebook.config.json'
const accountsFileName = 'facebook.adAccounts.json'
/**=======================================================================
 * end Change var names 
 =======================================================================*/

const confgFile = path.join(__dirname, 'data', 'config', configFileName)
const accountsFile = path.join(__dirname, 'data', 'config', accountsFileName)

const config: FbConfig = require(confgFile)

export default class FacebookConfig {

    get accessToken(): String {
        return config.usatodayAccessToken
    }
    get baseUrl(): String {
        return config.baseURL
    }
    slice(propName: string) {
        return (config as any)[propName]
    }
    getConfig$(): Observable<FbConfig> {
        return of(config)
    }
    getAccessToken$(): Observable<String> {
        return of(config.usatodayAccessToken)
    }
    getAdAccounts$(): Observable<AdAccount[]> {
        const file = require(accountsFile)
        return of(file)
    }

}