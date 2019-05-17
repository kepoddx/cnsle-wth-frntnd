export interface FbConfig {
    name: string;
    baseURL: string;
    urlSegments: UrlSegments;
    usatodayAccessToken: string;
    dashboardAccessToken: string;
    adsManagerAccessToken: string;
    insightsAccountsFilter: string;
}

interface UrlSegments {
    mainAccount: MainAccount;
    reporting: Reporting;
}

interface Reporting {
    insights: Insights;
    generateReport: GenerateReport;
    downloadReport: DownloadReport;
    reportParams: ReportParams;
}

interface ReportParams {
    FB_REPORT_URL: string;
    FB_REPORT_PARAMS_BASIC: string;
    FB_REPORT_PARAMS_BASIC2: string;
    FB_REPORT_PARAMS_ADSET: string;
    FB_REPORT_PARAMS_AGE_GENDER_BREAKDOWN: string;
}

interface DownloadReport {
    endpoint: string;
    params: Params2;
}

interface GenerateReport {
    endpont: string;
    params: Params2;
}

interface Params2 {
}

interface Insights {
    endpoint: string;
    params: Params;
}

interface Params {
    ad: string;
}

interface MainAccount {
    endpoint: string;
    params: string;
    fileName: string;
}

export interface AdAccount {
    "name": string;
    "account_id": string;
    "id": string;
    "insights_include": string;
    "displayName": string;
}