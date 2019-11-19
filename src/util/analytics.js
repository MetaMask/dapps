/* eslint-disable no-undef */
export function trackEvent(name, data){
    if(mixpanel && window.__mmMetametrics){
        mixpanel.track(
            name,
            data
        );
    }
}