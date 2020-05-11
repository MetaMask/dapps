/* eslint-disable no-undef */
export function trackEvent(action, data){
    if(mixpanel && window.__mmMetametrics){
        mixpanel.track(
            {category: 'Browser Home', action},
            data
        );
    }
}

const generateOpt = (category, action, name) => ({ category, action, name });

const NAMES = {
    DAPP: 'Dapp',
    FEATURED_DAPP: 'Featured Dapp',
	DAPP_CATEGORY: 'Dapp Category',
    HOMEPAGE_TAB: 'Homepage Tab',
};

const ACTIONS = {
	CLICK: 'Click',
	IMPRESSION: 'Impression',
};

const CATEGORIES = {
	BROWSER_HOME: 'Browser Home',
};

export const ANALYTICS_EVENT_OPTS = {
	CLICKS_DAPP: generateOpt(
		CATEGORIES.BROWSER_HOME,
		ACTIONS.CLICK,
		NAMES.DAPP
    ),
    CLICKS_FEATURED_DAPP: generateOpt(
		CATEGORIES.BROWSER_HOME,
		ACTIONS.CLICK,
		NAMES.FEATURED_DAPP
	),
	CLICKS_DAPP_CATEGORY: generateOpt(
		CATEGORIES.BROWSER_HOME,
		ACTIONS.CLICK,
		NAMES.DAPP_CATEGORY
	),
	CLICKS_HOMEPAGE_TAB: generateOpt(
		CATEGORIES.BROWSER_HOME,
		ACTIONS.CLICK,
		NAMES.HOMEPAGE_TAB
    ),
    IMPRESSION: generateOpt(
		CATEGORIES.BROWSER_HOME,
		ACTIONS.IMPRESSION,
	),
};

export default {trackEvent,ANALYTICS_EVENT_OPTS }