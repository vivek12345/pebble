/// <reference types="google.analytics" />
declare global {
    interface Window {
        GoogleAnalyticsObject: string;
        ga: UniversalAnalytics.ga;
    }
}
export declare function initGoogleAnalytics(gaId: string): void;
