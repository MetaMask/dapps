/* eslint-disable no-undef */
export default function trackEvent(name, data){
    if(mixpanel && window.__mmMetametrics){
        mixpanel.track(
            name,
            data
        );
    }
}